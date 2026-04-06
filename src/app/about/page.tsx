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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About Us
          </h1>
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

          </div>
        </div>
      </section>
    </>
  );
}
