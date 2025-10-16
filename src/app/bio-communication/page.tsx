"use client";

import { useState } from "react";
import Link from "next/link";

export default function BioCommunicationPage() {
  const [activeTab, setActiveTab] = useState<'presentation' | 'reflection'>('presentation');

  return (
    <div className="min-h-screen bg-gradient-to-br from-elkpd-5 via-white to-elkpd-4/30">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bio Communication</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Presentasikan hasil praktikum kelompok Anda dan berikan refleksi pembelajaran yang telah dilaksanakan
            </p>
            <p className="text-base opacity-80 mt-2">
              Komunikasikan pemahaman dan pengalaman belajar Anda
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-elkpd-3/30 sticky top-16 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 py-4">
            <button
              onClick={() => setActiveTab('presentation')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'presentation'
                  ? 'bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white shadow-lg'
                  : 'bg-white text-elkpd-1 border-2 border-elkpd-3/50 hover:border-elkpd-2'
              }`}
            >
              📊 Presentation
            </button>
            <button
              onClick={() => setActiveTab('reflection')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'reflection'
                  ? 'bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white shadow-lg'
                  : 'bg-white text-elkpd-1 border-2 border-elkpd-3/50 hover:border-elkpd-2'
              }`}
            >
              💭 Reflection
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Presentation Tab */}
          {activeTab === 'presentation' && (
            <div className="bg-white rounded-3xl shadow-2xl border border-elkpd-3/30 overflow-hidden">
              <div className="bg-gradient-to-r from-elkpd-2/10 to-elkpd-1/10 p-8 md:p-12 border-b border-elkpd-3/30">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-elkpd-1 mb-3">Presentation</h2>
                    <p className="text-lg text-elkpd-1/70 leading-relaxed">
                      Upload hasil poster dan presentasi kelompok Anda tentang praktikum transpor membran yang telah dilakukan
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="space-y-8">
                  {/* Instructions */}
                  <div className="bg-elkpd-5/50 rounded-2xl p-6 border border-elkpd-3/30">
                    <h3 className="text-xl font-bold text-elkpd-1 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📋</span>
                      Panduan Presentation
                    </h3>
                    <div className="space-y-3 text-elkpd-1/70">
                      <div className="flex items-start gap-3">
                        <span className="text-elkpd-2 font-bold flex-shrink-0">1.</span>
                        <p>Buat poster digital atau dokumen presentasi yang berisi hasil praktikum Bio Experiment kelompok Anda</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-elkpd-2 font-bold flex-shrink-0">2.</span>
                        <p>Poster harus mencakup: data percobaan, grafik/tabel hasil, analisis, dan kesimpulan</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-elkpd-2 font-bold flex-shrink-0">3.</span>
                        <p>Format file yang disarankan: PDF, PowerPoint, atau gambar (PNG/JPG)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-elkpd-2 font-bold flex-shrink-0">4.</span>
                        <p>Beri nama file dengan format: <code className="bg-white px-2 py-1 rounded text-sm">Kelompok_Nama_Kelas.pdf</code></p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-elkpd-2 font-bold flex-shrink-0">5.</span>
                        <p>Upload file Anda ke Google Drive yang telah disediakan</p>
                      </div>
                    </div>
                  </div>

                  {/* Upload Section */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Upload Poster Kelompok</h3>
                      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Klik tombol di bawah untuk membuka Google Drive dan upload poster presentasi kelompok Anda
                      </p>
                      
                      <a
                        href="https://drive.google.com/drive/folders/13Xi7hvh7H0Zea_tKtXC3Scm0UbdawAv4?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                        </svg>
                        Buka Google Drive untuk Upload
                      </a>
                      
                      <p className="text-xs text-gray-500 mt-4">
                        Pastikan Anda sudah login dengan akun Google Anda
                      </p>
                    </div>
                  </div>

                  {/* Tips Section */}
                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-bold text-amber-800 mb-2">Tips Membuat Poster yang Baik:</h4>
                        <ul className="text-amber-700 space-y-1 text-sm">
                          <li>• Gunakan judul yang menarik dan informatif</li>
                          <li>• Sertakan visualisasi data (grafik, tabel, diagram)</li>
                          <li>• Jelaskan metodologi percobaan dengan jelas</li>
                          <li>• Tampilkan hasil dan kesimpulan secara ringkas</li>
                          <li>• Gunakan desain yang menarik namun tetap profesional</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reflection Tab */}
          {activeTab === 'reflection' && (
            <div className="bg-white rounded-3xl shadow-2xl border border-elkpd-3/30 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 md:p-12 border-b border-elkpd-3/30">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-elkpd-1 mb-3">Reflection</h2>
                    <p className="text-lg text-elkpd-1/70 leading-relaxed">
                      Berikan umpan balik dan refleksi Anda tentang pengalaman pembelajaran yang telah dilakukan
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="space-y-8">
                  {/* Instructions */}
                  <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-elkpd-1 mb-4 flex items-center gap-2">
                      <span className="text-2xl">💭</span>
                      Panduan Reflection
                    </h3>
                    <div className="space-y-3 text-elkpd-1/70">
                      <p className="mb-4">Refleksi pembelajaran membantu Anda untuk:</p>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                        <p>Mengevaluasi apa yang telah dipelajari selama praktikum</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                        <p>Mengidentifikasi konsep yang sudah dipahami dan yang masih perlu diperdalam</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                        <p>Memberikan umpan balik tentang metode pembelajaran yang digunakan</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                        <p>Berbagi pengalaman dan tantangan yang dihadapi selama pembelajaran</p>
                      </div>
                    </div>
                  </div>

                  {/* Menti.com Embed Section */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Isi Refleksi Pembelajaran</h3>
                      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Berikan refleksi dan umpan balik Anda melalui Mentimeter. Jawab pertanyaan yang disediakan dengan jujur dan thoughtful.
                      </p>
                      
                      <a
                        href="https://www.menti.com/alpv28sv7v9y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Buka Mentimeter untuk Refleksi
                      </a>
                      
                      <p className="text-xs text-gray-500 mt-4">
                        Klik tombol di atas untuk membuka form refleksi di tab baru
                      </p>
                    </div>
                  </div>

                  {/* What to Reflect */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-md">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-elkpd-1 mb-2">Pemahaman Konsep</h4>
                      <p className="text-sm text-elkpd-1/70">
                        Konsep apa yang paling mudah dan sulit dipahami? Apa yang membuat Anda lebih memahami materi?
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-pink-200 shadow-md">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-elkpd-1 mb-2">Pengalaman Belajar</h4>
                      <p className="text-sm text-elkpd-1/70">
                        Bagaimana pengalaman Anda menggunakan E-LKPD? Apa yang paling berkesan dari pembelajaran ini?
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-cyan-200 shadow-md">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-elkpd-1 mb-2">Kerja Kelompok</h4>
                      <p className="text-sm text-elkpd-1/70">
                        Bagaimana dinamika kerja kelompok Anda? Apa yang bisa diperbaiki untuk kolaborasi yang lebih baik?
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-green-200 shadow-md">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-elkpd-1 mb-2">Saran & Masukan</h4>
                      <p className="text-sm text-elkpd-1/70">
                        Apa saran Anda untuk memperbaiki pembelajaran E-LKPD di masa mendatang?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back Button */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-elkpd-1 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

