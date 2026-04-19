"use client";

import { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

interface ImageFile {
  name: string;
  src: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    // Load images from both /pictures and /photos folders
    const loadImages = async () => {
      const allImages: ImageFile[] = [];

      // Try loading from pictures folder
      try {
        const picRes = await fetch("/api/media?folder=pictures");
        if (picRes.ok) {
          const data = await picRes.json();
          allImages.push(...data.files.filter((f: ImageFile) => f.name !== "elephant.jpeg"));
        }
      } catch {}

      // Try loading from photos folder
      try {
        const photoRes = await fetch("/api/media?folder=photos");
        if (photoRes.ok) {
          const data = await photoRes.json();
          allImages.push(...data.files);
        }
      } catch {}

      // Sort numerically by filename (1.jpeg, 2.jpeg, ... 10.jpeg, ...)
      allImages.sort((a, b) => {
        const numA = parseFloat(a.name.replace(/[^0-9.]/g, '')) || Infinity;
        const numB = parseFloat(b.name.replace(/[^0-9.]/g, '')) || Infinity;
        return numA - numB;
      });

      setImages(allImages);
    };

    loadImages();
  }, []);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () =>
    setLightbox((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));

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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {images.length === 0 ? (
            <div className="text-center py-20">
              <ImageOff className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-500 mb-2">
                No photos yet
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Add your photos and pictures to the{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  /public/pictures
                </code>{" "}
                or{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  /public/photos
                </code>{" "}
                folder and they will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={img.src}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 hover:ring-4 ring-primary-400 transition-all"
                >
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium truncate block">
                      {img.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
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
            src={images[lightbox].src}
            alt={images[lightbox].name}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <div className="absolute bottom-6 text-white/80 text-sm">
            {images[lightbox].name} &mdash; {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
