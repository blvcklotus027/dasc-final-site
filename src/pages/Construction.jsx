// src/pages/Construction.jsx

export default function Construction() {
  return (
    <div className="flex flex-col text-white bg-gradient-to-b from-black via-neutral-900 to-black min-h-screen pt-28">
      {/* HERO */}
      <section className="px-6 md:px-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-3">
            PROGRES ȘANTIER
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Evoluția <span className="text-primaryGold">șantierului</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-base md:text-lg">
            Urmărim transparent toate etapele de construcție: de la fundație,
            structura pe piloni, până la finisaje și amenajarea teritoriului.
          </p>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* ETAPE */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
            <h2 className="text-lg font-semibold mb-2">Fundație & piloni</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Fundație pe piloni și structură calculată pentru stabilitate și
              siguranță pe termen lung.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
            <h2 className="text-lg font-semibold mb-2">Structură & zidărie</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Ridicarea nivelelor, pereți exteriori și interiori, conform
              proiectului tehnic și normelor în vigoare.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
            <h2 className="text-lg font-semibold mb-2">Finisaje & amenajare</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lucrări de izolare, finisaje interioare și amenajarea curții, cu
              accent pe confort și estetică.
            </p>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* GALERIE PLACEHOLDER */}
      <section className="px-6 md:px-20 py-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Galerie <span className="text-primaryGold">foto șantier</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Aici poți adăuga imagini reale din șantier: fundație, armare, turnare
            beton, ridicarea nivelelor, lucrări de finisaj etc.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-48 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
              Imagine șantier 1
            </div>
            <div className="h-48 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
              Imagine șantier 2
            </div>
            <div className="h-48 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
              Imagine șantier 3
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
