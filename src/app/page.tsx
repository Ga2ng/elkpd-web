'use client'
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* Modern Document Cover Style Header */}
      <section className="relative bg-gradient-to-br from-white via-gray-50/30 to-elkpd-5/20 min-h-screen overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,183,77,0.04),transparent_50%)] pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20">
          
          {/* Header with Logos - Refined Layout */}
          <div className="flex flex-col lg:flex-row items-start justify-between mb-20">
            
            {/* Title Section - Enhanced Typography */}
            <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="text-sm font-medium text-elkpd-1/60 tracking-wider uppercase mb-2 block">
                    E-Learning Document
                  </span>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-elkpd-1 leading-tight">
                    E-LKPD Berbasis Web<br />
                    <span className="text-elkpd-2">Interaktif</span>
                  </h1>
                  
                  <div className="space-y-3 text-lg lg:text-xl text-elkpd-1/80 max-w-2xl">
                    <p className="font-medium">Pendekatan Pembelajaran Mendalam</p>
                    <p className="text-elkpd-2 font-semibold">Sub Materi Transpor Membran</p>
                    <p className="text-base text-elkpd-1/70">
                      Untuk Melatih Keterampilan Berpikir Kreatif Peserta Didik Fase F
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logos Section - Minimalist Cards */}
            <div className="flex items-center gap-6 lg:gap-8">
              <div className="group">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 relative">
                    <Image
                      src="/images/1.png"
                      alt="Logo Kemendikbud"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 relative">
                    <Image
                      src="/images/2.png"
                      alt="Logo Kemendikbud"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 relative">
                    <Image
                      src="/images/3.png"
                      alt="Logo Kemendikbud"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
                
              </div>
            </div>

            {/* Visual Content Section - Modern Grid */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Images Section */}
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <div className="aspect-square relative overflow-hidden rounded-3xl shadow-xl border-2 border-white group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/gambar3.png"
                      alt="Gambar Materi 1"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elkpd-1/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="group mt-8">
                  <div className="aspect-square relative overflow-hidden rounded-3xl shadow-xl border-2 border-white group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/gambar1.png"
                      alt="Gambar Materi 2"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elkpd-2/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Class Info & CTA */}
              <div className="text-center lg:text-left space-y-12">
                <div>
                  <div className="inline-block mb-6">
                    <span className="text-sm font-medium text-elkpd-1/60 tracking-wider uppercase mb-3 block">
                      Target Pembelajaran
                    </span>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full mx-auto lg:mx-0"></div>
                  </div>
                  <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-elkpd-1 to-elkpd-2 mb-4">
                    KELAS XI
                  </h2>
                </div>

                {/* Action Buttons - Modern Style */}
                <div className="space-y-4">
                  <Link 
                    href="/transpor-aktif" 
                    className="group block w-full lg:w-auto"
                  >
                    <div className="relative px-8 py-4 bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white font-semibold rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <div className="relative flex items-center justify-center gap-3">
                        <span className="text-lg">Transpor Aktif</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/transpor-pasif" 
                    className="group block w-full lg:w-auto"
                  >
                    <div className="px-8 py-4 bg-white/80 backdrop-blur-sm text-elkpd-1 font-semibold rounded-2xl border-2 border-elkpd-3/30 hover:border-elkpd-3 hover:bg-white transition-all duration-300 group-hover:shadow-lg">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-lg">Transpor Pasif</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Author Information - Clean Layout */}
          <div className="border-t border-gray-200/50 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="space-y-2">
                <span className="text-sm font-medium text-elkpd-1/60 tracking-wider uppercase">
                  Disusun Oleh
                </span>
                <p className="text-lg font-semibold text-elkpd-1">
                  Anin Dita Yuhan Prabandari
                </p>
                <p className="text-base text-elkpd-1/70">
                  Prof. Dr. Yuni Sri Rahayu
                </p>
              </div>
              
              <div className="space-y-2 text-left lg:text-right">
                <span className="text-sm font-medium text-elkpd-1/60 tracking-wider uppercase">
                  Tahun Penyusunan
                </span>
                <p className="text-2xl font-bold text-elkpd-2">
                  2025/2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
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
      </section> */}

      {/* <section className="py-16 sm:py-20">
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
      </section> */}
      
    {/* Prakata Section - Simple & Elegant */}
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-elkpd-1 mb-4">PRAKATA</h2>
          <div className="w-16 h-0.5 bg-elkpd-2 mx-auto"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
          
          {/* First Paragraph - Always Visible */}
          <div className="mb-8">
            <p className="text-lg text-gray-800 leading-relaxed text-justify">
              Puji syukur saya panjatkan ke hadirat Tuhan Yang Maha Esa, karena hanya dengan rahmat dan karunia-Nya penyusunan E-LKPD berbasis web interaktif dengan pendekatan Pembelajaran mendalam pada submateri Transport Membran kelas XI SMA ini dapat terselesaikan dengan baik. Kehadiran E-LKPD ini merupakan salah satu upaya untuk menghadirkan inovasi dalam pembelajaran Biologi.
            </p>
          </div>

          {/* Expandable Content */}
          <div id="expandable-content" className="hidden">
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
              <p className="text-justify">
                Penyusunan E-LKPD ini dilatarbelakangi oleh kebutuhan akan media pembelajaran yang lebih interaktif serta mampu mendorong peserta didik untuk berpikir kreatif. Submateri Transport Membran dipilih karena merupakan salah satu materi yang penting namun sering dianggap abstrak dan sulit dipahami. Dengan adanya E-LKPD berbasis web, peserta didik diharapkan dapat lebih mudah memahami konsep-konsep dasar Biologi melalui aktivitas belajar yang tidak hanya membaca dan mencatat, tetapi juga mengeksplorasi, menganalisis, serta berlatih memecahkan masalah. Pendekatan Pembelajaran mendalam yang digunakan bertujuan untuk menumbuhkan pengalaman belajar yang lebih mendalam, sehingga pembelajaran tidak berhenti pada hafalan, melainkan sampai pada kemampuan mengaitkan konsep dan menemukan solusi secara kreatif.
              </p>
              
              <p className="text-justify">
                Penyusun menyadari bahwa keberhasilan penyusunan E-LKPD ini tidak terlepas dari bantuan berbagai pihak. Oleh karena itu, dengan segala kerendahan hati, saya menyampaikan terima kasih yang sebesar-besarnya kepada dosen pembimbing, rekan-rekan mahasiswa, serta pihak sekolah yang telah memberikan masukan, dukungan, dan kesempatan dalam pengembangan E-LKPD ini. Semoga kerjasama dan dukungan yang telah diberikan menjadi amal baik dan mendapat balasan yang setimpal.
              </p>
              
              <p className="text-justify">
                Meskipun E-LKPD ini telah disusun dengan sebaik-baiknya, saya menyadari masih banyak keterbatasan dan kekurangan. Oleh karena itu, kritik dan saran yang membangun sangat diharapkan demi penyempurnaan karya ini pada masa mendatang. Besar harapan saya, E-LKPD ini dapat memberikan manfaat nyata, baik bagi pendidik sebagai sumber bahan ajar inovatif maupun bagi peserta didik sebagai sarana belajar yang menyenangkan dan bermakna. Akhir kata, semoga E-LKPD ini dapat menjadi salah satu kontribusi kecil dalam upaya peningkatan kualitas pembelajaran Biologi di sekolah, khususnya pada era digital yang terus berkembang.
              </p>
            </div>

            {/* Author Signature */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-600">Surabaya, 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-elkpd-1 mb-8">Penyusun,</p>
                  <p className="font-semibold text-elkpd-1">Anin Dita Yuhan Prabandari</p>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => {
                const content = document.getElementById('expandable-content');
                const button = document.getElementById('toggle-button');
                const icon = document.getElementById('toggle-icon');
                
                if (content && button && icon) {
                  const isHidden = content.classList.contains('hidden');
                  
                  if (isHidden) {
                    content.classList.remove('hidden');
                    content.style.animation = 'fadeIn 0.3s ease-in-out';
                    button.textContent = 'Tutup';
                    icon.style.transform = 'rotate(180deg)';
                  } else {
                    content.classList.add('hidden');
                    button.textContent = 'Lihat Selengkapnya';
                    icon.style.transform = 'rotate(0deg)';
                  }
                }
              }}
              className="group inline-flex items-center gap-2 text-elkpd-2 hover:text-elkpd-1 font-medium transition-colors duration-200"
            >
              <span id="toggle-button">Lihat Selengkapnya</span>
              <svg
                id="toggle-icon"
                className="w-4 h-4 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>

      {/* <section className="py-16 sm:py-20 bg-white/60">
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
      </section> */}

      {/* Tujuan Pembelajaran Section */}
      <section id="tujuan-pembelajaran" className="py-16 sm:py-20 bg-gradient-to-br from-white via-elkpd-5/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-elkpd-1 mb-4">Tujuan Pembelajaran</h2>
            <p className="text-lg text-elkpd-1/70 max-w-3xl mx-auto">
              Capaian pembelajaran yang akan Anda kuasai melalui E-LKPD Transpor Membran
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Tujuan 1 */}
            <div className="group relative bg-white rounded-2xl p-6 border-2 border-elkpd-3/30 hover:border-elkpd-2 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-elkpd-3 to-elkpd-2 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-elkpd-1/70 leading-relaxed">
                    Peserta didik dapat menganalisis perbedaan mekanisme <span className="font-semibold text-elkpd-2">Transpor Aktif</span> dan <span className="font-semibold text-elkpd-2">Transpor Pasif</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Tujuan 2 */}
            <div className="group relative bg-white rounded-2xl p-6 border-2 border-elkpd-3/30 hover:border-elkpd-2 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-elkpd-3 to-elkpd-2 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-elkpd-1/70 leading-relaxed">
                    Peserta didik dapat mengevaluasi faktor-faktor yang memengaruhi transpor membran dalam berbagai kondisi (misal: <span className="font-semibold text-elkpd-2">suhu, konsentrasi, tekanan</span>).
                  </p>
                </div>
              </div>
            </div>

            {/* Tujuan 3 */}
            <div className="group relative bg-white rounded-2xl p-6 border-2 border-elkpd-3/30 hover:border-elkpd-2 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-elkpd-3 to-elkpd-2 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-elkpd-1/70 leading-relaxed">
                    Peserta didik dapat menciptakan representasi visual (<span className="font-semibold text-elkpd-2">mind map/poster/model</span>) yang menjelaskan konsep transpor membran secara inovatif.
                  </p>
                </div>
              </div>
            </div>

            {/* Tujuan 4 */}
            <div className="group relative bg-white rounded-2xl p-6 border-2 border-elkpd-3/30 hover:border-elkpd-2 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-elkpd-3 to-elkpd-2 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="flex-1">
                  <p className="text-elkpd-1/70 leading-relaxed">
                    Peserta didik dapat mengaitkan konsep transpor membran dengan fenomena nyata dari <span className="font-semibold text-elkpd-2">hasil percobaan yang telah dilakukan</span> dan menghasilkan solusi kreatif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Petunjuk Penggunaan Section */}
       <section id="petunjuk-penggunaan" className="py-20 bg-gradient-to-br from-elkpd-5/30 via-white to-elkpd-4/20 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(57,86,36,0.03),transparent_50%)] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(79,125,44,0.02),transparent_50%)] pointer-events-none"></div>
         
         <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
           {/* Header */}
           <div className="text-center mb-16">
             {/* <div className="inline-block mb-6">
               <span className="text-sm font-medium text-elkpd-1/60 tracking-wider uppercase mb-3 block">
                 Panduan Lengkap
               </span>
               <div className="w-16 h-0.5 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full mx-auto"></div>
             </div> */}
             <h2 className="text-4xl lg:text-5xl font-bold text-elkpd-1 mb-4">
               Petunjuk Penggunaan
             </h2>
             <p className="text-lg text-elkpd-1/70 max-w-3xl mx-auto">
               Ikuti langkah-langkah berikut untuk memaksimalkan pengalaman belajar Anda dengan E-LKPD
             </p>
           </div>

           {/* Content Card */}
           <div className="max-w-4xl mx-auto bg-white backdrop-blur-sm rounded-3xl shadow-2xl border border-elkpd-3/20 overflow-hidden">
             <div className="p-8 lg:p-12">
               {/* Steps List - One Point Per Row */}
               <div className="space-y-4">
                 {/* Step 1 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       1
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Pastikan perangkat terhubung internet, lalu buka alamat web E-LKPD.
                     </p>
                   </div>
                 </div>

                 {/* Step 2 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       2
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Sebelum memulai aktivitas pastikan sudah mengerjakan Pre-Test terlebih dahulu.
                     </p>
                   </div>
                 </div>

                 {/* Step 3 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       3
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Bacalah petunjuk umum penggunaan website dan pahami tujuan pembelajaran.
                     </p>
                   </div>
                 </div>

                 {/* Step 4 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       4
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Bentuklah kelompok dengan 1 kelompok beranggotakan 4-5 orang.
                     </p>
                   </div>
                 </div>

                 {/* Step 5 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       5
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Untuk mengingat materi Transpor Membran yang sudah dipelajari, lihatlah pada Bio Info untuk mereview/mengingat kembali mengenai materi Transpor Membran lalu kerjakan tugas yang terdapat di Bio Info secara berkelompok.
                     </p>
                   </div>
                 </div>

                 {/* Step 6 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       6
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       E-LKPD ini berbasis Web dengan pendekatan mendalam yang dirancang untuk melatihkan keterampilan berpikir kreatif Peserta Didik.
                     </p>
                   </div>
                 </div>

                 {/* Step 7 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       7
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Konten yang terdapat dalam E-LKPD adalah berupa materi, video, gambar, PhET simulasi virtual lab, langkah-langkah kegiatan peserta didik, pertanyaan dan kesimpulan.
                     </p>
                   </div>
                 </div>

                 {/* Step 8 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       8
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Bacalah terlebih dahulu mengenai permasalahan yang ada. Kemudian pahami Bio Info dengan membaca dengan seksama dan teliti.
                     </p>
                   </div>
                 </div>

                 {/* Step 9 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       9
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Kerjakan E-LKPD secara berkelompok sesuai dengan topik yang telah dipilih yaitu Transpor Aktif dan Transpor Pasif.
                     </p>
                   </div>
                 </div>

                 {/* Step 10 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       10
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Diskusikanlah dengan anggota kelompok kalian untuk melakukan percobaan dan jawablah pertanyaan-pertanyaan yang ada dalam E-LKPD berbasis web.
                     </p>
                   </div>
                 </div>

                 {/* Step 11 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       11
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Tanyakan mintalah bimbingan guru jika mengalami kesulitan dalam mengerjakan E-LKPD.
                     </p>
                   </div>
                 </div>

                 {/* Step 12 */}
                 <div className="group">
                   <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-elkpd-5/50 to-elkpd-4/30 border border-elkpd-3/20 hover:shadow-lg transition-all duration-300">
                     <div className="w-10 h-10 bg-gradient-to-r from-elkpd-2 to-elkpd-1 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                       12
                     </div>
                     <p className="text-elkpd-1 font-medium leading-relaxed">
                       Gunakan buku ajar sebagai sumber informasi tambahan untuk menjawab pertanyaan.
                     </p>
                   </div>
                 </div>
               </div>

               {/* Call to Action */}
               {/* <div className="mt-12 pt-8 border-t border-elkpd-3/20">
                 <div className="text-center">
                   <h3 className="text-xl font-semibold text-elkpd-1 mb-4">Siap Memulai Perjalanan Belajar?</h3>
                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link 
                       href="/materi" 
                       className="px-8 py-3 bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                     >
                       Mulai Pelajari Materi
                     </Link>
                     <Link 
                       href="/post-test" 
                       className="px-8 py-3 bg-white text-elkpd-1 font-semibold rounded-xl border-2 border-elkpd-3 hover:bg-elkpd-4/50 transition-all duration-300"
                     >
                       Langsung Test
                     </Link>
                   </div>
                 </div>
               </div> */}
             </div>
           </div>
         </div>
       </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-elkpd-1 mb-4">Fitur-Fitur E-LKPD</h2>
            <p className="text-lg text-elkpd-1/70 max-w-3xl mx-auto leading-relaxed">
              E-LKPD dilengkapi dengan berbagai fitur interaktif yang dirancang untuk meningkatkan pemahaman 
              materi transpor membran melalui pendekatan pembelajaran yang sistematis dan menyenangkan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded-xl bg-[#2a712c]">
                <img 
                  src="/images/Bio Info.png" 
                  alt="Bio Info" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-elkpd-1 mb-3 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                Bio Info
              </h3>
              <p className="text-elkpd-1/70 leading-relaxed">
                Bio Info merupakan fitur yang menyajikan materi transpor membran secara umum untuk mendorong peserta didik agar bisa mereview dan mengingat kembali mengenai materi transpor membran sebelum mereka mengerjakan kegiatan selanjutnya. <span className="text-elkpd-2 font-medium">(Berkesadaran & Fluency)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded-xl bg-[#2a712c]">
                <img 
                  src="/images/Bio Mapping.png" 
                  alt="Bio Mapping" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-elkpd-1 mb-3 flex items-center gap-2">
                <span className="text-2xl">🗺️</span>
                Bio Mapping
              </h3>
              <p className="text-elkpd-1/70 leading-relaxed">
                Bio Mapping merupakan fitur yang menampung hasil pemahaman peserta didik mengenai konsep transpor membran yang disajikan dalam bentuk Mind Mapping agar menyelaraskan konsep. <span className="text-elkpd-2 font-medium">(Bermakna & Fluency)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded-xl bg-[#2a712c]">
                <img 
                  src="/images/Bio Task.png" 
                  alt="Bio Task" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-elkpd-1 mb-3 flex items-center gap-2">
                <span className="text-2xl">📝</span>
                Bio Task
              </h3>
              <p className="text-elkpd-1/70 leading-relaxed">
                Bio Task merupakan fitur yang menyajikan Artikel untuk peserta didik mengenai transpor membran dan peserta didik dapat memberikan contoh yang ada di kehidupan sehari-hari tetapi tidak sama. <span className="text-elkpd-2 font-medium">(Bermakna & Flexibility)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded-xl bg-[#2a712c]">
                <img 
                  src="/images/Bio Experiment.png" 
                  alt="Bio Experiment" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-elkpd-1 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔬</span>
                Bio Experiment
              </h3>
              <p className="text-elkpd-1/70 leading-relaxed">
                Bio Experiment merupakan fitur yang berupa aktivitas atau rancangan percobaan mengenai topik yang mereka dapatkan yaitu Transpor Pasif antara Difusi dan Osmosis untuk mendapatkan suatu data. <span className="text-elkpd-2 font-medium">(Menggembirakan, Elaboration & Fluency)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded-xl bg-[#2a712c]">
                <img 
                  src="/images/Bio Communication.png" 
                  alt="Bio Communication" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-elkpd-1 mb-3 flex items-center gap-2">
                <span className="text-2xl">💬</span>
                Bio Communication
              </h3>
              <p className="text-elkpd-1/70 leading-relaxed">
                Bio Communication merupakan fitur yang menampung hasil/data yang sudah diperoleh peserta didik dalam Bio Experiment yang berupa Poster dan nantinya akan dipresentasikan oleh semua kelompok. Juga akan merefleksikan pembelajaran yang telah dilaksanakan untuk melihat umpan balik peserta didik selama pembelajaran berlangsung. <span className="text-elkpd-2 font-medium">(Berkesadaran & Menggembirakan, Originality)</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 overflow-hidden rounded-xl bg-[#2a712c]">
                <img 
                  src="/images/Bio Quiz.png" 
                  alt="Bio Quiz" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-elkpd-1 mb-3 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                Bio Quiz
              </h3>
              <p className="text-elkpd-1/70 leading-relaxed">
                Bio Quiz merupakan fitur yang berupa soal-soal yang akan dikerjakan oleh peserta didik untuk mengecek tingkat kefahaman sementara peserta didik mengenai Transpor Membran. <span className="text-elkpd-2 font-medium">(Bermakna, Flexibility & Elaboration)</span>
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-elkpd-4 to-elkpd-3 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-elkpd-1 mb-3">Pembelajaran Interaktif & Terstruktur</h3>
              <p className="text-elkpd-1/80 mb-6 leading-relaxed">
                Dengan fitur-fitur yang saling terintegrasi, peserta didik dapat belajar secara sistematis 
                dari pemahaman konsep hingga aplikasi dalam praktikum dan evaluasi.
              </p>
              <Link 
                href="/materi" 
                className="inline-block px-8 py-3 bg-elkpd-2 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Jelajahi Materi Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
