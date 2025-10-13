import Link from "next/link";

export default function PretestPage() {
  const pretestInfo = [
    {
      title: "Tujuan Pretest",
      description: "Mengukur pengetahuan awal sebelum mempelajari materi untuk mengetahui baseline pemahaman.",
      icon: "🎯"
    },
    {
      title: "Format Soal",
      description: "13 soal (10 pilihan ganda + 3 isian) dengan waktu pengerjaan 10 menit untuk menguji pemahaman dasar.",
      icon: "📝"
    },
    {
      title: "Hasil Pretest",
      description: "Dapatkan analisis kemampuan awal dan rekomendasi materi yang perlu dipelajari lebih dalam.",
      icon: "📊"
    },
    {
      title: "Persiapan",
      description: "Tidak perlu belajar khusus, jawab sesuai pengetahuan yang sudah dimiliki.",
      icon: "💡"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-elkpd-3 to-elkpd-2 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pretest</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Uji pengetahuan awal Anda sebelum mempelajari materi untuk mendapatkan pembelajaran yang lebih efektif.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-elkpd-1 mb-6">Mengapa Perlu Pretest?</h2>
              <p className="text-lg text-elkpd-1/70 leading-relaxed mb-6">
                Pretest membantu mengidentifikasi area yang sudah dikuasai dan yang perlu dipelajari lebih lanjut. 
                Dengan mengetahui kemampuan awal, pembelajaran menjadi lebih terarah dan efisien.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elkpd-1 mb-1">Identifikasi Gap Pengetahuan</h4>
                    <p className="text-elkpd-1/70 text-sm">Temukan konsep yang belum dipahami</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elkpd-1 mb-1">Pembelajaran Personal</h4>
                    <p className="text-elkpd-1/70 text-sm">Fokus pada materi yang relevan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elkpd-1 mb-1">Pengukuran Kemajuan</h4>
                    <p className="text-elkpd-1/70 text-sm">Bandingkan dengan hasil post test</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-elkpd-3/50 shadow-lg">
              <h3 className="text-xl font-semibold text-elkpd-1 mb-6 text-center">Informasi Pretest</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-elkpd-5 rounded-lg">
                  <span className="text-elkpd-1 font-medium">Jumlah Soal</span>
                  <span className="text-2xl font-bold text-elkpd-2">13</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-elkpd-5 rounded-lg">
                  <span className="text-elkpd-1 font-medium">Waktu Pengerjaan</span>
                  <span className="text-2xl font-bold text-elkpd-2">10 Menit</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-elkpd-5 rounded-lg">
                  <span className="text-elkpd-1 font-medium">Tipe Soal</span>
                  <span className="text-lg font-semibold text-elkpd-2">10 PG + 3 Isian</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-elkpd-5 rounded-lg">
                  <span className="text-elkpd-1 font-medium">Mata Pelajaran</span>
                  <span className="text-lg font-semibold text-elkpd-2">Biologi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pretestInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-elkpd-1 mb-3">{info.title}</h3>
                <p className="text-elkpd-1/70 text-sm leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-elkpd-4 to-elkpd-3 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-elkpd-1 mb-6">Siap untuk Memulai?</h2>
            <p className="text-lg text-elkpd-1/80 mb-8 max-w-2xl mx-auto">
              Pretest akan tersedia segera. Sementara itu, Anda dapat mempelajari materi terlebih dahulu 
              atau langsung mencoba post test untuk menguji pemahaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link 
                href="/materi" 
                className="px-8 py-4 bg-white text-elkpd-1 font-semibold rounded-xl hover:bg-elkpd-5 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
              >
                Pelajari Materi
              </Link> */}
              <Link 
                href="https://forms.gle/s9QWsGLbVWab7UnD6" 
                className="px-8 py-4 bg-elkpd-2 text-white font-semibold rounded-xl hover:bg-elkpd-1 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Mulai Pretest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-12 text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Pengumpulan Hasil Test</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Untuk post test, hasil test dapat di-download dalam format PDF dan dikumpulkan melalui Google Drive yang telah disediakan.
            </p>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-4">Informasi Pengumpulan:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Download hasil post test (PDF)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Upload ke Google Drive</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Format: PostTest_[Nama]_[Tanggal].pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Deadline sesuai jadwal</span>
                </div>
              </div>
            </div>
            
            <a
              href="https://drive.google.com/drive/folders/1ABC123DEF456GHI789JKL012MNO345PQR678STU901VWX234YZA567BCD890EFG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              📁 Buka Google Drive Pengumpulan
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
} 