import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MobileMenu from "./components/MobileMenu";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "ELKPD - Evaluasi dan LKPD Interaktif",
  description: "Media evaluasi dan Lembar Kerja Peserta Didik berbasis web untuk pembelajaran yang interaktif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/images/logo.png" sizes="180x180" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-elkpd-5 via-white to-elkpd-4/30 min-h-screen`}>
        <header className="bg-white/80 backdrop-blur-sm border-b border-elkpd-3/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center space-x-2 group">
                <img 
                  src="/images/logo.png" 
                  alt="ELKPD Logo" 
                  className="w-20 h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <h1 className={`${poppins.className} text-xl font-bold text-elkpd-1`}>ELKPD</h1>
                  <p className="text-xs text-elkpd-1/60">Evaluasi & LKPD</p>
                </div>
              </a>
              
              <nav className="hidden md:flex items-center space-x-1">
                <a href="/materi" className="px-4 py-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-colors duration-200 font-medium">
                  Bio Info
                </a>
                <a href="/bio-mapping" className="px-4 py-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-colors duration-200 font-medium">
                  Bio Mapping
                </a>
                <a href="/bio-task" className="px-4 py-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-colors duration-200 font-medium">
                  Bio Task
                </a>
                <a href="/bio-communication" className="px-4 py-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-colors duration-200 font-medium">
                  Bio Communication
                </a>
                <a href="/pretest" className="px-4 py-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-colors duration-200 font-medium">
                  Pretest
                </a>
                <a href="/post-test" className="px-4 py-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-colors duration-200 font-medium">
                  Post Test
                </a>
                {/* <a href="/#tujuan-pembelajaran" className="px-4 py-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-colors duration-200 font-medium">
                  Tujuan
                </a>
                <a href="/#petunjuk-penggunaan" className="px-4 py-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-colors duration-200 font-medium">
                  Petunjuk
                </a> */}
              </nav>

              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="bg-white/60 border-t border-elkpd-3/50 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-elkpd-1/60 text-sm">
                © 2024 ELKPD. Dibuat dengan ❤️ untuk pembelajaran yang lebih baik.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
