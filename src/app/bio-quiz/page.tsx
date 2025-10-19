"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

type Question = {
  id: number;
  text: string;
  type: "multiple";
  options: string[];
  correctAnswer: string;
};

type StudentData = {
  nama: string;
  noSiswa: string;
  kelas: string;
};

const QUESTIONS: Question[] = [
  { 
    id: 1, 
    text: "Apa yang dimaksud dengan transpor membran?", 
    type: "multiple",
    options: [
      "Perpindahan zat melalui membran sel",
      "Perpindahan sel dari satu tempat ke tempat lain",
      "Proses pembentukan membran sel",
      "Proses pembelahan Sel",
      "Perpindahan zat"
    ],
    correctAnswer: "Perpindahan zat melalui membran sel"
  },
  { 
    id: 2, 
    text: "Manakah yang merupakan contoh transpor pasif?", 
    type: "multiple",
    options: [
      "Pompa natrium-kalium",
      "Endositosis",
      "Difusi oksigen",
      "Eksositosis",
      "Perpindahan Molekul"
    ],
    correctAnswer: "Difusi oksigen"
  },
  { 
    id: 3, 
    text: "Difusi terfasilitasi berbeda dengan difusi sederhana karena?", 
    type: "multiple",
    options: [
      "Menggunakan energi ATP",
      "Melibatkan protein pembawa atau kanal",
      "Terjadi pada semua jenis zat",
      "Melawan gradien konsentrasi",
      "Hanya terjadi pada gas"
    ],
    correctAnswer: "Melibatkan protein pembawa atau kanal"
  },
  { 
    id: 4, 
    text: "Ciri khas dari transpor aktif adalah?", 
    type: "multiple",
    options: [
      "Tidak memerlukan energi",
      "Mengikuti gradien konsentrasi",
      "Menggunakan energi dari ATP",
      "Hanya terjadi pada molekul air",
      "Tidak melibatkan protein pembawa"
    ],
    correctAnswer: "Menggunakan energi dari ATP"
  },
  { 
    id: 5, 
    text: "Proses perpindahan molekul dari daerah konsentrasi tinggi ke daerah konsentrasi rendah tanpa menggunakan energi disebut?", 
    type: "multiple",
    options: [
      "Transpor aktif",
      "Endositosis",
      "Osmosis",
      "Difusi",
      "Eksositosis"
    ],
    correctAnswer: "Difusi"
  }
];

const QUIZ_DURATION = 10 * 60; // 10 menit dalam detik

const styles = StyleSheet.create({
  page: { flexDirection: 'column', backgroundColor: '#ffffff', padding: 30, fontFamily: 'Helvetica' },
  header: { fontSize: 24, textAlign: 'center', marginBottom: 20, color: '#395624', fontWeight: 'bold' },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#395624' },
  studentInfo: { marginBottom: 20, padding: 15, backgroundColor: '#f8f9fa', borderRadius: 8 },
  infoItem: { fontSize: 12, marginBottom: 5 },
  scoreSection: { textAlign: 'center', marginBottom: 20, padding: 20, backgroundColor: '#4F7D2C', color: 'white', borderRadius: 8 },
  scoreText: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  questionItem: { marginBottom: 15, padding: 10, borderLeft: 3, borderColor: '#9CC97C', paddingLeft: 15 },
  questionText: { fontSize: 12, marginBottom: 8, fontWeight: 'bold' },
  answerText: { fontSize: 11, marginBottom: 5, color: '#666' },
  footer: { position: 'absolute', bottom: 30, left: 30, right: 30, textAlign: 'center', fontSize: 10, color: '#666' },
});

const TestPDF = ({ studentData, answers }: {
  studentData: StudentData;
  answers: {[key: number]: string};
}) => {
  const correctCount = QUESTIONS.filter((q, idx) => answers[idx] === q.correctAnswer).length;
  const score = Math.round((correctCount / QUESTIONS.length) * 100);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>BIO QUIZ - HASIL EVALUASI</Text>
        <View style={styles.studentInfo}>
          <Text style={styles.infoItem}>Nama: {studentData.nama}</Text>
          <Text style={styles.infoItem}>No. Siswa: {studentData.noSiswa}</Text>
          <Text style={styles.infoItem}>Kelas: {studentData.kelas}</Text>
          <Text style={styles.infoItem}>Tanggal: {new Date().toLocaleDateString('id-ID')}</Text>
        </View>
        <View style={styles.scoreSection}>
          <Text style={styles.scoreText}>Quiz: Transpor Membran (Individual)</Text>
          <Text style={styles.scoreText}>Total Soal: {QUESTIONS.length} (Pilihan Ganda)</Text>
          <Text style={styles.scoreText}>Jawaban Benar: {correctCount}/{QUESTIONS.length}</Text>
          <Text style={styles.scoreText}>Skor: {score}%</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detail Jawaban:</Text>
          {QUESTIONS.map((q, idx) => (
            <View key={idx} style={styles.questionItem}>
              <Text style={styles.questionText}>{q.id}. {q.text}</Text>
              <Text style={styles.answerText}>Jawaban Anda: {answers[idx] || "Tidak dijawab"}</Text>
              <Text style={{ fontSize: 11, marginTop: 4, color: answers[idx] === q.correctAnswer ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
                {answers[idx] === q.correctAnswer ? '✓ Benar' : `✗ Salah (Jawaban benar: ${q.correctAnswer})`}
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.footer}>Dokumen ini digenerate otomatis oleh sistem ELKPD pada {new Date().toLocaleString('id-ID')}</Text>
      </Page>
    </Document>
  );
};

export default function BioQuizPage() {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [submitted, setSubmitted] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [timerActive, setTimerActive] = useState(false);
  const [studentData, setStudentData] = useState<StudentData>({ nama: "", noSiswa: "", kelas: "" });

  const answeredCount = useMemo(() => {
    let count = 0;
    QUESTIONS.forEach((q, idx) => {
      if (answers[idx]?.trim()) count++;
    });
    return count;
  }, [answers]);

  useEffect(() => {
    if (timerActive && timeLeft > 0 && !submitted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timerActive, timeLeft, submitted]);

  function setAnswer(questionIdx: number, answer: string) {
    if (submitted || showStartModal || showFinalResult) return;
    setAnswers(prev => ({ ...prev, [questionIdx]: answer }));
  }

  function handleSubmit() {
    setSubmitted(true);
    setTimerActive(false);
    setTimeout(() => setShowFinalResult(true), 2000);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    setShowFinalResult(false);
    setShowStartModal(true);
    setTimeLeft(QUIZ_DURATION);
    setTimerActive(false);
    setStudentData({ nama: "", noSiswa: "", kelas: "" });
  }

  function startQuiz() {
    if (!studentData.nama || !studentData.noSiswa || !studentData.kelas) {
      alert("Mohon lengkapi data diri terlebih dahulu!");
      return;
    }
    setShowStartModal(false);
    setTimerActive(true);
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (showStartModal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border border-orange-300">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-elkpd-1 mb-4">Bio Quiz</h1>
            <p className="text-lg text-elkpd-1/70 mb-8 leading-relaxed">
              Quiz Transpor Membran. Dikerjakan secara <strong>individual</strong> dengan waktu <strong>10 menit</strong>.
            </p>
            <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Data Diri:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">Nama Lengkap</label>
                  <input type="text" value={studentData.nama}
                    onChange={(e) => setStudentData(prev => ({ ...prev, nama: e.target.value }))}
                    className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Contoh: Budi Santoso" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">No. Siswa</label>
                    <input type="text" value={studentData.noSiswa}
                      onChange={(e) => setStudentData(prev => ({ ...prev, noSiswa: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="15" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">Kelas</label>
                    <input type="text" value={studentData.kelas}
                      onChange={(e) => setStudentData(prev => ({ ...prev, kelas: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="XI IPA 1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-100 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Informasi Quiz:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-elkpd-1/70">5 Soal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-elkpd-1/70">Pilihan Ganda</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-elkpd-1/70">Waktu 10 Menit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-elkpd-1/70">Individual</span>
                </div>
              </div>
            </div>
            <button onClick={startQuiz}
              disabled={!studentData.nama || !studentData.noSiswa || !studentData.kelas}
              className={`w-full px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 text-lg ${
                !studentData.nama || !studentData.noSiswa || !studentData.kelas
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-xl transform hover:-translate-y-1"
              }`}>
              Mulai Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showFinalResult) {
    const correctCount = QUESTIONS.filter((q, idx) => {
      if (q.type === 'multiple') return answers[idx] === q.correctAnswer;
      return false;
    }).length;
    const multipleChoiceCount = QUESTIONS.filter(q => q.type === 'multiple').length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl border border-orange-300">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-elkpd-1 mb-4">Hasil Bio Quiz</h1>
            <p className="text-lg text-elkpd-1/70 mb-6">Selamat! Anda telah menyelesaikan Bio Quiz</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-yellow-50 rounded-2xl p-6 border border-orange-300">
              <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Data Siswa</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between"><span className="text-elkpd-1/70">Nama:</span><span className="font-medium text-elkpd-1">{studentData.nama}</span></div>
                <div className="flex justify-between"><span className="text-elkpd-1/70">No. Siswa:</span><span className="font-medium text-elkpd-1">{studentData.noSiswa}</span></div>
                <div className="flex justify-between"><span className="text-elkpd-1/70">Kelas:</span><span className="font-medium text-elkpd-1">{studentData.kelas}</span></div>
                <div className="flex justify-between"><span className="text-elkpd-1/70">Tanggal:</span><span className="font-medium text-elkpd-1">{new Date().toLocaleDateString('id-ID')}</span></div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4 text-center">Hasil Quiz</h3>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{answeredCount}/{QUESTIONS.length}</div>
                <div className="text-xl mb-2">Soal Terjawab</div>
                <div className="text-3xl font-bold mb-2">Benar: {correctCount}/{QUESTIONS.length}</div>
                <div className="text-2xl font-bold">Skor: {Math.round((correctCount / QUESTIONS.length) * 100)}%</div>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-orange-300 rounded-2xl p-6 mb-8 max-h-96 overflow-y-auto">
            <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Ringkasan Jawaban</h3>
            <div className="space-y-3">
              {QUESTIONS.map((q, idx) => (
                <div key={idx} className={`p-3 rounded-lg border ${
                  answers[idx] === q.correctAnswer ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
                }`}>
                  <div className="text-sm font-medium text-elkpd-1 mb-1">
                    {q.id}. [PG] {q.text.substring(0, 60)}...
                  </div>
                  <div className="text-xs text-gray-600 truncate">Jawaban: {answers[idx] || "Tidak dijawab"}</div>
                  <div className="text-xs mt-1">
                    {answers[idx] === q.correctAnswer ? 
                      <span className="text-green-600 font-bold">✓ Benar</span> : 
                      <span className="text-red-600">✗ Salah (Benar: {q.correctAnswer})</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PDFDownloadLink document={<TestPDF studentData={studentData} answers={answers} />}
              fileName={`BioQuiz_${studentData.nama.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
              {({ loading }) => loading ? 'Generating PDF...' : '📥 Download PDF Hasil'}
            </PDFDownloadLink>
            <button onClick={handleReset}
              className="px-8 py-4 bg-white border-2 border-orange-300 text-elkpd-1 font-semibold rounded-xl hover:bg-orange-50 transition-colors duration-300 text-lg shadow-md hover:shadow-lg">
              🔄 Ulangi Quiz
            </button>
            <Link href="/" className="px-8 py-4 bg-elkpd-1 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg shadow-md hover:shadow-lg text-center">
              🏠 Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Sticky Progress & Timer Bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-orange-300 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-elkpd-1 font-medium">Progress:</span>
                <span className="text-lg font-bold text-orange-600">{answeredCount}/{QUESTIONS.length}</span>
              </div>
              <div className="w-32 bg-orange-100 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-elkpd-1/70">Bio Quiz - Individual</div>
              <div className={`font-mono text-2xl font-bold ${timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-orange-600'}`}>
                ⏱️ {formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">BIO QUIZ</h1>
          <p className="text-lg opacity-90 mb-2">Quiz Transpor Membran</p>
          <p className="text-base opacity-80">{studentData.nama} - {studentData.kelas}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {QUESTIONS.map((q, qi) => (
              <div key={q.id} className="rounded-2xl border-2 p-6 shadow-md hover:shadow-lg transition-all duration-300 border-blue-300 bg-blue-50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold flex-shrink-0 bg-blue-500">
                    {q.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-200 text-blue-800">
                        📊 Pilihan Ganda
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-elkpd-1 leading-relaxed">{q.text}</h3>
                  </div>
                </div>
                
                <div className="ml-12">
                  <div className="space-y-2">
                    {q.options.map((option, optIdx) => (
                      <label key={optIdx} className="flex items-center gap-3 p-3 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-all cursor-pointer">
                        <input type="radio" name={`question-${qi}`} value={option}
                          checked={answers[qi] === option}
                          onChange={(e) => setAnswer(qi, e.target.value)}
                          disabled={submitted}
                          className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  
                  {submitted && (
                    <div className={`mt-3 p-3 rounded-lg border ${
                      answers[qi] === q.correctAnswer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}>
                      <div className="text-sm">
                        {answers[qi] === q.correctAnswer ? (
                          <div className="text-green-700 font-bold">✓ Jawaban Anda Benar!</div>
                        ) : (
                          <div>
                            <div className="text-red-700 font-bold">✗ Jawaban Kurang Tepat</div>
                            <div className="text-xs text-gray-600 mt-1">Jawaban yang benar: <span className="font-semibold">{q.correctAnswer}</span></div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 border border-orange-300 shadow-lg">
            <div className="text-center">
              {!submitted ? (
                <div className="space-y-4">
                  <div className="text-lg text-elkpd-1/70">
                    Anda telah menjawab <span className="font-bold text-orange-600">{answeredCount}</span> dari <span className="font-bold text-orange-600">{QUESTIONS.length}</span> soal
                  </div>
                  <button onClick={handleSubmit}
                    className="px-12 py-4 rounded-xl font-semibold transition-all duration-300 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-xl transform hover:-translate-y-1">
                    📝 Selesai & Lihat Hasil
                  </button>
                  <div className="text-sm text-elkpd-1/50">Anda bisa submit kapan saja atau tunggu waktu habis</div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">Quiz Selesai!</div>
                  <div className="text-sm text-elkpd-1/70">Menunggu hasil final...</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

