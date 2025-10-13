'use client'
import Link from "next/link";
import { useState } from "react";

export default function MateriPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeTab, setActiveTab] = useState("pasif");

  const transportPasif = [
    {
      title: "Difusi Sederhana",
      icon: "🔄",
      description: "Gerakan molekul dari konsentrasi tinggi ke rendah sampai mencapai keseimbangan",
      factors: [
        "Ukuran partikel - semakin kecil, semakin cepat",
        "Ketebalan membran - semakin tebal, semakin lambat",
        "Luas area - semakin besar, semakin cepat",
        "Suhu - semakin tinggi, semakin cepat",
        "Jarak - semakin jauh, semakin lambat",
        "Perbedaan konsentrasi - semakin besar, semakin cepat"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Osmosis",
      icon: "💧",
      description: "Perpindahan air/pelarut dari konsentrasi tinggi ke konsentrasi rendah",
      conditions: [
        {
          name: "ISOTONIS",
          desc: "Konsentrasi larutan luar = dalam sel (Seimbang)",
          emoji: "⚖️"
        },
        {
          name: "HIPOTONIS",
          desc: "Konsentrasi larutan lebih tinggi (Cair)",
          emoji: "💦"
        },
        {
          name: "HIPERTONIS",
          desc: "Konsentrasi larutan lebih rendah (Pekat)",
          emoji: "🧂"
        }
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Difusi Terfasilitasi",
      icon: "🚪",
      description: "Perpindahan molekul dengan bantuan protein membran",
      proteins: [
        {
          type: "Protein Channel",
          examples: ["Aquaporin - saluran terbuka untuk air", "Saluran dengan pintu - terbuka dengan stimulus listrik"]
        },
        {
          type: "Protein Carrier",
          examples: ["Glukosa transporter - mengubah bentuk untuk transpor spesifik"]
        }
      ],
      color: "from-teal-500 to-green-500"
    }
  ];

  const tujuanTranspor = [
    { icon: "🍬", text: "Memasukkan gula, asam amino, dan nutrien" },
    { icon: "💨", text: "Memasukkan O₂ dan mengeluarkan CO₂" },
    { icon: "⚡", text: "Mengatur ion Na⁺, K⁺, Ca⁺, Cl⁻" },
    { icon: "🗑️", text: "Membuang sisa metabolisme beracun" },
    { icon: "🧪", text: "Menjaga kestabilan pH" },
    { icon: "🔬", text: "Menjaga konsentrasi untuk kerja enzim" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-elkpd-1 via-elkpd-2 to-blue-600 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            📚 Materi Pembelajaran Biologi
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Mekanisme Transpor<br/>Membran Sel
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
            Pelajari bagaimana molekul dan ion berpindah melalui membran plasma dengan berbagai mekanisme transpor
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <a
              href="/pdf/materi.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-elkpd-1 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Materi
            </a> */}
            <button
              onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Mulai Belajar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Pengenalan */}
      <section id="content" className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-elkpd-3/20 rounded-full text-sm font-semibold text-elkpd-1">
                💡 Konsep Dasar
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-elkpd-1 mb-6">Apa itu Transpor Membran?</h2>
              <div className="space-y-4 text-elkpd-1/80 text-lg leading-relaxed">
                <p>
                  <strong className="text-elkpd-1">Transpor membran</strong> adalah perpindahan molekul ke dalam atau keluar sel melalui membran plasma.
                </p>
                <p>
                  Membran plasma bersifat <strong className="text-elkpd-2">semipermeabel</strong>, artinya hanya molekul tertentu yang bisa melewatinya.
                </p>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-elkpd-2">
                  <h3 className="font-bold text-elkpd-1 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Fungsi Utama
                  </h3>
                  <p className="text-base">
                    Tempat keluar masuknya ion, molekul, serta senyawa dari atau ke dalam sel dengan menggunakan proses tertentu.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-elkpd-2 to-blue-600 rounded-3xl p-8 shadow-2xl text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Tujuan Transpor Membran</h3>
                <div className="grid grid-cols-2 gap-4">
                  {tujuanTranspor.map((item, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-sm leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jenis Transpor - Tab System */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-elkpd-1 mb-4">Jenis-Jenis Transpor</h2>
            <p className="text-lg text-elkpd-1/70 max-w-2xl mx-auto">
              Berdasarkan penggunaan energi, transpor membran dibagi menjadi dua kategori
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab("pasif")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "pasif"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                    : "text-elkpd-1/70 hover:text-elkpd-1"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-2xl">🌊</span>
                  Transpor Pasif
                </span>
              </button>
              <button
                onClick={() => setActiveTab("aktif")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "aktif"
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "text-elkpd-1/70 hover:text-elkpd-1"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Transpor Aktif
                </span>
              </button>
            </div>
          </div>

          {/* Transpor Pasif Content */}
          {activeTab === "pasif" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-elkpd-1 mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">🌊</span>
                  Transpor Pasif
                </h3>
                <p className="text-lg text-elkpd-1/80 mb-2">
                  <strong>Tidak memerlukan energi (ATP)</strong> - Molekul bergerak mengikuti gradien konsentrasi (dari tinggi ke rendah)
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {transportPasif.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
                  >
                    <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                      <div className="text-5xl mb-3">{item.icon}</div>
                      <h4 className="text-2xl font-bold">{item.title}</h4>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-elkpd-1/80 mb-4 leading-relaxed">{item.description}</p>
                      
                      {item.factors && (
                        <div className="space-y-2">
                          <p className="font-semibold text-elkpd-1 mb-3">Faktor yang Mempengaruhi:</p>
                          {item.factors.map((factor, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-elkpd-1/70 bg-blue-50 rounded-lg p-2">
                              <span className="text-blue-500 mt-0.5">▸</span>
                              <span>{factor}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.conditions && (
                        <div className="space-y-3">
                          <p className="font-semibold text-elkpd-1 mb-3">Kondisi Osmosis:</p>
                          {item.conditions.map((cond, i) => (
                            <div key={i} className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">{cond.emoji}</span>
                                <span className="font-bold text-elkpd-1">{cond.name}</span>
                              </div>
                              <p className="text-sm text-elkpd-1/70">{cond.desc}</p>
                            </div>
                          ))}
                          <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200 mt-4">
                            <p className="text-sm text-elkpd-1">
                              <strong>💡 Tekanan Osmotik:</strong> Kekuatan yang disebabkan air yang bergerak ke semua arah
                            </p>
                          </div>
                        </div>
                      )}

                      {item.proteins && (
                        <div className="space-y-3">
                          <p className="font-semibold text-elkpd-1 mb-3">Jenis Protein:</p>
                          {item.proteins.map((protein, i) => (
                            <div key={i} className="bg-green-50 rounded-xl p-4 border border-green-200">
                              <h5 className="font-bold text-elkpd-1 mb-2">{protein.type}</h5>
                              {protein.examples.map((ex, j) => (
                                <div key={j} className="flex items-start gap-2 text-sm text-elkpd-1/70 ml-2">
                                  <span className="text-green-500 mt-1">•</span>
                                  <span>{ex}</span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transpor Aktif Content */}
          {activeTab === "aktif" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-elkpd-1 mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl">⚡</span>
                  Transpor Aktif
                </h3>
                <p className="text-lg text-elkpd-1/80 mb-4">
                  <strong>Memerlukan energi (ATP)</strong> - Molekul bergerak melawan gradien konsentrasi (dari rendah ke tinggi)
                </p>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <p className="text-elkpd-1">
                    Protein dan pengeluaran energi diperlukan untuk transpor molekul melawan gradien konsentrasi. Energi berasal dari pemecahan molekul ATP.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl">
                      ⚡
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-elkpd-1">Molekul ATP</h4>
                      <p className="text-sm text-elkpd-1/70">Sumber Energi Utama</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
                      <p className="text-elkpd-1">
                        <strong>ATP</strong> = Molekul pembawa energi kimia yang paling banyak ditemukan dalam sel
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border-l-4 border-red-500">
                      <p className="text-elkpd-1 font-semibold mb-2">⚠️ Prinsip Penting:</p>
                      <p className="text-elkpd-1/80">
                        Jika 1 fosfat lepas → membebaskan 1 energi<br/>
                        <strong className="text-red-600">Pemecahan ATP = Pembebasan Energi</strong>
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 mt-4">
                      <p className="text-sm text-elkpd-1">
                        💡 Energi dari ATP digunakan oleh protein carrier untuk mengubah bentuk dan memindahkan substansi ke sisi lain membran.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl">
                      🔄
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-elkpd-1">Pompa Na⁺ K⁺</h4>
                      <p className="text-sm text-elkpd-1/70">Protein Carrier Khusus</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                      <p className="font-semibold text-elkpd-1 mb-2">Fungsi Utama:</p>
                      <p className="text-elkpd-1/80">Mempertahankan konsentrasi ion Na⁺ dan K⁺ di dalam dan luar sel</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">📤</div>
                        <p className="font-bold text-elkpd-1 mb-1">Na⁺</p>
                        <p className="text-sm text-elkpd-1/80">Lebih banyak di LUAR sel</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">📥</div>
                        <p className="font-bold text-elkpd-1 mb-1">K⁺</p>
                        <p className="text-sm text-elkpd-1/80">Lebih banyak di DALAM sel</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border-2 border-indigo-200">
                      <p className="font-semibold text-elkpd-1 mb-2">🎯 Cara Kerja:</p>
                      <ul className="space-y-2 text-sm text-elkpd-1/80">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500">→</span>
                          <span>Bekerja melawan gradien konsentrasi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500">→</span>
                          <span>Memompa Na⁺ keluar sel (ke konsentrasi tinggi)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-500">→</span>
                          <span>Memompa K⁺ masuk sel (ke konsentrasi tinggi)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Summary Comparison */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-elkpd-1 mb-4">Perbandingan Transpor</h2>
            <p className="text-lg text-elkpd-1/70">Perbedaan utama antara transpor pasif dan transpor aktif</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-6xl mb-4">🌊</div>
              <h3 className="text-3xl font-bold mb-4">Transpor Pasif</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                  <span className="text-2xl">❌</span>
                  <span>Tidak butuh energi ATP</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                  <span className="text-2xl">📉</span>
                  <span>Mengikuti gradien konsentrasi</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                  <span className="text-2xl">🔄</span>
                  <span>Difusi, Osmosis, Difusi Terfasilitasi</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-3xl font-bold mb-4">Transpor Aktif</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                  <span className="text-2xl">✅</span>
                  <span>Membutuhkan energi ATP</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                  <span className="text-2xl">📈</span>
                  <span>Melawan gradien konsentrasi</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                  <span className="text-2xl">🔄</span>
                  <span>Pompa Na⁺ K⁺, Endositosis, Eksositosis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
}