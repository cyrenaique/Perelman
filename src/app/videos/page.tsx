"use client";

import { useState, useEffect } from "react";
import { Video, VideoOff } from "lucide-react";

interface VideoFile {
  name: string;
  src: string;
}

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

      {/* Video Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {videos.length === 0 ? (
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
