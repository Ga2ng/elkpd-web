import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
        <Navbar />

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
