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
          <img
            src="/pictures/elephant.jpeg"
            alt="Perelman Theatre Mascot"
            className="w-46 h-28 md:w-40 md:h-36 rounded-full object-cover mx-auto mb-8 opacity-70"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Amateur Theatre
            <br />
            <span className="text-white">in English</span>
            <br />
            <span className="relative">
              Perelman
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></span>
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
        </div>
      </section>

    </>
  );
}
