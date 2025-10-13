export default function BioMappingPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🗺️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bio Mapping</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Visualisasikan pemahaman Anda tentang transpor membran dalam bentuk mind mapping yang kreatif dan terstruktur.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-elkpd-3/50 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-elkpd-1 mb-2">Tugas Mind Mapping</h2>
              <p className="text-elkpd-1/70">Buat peta konsep yang menggambarkan mekanisme transpor membran</p>
            </div>

            <div className="bg-gradient-to-br from-elkpd-5/50 to-elkpd-4/30 rounded-2xl p-8 mb-8 border border-elkpd-3/30">
              <h3 className="text-xl font-semibold text-elkpd-1 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-elkpd-2 rounded-full flex items-center justify-center text-white text-sm font-bold">!</span>
                Petunjuk Pengerjaan
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-elkpd-1/80 leading-relaxed text-justify">
                  Setelah kamu membaca dan mempelajari <strong>Bio Info</strong> (materi tentang transpor membran), 
                  buatlah <strong>mind mapping</strong> yang menggambarkan bagaimana mekanisme perpindahan zat melalui membran plasma.
                </p>
                <p className="text-elkpd-1/80 leading-relaxed text-justify mt-4">
                  Tuliskan konsep utama <strong className="text-elkpd-2">'Transpor Membran'</strong> di tengah, 
                  kemudian kembangkan cabangnya menjadi dua bagian besar, yaitu <strong>Transpor Pasif</strong> dan <strong>Transpor Aktif</strong> berdasarkan penggunaan energi.
                </p>
                <p className="text-elkpd-1/80 leading-relaxed text-justify mt-4">
                  Pada bagian <strong>transpor pasif</strong>, uraikan lebih lanjut jenis-jenisnya seperti:
                </p>
                <ul className="list-disc list-inside text-elkpd-1/80 ml-4 mt-2 space-y-1">
                  <li>Difusi sederhana</li>
                  <li>Difusi terfasilitasi</li>
                  <li>Osmosis</li>
                  <li>Berikan contoh zat yang dapat melewati membran melalui proses tersebut</li>
                </ul>
                <p className="text-elkpd-1/80 leading-relaxed text-justify mt-4">
                  Sementara itu, pada bagian <strong>transpor aktif</strong>, jelaskan contoh mekanismenya seperti <strong>pompa ion Na⁺/K⁺</strong>, 
                  dan jelaskan bagaimana energi <strong>ATP</strong> berperan dalam proses ini.
                </p>
                <p className="text-elkpd-1/80 leading-relaxed text-justify mt-4">
                  Hubungkan pula dengan fungsi utama transpor membran bagi sel, seperti:
                </p>
                <ul className="list-disc list-inside text-elkpd-1/80 ml-4 mt-2 space-y-1">
                  <li>Menjaga keseimbangan ion</li>
                  <li>Memasukkan nutrisi</li>
                  <li>Membuang sisa metabolisme</li>
                </ul>
                <p className="text-elkpd-1/80 leading-relaxed text-justify mt-4">
                  <strong>Gunakan warna, simbol, atau gambar</strong> untuk menunjukkan perbedaan antara jenis-jenis transpor 
                  agar peta konsepmu lebih menarik dan mudah dipahami.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-md">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-semibold text-elkpd-1 mb-2">Tips Membuat Mind Mapping</h4>
                <ul className="text-sm text-elkpd-1/70 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mulai dari konsep utama di tengah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Gunakan warna berbeda untuk setiap cabang</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Tambahkan gambar atau simbol untuk memperjelas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Buat hubungan antar konsep dengan garis penghubung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-md">
                <div className="text-3xl mb-3">📋</div>
                <h4 className="font-semibold text-elkpd-1 mb-2">Yang Harus Ada</h4>
                <ul className="text-sm text-elkpd-1/70 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Konsep utama: Transpor Membran</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cabang: Transpor Pasif & Transpor Aktif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jenis-jenis transpor dan contohnya</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Fungsi transpor membran bagi sel</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Pengumpulan Mind Mapping</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Setelah selesai membuat mind mapping, upload hasil karya Anda ke Google Drive yang telah disediakan.
              </p>

              <div className="bg-white/10 rounded-xl p-4 mb-6 max-w-lg mx-auto">
                <h4 className="font-semibold mb-3">Format Pengumpulan:</h4>
                <div className="text-sm text-left space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/60 rounded-full flex-shrink-0"></span>
                    <span>Format: PDF, PNG, atau JPG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/60 rounded-full flex-shrink-0"></span>
                    <span>Ukuran: Maksimal 10 MB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/60 rounded-full flex-shrink-0"></span>
                    <span>Nama file: MindMapping_[Nama]_[Kelas]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/60 rounded-full flex-shrink-0"></span>
                    <span>Buat dengan aplikasi favorit Anda</span>
                  </div>
                </div>
              </div>
              
              <a
                href="https://drive.google.com/drive/folders/11gnqNzqO3O9NrQH48txCRikF81vdUbFK?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                📁 Upload Mind Mapping ke Google Drive
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-elkpd-5/30 via-white to-elkpd-4/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-elkpd-1 mb-4">Contoh Visualisasi</h2>
            <p className="text-lg text-elkpd-1/70 max-w-2xl mx-auto">
              Berikut adalah beberapa inspirasi tampilan mind mapping yang dapat Anda gunakan sebagai referensi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4 overflow-hidden rounded-xl bg-elkpd-5">
                <img 
                  src="/images/gambar1.jpg" 
                  alt="Contoh Mind Mapping 1" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-elkpd-1 mb-2">Struktur Radial</h4>
              <p className="text-sm text-elkpd-1/70">
                Mind mapping dengan cabang melingkar dari konsep pusat
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4 overflow-hidden rounded-xl bg-elkpd-5">
                <img 
                  src="/images/gambar2.jpg" 
                  alt="Contoh Mind Mapping 2" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-elkpd-1 mb-2">Struktur Hierarki</h4>
              <p className="text-sm text-elkpd-1/70">
                Mind mapping dengan cabang bertingkat dan sistematis
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-elkpd-3/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4 overflow-hidden rounded-xl bg-elkpd-5">
                <img 
                  src="/images/gambar3.png" 
                  alt="Contoh Mind Mapping 3" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-elkpd-1 mb-2">Struktur Kreatif</h4>
              <p className="text-sm text-elkpd-1/70">
                Mind mapping dengan ilustrasi dan warna yang menarik
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-elkpd-4 to-elkpd-3 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-elkpd-1 mb-3">Rekomendasi Tools</h3>
            <p className="text-elkpd-1/80 mb-6">
              Anda dapat membuat mind mapping menggunakan berbagai tools digital atau manual
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <p className="font-semibold text-elkpd-1">Canva</p>
                <p className="text-xs text-elkpd-1/60">Online & Gratis</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <p className="font-semibold text-elkpd-1">MindMeister</p>
                <p className="text-xs text-elkpd-1/60">Khusus Mind Map</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <p className="font-semibold text-elkpd-1">PowerPoint</p>
                <p className="text-xs text-elkpd-1/60">Microsoft Office</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <p className="font-semibold text-elkpd-1">Kertas Manual</p>
                <p className="text-xs text-elkpd-1/60">Gambar & Foto</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

