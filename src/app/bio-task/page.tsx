"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import TextEditor from "../components/TextEditor";

type Question = {
  id: number;
  text: string;
  type: "essay";
};

type StudentData = {
  nama: string;
  noSiswa: string;
  kelas: string;
};

const QUESTIONS: Question[] = [
  { 
    id: 1, 
    text: "Setelah membaca kedua artikel tersebut. Peristiwa mana yang menunjukkan yang terkait transpor membran pada kedua artikel tersebut?", 
    type: "essay"
  },
  { 
    id: 2, 
    text: "Dari peristiwa yang sudah kamu pilih terkait pada kedua artikel termasuk transpor membran aktif atau transpor membran pasif? Jelaskan menggunakan bahasamu masing-masing mengapa peristiwa tesebut dapat terjadi!", 
    type: "essay"
  },
  { 
    id: 3, 
    text: "Setelah menentukan jenis peristiwa transpor membran pada artikel I dan artikel II, buatlah rancangan perbedaan proses mekanismenya menggunakan bahasamu masing-masing!", 
    type: "essay"
  },
  { 
    id: 4, 
    text: "Buatlah masing-masing dua pertanyaan mengenai artikel I dan artikel II yang terkait transpor membran?", 
    type: "essay"
  },
  { 
    id: 5, 
    text: "Setelah membandingkan kedua artikel tersebut. Cobalah untuk merancang contoh lain dalam kehidupan sehari-hari mengenai transpor membran terutama pada transpor membran pasif (Minimal masing-masing 2 contoh!)", 
    type: "essay"
  }
];

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#395624',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#395624',
  },
  studentInfo: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  infoItem: {
    fontSize: 12,
    marginBottom: 5,
  },
  scoreSection: {
    textAlign: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#4F7D2C',
    color: 'white',
    borderRadius: 8,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  questionItem: {
    marginBottom: 15,
    padding: 10,
    borderLeft: 3,
    borderColor: '#9CC97C',
    paddingLeft: 15,
  },
  questionText: {
    fontSize: 12,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 11,
    marginBottom: 5,
    color: '#666',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#666',
  },
});

const TestPDF = ({ studentData, selectedAnswers, questions }: {
  studentData: StudentData;
  selectedAnswers: string[];
  questions: Question[];
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>BIO TASK - ANALISIS ARTIKEL TRANSPOR MEMBRAN</Text>
      
      <View style={styles.studentInfo}>
        <Text style={styles.infoItem}>Nama: {studentData.nama}</Text>
        <Text style={styles.infoItem}>No. Siswa: {studentData.noSiswa}</Text>
        <Text style={styles.infoItem}>Kelas: {studentData.kelas}</Text>
        <Text style={styles.infoItem}>Tanggal: {new Date().toLocaleDateString('id-ID')}</Text>
      </View>

      <View style={styles.scoreSection}>
        <Text style={styles.scoreText}>Tugas: Analisis Artikel Transpor Membran (Individual)</Text>
        <Text style={styles.scoreText}>Total Soal: {questions.length}</Text>
        <Text style={styles.scoreText}>Jawaban Terisi: {selectedAnswers.filter(answer => answer.trim() !== '').length}</Text>
        <Text style={styles.scoreText}>Status: Menunggu Penilaian Guru</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detail Jawaban:</Text>
        {questions.map((q, idx) => {
          const answer = selectedAnswers[idx] || "Tidak dijawab";
          
          return (
            <View key={idx} style={styles.questionItem}>
              <Text style={styles.questionText}>{q.id}. {q.text}</Text>
              <Text style={styles.answerText}>Jawaban: {answer || "Tidak dijawab"}</Text>
            </View>
          );
        })}
      </View>

      <Text style={styles.footer}>
        Dokumen ini digenerate otomatis oleh sistem ELKPD pada {new Date().toLocaleString('id-ID')}
      </Text>
    </Page>
  </Document>
);

export default function BioTaskPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(() => Array(QUESTIONS.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [studentData, setStudentData] = useState<StudentData>({
    nama: "",
    noSiswa: "",
    kelas: ""
  });

  const answeredCount = useMemo(() => selectedAnswers.filter((v) => v.trim() !== "").length, [selectedAnswers]);

  function setAnswer(questionIdx: number, answer: string) {
    if (submitted || showStartModal || showFinalResult) return;
    setSelectedAnswers((prev) => {
      const next = [...prev];
      next[questionIdx] = answer;
      return next;
    });
  }

  function handleSubmit() {
    if (answeredCount < QUESTIONS.length) {
      alert(`Mohon lengkapi semua soal terlebih dahulu! Masih ada ${QUESTIONS.length - answeredCount} soal yang belum dijawab.`);
      return;
    }
    
    setSubmitted(true);
    setTimeout(() => {
      setShowFinalResult(true);
    }, 2000);
  }

  function handleReset() {
    setSelectedAnswers(Array(QUESTIONS.length).fill(""));
    setSubmitted(false);
    setShowFinalResult(false);
    setShowStartModal(true);
    setStudentData({ nama: "", noSiswa: "", kelas: "" });
  }

  function startQuiz() {
    if (!studentData.nama || !studentData.noSiswa || !studentData.kelas) {
      alert("Mohon lengkapi data diri terlebih dahulu!");
      return;
    }
    setShowStartModal(false);
  }

  if (showStartModal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-elkpd-5 via-white to-elkpd-4/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border border-elkpd-3/50">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-elkpd-1 mb-4">Bio Task</h1>
            <p className="text-lg text-elkpd-1/70 mb-8 leading-relaxed">
              Analisis Artikel tentang Transpor Membran. Tugas ini dikerjakan secara <strong>individual</strong>.
            </p>
            
            <div className="bg-elkpd-5 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Data Diri:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    value={studentData.nama}
                    onChange={(e) => setStudentData(prev => ({ ...prev, nama: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">No. Siswa</label>
                    <input
                      type="text"
                      value={studentData.noSiswa}
                      onChange={(e) => setStudentData(prev => ({ ...prev, noSiswa: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors"
                      placeholder="Contoh: 15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">Kelas</label>
                    <input
                      type="text"
                      value={studentData.kelas}
                      onChange={(e) => setStudentData(prev => ({ ...prev, kelas: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors"
                      placeholder="Contoh: XI IPA 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-elkpd-4/60 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Informasi Tugas:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">2 Artikel</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">5 Soal Essay</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">Tanpa Waktu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">Individual</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={startQuiz}
              disabled={!studentData.nama || !studentData.noSiswa || !studentData.kelas}
              className={`w-full px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 text-lg ${
                !studentData.nama || !studentData.noSiswa || !studentData.kelas
                  ? "bg-elkpd-3 text-elkpd-1/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white hover:shadow-xl transform hover:-translate-y-1"
              }`}
            >
              Mulai Mengerjakan
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showFinalResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-elkpd-5 via-white to-elkpd-4/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl border border-elkpd-3/50">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-elkpd-2">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-elkpd-1 mb-4">Hasil Bio Task</h1>
            <p className="text-lg text-elkpd-1/70 mb-6">
              Selamat! Anda telah menyelesaikan Bio Task
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-elkpd-5 rounded-2xl p-6 border border-elkpd-3/50">
              <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Data Siswa</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Nama:</span>
                  <span className="font-medium text-elkpd-1">{studentData.nama}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">No. Siswa:</span>
                  <span className="font-medium text-elkpd-1">{studentData.noSiswa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Kelas:</span>
                  <span className="font-medium text-elkpd-1">{studentData.kelas}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Tanggal:</span>
                  <span className="font-medium text-elkpd-1">{new Date().toLocaleDateString('id-ID')}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4 text-center">Hasil Tugas</h3>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{answeredCount}/{QUESTIONS.length}</div>
                <div className="text-xl mb-2">Jawaban Terisi</div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white inline-block">
                  Menunggu Penilaian
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-elkpd-3/50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Detail Jawaban</h3>
            <div className="space-y-4">
              {QUESTIONS.map((q, idx) => {
                const answer = selectedAnswers[idx];
                return (
                  <div key={idx} className="p-4 rounded-lg border border-green-200 bg-green-50">
                    <div className="font-medium text-elkpd-1 mb-2 text-sm">
                      {q.id}. {q.text}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-700">Jawaban:</span>
                      <div className="mt-1 p-2 bg-white rounded border text-xs">
                        {answer || "Tidak dijawab"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PDFDownloadLink
              document={
                <TestPDF
                  studentData={studentData}
                  selectedAnswers={selectedAnswers}
                  questions={QUESTIONS}
                />
              }
              fileName={`BioTask_${studentData.nama.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`}
              className="px-8 py-4 bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Generating PDF...' : '📥 Download PDF Hasil'
              }
            </PDFDownloadLink>
            <button
              onClick={handleReset}
              className="px-8 py-4 bg-white border-2 border-elkpd-3 text-elkpd-1 font-semibold rounded-xl hover:bg-elkpd-4/50 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
            >
              🔄 Ulangi Tugas
            </button>
            <Link
              href="/"
              className="px-8 py-4 bg-elkpd-1 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg shadow-md hover:shadow-lg text-center"
            >
              🏠 Kembali ke Beranda
            </Link>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="text-center">
              <h4 className="font-semibold text-blue-800 mb-2">📁 Pengumpulan Hasil Bio Task</h4>
              <p className="text-blue-700 text-sm mb-3">
                Setelah download hasil tugas, silakan upload ke Google Drive yang telah disediakan
              </p>
              <a
                href="https://drive.google.com/drive/folders/1fPN8Dx_W2b0PLcawNGpbDKa08waTbpBJ?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Buka Google Drive
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Sticky Progress Bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-elkpd-3/50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-elkpd-2 rounded-full"></div>
                <span className="text-elkpd-1 font-medium">Progress:</span>
                <span className="text-lg font-bold text-elkpd-2">{answeredCount}/{QUESTIONS.length}</span>
              </div>
              <div className="w-32 bg-elkpd-4 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-sm text-elkpd-1/70">Bio Task - Individual</div>
                <div className="font-semibold text-elkpd-1">{studentData.nama}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">BIO TASK</h1>
            <p className="text-lg opacity-90 mb-2">
              Analisis Artikel tentang Transpor Membran
            </p>
            <p className="text-base opacity-80">
              Bacalah Kedua Artikel ini untuk menjawab beberapa pertanyaan dibawah. Kerjakan Secara Individu!
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 bg-gradient-to-br from-elkpd-5/30 via-white to-elkpd-4/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-elkpd-1 mb-2">Artikel untuk Dianalisis</h2>
            <p className="text-elkpd-1/70">Baca kedua artikel berikut dengan seksama</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Artikel 1 */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-elkpd-3/30 overflow-hidden">
              <div className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">1</span>
                  Artikel 1
                </h3>
              </div>
              <div className="p-6">
                <div className="prose prose-sm max-w-none text-justify space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Makhluk hidup memiliki beberapa ciri-ciri, salah satunya yaitu mengalami metabolisme, misalnya transportasi. Supaya dalam tubuh terjadi keseimbangan, maka diperlukan sirkulasi zat yang terjadi dalam gerakan sitoplasma atau dalam bentuk osmosis dan difusi. Tumbuhan mengandung membran sel yang fungsinya untuk mengatur keluar masuknya suatu zat supaya mendapat pH yang sesuai. Jika konsentrasi zat terkendali, sel bisa mendapat masukan zat-zat dari ion yang dibutuhkan dan membuang zat yang sudah tidak diperlukan. Perpindahan molekul yang melewati membran ini disebut dengan transpor melewati membran.
                  </p>
                  <p>
                    Osmosis merupakan suatu peristiwa berpindahnya zat yang terkandung dalam pelarut dari bagian yang berkonsentrasi rendah (hipotonik) ke bagian yang konsentrasinya lebih tinggi (hipertonik) dan melalui membran semipermeabel. Osmosis merupakan fenomena alami yang biasanya ditemukan pada tubuh tumbuhan dan hewan. Akar pada tanaman dapat menyalurkan air dari dalam tanah sampai ujung daun merupakan salah satu manfaat fenomena osmosis pada tumbuhan. Akantetapi, hal ini bisa dicegah dengan cara meningkatkan tekanan pada bagian yang berkonsentrasi lebih encer atau konsentrasi rendah. Suatu zat yang berbeda konsentrasi dengan zat lain di sekitarnya dapat mengalami peristiwa osmosis yang menyebabkan kedua zat tersebut konsentrasinya sama. Peristiwa ini disebut dengan isotonik. Sebagai contoh peristiwa yang menunjukkan sifat isotonik adalah pada hewan laut seperti kepiting (Arthropoda) dan bintang laut (Echinodermata) dengan lingkungannya. Peristiwa seperti ini sangat penting bagi hewan laut atau hewan yang hidup di air tawar, karena jika berbeda konsentrasi akan terjadi osmosis yang menyebabkan penyusutan pada sel dan bahkan menyebabkan kematian.
                  </p>
                  <p>
                    Air sebagai pelarut bergerak melewati membran menuju bagian dengan jumlah materi terlarut paling banyak dan kadar airnya sedikit. Garam sebagai materi terlarut dalam percobaan osmosis pada kentang dan wortel. Dehidrasi osmosis dapat dilakukan dengan cara merendam bahan pangan menggunakan larutan garam, larutan gula, sorbitol, gliserol ataupun bahan lainnya. Dengan tekanan osmosis yang lebih tinggi, maka air dalam bahan makanan akan keluar melalui membran semipermeabel menuju materi terlarut.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-elkpd-3/30">
                  <p className="text-xs text-elkpd-1/60 italic">
                    <strong>Sumber:</strong> Ulfa, H., Lisnawati, A., Ardan, M. 2020. Uji Osmosis pada Kentang dan Wortel Menggunakan Larutan NaCl. Jurnal Sainsmat. Vol. IX. No. 2. Halaman 110-116
                  </p>
                </div>
              </div>
            </div>

            {/* Artikel 2 */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-elkpd-3/30 overflow-hidden">
              <div className="bg-gradient-to-r from-elkpd-1 to-elkpd-2 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">2</span>
                  Artikel 2
                </h3>
              </div>
              <div className="p-6">
                <div className="prose prose-sm max-w-none text-justify space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Pada prinsipnya pengolahan ikan asin adalah usaha untuk memperpanjang umur simpan ikan dengan cara menambahkan garam dan selanjutnya dikeringkan. Tetapi rasa asin yang begitu tinggi tidak disukai oleh masyarakat, sehingga masyarakat melakukan suatu upaya dengan cara merendam dalam air yang ditambahkan kertas Koran. Kebiasaan masyarakat untuk merendam dengan air dapat menggunakan air biasa (suhu kamar) atau air panas. Permasalahan dalam penelitian ini adalah penggunaan kertas koran dan air panas dalam proses perendaman ikan asin yang dapat membahayakan konsumen. Karena timbal yang terdapat pada tinta koran dapat masuk kedalam daging ikan melalui proses difusi.
                  </p>
                  <p>
                    Dilihat dari hasil penelitian tersebut, terbukti bahwa penggunaan kertas koran memang dapat dijadikan alternatif yang baik dalam menurunkan kadar NaCl pada ikan asin dibandingkan kertas buram. Namun jika ditinjau dari segi toksikologi, penggunaan kertas koran ini justru dapat membahayakan konsumen. Karena kandungan timbal (Pb) pada tinta kertas koran tersebut akan diabsorbsi oleh air perendam dan akan masuk ke dalam daging ikan melalui proses difusi. Hal ini sesuai dengan teori Darmono yaitu dengan direndam menggunakan air panas, timbal (Pb) yang terdapat pada tinta kertas koran akan diabsorpsi oleh mineral organik dan anorganik yang terdapat pada air perendam dan selanjutnya bersama air perendam logam Pb akan berdifusi kedalam daging ikan asin. Sehingga yang awalnya tubuh ikan sudah mengandung timbal (Pb) secara alamiah, akan bertambah lagi kadarnya dari proses perendaman tersebut. Ketika proses difusi terjadi molekul akan berpindah dari konsentrasi yang tinggi ke konsentrasi yang rendah, sehingga zat-zat terlarut yang terdapat pada ikan asin seperti NaCl akan keluar saat perendaman. Timbal (Pb) yang ada di tinta kertas koran akan bereaksi dengan garam NaCl tersebut membentuk Timbal Klorida (PbCl2). Kasus keracunan timbal akut jarang terjadi, namun akumulasi paparan timbal (Pb) ini sangat berbahaya.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-elkpd-3/30">
                  <p className="text-xs text-elkpd-1/60 italic">
                    <strong>Sumber:</strong> Navianti, D., Karwiti, W., Syailendra, A., Tarika., R. 2012. Pengaruh Perendaman dengan Kertas Koran dalam Air Panas Terhadap Kadar Timbal (Pb) pada Ikan Asin. Jurnal Analis Kesehatan Poltekkes Kemenkes Palembang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-elkpd-1 mb-2">Pertanyaan</h2>
            <p className="text-elkpd-1/70">Jawab semua pertanyaan berdasarkan analisis kedua artikel di atas</p>
          </div>

          <div className="space-y-6">
            {QUESTIONS.map((q, qi) => (
              <div 
                key={q.id} 
                className="rounded-2xl border-2 border-green-300 bg-green-50 p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {q.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-elkpd-1 leading-relaxed mb-2">{q.text}</h3>
                    <p className="text-sm text-green-700 mb-3">📝 Soal Essay - Tulis jawaban Anda dengan lengkap dan jelas</p>
                  </div>
                </div>
                
                <div className="ml-12">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jawaban:
                    </label>
                    <TextEditor
                      value={selectedAnswers[qi] || ""}
                      onChange={(content) => setAnswer(qi, content)}
                      placeholder="Tulis jawaban Anda di sini..."
                      height={150}
                      disabled={submitted}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button Section */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg">
            <div className="text-center">
              {!submitted ? (
                <div className="space-y-4">
                  <div className="text-lg text-elkpd-1/70">
                    Anda telah menjawab <span className="font-bold text-elkpd-2">{answeredCount}</span> dari <span className="font-bold text-elkpd-2">{QUESTIONS.length}</span> soal
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={answeredCount < QUESTIONS.length}
                    className={`px-12 py-4 rounded-xl font-semibold transition-all duration-300 text-lg ${
                      answeredCount < QUESTIONS.length 
                        ? "bg-elkpd-3 text-elkpd-1/60 cursor-not-allowed" 
                        : "bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white hover:shadow-xl transform hover:-translate-y-1"
                    }`}
                  >
                    {answeredCount < QUESTIONS.length 
                      ? `Jawab ${QUESTIONS.length - answeredCount} soal lagi` 
                      : "📝 Selesai & Lihat Hasil"
                    }
                  </button>
                  
                  <div className="text-sm text-elkpd-1/50">
                    Pastikan semua soal telah dijawab sebelum menyelesaikan tugas
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-elkpd-2">Tugas Selesai!</div>
                    <div className="text-sm text-elkpd-1/70">Menunggu hasil final...</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

