"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import TextEditor from "../../components/TextEditor";
import ImageUpload from "../../components/ImageUpload";

type StudentData = {
  namaKelompok: string;
  kelas: string;
  anggota: { nama: string; noSiswa: string }[];
};

type Answers = {
  rumusanMasalah: string;
  hipotesis: string;
  variabelKontrol: string;
  variabelBebas: string;
  variabelRespon: string;
  alatBahan: string[];
  analisisPembahasan: string[];
  diskusi: string[];
  kesimpulan: string;
  posterUploaded: boolean;
};

const PROSEDUR = [
  "Kupas dan potong buah (bertekstur seperti bengkoang) berbentuk bujur sangkar dengan perbandingan panjang: lebar: tinggi 0,5 cm: 0,5 cm: 2 cm sebanyak tiga potong di kali tiga pengulangan dan catat tekstur awal tiap potongan buah.",
  "Beri label yang berbeda pada masing-masing gelas kimia/gelas plastik dengan tiga pengulangan yakni, A, B, dan C.",
  "Masukkan air suling 100 ml ke dalam gelas kimia A, masukkan larutan gula 15% (15 gr/100 ml) pada gelas kimia B, dan masukkan larutan gula 30% (30 gr/100 ml) pada gelas kimia C.",
  "Masukkan 3 potong buah pada masing-masing gelas",
  "Diamkan selama 30 menit.",
  "Tiriskan buah, lalu ukur masing-masing buah pada tiap-tiap gelas kimia (panjang, lebar, dan tinggi).",
  "Catat perubahan panjang dan tekstur akhir pada potongan buah tersebut dan lakukan pengulangan tiga kali."
];

const ANALISIS_QUESTIONS = [
  "Buatlah grafik yang menunjukkan hubungan konsentrasi larutan gula terhadap perubahan panjang akhir!",
  "Jelaskan grafik yang telah kamu buat dan kaitkan dengan konsentrasi larutan gula terhadap perubahan panjang akhir!",
  "Jelaskan terkait perubahan tekstur pada percobaan ini terhadap osmosis!",
  "Jelaskan mekanisme dan faktor-faktor yang mempengaruhi osmosis!",
  "Jelaskan mengapa melakukan perlakuan tiga kali pengulangan!",
  "Tentukan mana larutan yang bersifat hipotonik atau hipertonik!"
];

const DISKUSI_QUESTIONS = [
  "Mengapa potongan buah yang direndam pada larutan gula dengan konsentrasi 30% mengalami perubahan yang signifikan dibandingkan lainnya?",
  "Mengapa perlakuan larutan gula dengan konsentrasi 0% diperlukan dalam percobaan osmosis tersebut?",
  "Apa yang terjadi apabila percobaan tersebut penggunaan potongan buah diubah menggunakan biji salak? apakah tetap terjadi peristiwa osmosis?"
];

const styles = StyleSheet.create({
  page: { flexDirection: 'column', backgroundColor: '#ffffff', padding: 30, fontFamily: 'Helvetica' },
  header: { fontSize: 24, textAlign: 'center', marginBottom: 20, color: '#395624', fontWeight: 'bold' },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#395624' },
  studentInfo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, padding: 15, backgroundColor: '#f8f9fa', borderRadius: 8 },
  infoItem: { fontSize: 12, marginBottom: 5 },
  scoreSection: { textAlign: 'center', marginBottom: 20, padding: 20, backgroundColor: '#4F7D2C', color: 'white', borderRadius: 8 },
  scoreText: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  questionItem: { marginBottom: 15, padding: 10, borderLeft: 3, borderColor: '#9CC97C', paddingLeft: 15 },
  questionText: { fontSize: 12, marginBottom: 8, fontWeight: 'bold' },
  answerText: { fontSize: 11, marginBottom: 5, color: '#666' },
  footer: { position: 'absolute', bottom: 30, left: 30, right: 30, textAlign: 'center', fontSize: 10, color: '#666' },
});

const TestPDF = ({ studentData, answers, uploadedImages }: { 
  studentData: StudentData; 
  answers: Answers;
  uploadedImages: {[key: string]: {preview: string, base64: string, originalName: string}};
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>PRAKTIKUM OSMOSIS - HASIL EVALUASI</Text>
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
        <Text style={styles.scoreText}>Percobaan: Osmosis</Text>
        <Text style={styles.scoreText}>Status: Menunggu Penilaian Guru</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>A. Rumusan Masalah</Text>
        <Text style={styles.answerText}>{answers.rumusanMasalah || "Tidak dijawab"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>B. Hipotesis</Text>
        <Text style={styles.answerText}>{answers.hipotesis || "Tidak dijawab"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>C. Variabel</Text>
        <Text style={styles.answerText}>Kontrol: {answers.variabelKontrol || "Tidak dijawab"}</Text>
        <Text style={styles.answerText}>Bebas: {answers.variabelBebas || "Tidak dijawab"}</Text>
        <Text style={styles.answerText}>Respon: {answers.variabelRespon || "Tidak dijawab"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>D. Alat dan Bahan</Text>
        <Text style={styles.answerText}>Alat: {answers.alatBahan[0] || "Tidak dijawab"}</Text>
        <Text style={styles.answerText}>Bahan: {answers.alatBahan[1] || "Tidak dijawab"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>E. Analisis Data dan Pembahasan</Text>
        {ANALISIS_QUESTIONS.map((q, idx) => (
          <View key={idx} style={styles.questionItem}>
            <Text style={styles.questionText}>{idx + 1}. {q}</Text>
            {idx === 0 && uploadedImages && Object.keys(uploadedImages).length > 0 ? (
              <View style={{ marginVertical: 8 }}>
                <Text style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 4 }}>Grafik:</Text>
                {Object.entries(uploadedImages).map(([filename, imageData], imgIdx) => (
                  <View key={imgIdx} style={{ marginVertical: 4, alignItems: 'center' }}>
                    <Image 
                      src={imageData.base64} 
                      style={{ width: 250, height: 200, objectFit: 'contain', border: '1px solid #e2e8f0', borderRadius: 4 }} 
                    />
                    <Text style={{ fontSize: 10, color: '#666', marginTop: 4 }}>{imageData.originalName}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <Text style={styles.answerText}>{answers.analisisPembahasan[idx] || "Tidak dijawab"}</Text>
            )}
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>F. Diskusi</Text>
        {DISKUSI_QUESTIONS.map((q, idx) => (
          <View key={idx} style={styles.questionItem}>
            <Text style={styles.questionText}>{idx + 1}. {q}</Text>
            <Text style={styles.answerText}>{answers.diskusi[idx] || "Tidak dijawab"}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>G. Kesimpulan</Text>
        <Text style={styles.answerText}>{answers.kesimpulan || "Tidak dijawab"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>H. Poster</Text>
        <Text style={styles.answerText}>{answers.posterUploaded ? "✓ Sudah upload ke Google Drive" : "Belum upload"}</Text>
      </View>
      <Text style={styles.footer}>Dokumen digenerate otomatis oleh ELKPD pada {new Date().toLocaleString('id-ID')}</Text>
    </Page>
  </Document>
);

export default function OsmosisPage() {
  const [answers, setAnswers] = useState<Answers>({
    rumusanMasalah: "", hipotesis: "", variabelKontrol: "", variabelBebas: "", variabelRespon: "",
    alatBahan: ["", ""], analisisPembahasan: Array(6).fill(""),
    diskusi: ["", "", ""], kesimpulan: "", posterUploaded: false
  });
  const [uploadedImages, setUploadedImages] = useState<{[key: string]: {preview: string, base64: string, originalName: string}}>({});
  const [submitted, setSubmitted] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [studentData, setStudentData] = useState<StudentData>({
    namaKelompok: "", kelas: "", anggota: [{ nama: "", noSiswa: "" }]
  });

  const totalQuestions = 1 + 1 + 3 + 2 + 6 + 3 + 1 + 1; // rumusan + hipotesis + var(3) + alat(2) + analisis(6) + diskusi(3) + kesimpulan + poster
  const answeredCount = useMemo(() => {
    let count = 0;
    if (answers.rumusanMasalah.trim()) count++;
    if (answers.hipotesis.trim()) count++;
    if (answers.variabelKontrol.trim()) count++;
    if (answers.variabelBebas.trim()) count++;
    if (answers.variabelRespon.trim()) count++;
    answers.alatBahan.forEach(a => { if (a.trim()) count++; });
    // Analisis pertama (index 0) dihitung dari uploadedImages
    if (Object.keys(uploadedImages).length > 0) count++;
    // Analisis sisanya (index 1-5) dari text
    for (let i = 1; i < answers.analisisPembahasan.length; i++) {
      if (answers.analisisPembahasan[i].trim()) count++;
    }
    answers.diskusi.forEach(a => { if (a.trim()) count++; });
    if (answers.kesimpulan.trim()) count++;
    if (answers.posterUploaded) count++;
    return count;
  }, [answers, uploadedImages]);

  function setAnswer(field: keyof Answers, value: string | string[] | boolean, index?: number) {
    if (submitted || showStartModal || showFinalResult) return;
    setAnswers(prev => {
      if (Array.isArray(prev[field]) && index !== undefined) {
        const arr = [...(prev[field] as string[])];
        arr[index] = value as string;
        return { ...prev, [field]: arr };
      }
      return { ...prev, [field]: value as any };
    });
  }

  function handleSubmit() {
    if (answeredCount < totalQuestions) {
      alert(`Mohon lengkapi semua soal! Masih ada ${totalQuestions - answeredCount} soal yang belum dijawab.`);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setShowFinalResult(true), 2000);
  }

  function handleReset() {
    setAnswers({
      rumusanMasalah: "", hipotesis: "", variabelKontrol: "", variabelBebas: "", variabelRespon: "",
      alatBahan: ["", ""], analisisPembahasan: Array(6).fill(""),
      diskusi: ["", "", ""], kesimpulan: "", posterUploaded: false
    });
    setUploadedImages({});
    setSubmitted(false);
    setShowFinalResult(false);
    setShowStartModal(true);
    setStudentData({ namaKelompok: "", kelas: "", anggota: [{ nama: "", noSiswa: "" }] });
  }

  function startQuiz() {
    if (!studentData.namaKelompok || !studentData.kelas || studentData.anggota.some(a => !a.nama || !a.noSiswa)) {
      alert("Mohon lengkapi data kelompok!");
      return;
    }
    setShowStartModal(false);
  }

  function addAnggota() {
    setStudentData(prev => ({ ...prev, anggota: [...prev.anggota, { nama: "", noSiswa: "" }] }));
  }

  function removeAnggota(index: number) {
    if (studentData.anggota.length > 1) {
      setStudentData(prev => ({ ...prev, anggota: prev.anggota.filter((_, i) => i !== index) }));
    }
  }

  function updateAnggota(index: number, field: 'nama' | 'noSiswa', value: string) {
    setStudentData(prev => ({
      ...prev,
      anggota: prev.anggota.map((anggota, i) => i === index ? { ...anggota, [field]: value } : anggota)
    }));
  }

  function downloadExcelTemplate() {
    const link = document.createElement("a");
    link.setAttribute("href", `/excel/Osmosis.xlsx`);
    link.setAttribute("download", `Template_Data_Osmosis.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (showStartModal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-elkpd-5 via-white to-elkpd-4/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border border-elkpd-3/50">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-elkpd-1 mb-2">Praktikum OSMOSIS</h1>
            <p className="text-lg text-elkpd-1/70 mb-8 leading-relaxed">
              Percobaan transpor pasif tentang perpindahan air melalui membran. Kerjakan secara berkelompok.
            </p>
            <div className="bg-elkpd-5 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-elkpd-1 mb-4">Data Kelompok:</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">Nama Kelompok</label>
                    <input type="text" value={studentData.namaKelompok}
                      onChange={(e) => setStudentData(prev => ({ ...prev, namaKelompok: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors"
                      placeholder="Contoh: Kelompok Beta" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-elkpd-1 text-left mb-2">Kelas</label>
                    <input type="text" value={studentData.kelas}
                      onChange={(e) => setStudentData(prev => ({ ...prev, kelas: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors"
                      placeholder="Contoh: XI IPA 1" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-elkpd-1">Anggota Kelompok</label>
                    <button type="button" onClick={addAnggota}
                      className="px-3 py-1 bg-elkpd-2 text-white text-sm rounded-lg hover:bg-elkpd-1 transition-colors">
                      + Tambah Anggota
                    </button>
                  </div>
                  <div className="space-y-3">
                    {studentData.anggota.map((anggota, index) => (
                      <div key={index} className="flex gap-3 items-end">
                        <div className="flex-1">
                          <label className="block text-xs font-medium text-elkpd-1/70 mb-1">Nama Anggota {index + 1}</label>
                          <input type="text" value={anggota.nama}
                            onChange={(e) => updateAnggota(index, 'nama', e.target.value)}
                            className="w-full px-3 py-2 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors text-sm"
                            placeholder="Nama lengkap" />
                        </div>
                        <div className="w-24">
                          <label className="block text-xs font-medium text-elkpd-1/70 mb-1">No. Siswa</label>
                          <input type="text" value={anggota.noSiswa}
                            onChange={(e) => updateAnggota(index, 'noSiswa', e.target.value)}
                            className="w-full px-3 py-2 border-2 border-elkpd-3 rounded-lg focus:border-elkpd-2 focus:outline-none transition-colors text-sm"
                            placeholder="15" />
                        </div>
                        {studentData.anggota.length > 1 && (
                          <button type="button" onClick={() => removeAnggota(index)}
                            className="px-3 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors">×</button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button onClick={startQuiz}
              disabled={!studentData.namaKelompok || !studentData.kelas || studentData.anggota.some(a => !a.nama || !a.noSiswa)}
              className={`w-full px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 text-lg ${
                !studentData.namaKelompok || !studentData.kelas || studentData.anggota.some(a => !a.nama || !a.noSiswa)
                  ? "bg-elkpd-3 text-elkpd-1/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-xl transform hover:-translate-y-1"
              }`}>
              Mulai Praktikum
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-elkpd-1 mb-4">Hasil Praktikum Osmosis</h1>
            <p className="text-lg text-elkpd-1/70 mb-6">Selamat! Anda telah menyelesaikan Praktikum Osmosis</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-elkpd-5 rounded-2xl p-6 border border-elkpd-3/50">
              <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Data Kelompok</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between"><span className="text-elkpd-1/70">Nama Kelompok:</span><span className="font-medium text-elkpd-1">{studentData.namaKelompok}</span></div>
                <div className="flex justify-between"><span className="text-elkpd-1/70">Kelas:</span><span className="font-medium text-elkpd-1">{studentData.kelas}</span></div>
                <div className="flex justify-between"><span className="text-elkpd-1/70">Jumlah Anggota:</span><span className="font-medium text-elkpd-1">{studentData.anggota.length} orang</span></div>
                <div className="mt-3 pt-3 border-t border-elkpd-3/30">
                  <div className="text-xs text-elkpd-1/70 mb-2">Anggota:</div>
                  {studentData.anggota.map((anggota, index) => (
                    <div key={index} className="text-xs text-elkpd-1/80">{index + 1}. {anggota.nama} (No. {anggota.noSiswa})</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4 text-center">Hasil Praktikum</h3>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{answeredCount}/{totalQuestions}</div>
                <div className="text-xl mb-2">Jawaban Terisi</div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 inline-block">Menunggu Penilaian</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PDFDownloadLink document={<TestPDF studentData={studentData} answers={answers} uploadedImages={uploadedImages} />}
              fileName={`PraktikumOsmosis_${studentData.namaKelompok.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
              {({ loading }) => loading ? 'Generating PDF...' : '📥 Download PDF Hasil'}
            </PDFDownloadLink>
            <button onClick={handleReset}
              className="px-8 py-4 bg-white border-2 border-elkpd-3 text-elkpd-1 font-semibold rounded-xl hover:bg-elkpd-4/50 transition-colors duration-300 text-lg shadow-md hover:shadow-lg">
              🔄 Ulangi
            </button>
            <Link href="/transpor-pasif"
              className="px-8 py-4 bg-elkpd-1 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg shadow-md hover:shadow-lg text-center">
              ← Kembali
            </Link>
          </div>
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
            <h4 className="font-semibold text-blue-800 mb-2">📁 Pengumpulan Hasil</h4>
            <p className="text-blue-700 text-sm mb-3">Setelah download, upload ke Google Drive</p>
            <a href="https://drive.google.com/drive/folders/1o07_ZbOWvks-Qf6cuJcSmBZm19nA1aRy?usp=drive_link"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Buka Google Drive
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-elkpd-3/50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-elkpd-1 font-medium">Progress:</span>
                <span className="text-lg font-bold text-blue-600">{answeredCount}/{totalQuestions}</span>
              </div>
              <div className="w-32 bg-elkpd-4 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-elkpd-1/70">Praktikum Osmosis</div>
              <div className="font-semibold text-elkpd-1">{studentData.namaKelompok}</div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Praktikum OSMOSIS</h1>
          <p className="text-lg opacity-90">{studentData.namaKelompok} - {studentData.kelas}</p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-blue-200 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6">
              <h2 className="text-2xl font-bold text-center">OSMOSIS</h2>
            </div>

            <div className="p-8 space-y-8">
              {/* A. Merumuskan Masalah */}
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">A. Merumuskan Masalah</h3>
                <div className="bg-white rounded-lg p-4 mb-4 text-sm text-gray-700">
                  <p className="font-semibold mb-2">Karakteristik:</p>
                  <ul className="space-y-1 ml-4">
                    <li>a) Berupa kalimat tanya terkait implikasi adanya data untuk memecahkan masalah</li>
                    <li>b) Mencerminkan hubungan sebab akibat antara dua hal (variabel)</li>
                  </ul>
                  <p className="mt-3 italic text-gray-600">Contoh: Bagaimana pengaruh kadar konsentrasi hormon auksin terhadap pemanjangan akar primer kecambah jagung?</p>
                </div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Buatlah rumusan masalah berdasarkan percobaan yang ingin kalian rancang!</label>
                <TextEditor value={answers.rumusanMasalah} onChange={(content) => setAnswer('rumusanMasalah', content)}
                  placeholder="Tulis rumusan masalah Anda..." height={100} disabled={submitted} />
              </div>

              {/* B. Merumuskan Uji Hipotesis */}
              <div className="bg-cyan-50 rounded-2xl p-6 border-2 border-cyan-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">B. Merumuskan Uji Hipotesis</h3>
                <div className="bg-white rounded-lg p-4 mb-4 text-sm text-gray-700">
                  <p className="font-semibold mb-2">Karakteristik:</p>
                  <ul className="space-y-1 ml-4">
                    <li>a) Dugaan sementara terhadap rumusan masalah yang sudah dibuat</li>
                    <li>b) Hipotesis dapat dinyatakan jika-maka atau semakin-semakin</li>
                  </ul>
                  <p className="mt-3 italic text-gray-600">Contoh: Semakin tinggi kadar konsentrasi hormon auksin maka semakin panjang perubahan ukuran akar primer kecambah jagung.</p>
                </div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Buatlah rumusan hipotesis yang selaras dengan rumusan masalah yang telah dibuat!</label>
                <TextEditor value={answers.hipotesis} onChange={(content) => setAnswer('hipotesis', content)}
                  placeholder="Tulis hipotesis Anda..." height={100} disabled={submitted} />
              </div>

              {/* C. Merumuskan Variabel */}
              <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">C. Merumuskan Variabel</h3>
                <div className="bg-white rounded-lg p-4 mb-4 text-sm text-gray-700">
                  <p className="font-semibold mb-2">Karakteristik:</p>
                  <p className="mb-2">Segala sesuatu yang akan menjadi objek yang diamati dalam percobaan:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <strong>Variabel Kontrol</strong> (dibuat sama): umur kecambah, volume auksin, dll</li>
                    <li>• <strong>Variabel Manipulasi</strong> (dibuat beda): kadar konsentrasi hormon auksin</li>
                    <li>• <strong>Variabel Respon</strong> (diamati): perubahan panjang akar primer</li>
                  </ul>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-4">Rancanglah percobaan dengan menentukan 3 variabel:</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">a) Variabel Kontrol:</label>
                    <TextEditor value={answers.variabelKontrol} onChange={(content) => setAnswer('variabelKontrol', content)}
                      placeholder="Contoh: jenis buah, ukuran potongan buah, waktu perendaman..." height={80} disabled={submitted} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">b) Variabel Bebas (Manipulasi):</label>
                    <TextEditor value={answers.variabelBebas} onChange={(content) => setAnswer('variabelBebas', content)}
                      placeholder="Contoh: konsentrasi larutan gula (0%, 15%, 30%)..." height={80} disabled={submitted} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">c) Variabel Respon (Terikat):</label>
                    <TextEditor value={answers.variabelRespon} onChange={(content) => setAnswer('variabelRespon', content)}
                      placeholder="Contoh: perubahan panjang dan tekstur buah..." height={80} disabled={submitted} />
                  </div>
                </div>
              </div>

              {/* D. Mengidentifikasi Daftar Alat dan Bahan */}
              <div className="bg-teal-50 rounded-2xl p-6 border-2 border-teal-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">D. Mengidentifikasi Daftar Alat dan Bahan</h3>
                <p className="text-sm text-gray-700 mb-4">Bacalah prosedur percobaan di bawah, lalu identifikasi daftar alat dan bahan yang diperlukan.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">a) Alat:</label>
                    <TextEditor value={answers.alatBahan[0]} onChange={(content) => setAnswer('alatBahan', content, 0)}
                      placeholder="Contoh: 3 gelas kimia, penggaris, pisau..." height={80} disabled={submitted} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">b) Bahan:</label>
                    <TextEditor value={answers.alatBahan[1]} onChange={(content) => setAnswer('alatBahan', content, 1)}
                      placeholder="Contoh: buah bengkoang, air suling, gula..." height={80} disabled={submitted} />
                  </div>
                </div>
              </div>

              {/* E. Prosedur */}
              <div className="bg-elkpd-5/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">E. Prosedur Percobaan</h3>
                <ol className="space-y-2">
                  {PROSEDUR.map((step, idx) => (
                    <li key={idx} className="text-elkpd-1/80 flex gap-3">
                      <span className="font-semibold min-w-6">{idx + 1}.</span><span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* F. Data Hasil Percobaan */}
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">F. Data Hasil Percobaan</h3>
                <p className="text-sm text-elkpd-1/70 mb-4">Download template Excel dan isi data hasil percobaan Anda. Data akan digunakan untuk membuat grafik di bagian Analisis.</p>
                <button onClick={downloadExcelTemplate}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-md inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Template Excel
                </button>
              </div>

              {/* G. Analisis Data dan Pembahasan */}
              <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">G. Analisis Data dan Pembahasan</h3>
                <div className="space-y-6">
                  {ANALISIS_QUESTIONS.map((question, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-medium text-elkpd-1 mb-3">{idx + 1}. {question}</p>
                      {idx === 0 ? (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Grafik:
                          </label>
                          <ImageUpload
                            questionIdx="grafik_osmosis"
                            onImagesChange={(questionIdx, images) => {
                              setUploadedImages(images);
                            }}
                            disabled={submitted}
                          />
                          <p className="text-xs text-gray-500 mt-2 italic">
                            * Upload gambar grafik yang menunjukkan hubungan konsentrasi larutan gula terhadap perubahan panjang
                          </p>
                        </div>
                      ) : (
                        <TextEditor value={answers.analisisPembahasan[idx]} onChange={(content) => setAnswer('analisisPembahasan', content, idx)}
                          placeholder="Tulis jawaban Anda..." height={120} disabled={submitted} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* H. Diskusi */}
              <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">H. Diskusi</h3>
                <div className="space-y-6">
                  {DISKUSI_QUESTIONS.map((question, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-orange-200">
                      <p className="font-medium text-elkpd-1 mb-3">{idx + 1}. {question}</p>
                      <TextEditor value={answers.diskusi[idx]} onChange={(content) => setAnswer('diskusi', content, idx)}
                        placeholder="Tulis jawaban Anda..." height={120} disabled={submitted} />
                    </div>
                  ))}
                </div>
              </div>

              {/* I. Kesimpulan */}
              <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">I. Kesimpulan</h3>
                <p className="text-sm text-gray-600 italic mb-3">*Karakteristik: kalimat singkat, tidak menjelaskan data, menjawab rumusan masalah.</p>
                <TextEditor value={answers.kesimpulan} onChange={(content) => setAnswer('kesimpulan', content)}
                  placeholder="Tulis kesimpulan..." height={120} disabled={submitted} />
              </div>

              {/* J. Buat Poster */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200">
                <h3 className="text-xl font-bold text-elkpd-1 mb-4">J. Buat dalam bentuk Poster!</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Buat poster yang mencakup hasil percobaan, grafik/tabel, analisis, dan kesimpulan. 
                  Upload poster Anda ke Google Drive yang telah disediakan.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://drive.google.com/drive/folders/13Xi7hvh7H0Zea_tKtXC3Scm0UbdawAv4?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                    </svg>
                    Buka Google Drive untuk Upload Poster
                  </a>
                  
                  <div className="bg-white border-2 border-cyan-300 rounded-lg p-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={answers.posterUploaded}
                        onChange={(e) => setAnswer('posterUploaded', e.target.checked)}
                        disabled={submitted}
                        className="w-5 h-5 text-cyan-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-cyan-500"
                      />
                      <span className="text-sm font-medium text-elkpd-1 group-hover:text-cyan-600 transition-colors">
                        ✓ Saya telah mengumpulkan poster di Google Drive
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg">
            <div className="text-center">
              {!submitted ? (
                <div className="space-y-4">
                  <div className="text-lg text-elkpd-1/70">
                    Anda telah menjawab <span className="font-bold text-blue-600">{answeredCount}</span> dari <span className="font-bold text-blue-600">{totalQuestions}</span> pertanyaan
                  </div>
                  <button onClick={handleSubmit} disabled={answeredCount < totalQuestions}
                    className={`px-12 py-4 rounded-xl font-semibold transition-all duration-300 text-lg ${
                      answeredCount < totalQuestions 
                        ? "bg-elkpd-3 text-elkpd-1/60 cursor-not-allowed" 
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-xl transform hover:-translate-y-1"
                    }`}>
                    {answeredCount < totalQuestions ? `Jawab ${totalQuestions - answeredCount} pertanyaan lagi` : "📝 Selesai & Lihat Hasil"}
                  </button>
                  <div className="text-sm text-elkpd-1/50">Pastikan semua pertanyaan telah dijawab</div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Praktikum Selesai!</div>
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

