export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white overflow-hidden">
        {/* Perelman formulas background — Ricci flow & Poincaré conjecture */}
        <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
          {/* Ricci flow equation */}
          <div className="absolute top-8 left-[15%] font-math text-lg md:text-xl text-white/[0.12] rotate-2">∂gᵢⱼ/∂t = −2Rᵢⱼ</div>
          {/* Perelman's W-entropy functional */}
          <div className="absolute top-20 right-[5%] font-math text-base md:text-lg text-white/[0.10] -rotate-3">W(g,f,τ) = ∫ [τ(|∇f|² + R) + f − n] (4πτ)⁻ⁿ/² e⁻ᶠ dV</div>
          {/* Ricci tensor symbol */}
          <div className="absolute top-1/3 left-[8%] font-math text-7xl text-white/[0.08] rotate-6">Rᵢⱼ</div>
          {/* Surgery formula hint */}
          <div className="absolute top-[45%] right-[8%] font-math text-sm md:text-base text-white/[0.10] -rotate-2">R ≥ −6/(4t+1)</div>
          {/* Scalar curvature evolution */}
          <div className="absolute bottom-[35%] left-[12%] font-math text-sm md:text-base text-white/[0.12] rotate-1">∂R/∂t = ΔR + 2|Rᵢⱼ|²</div>
          {/* Pi_1(M) = 0 — simply connected */}
          <div className="absolute bottom-20 right-[15%] font-math text-2xl md:text-3xl text-white/[0.10] -rotate-6">π₁(M³) = 0</div>
          {/* Volume comparison */}
          <div className="absolute bottom-10 left-[30%] font-math text-sm text-white/[0.10] rotate-3">Vol(B(p,r)) ≥ c·rⁿ</div>
          {/* Toponogov comparison */}
          <div className="absolute top-[15%] left-[45%] font-math text-base text-white/[0.09] -rotate-1">κ(x,t) ≤ C/(t+1)</div>
          {/* Classic symbols */}
          <div className="absolute top-12 left-[5%] font-math text-6xl text-white/[0.08] rotate-12">∫</div>
          <div className="absolute bottom-1/3 right-[3%] font-math text-5xl text-white/[0.08] rotate-8">∞</div>
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
            className="w-44 h-32 md:w-56 md:h-44 rounded-full object-cover mx-auto mb-8 opacity-70"
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
          <p className="text-lg md:text-xl text-primary-200 max-w-3xl mx-auto mb-4 leading-relaxed">
            Multinational, multicultural association of children aged 5 to 18 and their parents.
          </p>
          <p className="text-sm md:text-base text-primary-300 max-w-2xl mx-auto mb-2 italic">
            &quot;The biggest barrier to creativity is the fear of being foolish.&quot; — John Cleese
          </p>
          <p className="text-sm md:text-base text-primary-300 max-w-2xl mx-auto mb-10 italic">
            &quot;The butterflies never go away. You just learn to make them fly in formation.&quot; — Anonymous
          </p>
        </div>
      </section>

      {/* Our Productions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-4">
            Our Productions
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            A look back at the shows we have brought to life
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/pictures/affiche_2026.png", title: "The Sound of Music", year: "2026" },
              { src: "/pictures/SofM2bt_2024.png", title: "The Sound of Music", year: "2024" },
              { src: "/pictures/poppins_2022.jpeg", title: "Mary Poppins", year: "2022" },
              { src: "/pictures/canter_2019.png", title: "The Canterville Ghost", year: "2019" },
            ].map((show) => (
              <div
                key={show.year}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
              >
                <div className="aspect-[3/4]">
                  <img
                    src={show.src}
                    alt={show.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-display font-bold text-lg">{show.title}</h3>
                  <span className="text-white/70 text-sm">{show.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
