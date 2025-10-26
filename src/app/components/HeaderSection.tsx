'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderSectionProps {
  onExperimentClick: () => void
}

export default function HeaderSection({ onExperimentClick }: HeaderSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50/30 to-elkpd-5/20 min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgBIO.png"
          alt="Biology Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for content visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Animated Particles - Biology Theme */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Small bacteria/cell particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating DNA/Cell elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`float-${i}`}
            className="float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 7}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20">
        
        {/* Header with Logos - Refined Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-20">
          
          {/* Title Section - Enhanced Typography */}
          <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-medium text-white/80 tracking-wider uppercase mb-2 block">
                  E-Learning Document
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-elkpd-2 to-green-400 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                  E-LKPD Berbasis Web<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-elkpd-2">Interaktif</span>
                </h1>
                
                <div className="space-y-3 text-lg lg:text-xl text-white/90 max-w-2xl">
                  <p className="font-medium drop-shadow">Pendekatan Pembelajaran Mendalam</p>
                  <p className="text-green-400 font-semibold drop-shadow">Sub Materi Transpor Membran</p>
                  <p className="text-base text-white/80">
                    Untuk Melatih Keterampilan Berpikir Kreatif Peserta Didik Fase F
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logos Section - Minimalist Cards */}
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="group">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
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
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
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
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
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
                <div className="aspect-square relative overflow-hidden rounded-3xl shadow-xl border-2 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/gambar3.png"
                    alt="Gambar Materi 1"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="group mt-8">
                <div className="aspect-square relative overflow-hidden rounded-3xl shadow-xl border-2 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/gambar1.png"
                    alt="Gambar Materi 2"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elkpd-2/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            {/* Class Info & CTA */}
            <div className="text-center lg:text-left space-y-12">
              <div>
                <div className="inline-block mb-6">
                  <span className="text-sm font-medium text-white/80 tracking-wider uppercase mb-3 block drop-shadow">
                    Target Pembelajaran
                  </span>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-elkpd-2 rounded-full mx-auto lg:mx-0"></div>
                </div>
                <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-elkpd-2 mb-4 drop-shadow-lg">
                  KELAS XI
                </h2>
              </div>

              {/* Action Button - Bio Experiment */}
              <div className="space-y-4">
                <button
                  onClick={onExperimentClick}
                  className="group block w-full lg:w-auto"
                >
                  <div className="relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:from-green-400 group-hover:to-emerald-500">
                    <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      <span className="text-lg">🔬 Bio Experiment</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Author Information - Clean Layout */}
        <div className="border-t border-white/20 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-2">
              <span className="text-sm font-medium text-white/70 tracking-wider uppercase drop-shadow">
                Disusun Oleh
              </span>
              <p className="text-lg font-semibold text-white drop-shadow">
                Anin Dita Yuhan Prabandari
              </p>
              <p className="text-base text-white/80 drop-shadow">
                Prof. Dr. Yuni Sri Rahayu, M.Si.
              </p>
            </div>
            
            <div className="space-y-2 text-left lg:text-right">
              <span className="text-sm font-medium text-white/70 tracking-wider uppercase drop-shadow">
                Tahun Penyusunan
              </span>
              <p className="text-2xl font-bold text-green-400 drop-shadow-lg">
                2025/2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(30px, -30px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            transform: translate(120px, -120px) scale(0.6);
            opacity: 0.2;
          }
        }

        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, rgba(74, 222, 128, 1), rgba(34, 197, 94, 0.4));
          border-radius: 50%;
          animation: drift linear infinite;
          box-shadow: 
            0 0 20px rgba(74, 222, 128, 0.9),
            0 0 40px rgba(34, 197, 94, 0.6),
            0 0 60px rgba(34, 197, 94, 0.3);
          filter: blur(0.5px);
        }

        .float-particle {
          position: absolute;
          width: 14px;
          height: 14px;
          background: radial-gradient(circle, rgba(16, 185, 129, 1), rgba(16, 185, 129, 0.3));
          border-radius: 50%;
          animation: float ease-in-out infinite;
          box-shadow: 
            0 0 25px rgba(16, 185, 129, 1),
            0 0 50px rgba(16, 185, 129, 0.7),
            0 0 75px rgba(16, 185, 129, 0.4);
          filter: blur(1px);
        }

        .particle:nth-child(3n) {
          background: radial-gradient(circle, rgba(134, 239, 172, 1), rgba(74, 222, 128, 0.4));
          box-shadow: 
            0 0 25px rgba(134, 239, 172, 1),
            0 0 45px rgba(74, 222, 128, 0.7);
          width: 10px;
          height: 10px;
        }

        .particle:nth-child(5n) {
          background: radial-gradient(circle, rgba(52, 211, 153, 1), rgba(52, 211, 153, 0.3));
          width: 12px;
          height: 12px;
          box-shadow: 
            0 0 30px rgba(52, 211, 153, 1),
            0 0 50px rgba(52, 211, 153, 0.6);
        }

        .float-particle:nth-child(2n) {
          background: radial-gradient(circle, rgba(34, 197, 94, 1), rgba(34, 197, 94, 0.3));
          width: 16px;
          height: 16px;
          box-shadow: 
            0 0 30px rgba(34, 197, 94, 1),
            0 0 60px rgba(34, 197, 94, 0.8);
        }

        .particle:nth-child(7n) {
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, rgba(187, 247, 208, 1), rgba(134, 239, 172, 0.5));
          box-shadow: 
            0 0 15px rgba(187, 247, 208, 1),
            0 0 30px rgba(134, 239, 172, 0.8);
        }
      `}</style>
    </section>
  )
}

