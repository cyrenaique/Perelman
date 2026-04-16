"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

interface PerformanceVideo {
  title: string;
  year: number;
  thumbnail?: string;
  type: "mega" | "youtube";
  url?: string;
  altUrl?: string;
  embedId?: string;
}

const allVideos: PerformanceVideo[] = ([
  {
    title: "The Sound of Music",
    year: 2026,
    thumbnail: "/pictures/affiche.png",
    type: "mega" as const,
    url: "https://mega.nz/file/Y012ULhC#zr8jM7l64D3UuecKhBPKBK9SM4eY2WhkoLt571SNjlE",
    altUrl: "https://disk.yandex.com/i/ChLGlZWyI9tsRA",
    embedId: "jrUt3M_5vE4",
  },
  {
    title: "The Sound of Music",
    year: 2024,
    thumbnail: "/pictures/SofM2bt_2024.png",
    type: "mega" as const,
    url: "https://mega.nz/file/Fwlj2Joa#7wla3akaxZEC0fzyY3FwPJdwr_pXhnz8aG-Y358KtKs",
    altUrl: "https://disk.yandex.com/i/7_mvceroOnMd6Q",
    embedId: "A_0WAcgdKxE",
  },
  {
    title: "Mary Poppins",
    year: 2022,
    thumbnail: "/pictures/poppins_2022.jpeg",
    type: "youtube" as const,
    embedId: "NhTQmyRHvEo",
    altUrl: "https://disk.yandex.com/i/uWyH1JS-m85P_A",
  },
  {
    title: "The Canterville Ghost",
    year: 2019,
    thumbnail: "/pictures/canter2019.png",
    type: "youtube" as const,
    embedId: "83I2kqjJlN0",
    altUrl: "https://disk.yandex.com/i/aeymCTsBxcT5LA",
  },
] as PerformanceVideo[]).sort((a, b) => b.year - a.year);

export default function VideosPage() {
  const [playingYT, setPlayingYT] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 select-none pointer-events-none">
          <div className="absolute top-8 right-[10%] font-math text-7xl text-white/[0.04] rotate-12">&radic;</div>
          <div className="absolute bottom-6 left-[12%] font-math text-6xl text-white/[0.04] -rotate-6">&infin;</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Videos
          </h1>
        </div>
      </section>

      {/* All Videos — sorted by year, newest first */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allVideos.map((video) => (
              <div
                key={`${video.title}-${video.year}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary-100 hover:shadow-lg transition-all"
              >
                {/* Video / Thumbnail */}
                <div className="relative aspect-[3/4] sm:aspect-[2/3] md:aspect-video bg-gradient-to-br from-primary-900 to-primary-950">
                  {video.embedId && playingYT === video.embedId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <a
                      href={video.type === "mega" && !video.embedId ? video.url : undefined}
                      target={video.type === "mega" && !video.embedId ? "_blank" : undefined}
                      rel={video.type === "mega" && !video.embedId ? "noopener noreferrer" : undefined}
                      onClick={
                        video.embedId
                          ? (e) => {
                              e.preventDefault();
                              setPlayingYT(video.embedId!);
                            }
                          : undefined
                      }
                      className="block w-full h-full relative group cursor-pointer"
                    >
                      {video.thumbnail && (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/25 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </a>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-900">
                      {video.title}
                    </h3>
                    <span className="text-sm text-gray-500">{video.year}</span>
                  </div>
                  {(video.type === "mega" || video.altUrl) && (
                    <div className="flex items-center gap-3">
                      {video.url && (
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1"
                        >
                          Mega.nz <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {video.altUrl && (
                        <a
                          href={video.altUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1"
                        >
                          Yandex <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
