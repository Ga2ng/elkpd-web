"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

type Question = {
  id: number;
  text: string;
  options?: string[];
  correctIndex?: number;
  type: "multiple_choice" | "essay";
  correctAnswer?: string;
};

type StudentData = {
  namaLengkap: string;
  kelas: string;
  noSiswa: string;
};

const QUESTIONS: Question[] = [
  { id: 1, text: "Organel sel yang bertanggung jawab untuk respirasi sel adalah…", options: ["Ribosom", "Mitokondria", "Aparatus Golgi", "Lisosom"], correctIndex: 1, type: "multiple_choice" },
  { id: 2, text: "Proses perpindahan zat dari konsentrasi tinggi ke rendah tanpa energi disebut…", options: ["Osmosis", "Difusi", "Transpor aktif", "Endositosis"], correctIndex: 1, type: "multiple_choice" },
  { id: 3, text: "Bagian darah yang berperan dalam pembekuan darah adalah…", options: ["Eritrosit", "Leukosit", "Trombosit", "Plasma"], correctIndex: 2, type: "multiple_choice" },
  { id: 4, text: "Fotosintesis terutama terjadi pada bagian daun yaitu…", options: ["Epidermis bawah", "Jaringan palisade", "Stomata", "Xilem"], correctIndex: 1, type: "multiple_choice" },
  { id: 5, text: "Unit terkecil kehidupan yang dapat berdiri sendiri adalah…", options: ["Jaringan", "Sel", "Organ", "Sistem organ"], correctIndex: 1, type: "multiple_choice" },
  { id: 6, text: "Zat yang diproduksi pankreas untuk menetralkan asam lambung di usus dua belas jari adalah…", options: ["Pepsin", "Tripsin", "Bikarbonat", "Lipase"], correctIndex: 2, type: "multiple_choice" },
  { id: 7, text: "Pada pewarisan sifat, alel yang terekspresi pada heterozigot disebut…", options: ["Resesif", "Dominan", "Kodominan", "Intermediet"], correctIndex: 1, type: "multiple_choice" },
  { id: 8, text: "Bagian telinga yang berfungsi mengubah gelombang suara menjadi impuls saraf adalah…", options: ["Gendang telinga", "Koklea", "Tulang martil", "Tuba eustachius"], correctIndex: 1, type: "multiple_choice" },
  { id: 9, text: "Hubungan antara dua makhluk hidup berbeda spesies yang saling menguntungkan disebut…", options: ["Parasitisme", "Komensalisme", "Mutualisme", "Predasi"], correctIndex: 2, type: "multiple_choice" },
  { id: 10, text: "Molekul pembawa informasi genetik pada makhluk hidup adalah…", options: ["Lipid", "Protein", "DNA", "Karbohidrat"], correctIndex: 2, type: "multiple_choice" },
  { id: 11, text: "Jelaskan dengan singkat mengapa sel disebut sebagai unit terkecil kehidupan!", type: "essay", correctAnswer: "Sel disebut unit terkecil kehidupan karena memiliki semua karakteristik kehidupan seperti dapat bernapas, bergerak, berkembang biak, dan melakukan metabolisme." },
  { id: 12, text: "Apa yang terjadi jika seseorang kekurangan vitamin C? Berikan penjelasan singkat!", type: "essay", correctAnswer: "Kekurangan vitamin C dapat menyebabkan penyakit skorbut yang ditandai dengan gusi berdarah, luka sulit sembuh, dan kelemahan pada tubuh." },
  { id: 13, text: "Bagaimana proses fotosintesis membantu kehidupan di bumi? Jelaskan secara singkat!", type: "essay", correctAnswer: "Fotosintesis menghasilkan oksigen yang dibutuhkan makhluk hidup untuk bernapas dan menghasilkan makanan yang menjadi sumber energi bagi rantai makanan." }
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
  correctAnswer: {
    fontSize: 11,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  wrongAnswer: {
    fontSize: 11,
    color: '#F44336',
    fontWeight: 'bold',
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

const TestPDF = ({ studentData, score, selectedAnswers, questions, timeUsed }: {
  studentData: StudentData;
  score: number;
  selectedAnswers: (number | string)[];
  questions: Question[];
  timeUsed: number;
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>POST TEST BIOLOGI - HASIL EVALUASI</Text>
      
      <View style={styles.studentInfo}>
        <View>
          <Text style={styles.infoItem}>Nama: {studentData.namaLengkap}</Text>
          <Text style={styles.infoItem}>Kelas: {studentData.kelas}</Text>
        </View>
        <View>
          <Text style={styles.infoItem}>No. Siswa: {studentData.noSiswa}</Text>
          <Text style={styles.infoItem}>Tanggal: {new Date().toLocaleDateString('id-ID')}</Text>
        </View>
      </View>

      <View style={styles.scoreSection}>
        <Text style={styles.scoreText}>Skor: {score}/{questions.length}</Text>
        <Text style={styles.scoreText}>Persentase: {((score / questions.length) * 100).toFixed(1)}%</Text>
        <Text style={styles.scoreText}>Status: {score >= 7 ? "LULUS" : "BELUM LULUS"}</Text>
        <Text style={styles.scoreText}>Waktu: {Math.floor(timeUsed / 60)} menit {timeUsed % 60} detik</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detail Jawaban:</Text>
        {questions.map((q, idx) => {
          const answer = selectedAnswers[idx];
          if (q.type === "multiple_choice") {
            const isCorrect = answer === q.correctIndex;
            const answerText = answer !== -1 ? q.options![answer as number] : "Tidak dijawab";
            const correctAnswer = q.options![q.correctIndex!];
            
            return (
              <View key={idx} style={styles.questionItem}>
                <Text style={styles.questionText}>{q.id}. {q.text}</Text>
                <Text style={styles.answerText}>Jawaban Anda: {answerText}</Text>
                <Text style={styles.answerText}>Jawaban Benar: {correctAnswer}</Text>
                <Text style={isCorrect ? styles.correctAnswer : styles.wrongAnswer}>
                  Status: {isCorrect ? "✓ BENAR" : "✗ SALAH"}
                </Text>
              </View>
            );
          } else {
            return (
              <View key={idx} style={styles.questionItem}>
                <Text style={styles.questionText}>{q.id}. {q.text}</Text>
                <Text style={styles.answerText}>Jawaban Anda: {answer || "Tidak dijawab"}</Text>
                <Text style={styles.answerText}>Jawaban Benar: {q.correctAnswer}</Text>
                <Text style={styles.essayAnswer}>*Soal isian memerlukan penilaian manual oleh guru</Text>
              </View>
            );
          }
        })}
      </View>

      <Text style={styles.footer}>
        Dokumen ini digenerate otomatis oleh sistem ELKPD pada {new Date().toLocaleString('id-ID')}
      </Text>
    </Page>
  </Document>
);

export default function PostTestPage() {
  const [secondsLeft, setSecondsLeft] = useState(600);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | string)[]>(() => Array(QUESTIONS.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showStartModal, setShowStartModal] = useState(true);
  const [studentData, setStudentData] = useState<StudentData>({
    namaLengkap: "",
    kelas: "",
    noSiswa: ""
  });

  useEffect(() => {
    if (submitted || showStartModal || showFinalResult) return;
    const intervalId = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [submitted, showStartModal, showFinalResult]);

  useEffect(() => {
    if (secondsLeft === 0 && !submitted && !showStartModal && !showFinalResult) handleSubmit();
  }, [secondsLeft, submitted, showStartModal, showFinalResult]);

  const answeredCount = useMemo(() => selectedAnswers.filter((v) => v !== -1 && v !== "").length, [selectedAnswers]);

  const minutes = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  function setAnswer(questionIdx: number, optionIdx: number | string) {
    if (submitted || showStartModal || showFinalResult) return;
    setSelectedAnswers((prev) => {
      const next = [...prev];
      next[questionIdx] = optionIdx;
      return next;
    });
  }

  function handleSubmit() {
    const totalCorrect = QUESTIONS.reduce((acc, q, idx) => {
      if (q.type === "multiple_choice") {
        return selectedAnswers[idx] === q.correctIndex ? acc + 1 : acc;
      }
      return acc;
    }, 0);
    setScore(totalCorrect);
    setSubmitted(true);
    setTimeout(() => {
      setShowFinalResult(true);
    }, 2000);
  }

  function handleReset() {
    setSelectedAnswers(Array(QUESTIONS.length).fill(-1));
    setSecondsLeft(600);
    setSubmitted(false);
    setShowFinalResult(false);
    setScore(0);
    setShowStartModal(true);
    setStudentData({ namaLengkap: "", kelas: "", noSiswa: "" });
  }

  function startTest() {
    if (!studentData.namaLengkap || !studentData.kelas || !studentData.noSiswa) {
      alert("Mohon lengkapi data siswa terlebih dahulu!");
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-elkpd-1 mb-4">Post Test Biologi</h1>
            <p className="text-lg text-elkpd-1/70 mb-8 leading-relaxed">
              Uji pemahaman Anda tentang materi biologi dengan 10 soal pilihan ganda dan 3 soal isian dalam waktu 10 menit.
            </p>
            
            <div className="bg-elkpd-5 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Data Siswa:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    value={studentData.namaLengkap}
                    onChange={(e) => setStudentData(prev => ({ ...prev, namaLengkap: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
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
                </div>
              </div>
            </div>
            
            <div className="bg-elkpd-4/60 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Informasi Test:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">13 Soal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">10 Menit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">10 PG + 3 Isian</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">Auto Submit</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={startTest}
              disabled={!studentData.namaLengkap || !studentData.kelas || !studentData.noSiswa}
              className={`w-full px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 text-lg ${
                !studentData.namaLengkap || !studentData.kelas || !studentData.noSiswa
                  ? "bg-elkpd-3 text-elkpd-1/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white hover:shadow-xl transform hover:-translate-y-1"
              }`}
            >
              Mulai Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showFinalResult) {
    const percentage = ((score / QUESTIONS.length) * 100).toFixed(1);
    const status = score >= 7 ? "LULUS" : "BELUM LULUS";
    const statusColor = score >= 7 ? "text-green-600" : "text-red-600";
    const statusBg = score >= 7 ? "bg-green-100" : "bg-red-100";
    const statusBorder = score >= 7 ? "border-green-300" : "border-red-300";

    return (
      <div className="min-h-screen bg-gradient-to-br from-elkpd-5 via-white to-elkpd-4/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl border border-elkpd-3/50">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${statusBg} ${statusBorder}`}>
              {score >= 7 ? (
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-elkpd-1 mb-4">Hasil Post Test</h1>
            <p className="text-lg text-elkpd-1/70 mb-6">
              Selamat! Anda telah menyelesaikan Post Test Biologi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-elkpd-5 rounded-2xl p-6 border border-elkpd-3/50">
              <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Data Siswa</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Nama:</span>
                  <span className="font-medium text-elkpd-1">{studentData.namaLengkap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Kelas:</span>
                  <span className="font-medium text-elkpd-1">{studentData.kelas}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">No. Siswa:</span>
                  <span className="font-medium text-elkpd-1">{studentData.noSiswa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-elkpd-1/70">Tanggal:</span>
                  <span className="font-medium text-elkpd-1">{new Date().toLocaleDateString('id-ID')}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4 text-center">Hasil Test</h3>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{score}/{QUESTIONS.length}</div>
                <div className="text-xl mb-2">Skor Akhir</div>
                <div className="text-3xl font-bold mb-2">{percentage}%</div>
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${statusBg} ${statusColor} inline-block`}>
                  {status}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-elkpd-3/50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Detail Jawaban</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {QUESTIONS.map((q, idx) => {
                const answer = selectedAnswers[idx];
                if (q.type === "multiple_choice") {
                  const isCorrect = answer === q.correctIndex;
                  const answerText = answer !== -1 ? q.options![answer as number] : "Tidak dijawab";
                  const correctAnswer = q.options![q.correctIndex!];
                  
                  return (
                    <div key={idx} className={`p-3 rounded-lg border ${
                      isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                    }`}>
                      <div className="font-medium text-elkpd-1 mb-2">
                        {q.id}. {q.text.substring(0, 50)}...
                      </div>
                      <div className="space-y-1 text-xs">
                        <div>Jawaban Anda: <span className="font-medium">{answerText}</span></div>
                        <div>Jawaban Benar: <span className="font-medium text-green-600">{correctAnswer}</span></div>
                        <div className={`font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                          {isCorrect ? "✓ BENAR" : "✗ SALAH"}
                        </div>
                      </div>
                    </div>
                  );
                } else {
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
                }
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PDFDownloadLink
              document={
                <TestPDF
                  studentData={studentData}
                  score={score}
                  selectedAnswers={selectedAnswers}
                  questions={QUESTIONS}
                  timeUsed={600 - secondsLeft}
                />
              }
              fileName={`PostTest_${studentData.namaLengkap.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`}
              className="px-8 py-4 bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Generating PDF...' : '📥 Download PDF Hasil Test'
              }
            </PDFDownloadLink>
            <button
              onClick={handleReset}
              className="px-8 py-4 bg-white border-2 border-elkpd-3 text-elkpd-1 font-semibold rounded-xl hover:bg-elkpd-4/50 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
            >
              🔄 Ulangi Test
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
              <h4 className="font-semibold text-blue-800 mb-2">📁 Pengumpulan Hasil Test</h4>
              <p className="text-blue-700 text-sm mb-3">
                Setelah download hasil test, silakan upload ke Google Drive yang telah disediakan
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
                <div className="text-sm text-elkpd-1/70">Waktu Tersisa</div>
                <div className={`font-mono text-xl font-bold ${
                  secondsLeft <= 60 
                    ? "text-red-500 animate-pulse" 
                    : secondsLeft <= 120 
                    ? "text-yellow-500" 
                    : "text-elkpd-2"
                }`}>
                  {minutes}:{seconds}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Post Test Biologi</h1>
            <p className="text-lg opacity-90">
              {studentData.namaLengkap} - {studentData.kelas} (No. {studentData.noSiswa})
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {QUESTIONS.map((q, qi) => {
              if (q.type === "multiple_choice") {
                const isCorrect = submitted && selectedAnswers[qi] === q.correctIndex;
                const isWrong = submitted && selectedAnswers[qi] !== -1 && selectedAnswers[qi] !== q.correctIndex;
                
                return (
                  <div 
                    key={q.id} 
                    className={`rounded-2xl border-2 p-6 transition-all duration-300 ${
                      isCorrect 
                        ? "border-elkpd-2 bg-elkpd-4/60 shadow-lg" 
                        : isWrong 
                        ? "border-red-300 bg-red-50 shadow-lg" 
                        : "border-elkpd-3 bg-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        isCorrect 
                          ? "bg-elkpd-2 text-white" 
                          : isWrong 
                          ? "bg-red-500 text-white" 
                          : "bg-elkpd-3 text-elkpd-1"
                      }`}>
                        {q.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-elkpd-1 leading-relaxed">{q.text}</h3>
                      </div>
                    </div>
                    
                    <div className="grid gap-3 ml-12">
                      {q.options!.map((opt, oi) => {
                        const checked = selectedAnswers[qi] === oi;
                        const isTheCorrect = submitted && oi === q.correctIndex;
                        return (
                          <label 
                            key={oi} 
                            className={`flex items-center gap-4 rounded-xl border-2 px-4 py-3 cursor-pointer transition-all duration-200 ${
                              checked 
                                ? "border-elkpd-2 bg-elkpd-5 shadow-md" 
                                : "border-elkpd-3 bg-white hover:bg-elkpd-4/30 hover:border-elkpd-2"
                            } ${submitted ? "opacity-100" : ""} ${
                              submitted && isTheCorrect 
                                ? "ring-2 ring-elkpd-2 ring-offset-2" 
                                : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name={`q-${qi}`}
                              className="hidden"
                              disabled={submitted}
                              checked={checked}
                              onChange={() => setAnswer(qi, oi)}
                            />
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              checked 
                                ? "border-elkpd-2 bg-elkpd-2" 
                                : "border-elkpd-3"
                            }`}>
                              {checked && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                            </div>
                            <span className="text-elkpd-1 font-medium">{String.fromCharCode(65 + oi)}.</span>
                            <span className="flex-1 text-elkpd-1">{opt}</span>
                            
                            {submitted && (
                              <div className="flex items-center gap-2">
                                {isTheCorrect && (
                                  <span className="px-3 py-1 bg-elkpd-2 text-white text-sm font-medium rounded-full">
                                    ✓ Benar
                                  </span>
                                )}
                                {!isTheCorrect && checked && (
                                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                                    ✗ Salah
                                  </span>
                                )}
                              </div>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
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
                        value={selectedAnswers[qi] as string || ""}
                        onChange={(e) => setAnswer(qi, e.target.value)}
                        disabled={submitted}
                        placeholder="Tulis jawaban Anda di sini..."
                        className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                        rows={3}
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
                );
              }
            })}
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
                      : "📝 Kumpulkan Test Sekarang"
                    }
                  </button>
                  
                  <div className="text-sm text-elkpd-1/50">
                    Pastikan semua soal telah dijawab sebelum mengumpulkan test
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-elkpd-2">{score}/{QUESTIONS.length}</div>
                    <div className="text-sm text-elkpd-1/70">Skor Sementara</div>
                  </div>
                  <div className="text-elkpd-1/50">|</div>
                  <div className="text-sm text-elkpd-1/70">
                    Menunggu hasil final...
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