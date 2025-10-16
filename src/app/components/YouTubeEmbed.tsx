"use client";

import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "Video Pembelajaran" }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {!isPlaying ? (
          // Thumbnail with play button
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <button
              onClick={handlePlay}
              className="relative z-10 group"
              aria-label="Play video"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-red-600 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-700">
                <svg 
                  className="w-10 h-10 text-white ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full opacity-50 animate-ping"></div>
              </div>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-lg font-semibold">{title}</h3>
              <p className="text-white/80 text-sm mt-1">Klik untuk memutar video</p>
            </div>
          </div>
        ) : (
          // YouTube iframe
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

