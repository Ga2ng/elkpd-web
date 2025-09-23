"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

type Question = {
  id: number;
  text: string;
  type: "essay";
  correctAnswer: string;
};

type StudentData = {
  namaKelompok: string;
  kelas: string;
  anggota: { nama: string; noSiswa: string }[];
};

const QUESTIONS: Question[] = [
  { 
    id: 1, 
    text: "Apa yang dimaksud dengan transpor pasif? Jelaskan secara singkat!", 
    type: "essay", 
    correctAnswer: "Transpor pasif adalah perpindahan zat dari konsentrasi tinggi ke konsentrasi rendah yang tidak memerlukan energi." 
  },
  { 
    id: 2, 
    text: "Sebutkan 3 jenis transpor pasif yang terjadi di dalam sel!", 
    type: "essay", 
    correctAnswer: "Difusi sederhana, difusi terfasilitasi, dan osmosis." 
  },
  { 
    id: 3, 
    text: "Apa perbedaan antara difusi sederhana dan difusi terfasilitasi?", 
    type: "essay", 
    correctAnswer: "Difusi sederhana terjadi langsung melalui membran tanpa bantuan protein, sedangkan difusi terfasilitasi memerlukan bantuan protein pembawa (carrier protein) atau saluran (channel protein)." 
  },
  { 
    id: 4, 
    text: "Jelaskan proses osmosis dan berikan contohnya!", 
    type: "essay", 
    correctAnswer: "Osmosis adalah perpindahan molekul air melalui membran semipermeabel dari konsentrasi tinggi ke rendah. Contoh: penyerapan air oleh akar tanaman dan penyerapan air di usus besar." 
  },
  { 
    id: 5, 
    text: "Apa yang dimaksud dengan gradien konsentrasi dalam transpor pasif?", 
    type: "essay", 
    correctAnswer: "Gradien konsentrasi adalah perbedaan konsentrasi zat antara dua daerah yang memungkinkan terjadinya perpindahan zat secara alami dari konsentrasi tinggi ke rendah." 
  },
  { 
    id: 6, 
    text: "Mengapa transpor pasif tidak memerlukan energi? Jelaskan alasannya!", 
    type: "essay", 
    correctAnswer: "Transpor pasif tidak memerlukan energi karena zat bergerak mengikuti gradien konsentrasi (dari konsentrasi tinggi ke rendah), yang merupakan proses alami dan spontan." 
  },
  { 
    id: 7, 
    text: "Sebutkan contoh zat yang dapat berdifusi melalui membran sel secara sederhana!", 
    type: "essay", 
    correctAnswer: "Oksigen, karbon dioksida, nitrogen, dan molekul kecil non-polar lainnya dapat berdifusi langsung melalui membran sel." 
  },
  { 
    id: 8, 
    text: "Bagaimana protein pembawa membantu dalam difusi terfasilitasi?", 
    type: "essay", 
    correctAnswer: "Protein pembawa mengikat molekul zat tertentu dan mengubah konformasinya untuk memindahkan zat dari satu sisi membran ke sisi lainnya, memungkinkan zat polar atau besar melewati membran." 
  },
  { 
    id: 9, 
    text: "Apa yang terjadi pada sel darah merah jika dimasukkan ke dalam larutan hipotonik?", 
    type: "essay", 
    correctAnswer: "Sel darah merah akan mengalami hemolisis (pecah) karena air masuk ke dalam sel melalui osmosis, menyebabkan sel membengkak dan akhirnya pecah." 
  },
  { 
    id: 10, 
    text: "Jelaskan mengapa transpor pasif penting bagi kehidupan sel!", 
    type: "essay", 
    correctAnswer: "Transpor pasif penting karena memungkinkan sel mendapatkan nutrisi dan oksigen yang diperlukan, serta mengeluarkan limbah tanpa mengeluarkan energi, sehingga menghemat ATP untuk proses lain." 
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  essayAnswer: {
    fontSize: 11,
    color: '#666',
    fontStyle: 'italic',
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
      <Text style={styles.header}>QUIZ TRANSPOR PASIF - HASIL EVALUASI</Text>
      
      <View style={styles.studentInfo}>
        <View>
          <Text style={styles.infoItem}>Kelompok: {studentData.namaKelompok}</Text>
          <Text style={styles.infoItem}>Kelas: {studentData.kelas}</Text>
          <Text style={styles.infoItem}>Jumlah Anggota: {studentData.anggota.length} orang</Text>
        </View>
        <View>
          <Text style={styles.infoItem}>Tanggal: {new Date().toLocaleDateString('id-ID')}</Text>
          <Text style={styles.infoItem}>Anggota:</Text>
          {studentData.anggota.map((anggota, index) => (
            <Text key={index} style={[styles.infoItem, { fontSize: 10 }]}>
              {index + 1}. {anggota.nama} (No. {anggota.noSiswa})
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.scoreSection}>
        <Text style={styles.scoreText}>Jenis Quiz: Transpor Pasif</Text>
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
              <Text style={styles.answerText}>Jawaban Anda: {answer}</Text>
              <Text style={styles.answerText}>Jawaban Benar: {q.correctAnswer}</Text>
              <Text style={styles.essayAnswer}>*Soal isian memerlukan penilaian manual oleh guru</Text>
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

export default function TransporPasifPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(() => Array(QUESTIONS.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [studentData, setStudentData] = useState<StudentData>({
    namaKelompok: "",
    kelas: "",
    anggota: [{ nama: "", noSiswa: "" }]
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
    setStudentData({ namaKelompok: "", kelas: "", anggota: [{ nama: "", noSiswa: "" }] });
  }

  function startQuiz() {
    if (!studentData.namaKelompok || !studentData.kelas || studentData.anggota.some(a => !a.nama || !a.noSiswa)) {
      alert("Mohon lengkapi data kelompok dan semua anggota terlebih dahulu!");
      return;
    }
    setShowStartModal(false);
  }

  function addAnggota() {
    setStudentData(prev => ({
      ...prev,
      anggota: [...prev.anggota, { nama: "", noSiswa: "" }]
    }));
  }

  function removeAnggota(index: number) {
    if (studentData.anggota.length > 1) {
      setStudentData(prev => ({
        ...prev,
        anggota: prev.anggota.filter((_, i) => i !== index)
      }));
    }
  }

  function updateAnggota(index: number, field: 'nama' | 'noSiswa', value: string) {
    setStudentData(prev => ({
      ...prev,
      anggota: prev.anggota.map((anggota, i) => 
        i === index ? { ...anggota, [field]: value } : anggota
      )
    }));
  }

  if (showStartModal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-elkpd-5 via-white to-elkpd-4/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border border-elkpd-3/50">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-elkpd-1 mb-4">Quiz Transpor Pasif</h1>
            <p className="text-lg text-elkpd-1/70 mb-8 leading-relaxed">
              Uji pemahaman Anda tentang transpor pasif dengan 10 soal isian. Jawab semua pertanyaan dengan lengkap dan jelas.
            </p>
            
            <div className="bg-elkpd-5 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Data Kelompok:</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">Nama Kelompok</label>
                    <input
                      type="text"
                      value={studentData.namaKelompok}
                      onChange={(e) => setStudentData(prev => ({ ...prev, namaKelompok: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors"
                      placeholder="Contoh: Kelompok Beta"
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
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-elkpd-1">Anggota Kelompok</label>
                    <button
                      type="button"
                      onClick={addAnggota}
                      className="px-3 py-1 bg-elkpd-2 text-white text-sm rounded-lg hover:bg-elkpd-1 transition-colors"
                    >
                      + Tambah Anggota
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {studentData.anggota.map((anggota, index) => (
                      <div key={index} className="flex gap-3 items-end">
                        <div className="flex-1">
                          <label className="block text-xs font-medium text-elkpd-1/70 mb-1">Nama Anggota {index + 1}</label>
                          <input
                            type="text"
                            value={anggota.nama}
                            onChange={(e) => updateAnggota(index, 'nama', e.target.value)}
                            className="w-full px-3 py-2 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors text-sm"
                            placeholder="Nama lengkap"
                          />
                        </div>
                        <div className="w-24">
                          <label className="block text-xs font-medium text-elkpd-1/70 mb-1">No. Siswa</label>
                          <input
                            type="text"
                            value={anggota.noSiswa}
                            onChange={(e) => updateAnggota(index, 'noSiswa', e.target.value)}
                            className="w-full px-3 py-2 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors text-sm"
                            placeholder="15"
                          />
                        </div>
                        {studentData.anggota.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeAnggota(index)}
                            className="px-3 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-elkpd-4/60 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Informasi Quiz:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">10 Soal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">Semua Isian</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">Tanpa Waktu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">Manual Submit</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={startQuiz}
              disabled={!studentData.namaKelompok || !studentData.kelas || studentData.anggota.some(a => !a.nama || !a.noSiswa)}
              className={`w-full px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 text-lg ${
                !studentData.namaKelompok || !studentData.kelas || studentData.anggota.some(a => !a.nama || !a.noSiswa)
                  ? "bg-elkpd-3 text-elkpd-1/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white hover:shadow-xl transform hover:-translate-y-1"
              }`}
            >
              Mulai Quiz
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
            
            <h1 className="text-4xl font-bold text-elkpd-1 mb-4">Hasil Quiz Transpor Pasif</h1>
            <p className="text-lg text-elkpd-1/70 mb-6">
              Selamat! Anda telah menyelesaikan Quiz Transpor Pasif
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-elkpd-5 rounded-2xl p-6 border border-elkpd-3/50">
              <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Data Kelompok</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Nama Kelompok:</span>
                  <span className="font-medium text-elkpd-1">{studentData.namaKelompok}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Kelas:</span>
                  <span className="font-medium text-elkpd-1">{studentData.kelas}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Jumlah Anggota:</span>
                  <span className="font-medium text-elkpd-1">{studentData.anggota.length} orang</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Tanggal:</span>
                  <span className="font-medium text-elkpd-1">{new Date().toLocaleDateString('id-ID')}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-elkpd-3/30">
                  <div className="text-xs text-elkpd-1/70 mb-2">Anggota Kelompok:</div>
                  {studentData.anggota.map((anggota, index) => (
                    <div key={index} className="text-xs text-elkpd-1/80">
                      {index + 1}. {anggota.nama} (No. {anggota.noSiswa})
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4 text-center">Hasil Quiz</h3>
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
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {QUESTIONS.map((q, idx) => {
                const answer = selectedAnswers[idx];
                return (
                  <div key={idx} className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                    <div className="font-medium text-elkpd-1 mb-2">
                      {q.id}. {q.text.substring(0, 50)}...
                    </div>
                    <div className="space-y-1 text-xs">
                      <div>Jawaban Anda: <span className="font-medium">{answer || "Tidak dijawab"}</span></div>
                      <div>Jawaban Benar: <span className="font-medium text-blue-600">{q.correctAnswer}</span></div>
                      <div className="text-blue-600 font-bold">📝 Soal Isian</div>
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
              fileName={`QuizTransporPasif_${studentData.namaKelompok.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`}
              className="px-8 py-4 bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Generating PDF...' : '📥 Download PDF Hasil Quiz'
              }
            </PDFDownloadLink>
            <button
              onClick={handleReset}
              className="px-8 py-4 bg-white border-2 border-elkpd-3 text-elkpd-1 font-semibold rounded-xl hover:bg-elkpd-4/50 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
            >
              🔄 Ulangi Quiz
            </button>
            <Link
              href="/"
              className="px-8 py-4 bg-elkpd-1 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg shadow-md hover:shadow-lg"
            >
              🏠 Kembali ke Beranda
            </Link>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="text-center">
              <h4 className="font-semibold text-blue-800 mb-2">📁 Pengumpulan Hasil Quiz</h4>
              <p className="text-blue-700 text-sm mb-3">
                Setelah download hasil quiz, silakan upload ke Google Drive yang telah disediakan
              </p>
              <a
                href="https://drive.google.com/drive/folders/1ABC123DEF456GHI789JKL012MNO345PQR678STU901VWX234YZA567BCD890EFG"
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
                <div className="text-sm text-elkpd-1/70">Quiz Transpor Pasif</div>
                <div className="font-mono text-xl font-bold text-elkpd-2">
                  Tanpa Waktu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Quiz Transpor Pasif</h1>
            <p className="text-lg opacity-90">
              {studentData.namaKelompok} - {studentData.kelas} ({studentData.anggota.length} anggota)
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {QUESTIONS.map((q, qi) => (
              <div 
                key={q.id} 
                className="rounded-2xl border-2 border-blue-300 bg-blue-50 p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {q.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-elkpd-1 leading-relaxed mb-2">{q.text}</h3>
                    <p className="text-sm text-blue-600 mb-3">📝 Soal Isian - Tulis jawaban Anda di bawah ini</p>
                  </div>
                </div>
                
                <div className="ml-12">
                  <textarea
                    value={selectedAnswers[qi] || ""}
                    onChange={(e) => setAnswer(qi, e.target.value)}
                    disabled={submitted}
                    placeholder="Tulis jawaban Anda di sini..."
                    className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    rows={4}
                  />
                  
                  {submitted && (
                    <div className="mt-3 p-3 bg-white rounded-lg border border-blue-200">
                      <div className="text-sm text-blue-800">
                        <div className="font-medium mb-1">Jawaban Benar:</div>
                        <div className="italic">{q.correctAnswer}</div>
                        <div className="text-xs text-blue-600 mt-2">
                          *Soal isian memerlukan penilaian manual oleh guru
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button Section - Fixed at Bottom */}
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
                    Pastikan semua soal telah dijawab sebelum menyelesaikan quiz
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-elkpd-2">Quiz Selesai!</div>
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
