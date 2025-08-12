import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-elkpd-4/60 border border-elkpd-3 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-elkpd-1">✨ Platform Pembelajaran Interaktif</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-elkpd-1 mb-4 sm:mb-6 leading-tight px-2">
              Selamat Datang di{" "}
              <span className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 bg-clip-text text-transparent">
                ELKPD
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-elkpd-1/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Media evaluasi dan Lembar Kerja Peserta Didik berbasis web yang dirancang untuk membuat pembelajaran lebih menarik dan efektif.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link 
                href="/post-test" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
              >
                Mulai Post Test
              </Link>
              <Link 
                href="/materi" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-elkpd-1 font-semibold rounded-xl border-2 border-elkpd-3 hover:bg-elkpd-4/50 transition-all duration-300 text-base sm:text-lg"
              >
                Pelajari Materi
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-elkpd-3/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-elkpd-4/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-elkpd-1 mb-3 sm:mb-4">Fitur Utama</h2>
            <p className="text-base sm:text-lg text-elkpd-1/70 max-w-2xl mx-auto px-4">
              Platform yang dirancang khusus untuk mendukung proses pembelajaran yang efektif dan menyenangkan.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-elkpd-3 to-elkpd-2 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-elkpd-1 mb-2 sm:mb-3">Materi Pembelajaran</h3>
              <p className="text-sm sm:text-base text-elkpd-1/70 leading-relaxed">
                Akses materi pembelajaran yang lengkap dan terstruktur untuk mendukung pemahaman konsep.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-elkpd-1 mb-2 sm:mb-3">Evaluasi Interaktif</h3>
              <p className="text-sm sm:text-base text-elkpd-1/70 leading-relaxed">
                Sistem evaluasi yang interaktif dengan timer dan feedback langsung untuk mengukur pemahaman.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-elkpd-4 to-elkpd-3 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-elkpd-1 mb-2 sm:mb-3">Laporan Real-time</h3>
              <p className="text-sm sm:text-base text-elkpd-1/70 leading-relaxed">
                Dapatkan laporan performa pembelajaran secara real-time untuk monitoring kemajuan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Siap untuk Memulai?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
              Bergabunglah dengan ribuan siswa yang telah menggunakan ELKPD untuk pembelajaran yang lebih efektif.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link 
                href="/post-test" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-elkpd-1 font-semibold rounded-xl hover:bg-elkpd-5 transition-colors duration-300 text-base sm:text-lg"
              >
                Mulai Sekarang
              </Link>
              <Link 
                href="/materi" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-elkpd-1 transition-all duration-300 text-base sm:text-lg"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
