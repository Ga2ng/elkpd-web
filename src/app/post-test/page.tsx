import Link from "next/link";

export default function PostTestPage() {
  const postTestInfo = [
    {
      title: "Tujuan Post Test",
      description: "Mengukur pemahaman setelah mempelajari materi untuk mengetahui peningkatan pemahaman.",
      icon: "🎯"
    },
    {
      title: "Format Soal",
      description: "13 soal (10 pilihan ganda + 3 isian) dengan waktu pengerjaan 10 menit untuk menguji pemahaman akhir.",
      icon: "📝"
    },
    {
      title: "Hasil Post Test",
      description: "Dapatkan analisis kemampuan akhir dan bandingkan dengan hasil pretest untuk melihat peningkatan.",
      icon: "📊"
    },
    {
      title: "Persiapan",
      description: "Pastikan sudah mempelajari semua materi yang telah disediakan sebelum mengerjakan post test.",
      icon: "💡"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-elkpd-3 to-elkpd-2 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Post Test</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Uji pemahaman akhir Anda setelah mempelajari materi untuk mengukur peningkatan pengetahuan.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-elkpd-1 mb-6">Mengapa Perlu Post Test?</h2>
              <p className="text-lg text-elkpd-1/70 leading-relaxed mb-6">
                Post test membantu mengukur seberapa besar peningkatan pemahaman setelah mempelajari materi. 
                Dengan membandingkan hasil pretest dan post test, Anda dapat mengetahui efektivitas pembelajaran.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elkpd-1 mb-1">Ukur Pemahaman Akhir</h4>
                    <p className="text-elkpd-1/70 text-sm">Evaluasi seberapa baik materi dikuasai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elkpd-1 mb-1">Bandingkan Kemajuan</h4>
                    <p className="text-elkpd-1/70 text-sm">Lihat peningkatan dari pretest ke post test</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elkpd-1 mb-1">Identifikasi Area Lemah</h4>
                    <p className="text-elkpd-1/70 text-sm">Temukan materi yang perlu dipelajari ulang</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-elkpd-3/50 shadow-lg">
              <h3 className="text-xl font-semibold text-elkpd-1 mb-6 text-center">Informasi Post Test</h3>
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
            {postTestInfo.map((info, index) => (
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
              Pastikan Anda sudah mempelajari semua materi sebelum mengerjakan post test. 
              Hasil post test akan menunjukkan seberapa besar peningkatan pemahaman Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://forms.gle/sx6iEAYaNYo5MJj2A" 
                className="px-8 py-4 bg-elkpd-2 text-white font-semibold rounded-xl hover:bg-elkpd-1 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Mulai Post Test
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
