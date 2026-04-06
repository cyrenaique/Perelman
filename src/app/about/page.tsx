import { Users, Heart, Star, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 select-none pointer-events-none">
          <div className="absolute top-6 right-[10%] font-math text-7xl text-white/[0.04] -rotate-6">&pi;</div>
          <div className="absolute bottom-6 left-[15%] font-math text-6xl text-white/[0.04] rotate-12">&Sigma;</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/10">
            <Users className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium text-gold-200">Our Story</span>
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
              community of theatre enthusiasts based in Strasbourg, France, who share
              a love for the dramatic arts and the English language. Named with a nod
              to the brilliant mathematician, we believe that — like a beautiful proof —
              great theatre combines logic, creativity, and elegance. We welcome members
              of all ages and skill levels in a warm and inclusive environment.
            </p>

            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We strive to bring high-quality English-language theatre to our
              community. Through regular performances, workshops, and readings,
              we aim to enrich cultural life, improve English communication
              skills, and build lasting friendships through the power of theatre.
              From <em>The Sound of Music</em> to <em>The Canterville Ghost</em> and
              <em> Mary Poppins</em>, our productions bring joy to audiences of all ages.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                symbol: "&hearts;",
                title: "Passion",
                desc: "We are driven by our love for theatre and storytelling.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                symbol: "&pi;",
                title: "Inclusivity",
                desc: "Everyone is welcome — children aged 5 to 18 and beyond.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                symbol: "&star;",
                title: "Excellence",
                desc: "We strive for the best in every rehearsal and performance.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                symbol: "&oplus;",
                title: "English Language",
                desc: "Theatre as a fun way to practice and enjoy English.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-primary-100 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
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
