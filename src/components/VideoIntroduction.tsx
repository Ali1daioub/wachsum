"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface VideoIntroductionProps {
  videoUrl?: string;
  title?: string;
  duration?: string;
  className?: string;
}

export default function VideoIntroduction({
  videoUrl = "https://drive.google.com/file/d/1LSJ0XK4Z-mki-9jP3odrozZ5wPmtg6s8/preview",
  title = "See Wachsum AI in Action",
  duration = "Demo",
  className = ""
}: VideoIntroductionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  // Prevent hydration mismatch by not rendering interactive elements until mounted
  if (!mounted) {
    return (
      <div className={`relative max-w-sm mx-auto ${className}`}>
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative w-full h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 text-blue-600 rounded-full p-6 shadow-lg">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600">Watch how AI agents handle customer calls automatically</p>
          <p className="text-xs text-gray-500 mt-1">Real conversation examples • No actors • 100% AI</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative max-w-sm mx-auto ${className}`}>
      {/* Video Container */}
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">

        {/* Video Player */}
        {isPlaying ? (
          <div className="relative w-full h-64">
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-2xl"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={title}
            />
          </div>
        ) : (
          <>
            {/* Thumbnail with Play Button */}
            <div className="relative w-full h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full opacity-10"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-white rounded-full opacity-15"></div>
                <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white rounded-full opacity-10"></div>
              </div>

              {/* Play Button */}
              <Button
                onClick={handlePlayClick}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-600 rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 z-10"
                size="lg"
              >
                <svg
                  className="w-8 h-8 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </Button>

              {/* Floating Elements */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black bg-opacity-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-medium">LIVE DEMO</span>
              </div>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
              <div className="text-white">
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="bg-blue-600 px-2 py-0.5 rounded text-white font-medium">▶ {duration}</span>
                  <span>AI Phone Agents in Action</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Video Description */}
      <div className="mt-3 text-center">
        <p className="text-sm text-gray-600">
          Watch how AI agents handle customer calls automatically
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Real conversation examples • No actors • 100% AI
        </p>
      </div>
    </div>
  );
}
