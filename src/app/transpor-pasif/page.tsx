"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import PhETEmbed from "../components/PhETEmbed";
import TextEditor from "../components/TextEditor";
import ImageUpload from "../components/ImageUpload";

type StudentData = {
  namaKelompok: string;
  kelas: string;
  anggota: { nama: string; noSiswa: string }[];
};

type SectionAnswers = {
  dataPercobaan: string;
  analisisPembahasan: string[];
  diskusi: string[];
  kesimpulan: string;
};

const SECTIONS = [
  {
    id: "difusi",
    title: "DIFUSI",
    prosedur: [
      "Siapkan 2 buah gelas, gelas A, gelas B, dan stopwatch.",
      "Tuangkan air biasa sebanyak 100 ml pada gelas A dan gelas B",
      "Masukkan tinta pada gelas A sebanyak dua tetes menggunakan pipet dan masukkan pewarna bubuk tekstil pada gelas B sebanyak satu sendok makan pada saat yang bersamaan (jangan diaduk).",
      "Memulai menghitung waktu menggunakan stopwatch bersamaan dengan saat meneteskan ketiga larutan pada gelas masing masing dan melakukan pengulangan tiga kali.",
      "Mengamati penyebaran warna masing masing larutan tanpa pengadukan.",
      "Mencatat berapa lama waktu yang diperlukan saat mengalami perubahan warna secara merata."
    ],
    analisisPembahasan: [
      "Buatlah diagram yang menunjukkan hubungan jenis wujud cair maupun padat terhadap lama waktu perubahan warna!",
      "Jelaskan diagram yang telah kamu buat dan penjelasan jenis wujud cair maupun padat terhadap lama waktu perubahan warna!",
      "Jelaskan mekanisme faktor-faktor yang memengaruhi difusi pada percobaan tersebut!",
      "Jelaskan mengapa melakukan perlakuan tiga kali pengulangan!",
      "Tentukan mana larutan yang bersifat hipotonik atau hipertonik!",
      "Buat dalam bentuk Poster!"
    ],
    diskusi: [
      "Mengapa jenis wujud larutan tinta cair mengalami perubahan warna secara sempurna dengan waktu yang paling cepat dibanding jenis larutan lainnya?",
      "Apa yang terjadi apabila percobaan tersebut ketiga jenis larutan diubah menggunakan minyak? apakah tetap terjadi peristiwa difusi? jika tidak, mengapa?"
    ]
  },
  {
    id: "osmosis",
    title: "OSMOSIS",
    prosedur: [
      "Kupas dan potong buah (bertekstur seperti bengkoang) berbentuk bujur sangkar dengan perbandingan panjang: lebar: tinggi 0,5 cm: 0,5 cm: 2 cm sebanyak tiga potong di kali tiga pengulangan dan catat tekstur awal tiap potongan buah.",
      "Beri label yang berbeda pada masing-masing gelas kimia/gelas plastik dengan tiga pengulangan yakni, A, B, dan C.",
      "Masukkan air suling 100 ml ke dalam gelas kimia A, masukkan larutan gula 15% (15 gr/100 ml) pada gelas kimia B, dan masukkan larutan gula 30% (30 gr/100 ml) pada gelas kimia C.",
      "Masukkan 3 potong buah pada masing-masing gelas",
      "Diamkan selama 30 menit.",
      "Tiriskan buah, lalu ukur masing-masing buah pada tiap-tiap gelas kimia (panjang, lebar, dan tinggi).",
      "Catat perubahan panjang dan tekstur akhir pada potongan buah tersebut dan lakukan pengulangan tiga kali."
    ],
    analisisPembahasan: [
      "Buatlah grafik yang menunjukkan hubungan konsentrasi larutan gula terhadap perubahan panjang akhir!",
      "Jelaskan grafik yang telah kamu buat dan kaitkan dengan konsentrasi larutan gula terhadap perubahan panjang akhir!",
      "Jelaskan terkait perubahan tekstur pada percobaan ini terhadap osmosis!",
      "Jelaskan mekanisme dan faktor-faktor yang mempengaruhi osmosis!",
      "Jelaskan mengapa melakukan perlakuan tiga kali pengulangan!",
      "Tentukan mana larutan yang bersifat hipotonik atau hipertonik!",
      "Buat dalam bentuk Poster!"
    ],
    diskusi: [
      "Mengapa potongan buah yang direndam pada larutan gula dengan konsentrasi 30% mengalami perubahan yang signifikan dibandingkan lainnya?",
      "Mengapa perlakuan larutan gula dengan konsentrasi 0% diperlukan dalam percobaan osmosis tersebut?",
      "Apa yang terjadi apabila percobaan tersebut penggunaan potongan buah diubah menggunakan biji salak? apakah tetap terjadi peristiwa osmosis?"
    ]
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

const TestPDF = ({ studentData, sectionAnswers, uploadedImages }: {
  studentData: StudentData;
  sectionAnswers: Record<string, SectionAnswers>;
  uploadedImages: Record<string, Record<string, Record<string, {preview: string, base64: string, originalName: string}>>>;
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>PRAKTIKUM TRANSPOR PASIF - HASIL EVALUASI</Text>
      
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
        <Text style={styles.scoreText}>Jenis Praktikum: Transpor Pasif (Difusi & Osmosis)</Text>
        <Text style={styles.scoreText}>Status: Menunggu Penilaian Guru</Text>
      </View>

      {SECTIONS.map((section) => (
        <View key={section.id} style={styles.section}>
          <Text style={[styles.sectionTitle, { fontSize: 18, marginTop: 15, marginBottom: 10 }]}>
            {section.title}
          </Text>
          
          <View style={styles.questionItem}>
            <Text style={styles.questionText}>B. Data Hasil Percobaan</Text>
            <Text style={styles.answerText}>
              Jawaban: {sectionAnswers[section.id].dataPercobaan || "Tidak dijawab"}
            </Text>
          </View>

          <View style={styles.questionItem}>
            <Text style={styles.questionText}>C. Analisis Data dan Pembahasan</Text>
            {section.analisisPembahasan.map((question, idx) => (
              <View key={idx} style={{ marginBottom: 8 }}>
                <Text style={[styles.answerText, { fontSize: 10, fontWeight: 'bold' }]}>
                  {idx + 1}. {question}
                </Text>
                <Text style={styles.answerText}>
                  Jawaban: {sectionAnswers[section.id].analisisPembahasan[idx] || "Tidak dijawab"}
                </Text>
                
                {uploadedImages[section.id] && uploadedImages[section.id][`analisis_${idx}`] && Object.keys(uploadedImages[section.id][`analisis_${idx}`]).length > 0 && (
                  <View style={{ marginVertical: 8 }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 4 }}>Gambar yang Di-upload:</Text>
                    {Object.entries(uploadedImages[section.id][`analisis_${idx}`]).map(([filename, imageData], imgIdx) => (
                      <View key={imgIdx} style={{ marginVertical: 4, alignItems: 'center' }}>
                        <Image 
                          src={imageData.base64} 
                          style={{ 
                            width: 200, 
                            height: 150, 
                            objectFit: 'contain',
                            border: '1px solid #e2e8f0',
                            borderRadius: 4
                          }} 
                        />
                        <Text style={{ fontSize: 10, color: '#666', marginTop: 4 }}>
                          {imageData.originalName}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>

          <View style={styles.questionItem}>
            <Text style={styles.questionText}>D. Diskusi</Text>
            {section.diskusi.map((question, idx) => (
              <View key={idx} style={{ marginBottom: 8 }}>
                <Text style={[styles.answerText, { fontSize: 10, fontWeight: 'bold' }]}>
                  {idx + 1}. {question}
                </Text>
                <Text style={styles.answerText}>
                  Jawaban: {sectionAnswers[section.id].diskusi[idx] || "Tidak dijawab"}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.questionItem}>
            <Text style={styles.questionText}>E. Kesimpulan</Text>
            <Text style={styles.answerText}>
              {sectionAnswers[section.id].kesimpulan || "Tidak dijawab"}
            </Text>
          </View>
        </View>
      ))}

      <Text style={styles.footer}>
        Dokumen ini digenerate otomatis oleh sistem ELKPD pada {new Date().toLocaleString('id-ID')}
      </Text>
    </Page>
  </Document>
);

export default function TransporPasifPage() {
  const [sectionAnswers, setSectionAnswers] = useState<Record<string, SectionAnswers>>({
    difusi: {
      dataPercobaan: "",
      analisisPembahasan: ["", "", "", "", "", ""],
      diskusi: ["", ""],
      kesimpulan: ""
    },
    osmosis: {
      dataPercobaan: "",
      analisisPembahasan: ["", "", "", "", "", "", ""],
      diskusi: ["", "", ""],
      kesimpulan: ""
    }
  });
  const [submitted, setSubmitted] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [uploadedImages, setUploadedImages] = useState<Record<string, Record<string, Record<string, {preview: string, base64: string, originalName: string}>>>>({});
  const [studentData, setStudentData] = useState<StudentData>({
    namaKelompok: "",
    kelas: "",
    anggota: [{ nama: "", noSiswa: "" }]
  });

  const answeredCount = useMemo(() => {
    let count = 0;
    Object.values(sectionAnswers).forEach(section => {
      section.analisisPembahasan.forEach(ans => { if (ans.trim()) count++; });
      section.diskusi.forEach(ans => { if (ans.trim()) count++; });
      if (section.kesimpulan.trim()) count++;
    });
    return count;
  }, [sectionAnswers]);

  const totalQuestions = useMemo(() => {
    return SECTIONS.reduce((total, section) => {
      return total + section.analisisPembahasan.length + section.diskusi.length + 1;
    }, 0);
  }, []);

  function downloadExcelTemplate(type: 'difusi' | 'osmosis') {
    const link = document.createElement("a");
    link.setAttribute("href", `/excel/${type === 'difusi' ? 'Difusi' : 'Osmosis'}.xlsx`);
    link.setAttribute("download", `Template_Data_${type === 'difusi' ? 'Difusi' : 'Osmosis'}.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function setSectionAnswer(sectionId: string, field: keyof SectionAnswers, value: string | string[], index?: number) {
    if (submitted || showStartModal || showFinalResult) return;
    setSectionAnswers(prev => {
      const newAnswers = { ...prev };
      if (Array.isArray(value)) {
        (newAnswers[sectionId][field] as string[]) = value;
      } else if (index !== undefined && Array.isArray(newAnswers[sectionId][field])) {
        const arr = [...(newAnswers[sectionId][field] as string[])];
        arr[index] = value;
        (newAnswers[sectionId][field] as string[]) = arr;
      } else {
        (newAnswers[sectionId][field] as string) = value;
      }
      return newAnswers;
    });
  }

  function handleSubmit() {
    if (answeredCount < totalQuestions) {
      alert(`Mohon lengkapi semua soal terlebih dahulu! Masih ada ${totalQuestions - answeredCount} soal yang belum dijawab.`);
      return;
    }
    
    setSubmitted(true);
    setTimeout(() => {
      setShowFinalResult(true);
    }, 2000);
  }

  function handleReset() {
    setSectionAnswers({
      difusi: {
        dataPercobaan: "",
        analisisPembahasan: ["", "", "", "", "", ""],
        diskusi: ["", ""],
        kesimpulan: ""
      },
      osmosis: {
        dataPercobaan: "",
        analisisPembahasan: ["", "", "", "", "", "", ""],
        diskusi: ["", "", ""],
        kesimpulan: ""
      }
    });
    setSubmitted(false);
    setShowFinalResult(false);
    setShowStartModal(true);
    setUploadedImages({});
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
            
            <h1 className="text-3xl font-bold text-elkpd-1 mb-4">Praktikum Transpor Pasif</h1>
            <p className="text-lg text-elkpd-1/70 mb-8 leading-relaxed">
              Praktikum ini terdiri dari 2 percobaan: Difusi dan Osmosis. Jawab semua pertanyaan dengan lengkap dan jelas.
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
              <h3 className="font-semibold text-elkpd-1 mb-4">Informasi Praktikum:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">2 Percobaan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elkpd-2 rounded-full"></span>
                  <span className="text-elkpd-1/70">{totalQuestions} Pertanyaan</span>
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-elkpd-2">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-elkpd-1 mb-4">Hasil Praktikum Transpor Pasif</h1>
            <p className="text-lg text-elkpd-1/70 mb-6">
              Selamat! Anda telah menyelesaikan Praktikum Transpor Pasif
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
              <h3 className="font-semibold mb-4 text-center">Hasil Praktikum</h3>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{answeredCount}/{totalQuestions}</div>
                <div className="text-xl mb-2">Jawaban Terisi</div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white inline-block">
                  Menunggu Penilaian
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-elkpd-3/50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-elkpd-1 mb-4 text-center">Ringkasan Jawaban</h3>
            <div className="space-y-6">
              {SECTIONS.map((section) => (
                <div key={section.id} className="border-b border-elkpd-3/30 pb-4 last:border-b-0">
                  <h4 className="font-bold text-elkpd-2 mb-3 text-lg">{section.title}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-32">Data Percobaan:</span>
                      <span className="text-elkpd-1/70">
                        {sectionAnswers[section.id].dataPercobaan ? "✓ Sudah diisi" : "✗ Belum diisi"}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-32">Analisis:</span>
                      <span className="text-elkpd-1/70">
                        {sectionAnswers[section.id].analisisPembahasan.filter(a => a.trim()).length}/{section.analisisPembahasan.length} pertanyaan dijawab
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-32">Diskusi:</span>
                      <span className="text-elkpd-1/70">
                        {sectionAnswers[section.id].diskusi.filter(a => a.trim()).length}/{section.diskusi.length} pertanyaan dijawab
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-32">Kesimpulan:</span>
                      <span className="text-elkpd-1/70">
                        {sectionAnswers[section.id].kesimpulan ? "✓ Sudah diisi" : "✗ Belum diisi"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PDFDownloadLink
              document={
                <TestPDF
                  studentData={studentData}
                  sectionAnswers={sectionAnswers}
                  uploadedImages={uploadedImages}
                />
              }
              fileName={`PraktikumTransporPasif_${studentData.namaKelompok.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`}
              className="px-8 py-4 bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Generating PDF...' : '📥 Download PDF Hasil Praktikum'
              }
            </PDFDownloadLink>
            <button
              onClick={handleReset}
              className="px-8 py-4 bg-white border-2 border-elkpd-3 text-elkpd-1 font-semibold rounded-xl hover:bg-elkpd-4/50 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
            >
              🔄 Ulangi Praktikum
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
              <h4 className="font-semibold text-blue-800 mb-2">📁 Pengumpulan Hasil Praktikum</h4>
              <p className="text-blue-700 text-sm mb-3">
                Setelah download hasil praktikum, silakan upload ke Google Drive yang telah disediakan
              </p>
              <a
                href="https://drive.google.com/drive/folders/1o07_ZbOWvks-Qf6cuJcSmBZm19nA1aRy?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Buka Google Drive Pengumpulan Praktikum
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
                <span className="text-lg font-bold text-elkpd-2">{answeredCount}/{totalQuestions}</span>
              </div>
              <div className="w-32 bg-elkpd-4 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-sm text-elkpd-1/70">Praktikum Transpor Pasif</div>
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Praktikum Transpor Pasif</h1>
            <p className="text-lg opacity-90">
              {studentData.namaKelompok} - {studentData.kelas} ({studentData.anggota.length} anggota)
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.id} className="bg-white rounded-3xl border-2 border-elkpd-3/50 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white p-6">
                  <h2 className="text-2xl font-bold text-center">{section.title}</h2>
                </div>

                <div className="p-8 space-y-8">
                  <div className="bg-elkpd-5/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-elkpd-1 mb-4">A. Prosedur Percobaan</h3>
                    <ol className="space-y-2">
                      {section.prosedur.map((step, idx) => (
                        <li key={idx} className="text-elkpd-1/80 flex gap-3">
                          <span className="font-semibold min-w-6">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-elkpd-1 mb-4">B. Data Hasil Percobaan</h3>
                    <div>
                      <p className="text-sm text-elkpd-1/70 mb-3">
                        Download template Excel, isi data hasil percobaan, lalu upload screenshot/foto tabel yang sudah terisi:
                      </p>
                      <button
                        onClick={() => downloadExcelTemplate(section.id as 'difusi' | 'osmosis')}
                        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download Template Excel
                      </button>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                    <h3 className="text-xl font-bold text-elkpd-1 mb-4">C. Analisis Data dan Pembahasan</h3>
                    <div className="space-y-6">
                      {section.analisisPembahasan.map((question, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 border border-purple-200">
                          <p className="font-medium text-elkpd-1 mb-3">{idx + 1}. {question}</p>
                          
                          {idx === 0 ? (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Gambar Tabel/Grafik:
                              </label>
                              <ImageUpload
                                questionIdx={`${section.id}_analisis_${idx}`}
                                onImagesChange={(questionIdx, images) => {
                                  setUploadedImages(prev => ({
                                    ...prev,
                                    [section.id]: {
                                      ...prev[section.id],
                                      [`analisis_${idx}`]: images
                                    }
                                  }));
                                  const imageText = Object.values(images).map(img => img.originalName).join(', ');
                                  setSectionAnswer(section.id, 'analisisPembahasan', imageText, idx);
                                }}
                                disabled={submitted}
                              />
                            </div>
                          ) : idx === 5 || idx === 6 ? (
                            <div className="space-y-4">
                              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                              <p className="text-sm text-blue-800 mb-3 font-medium">📁 Upload Poster ke Google Drive:</p>
                              <a
                                href="https://drive.google.com/drive/folders/13Xi7hvh7H0Zea_tKtXC3Scm0UbdawAv4?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                                Buka Google Drive Poster
                              </a>
                              </div>
                              
                              <div className="p-4 bg-white border border-blue-300 rounded-lg">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                  <input
                                    type="checkbox"
                                    checked={!!sectionAnswers[section.id].analisisPembahasan[idx]}
                                    onChange={(e) => {
                                      setSectionAnswer(section.id, 'analisisPembahasan', e.target.checked ? 'Sudah upload ke Google Drive' : '', idx);
                                    }}
                                    disabled={submitted}
                                    className="w-5 h-5 text-elkpd-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-elkpd-2"
                                  />
                                  <span className="text-sm font-medium text-elkpd-1 group-hover:text-elkpd-2 transition-colors">
                                    ✓ Saya sudah upload poster ke Google Drive
                                  </span>
                                </label>
                              </div>
                            </div>
                          ) : (
                            <TextEditor
                              value={sectionAnswers[section.id].analisisPembahasan[idx] || ""}
                              onChange={(content) => setSectionAnswer(section.id, 'analisisPembahasan', content, idx)}
                              placeholder="Tulis jawaban Anda di sini..."
                              height={120}
                              disabled={submitted}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                    <h3 className="text-xl font-bold text-elkpd-1 mb-4">D. Diskusi</h3>
                    <div className="space-y-6">
                      {section.diskusi.map((question, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 border border-orange-200">
                          <p className="font-medium text-elkpd-1 mb-3">{idx + 1}. {question}</p>
                          <TextEditor
                            value={sectionAnswers[section.id].diskusi[idx] || ""}
                            onChange={(content) => setSectionAnswer(section.id, 'diskusi', content, idx)}
                            placeholder="Tulis jawaban Anda di sini..."
                            height={120}
                            disabled={submitted}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                    <h3 className="text-xl font-bold text-elkpd-1 mb-4">E. Kesimpulan</h3>
                    <p className="text-sm text-gray-600 italic mb-3">
                      *Karakteristik: kalimat singkat, tidak menjelaskan data, menjawab rumusan masalah.
                    </p>
                    <TextEditor
                      value={sectionAnswers[section.id].kesimpulan}
                      onChange={(content) => setSectionAnswer(section.id, 'kesimpulan', content)}
                      placeholder="Tulis kesimpulan Anda di sini..."
                      height={120}
                      disabled={submitted}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg">
            <div className="text-center">
              {!submitted ? (
                <div className="space-y-4">
                  <div className="text-lg text-elkpd-1/70">
                    Anda telah menjawab <span className="font-bold text-elkpd-2">{answeredCount}</span> dari <span className="font-bold text-elkpd-2">{totalQuestions}</span> pertanyaan
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={answeredCount < totalQuestions}
                    className={`px-12 py-4 rounded-xl font-semibold transition-all duration-300 text-lg ${
                      answeredCount < totalQuestions 
                        ? "bg-elkpd-3 text-elkpd-1/60 cursor-not-allowed" 
                        : "bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white hover:shadow-xl transform hover:-translate-y-1"
                    }`}
                  >
                    {answeredCount < totalQuestions 
                      ? `Jawab ${totalQuestions - answeredCount} pertanyaan lagi` 
                      : "📝 Selesai & Lihat Hasil"
                    }
                  </button>
                  
                  <div className="text-sm text-elkpd-1/50">
                    Pastikan semua pertanyaan telah dijawab sebelum menyelesaikan praktikum
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-elkpd-2">Praktikum Selesai!</div>
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
