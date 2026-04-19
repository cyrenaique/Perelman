"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

interface ImageFile {
  name: string;
  src: string;
}

interface Album {
  title: string;
  cover: string;
  folder: string;
  subfolder: string;
}

const albums: Album[] = [
  {
    title: "The Sound of Music 2026",
    cover: "/pictures/affiche_2026.png",
    folder: "pictures",
    subfolder: "PhotosSpectacle2026",
  },
  {
    title: "Mary Poppins 2022",
    cover: "/pictures/poppins_2022.jpeg",
    folder: "pictures",
    subfolder: "2022-04",
  },
];

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [photos, setPhotos] = useState<ImageFile[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!activeAlbum) {
      setPhotos([]);
      return;
    }

    const loadPhotos = async () => {
      try {
        const res = await fetch(
          `/api/media?folder=${activeAlbum.folder}&subfolder=${activeAlbum.subfolder}`
        );
        if (res.ok) {
          const data = await res.json();
          const sorted = (data.files as ImageFile[]).sort((a, b) => {
            const numA = parseFloat(a.name.replace(/[^0-9.]/g, "")) || Infinity;
            const numB = parseFloat(b.name.replace(/[^0-9.]/g, "")) || Infinity;
            return numA - numB;
          });
          setPhotos(sorted);
        }
      } catch {}
    };

    loadPhotos();
  }, [activeAlbum]);

  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
  const nextImage = () =>
    setLightbox((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 select-none pointer-events-none">
          <div className="absolute top-6 left-[12%] font-math text-7xl text-white/[0.04] rotate-6">&Delta;</div>
          <div className="absolute bottom-4 right-[8%] font-math text-6xl text-white/[0.04] -rotate-12">&Omega;</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Photo Gallery
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!activeAlbum ? (
            /* Album covers */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {albums.map((album) => (
                <button
                  key={album.subfolder}
                  onClick={() => setActiveAlbum(album)}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 hover:ring-4 ring-primary-400 transition-all shadow-md hover:shadow-xl"
                >
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-display text-xl font-bold">
                      {album.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Album photos */
            <div>
              <button
                onClick={() => { setActiveAlbum(null); setLightbox(null); }}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to albums
              </button>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                {activeAlbum.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((img, index) => (
                  <button
                    key={img.src}
                    onClick={() => setLightbox(index)}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 hover:ring-4 ring-primary-400 transition-all"
                  >
                    <img
                      src={img.src}
                      alt={activeAlbum.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && photos[lightbox] && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white/70 hover:text-white p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white/70 hover:text-white p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={photos[lightbox].src}
            alt={activeAlbum?.title ?? ""}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <div className="absolute bottom-6 text-white/80 text-sm">
            {activeAlbum?.title} &mdash; {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
