"use client";

import { useState } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const photos = [
  "/pictures/poppins_2023/0001.png",
  "/pictures/poppins_2023/0002.png",
  "/pictures/poppins_2023/0003.png",
  "/pictures/poppins_2023/0004.png",
  "/pictures/poppins_2023/0005.png",
  "/pictures/poppins_2023/0006.png",
  "/pictures/poppins_2023/0007.png",
  "/pictures/poppins_2023/0008.png",
  "/pictures/poppins_2023/0009.jpg",
  "/pictures/poppins_2023/0010.jpg",
  "/pictures/poppins_2023/0011.jpg",
];

export default function Poppins2023Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white py-12 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            Mary Poppins — 2023
          </h1>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:ring-4 ring-primary-400 transition-all shadow-sm hover:shadow-lg"
              >
                <img
                  src={src}
                  alt={`Mary Poppins 2023 — photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + photos.length) % photos.length);
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % photos.length);
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={photos[lightbox]}
            alt={`Mary Poppins 2023 — photo ${lightbox + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
