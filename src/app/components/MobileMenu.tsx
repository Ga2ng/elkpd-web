"use client";

import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMobileMenu = () => {
    if (isAnimating) return;
    
    if (isMobileMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }, 200);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const closeMobileMenu = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsAnimating(false);
    }, 200);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="mobile-menu-container md:hidden relative">
      {/* Toggle Button */}
      <button 
        onClick={toggleMobileMenu}
        className="p-2 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-elkpd-2 focus:ring-offset-2"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <div className="relative">
          <svg 
            className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className={`mobile-menu absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-sm border border-elkpd-3/50 rounded-xl shadow-2xl z-50 transform transition-all duration-200 ${
            isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <div className="p-4">
            <nav className="flex flex-col space-y-2">
              <a 
                href="/materi" 
                className="px-4 py-3 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-all duration-200 font-medium border border-transparent hover:border-elkpd-3/50 flex items-center gap-3 group"
                onClick={closeMobileMenu}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">📚</span>
                <span>Materi Pembelajaran</span>
              </a>
              <a 
                href="/pretest" 
                className="px-4 py-3 rounded-lg text-elkpd-1 hover:bg-elkpd-4/50 transition-all duration-200 font-medium border border-transparent hover:border-elkpd-3/50 flex items-center gap-3 group"
                onClick={closeMobileMenu}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">🎯</span>
                <span>Pretest</span>
              </a>
              <a 
                href="/post-test" 
                className="px-4 py-3 rounded-lg bg-elkpd-2 text-white hover:bg-elkpd-1 transition-all duration-200 font-medium shadow-md hover:shadow-lg border border-transparent hover:border-elkpd-1 flex items-center gap-3 group"
                onClick={closeMobileMenu}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">✍️</span>
                <span>Post Test</span>
              </a>
            </nav>
            
            <div className="mt-4 pt-4 border-t border-elkpd-3/30">
              <div className="text-xs text-elkpd-1/60 text-center">
                <p className="font-medium text-elkpd-1">ELKPD</p>
                <p className="mt-1">Platform pembelajaran yang efektif</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-200"
          onClick={closeMobileMenu}
        />
      )}
    </div>
  );
} 