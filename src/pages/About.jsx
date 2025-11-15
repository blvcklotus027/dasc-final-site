// src/pages/About.jsx

export default function About() {
  const cardClass =
    "bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20";

  return (
    <div className="flex flex-col text-white bg-gradient-to-b from-black via-neutral-900 to-black min-h-screen pt-28">
      {/* HERO */}
      <section className="px-6 md:px-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-3">
            DESPRE NOI
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Despre <span className="text-primaryGold">DASC Family Residence</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-base md:text-lg">
            DASC Family Residence este un proiect rezidențial gândit pentru familii
            care își doresc un echilibru între liniște, confort și accesibilitate.
            Construit cu atenție la detaliu, cu materiale de calitate și o abordare
            orientată spre siguranță și durabilitate.
          </p>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* SECTIUNE 2 COL */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className={cardClass}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Conceptul <span className="text-primaryGold">proiectului</span>
            </h2>
            <p className="text-gray-200/90 text-sm md:text-base leading-relaxed mb-3">
              Bloc locativ cu 7 nivele și 84 de apartamente, proiectat pentru a
              oferi o experiență completă de „acasă”: planimetrii funcționale,
              zone luminoase, confort fonic și termic, plus spații comune bine
              organizate.
            </p>
            <p className="text-gray-200/90 text-sm md:text-base leading-relaxed">
              Fiecare apartament este gândit astfel încât familia să se simtă
              confortabil pe termen lung, nu doar „azi”.
            </p>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Despre <span className="text-primaryGold">dezvoltator</span>
            </h2>
            <p className="text-gray-200/90 text-sm md:text-base leading-relaxed mb-3">
              DASC Development este o companie de construcții care pune accent pe
              responsabilitate, transparență și respect față de client.
            </p>
            <ul className="text-gray-200/85 text-sm md:text-base leading-relaxed space-y-2">
              <li>• Proiecte orientate spre familie și comunitate</li>
              <li>• Construcții sigure, pe piloni și structuri verificate</li>
              <li>• Comunicare clară pe tot parcursul construcției</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* CIFRE & HIGHLIGHTS */}
      <section className="px-6 md:px-20 py-16 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <p className="text-4xl font-bold text-primaryGold mb-1">84</p>
            <p className="text-sm text-gray-300">apartamente</p>
          </div>
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <p className="text-4xl font-bold text-primaryGold mb-1">7</p>
            <p className="text-sm text-gray-300">nivele</p>
          </div>
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <p className="text-4xl font-bold text-primaryGold mb-1">2</p>
            <p className="text-sm text-gray-300">ascensoare (planificat)</p>
          </div>
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <p className="text-4xl font-bold text-primaryGold mb-1">100%</p>
            <p className="text-sm text-gray-300">orientare spre familie</p>
          </div>
        </div>
      </section>
    </div>
  );
}
