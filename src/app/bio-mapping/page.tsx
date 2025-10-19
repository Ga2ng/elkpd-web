export default function BioMappingPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🗺️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bio Mapping</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-4">
            Visualisasikan pemahaman kelompok Anda tentang transpor membran dalam bentuk mind mapping yang kreatif dan terstruktur.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-semibold">Tugas Kelompok</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-elkpd-3/50 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-elkpd-2 to-elkpd-1 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-elkpd-1 mb-2">Tugas Mind Mapping</h2>
              <p className="text-elkpd-1/70 flex items-center justify-center gap-2">
                <span className="px-4 py-1 bg-elkpd-2 text-white rounded-full text-sm font-semibold">👥 Tugas Kelompok</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-elkpd-5/50 to-elkpd-4/30 rounded-2xl p-8 mb-8 border border-elkpd-3/30">
              <h3 className="text-xl font-semibold text-elkpd-1 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-elkpd-2 rounded-full flex items-center justify-center text-white text-sm font-bold">!</span>
                Petunjuk Pengerjaan
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-elkpd-1/80 leading-relaxed text-justify">
                  Setelah kamu membaca dan mempelajari <strong>Bio Info</strong> (materi tentang transpor membran).
                </p>
                <p className="text-elkpd-1/80 leading-relaxed text-justify mt-4">
                  Buatlah <strong>mind mapping</strong> dengan judul utama <strong className="text-elkpd-2">"Transpor Membran"</strong> di tengah, 
                  lalu kembangkan menjadi dua cabang besar yaitu <strong>Transpor Pasif</strong> dan <strong>Transpor Aktif</strong>.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div className="flex-1">
                      <p className="text-elkpd-1/80 leading-relaxed"><strong>Jelaskan jenis-jenisnya</strong> dari setiap transpor (Transpor Pasif: difusi, osmosis, dll. Transpor Aktif: pompa ion, dll.)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div className="flex-1">
                      <p className="text-elkpd-1/80 leading-relaxed"><strong>Sertakan contoh zat</strong> yang melewati membran pada setiap jenis transpor</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <div className="flex-1">
                      <p className="text-elkpd-1/80 leading-relaxed"><strong>Faktor-faktor yang memengaruhi</strong> proses transpor membran (suhu, konsentrasi, tekanan, dll.)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-elkpd-2 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <div className="flex-1">
                      <p className="text-elkpd-1/80 leading-relaxed">Tambahkan juga <strong>fungsi utama transpor</strong> membran bagi sel</p>
                    </div>
                  </div>
                </div>

                <p className="text-elkpd-1/80 leading-relaxed text-justify mt-6">
                  <strong className="text-elkpd-2">Gunakan warna, simbol, atau gambar</strong> agar peta konsepmu lebih menarik dan <strong>kreasikan semenarik mungkin agar mudah dipahami</strong>.
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
                    <span>Judul utama: "Transpor Membran"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cabang: Transpor Pasif & Transpor Aktif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jenis-jenis & contoh zat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Faktor-faktor yang memengaruhi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-elkpd-2 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Fungsi utama transpor membran</span>
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
                Setelah selesai membuat mind mapping <strong>secara berkelompok</strong>, upload hasil karya kelompok Anda ke Google Drive yang telah disediakan.
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
                    <span>Nama file: MindMapping_Kelompok[X]_[Kelas]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/60 rounded-full flex-shrink-0"></span>
                    <span>Dikerjakan secara berkelompok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/60 rounded-full flex-shrink-0"></span>
                    <span>Kreasikan semenarik mungkin</span>
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
{/* 
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
      </section> */}

      {/* <section className="py-16 bg-white">
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
      </section> */}
    </>
  );
}

