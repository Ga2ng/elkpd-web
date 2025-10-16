"use client";

import Link from "next/link";

export default function TransporPasifPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-elkpd-5 via-white to-elkpd-4/30 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl border border-elkpd-3/50">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-elkpd-1 mb-4">Bio Experiment</h1>
          <h2 className="text-2xl font-semibold text-elkpd-2 mb-3">Transpor Pasif</h2>
          <p className="text-lg text-elkpd-1/70 leading-relaxed max-w-2xl mx-auto">
            Pilih salah satu topik percobaan transpor pasif yang ingin Anda pelajari
          </p>
        </div>

        {/* Pilihan Percobaan */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Difusi */}
          <Link 
            href="/transpor-pasif/difusi"
            className="group"
          >
            <div className="relative h-full p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl hover:border-purple-400 transition-all duration-300 hover:shadow-xl cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-elkpd-1 mb-3">DIFUSI</h3>
                <p className="text-elkpd-1/70 mb-6 leading-relaxed">
                  Percobaan tentang penyebaran molekul dari konsentrasi tinggi ke rendah menggunakan tinta dan pewarna tekstil
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Mulai Percobaan</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Osmosis */}
          <Link 
            href="/transpor-pasif/osmosis"
            className="group"
          >
            <div className="relative h-full p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl hover:border-blue-400 transition-all duration-300 hover:shadow-xl cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-elkpd-1 mb-3">OSMOSIS</h3>
                <p className="text-elkpd-1/70 mb-6 leading-relaxed">
                  Percobaan tentang perpindahan air melalui membran semipermeabel menggunakan potongan buah dan larutan gula
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Mulai Percobaan</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Info */}
        <div className="bg-elkpd-5/50 rounded-2xl p-6 border border-elkpd-3/30">
          <h3 className="font-semibold text-elkpd-1 mb-3 text-center">Informasi Praktikum</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center">
            <div>
              <div className="font-bold text-elkpd-2 text-lg mb-1">2</div>
              <div className="text-elkpd-1/70">Percobaan</div>
            </div>
            <div>
              <div className="font-bold text-elkpd-2 text-lg mb-1">Kelompok</div>
              <div className="text-elkpd-1/70">4-5 Orang</div>
            </div>
            <div>
              <div className="font-bold text-elkpd-2 text-lg mb-1">Virtual</div>
              <div className="text-elkpd-1/70">Lab Online</div>
            </div>
            <div>
              <div className="font-bold text-elkpd-2 text-lg mb-1">Essay</div>
              <div className="text-elkpd-1/70">Semua Soal</div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-elkpd-1/60 hover:text-elkpd-1 font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
