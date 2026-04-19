import { ExternalLink } from "lucide-react";

interface Album {
  title: string;
  cover: string;
  url: string;
}

const albums: Album[] = [
  {
    title: "The Sound of Music 2026",
    cover: "/pictures/affiche_2026.png",
    url: "https://disk.yandex.com/d/-tXlEdaLOaJ8sA",
  },
  {
    title: "Mary Poppins 2022",
    cover: "/pictures/poppins_2022.jpeg",
    url: "https://disk.yandex.com/d/8p4TFVc6-VCiZg",
  },
  {
    title: "The Canterville Ghost 2019",
    cover: "/pictures/canter_2019.png",
    url: "https://disk.yandex.com/d/AYLKMIh1dHmDBA",
  },
];

export default function GalleryPage() {
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

      {/* Album covers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {albums.map((album) => (
              <a
                key={album.url}
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 hover:ring-4 ring-primary-400 transition-all shadow-md hover:shadow-xl"
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <h3 className="text-white font-display text-xl font-bold">
                    {album.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
