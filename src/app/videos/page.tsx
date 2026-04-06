"use client";

import { useState, useEffect } from "react";
import { Video, VideoOff, ExternalLink, Play } from "lucide-react";

interface VideoFile {
  name: string;
  src: string;
}

interface FeaturedVideo {
  title: string;
  description: string;
  url: string;
  year: string;
}

const featuredVideos: FeaturedVideo[] = [
  {
    title: "The Sound of Music",
    description:
      "Our 2026 production of The Sound of Music — a beloved classic brought to life by the Perelman Theatre troupe.",
    url: "https://mega.nz/file/Bok2HJTD#5BSYgLse1d_ktTKCkjTUgrdGpG3GNQBDJR12wUofPMY",
    year: "2026",
  },
];

export default function VideosPage() {
  const [videos, setVideos] = useState<VideoFile[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const res = await fetch("/api/media?folder=videos");
        if (res.ok) {
          const data = await res.json();
          setVideos(data.files);
        }
      } catch {}
    };
    loadVideos();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Video className="w-4 h-4" />
            <span className="text-sm font-medium">On Stage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Videos
          </h1>
          <p className="text-primary-200 max-w-xl mx-auto text-lg">
            Watch recordings of our performances, rehearsals, and behind-the-scenes moments.
          </p>
        </div>
      </section>

      {/* Featured Performances */}
      {featuredVideos.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-10">
              Featured Performances
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredVideos.map((video) => (
                <a
                  key={video.url}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-800 to-primary-950 flex items-center justify-center relative">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <span className="absolute top-4 right-4 bg-gold-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                      {video.year}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {video.description}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 flex-shrink-0 mt-1 transition-colors" />
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:text-primary-700">
                      <Play className="w-4 h-4" />
                      Watch / Download
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Video Files */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {videos.length > 0 && (
            <h2 className="section-heading text-center mb-10">
              More Clips
            </h2>
          )}
          {videos.length === 0 && featuredVideos.length === 0 ? (
            <div className="text-center py-20">
              <VideoOff className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-500 mb-2">
                No videos yet
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Add your video files to the{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  /public/videos
                </code>{" "}
                folder and they will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div
                  key={video.src}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <video
                    controls
                    className="w-full aspect-video bg-black"
                    preload="metadata"
                  >
                    <source src={video.src} />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-gray-900">
                      {video.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
