import { Users, Heart, Star, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About Us
          </h1>
          <p className="text-primary-200 max-w-xl mx-auto text-lg">
            Learn about our mission, values, and the people behind Perelman Theatre.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              <strong>Amateur Theatre in English Perelman</strong> is a vibrant
              community of theatre enthusiasts who share a love for the dramatic
              arts and the English language. We welcome members of all skill
              levels — from first-time performers to seasoned actors — in a warm
              and inclusive environment.
            </p>

            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We strive to bring high-quality English-language theatre to our
              community. Through regular performances, workshops, and readings,
              we aim to enrich cultural life, improve English communication
              skills, and build lasting friendships through the power of theatre.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Passion",
                desc: "We are driven by our love for theatre and storytelling.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Inclusivity",
                desc: "Everyone is welcome, regardless of experience level.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Excellence",
                desc: "We strive for the best in every rehearsal and performance.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "English Language",
                desc: "Theatre as a fun way to practice and enjoy English.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
