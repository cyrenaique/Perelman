import Link from "next/link";
import { Camera, Video, Users, Star, Heart, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white overflow-hidden">
        {/* Math symbols background */}
        <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
          <div className="absolute top-10 left-[5%] font-math text-8xl text-white/[0.04] rotate-12">&pi;</div>
          <div className="absolute top-20 right-[10%] font-math text-7xl text-white/[0.04] -rotate-6">&#x222B;</div>
          <div className="absolute top-1/2 left-[15%] font-math text-9xl text-white/[0.03] rotate-3">&Sigma;</div>
          <div className="absolute bottom-20 right-[20%] font-math text-8xl text-white/[0.04] -rotate-12">&infin;</div>
          <div className="absolute bottom-10 left-[40%] font-math text-6xl text-white/[0.03] rotate-6">&Delta;</div>
          <div className="absolute top-1/3 right-[5%] font-math text-7xl text-white/[0.03] rotate-12">&radic;</div>
          <div className="absolute top-10 left-[60%] font-math text-5xl text-white/[0.04] -rotate-3">&Omega;</div>
          <div className="absolute bottom-1/3 left-[8%] font-math text-6xl text-white/[0.04] rotate-6">&theta;</div>
        </div>
        {/* Glow effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10">
            <span className="font-math text-gold-300 text-lg">&pi;</span>
            <span className="text-sm font-medium text-gold-200">
              Where Mathematics Meets Theatre
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Amateur Theatre
            <br />
            <span className="text-gold-400">in English</span>
            <br />
            <span className="relative">
              Perelman
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto mb-4 leading-relaxed">
            A passionate community of theatre lovers bringing the magic of
            English-language performances to life. Join us on stage or in
            the audience!
          </p>
          <p className="font-math text-sm text-primary-400 mb-10 italic">
            &quot;The proof of great theatre is in the performance&quot;
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gallery"
              className="btn-primary bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold"
            >
              <Camera className="w-5 h-5" />
              View Gallery
            </Link>
            <Link href="/about" className="btn-outline border-primary-300 text-primary-200 hover:bg-primary-800 hover:text-white hover:border-primary-600">
              <Users className="w-5 h-5" />
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-math text-3xl text-primary-300 block mb-2">&lbrace; &pi; &middot; &theta; &middot; &Sigma; &rbrace;</span>
            <h2 className="section-heading">What We Do</h2>
            <p className="section-subheading">
              Like the elegance of a mathematical proof, we craft performances
              with precision, creativity, and heart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                symbol: "&star;",
                icon: <Star className="w-8 h-8" />,
                title: "Performances",
                desc: "We stage plays, musicals, and dramatic readings in English — from classics to contemporary works.",
              },
              {
                symbol: "&hearts;",
                icon: <Heart className="w-8 h-8" />,
                title: "Community",
                desc: "Open to all ages and levels. Whether you act, direct, or help backstage, there's a place for you.",
              },
              {
                symbol: "&lowast;",
                icon: <Sparkles className="w-8 h-8" />,
                title: "Workshops",
                desc: "Regular workshops to develop acting skills, voice technique, and stagecraft in a supportive environment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-primary-100 hover:border-primary-200 group"
              >
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 select-none pointer-events-none opacity-[0.05]">
              <div className="absolute top-4 left-8 font-math text-7xl text-white rotate-12">&pi;</div>
              <div className="absolute bottom-4 right-12 font-math text-6xl text-white -rotate-6">&#x222B;</div>
              <div className="absolute top-1/2 right-1/4 font-math text-5xl text-white rotate-3">&infin;</div>
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Explore Our Productions
              </h2>
              <p className="text-primary-200 max-w-xl mx-auto mb-8 text-lg">
                From The Sound of Music to Mary Poppins — dive into our photo
                gallery and video archive to relive our best moments on stage.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/gallery"
                  className="btn-primary bg-gold-500 text-primary-950 hover:bg-gold-400 font-bold"
                >
                  <Camera className="w-5 h-5" />
                  Photo Gallery
                </Link>
                <Link
                  href="/videos"
                  className="btn-outline border-primary-300 text-primary-200 hover:bg-primary-700 hover:text-white hover:border-primary-600"
                >
                  <Video className="w-5 h-5" />
                  Watch Videos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
