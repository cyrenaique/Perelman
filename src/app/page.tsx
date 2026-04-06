import Link from "next/link";
import { Camera, Video, Users, Star, Heart, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span className="text-sm font-medium text-gold-200">
              Welcome to our stage
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Amateur Theatre
            <br />
            <span className="text-gold-300">in English</span>
            <br />
            Perelman
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            A passionate community of theatre lovers bringing the magic of
            English-language performances to life. Join us on stage or in
            the audience!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gallery"
              className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900"
            >
              <Camera className="w-5 h-5" />
              View Gallery
            </Link>
            <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
              <Users className="w-5 h-5" />
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">What We Do</h2>
            <p className="section-subheading">
              Bringing English-language theatre to our community through
              passion, creativity, and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Performances",
                desc: "We stage plays, sketches, and dramatic readings in English — from classics to contemporary works.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Community",
                desc: "Open to all levels of experience. Whether you act, direct, or help backstage, there's a place for you.",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Workshops",
                desc: "Regular workshops to develop acting skills, voice technique, and stagecraft in a supportive environment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-5">
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
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Explore Our Media
            </h2>
            <p className="text-primary-200 max-w-xl mx-auto mb-8 text-lg">
              Dive into our photo gallery and video archive to relive our
              best moments on stage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/gallery"
                className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
              >
                <Camera className="w-5 h-5" />
                Photo Gallery
              </Link>
              <Link
                href="/videos"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-700"
              >
                <Video className="w-5 h-5" />
                Watch Videos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
