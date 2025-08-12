import Link from "next/link";

export default function MateriPage() {
  const materiSections = [
    {
      title: "Struktur dan Fungsi Sel",
      description: "Mempelajari komponen-komponen sel dan peranannya dalam kehidupan organisme.",
      topics: ["Organel sel", "Membran sel", "Nukleus", "Sitoplasma"],
      icon: "🔬"
    },
    {
      title: "Sistem Pencernaan",
      description: "Memahami proses pencernaan makanan dari mulut hingga penyerapan nutrisi.",
      topics: ["Saluran pencernaan", "Enzim pencernaan", "Absorpsi nutrisi", "Metabolisme"],
      icon: "🍽️"
    },
    {
      title: "Sistem Peredaran Darah",
      description: "Mengenal komponen darah dan sistem transportasi dalam tubuh manusia.",
      topics: ["Komponen darah", "Jantung", "Pembuluh darah", "Sistem limfatik"],
      icon: "❤️"
    },
    {
      title: "Genetika dan Pewarisan",
      description: "Mempelajari prinsip-prinsip pewarisan sifat dan variasi genetik.",
      topics: ["DNA dan RNA", "Gen dan alel", "Hukum Mendel", "Mutasi"],
      icon: "🧬"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Materi Pembelajaran</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
            Akses materi pembelajaran yang lengkap dan terstruktur untuk mendukung pemahaman konsep biologi.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-elkpd-1 mb-4 sm:mb-6">Tentang Materi</h2>
              <p className="text-base sm:text-lg text-elkpd-1/70 leading-relaxed mb-4 sm:mb-6">
                Materi pembelajaran disusun berdasarkan kurikulum yang berlaku dan dirancang untuk memudahkan pemahaman konsep-konsep biologi yang kompleks.
              </p>
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-elkpd-3/50 shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-elkpd-1 mb-3 sm:mb-4">Cara Belajar Efektif</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-elkpd-1/70">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Baca materi secara berurutan</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Buat catatan penting</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Latih dengan soal-soal</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Diskusikan dengan teman</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-elkpd-3/50 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-elkpd-1 mb-4 sm:mb-6 text-center">Statistik Pembelajaran</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base text-elkpd-1/70">Materi Tersedia</span>
                  <span className="text-xl sm:text-2xl font-bold text-elkpd-2">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base text-elkpd-1/70">Topik Pembahasan</span>
                  <span className="text-xl sm:text-2xl font-bold text-elkpd-2">16</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base text-elkpd-1/70">Durasi Belajar</span>
                  <span className="text-xl sm:text-2xl font-bold text-elkpd-2">2-3 Jam</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base text-elkpd-1/70">Level Kesulitan</span>
                  <span className="text-xl sm:text-2xl font-bold text-elkpd-2">SMA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {materiSections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{section.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-elkpd-1 mb-2 sm:mb-3">{section.title}</h3>
                <p className="text-sm sm:text-base text-elkpd-1/70 mb-3 sm:mb-4 leading-relaxed">{section.description}</p>
                <div className="space-y-1 sm:space-y-2">
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2 text-xs sm:text-sm text-elkpd-1/70">
                      <span className="w-1.5 h-1.5 bg-elkpd-3 rounded-full"></span>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-elkpd-1 mb-4 sm:mb-6">Siap untuk Menguji Pemahaman?</h2>
          <p className="text-base sm:text-lg text-elkpd-1/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Setelah mempelajari materi, uji pemahaman Anda dengan mengikuti pretest dan post test yang tersedia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              href="/pretest" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-elkpd-3 text-elkpd-1 font-semibold rounded-xl hover:bg-elkpd-2 hover:text-white transition-all duration-300 text-base sm:text-lg shadow-md hover:shadow-lg"
            >
              Mulai Pretest
            </Link>
            <Link 
              href="/post-test" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
            >
              Mulai Post Test
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 sm:w-10 h-8 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Pengumpulan Hasil Test</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
              Setelah menyelesaikan post test, download hasil test dalam format PDF dan upload ke Google Drive yang telah disediakan untuk pengumpulan tugas.
            </p>
            
            <div className="bg-white/10 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-3 sm:mb-4">Cara Pengumpulan:</h3>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-left">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</span>
                  <span>Download hasil test dalam format PDF</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</span>
                  <span>Buka link Google Drive di bawah</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</span>
                  <span>Upload file PDF hasil test ke folder</span>
                </div>
              </div>
            </div>
            
            <a
              href="https://drive.google.com/drive/folders/1ABC123DEF456GHI789JKL012MNO345PQR678STU901VWX234YZA567BCD890EFG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              📁 Buka Google Drive Pengumpulan
            </a>
            
            <div className="mt-6 text-xs sm:text-sm opacity-80">
              <p>Folder: <strong>Post Test Biologi - Semester Genap 2024</strong></p>
              <p>Format file: <strong>PostTest_[Nama]_[Tanggal].pdf</strong></p>
              <p>Jumlah soal: <strong>10 Pilihan Ganda + 3 Soal Isian</strong></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 