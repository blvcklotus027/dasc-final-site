// src/pages/Home.jsx
import bgVideo from "../assets/video/background.mp4";

export default function Home() {
  const cardClass =
    "bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 md:p-7 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20";

  return (
    <div className="flex flex-col text-white bg-gradient-to-b from-black via-neutral-900 to-black">
      {/* HERO CU VIDEO */}
      <section className="relative w-screen h-[90vh] sm:h-screen overflow-hidden">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-start px-4 sm:px-6 md:px-20 max-w-4xl mx-auto text-center md:text-left">
          <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-gray-300 mb-3">
            DASC FAMILY RESIDENCE · BUIUCANI
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Acasă nu e doar un loc…
            <br />
            <span className="text-primaryGold">e un sentiment.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-200 max-w-2xl">
            84 de apartamente moderne, gândite pentru familii care își doresc
            liniște, confort și calitate, în una dintre cele mai bune zone ale
            sectorului Buiucani.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="/apartamente"
              className="w-full sm:w-auto px-6 py-3 bg-primaryGold text-gray-900 text-sm sm:text-base font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Vezi apartamentele
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 border border-white/80 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white hover:text-black transition"
            >
              Programează o vizionare
            </a>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* DESPRE PROIECT */}
      <section className="px-4 sm:px-6 md:px-20 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gray-300/70 mb-3">
              DESPRE PROIECT
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              DASC Family Residence
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Acasă nu e doar un loc — este un sentiment. Un proiect modern,
              gândit pentru familii care își doresc liniște, confort, calitate
              și comunitate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className={cardClass}>
              <h3 className="text-primaryGold text-xs sm:text-sm font-semibold mb-2">
                CONCEPTUL PROIECTULUI
              </h3>
              <p className="text-gray-200/90 text-sm leading-relaxed">
                Bloc locativ modern cu 7 nivele și 84 apartamente, creat pentru
                familii care apreciază liniștea și calitatea.
              </p>
            </div>

            <div className={cardClass}>
              <h3 className="text-primaryGold text-xs sm:text-sm font-semibold mb-2">
                LOCAȚIE BUIUCANI
              </h3>
              <p className="text-gray-200/90 text-sm leading-relaxed">
                Situat într-o zonă liniștită, cu acces rapid către școli,
                grădinițe, supermarketuri și transport public.
              </p>
            </div>

            <div className={cardClass}>
              <h3 className="text-primaryGold text-xs sm:text-sm font-semibold mb-2">
                PENTRU FAMILIE
              </h3>
              <p className="text-gray-200/90 text-sm leading-relaxed">
                Proiect dedicat familiilor — planimetrii eficiente, spații
                luminoase, confort fonic și atmosferă primitoare.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className={`${cardClass} md:p-8`}>
              <h3 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">
                Despre dezvoltator
              </h3>
              <p className="text-gray-200/85 text-sm leading-relaxed mb-3">
                DASC Development pune accent pe calitate și responsabilitate în
                fiecare proiect. Materiale moderne, execuție sigură și
                transparență completă.
              </p>
              <p className="text-gray-200/85 text-sm leading-relaxed">
                Fiecare detaliu este planificat pentru siguranță, confort și
                durabilitate reală.
              </p>
            </div>

            <div className={`${cardClass} md:p-8`}>
              <h3 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-4">
                De ce să alegi DASC Family Residence?
              </h3>
              <ul className="space-y-2 text-sm text-gray-200/85 leading-relaxed">
                <li>• Structură solidă pe piloni</li>
                <li>• Izolație fonică & termică premium</li>
                <li>• Locație excelentă în Buiucani</li>
                <li>• Planimetrii moderne pentru familii</li>
                <li>• Execuție de calitate și transparență totală</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* TIPURI DE APARTAMENTE */}
      <section className="px-4 sm:px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Tipuri de <span className="text-primaryGold">apartamente</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl text-sm sm:text-base">
            Alege locuința potrivită pentru tine: de la apartamente compacte de 1
            cameră, până la spații generoase cu 3 camere pentru familii
            numeroase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={cardClass}>
              <p className="text-sm text-gray-400 mb-1">Pentru tineri / investiție</p>
              <h3 className="text-xl font-semibold mb-2">1 cameră</h3>
              <p className="text-gray-200 mb-2">de la ~44 m²</p>
              <p className="text-primaryGold font-bold mb-4">Potrivit pentru start</p>
              <a href="/apartamente" className="text-sm text-primaryGold hover:underline">
                Vezi detalii &rarr;
              </a>
            </div>

            <div
              className={
                cardClass + " border-primaryGold/60 bg-white/8"
              }
            >
              <p className="text-sm text-gray-400 mb-1">Echilibru perfect</p>
              <h3 className="text-xl font-semibold mb-2">2 camere</h3>
              <p className="text-gray-200 mb-2">de la ~60–65 m²</p>
              <p className="text-primaryGold font-bold mb-4">Ideal pentru familie</p>
              <a href="/apartamente" className="text-sm text-primaryGold hover:underline">
                Vezi detalii &rarr;
              </a>
            </div>

            <div className={cardClass}>
              <p className="text-sm text-gray-400 mb-1">Spațiu pentru toți</p>
              <h3 className="text-xl font-semibold mb-2">3 camere</h3>
              <p className="text-gray-200 mb-2">de la ~75–80 m²</p>
              <p className="text-primaryGold font-bold mb-4">Confort maxim</p>
              <a href="/apartamente" className="text-sm text-primaryGold hover:underline">
                Vezi detalii &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* AVANTAJE */}
      <section className="px-4 sm:px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            De ce să alegi{" "}
            <span className="text-primaryGold">DASC Family Residence?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className={cardClass}>
              <p className="text-3xl mb-3">🏗️</p>
              <h3 className="font-semibold mb-2">Calitate în construcție</h3>
              <p className="text-sm text-gray-300">
                Structură pe piloni, materiale durabile, execuție atent monitorizată.
              </p>
            </div>

            <div className={cardClass}>
              <p className="text-3xl mb-3">📍</p>
              <h3 className="font-semibold mb-2">Locație Buiucani</h3>
              <p className="text-sm text-gray-300">
                Zonă liniștită, acces facil spre centru, parcuri, școli și grădinițe.
              </p>
            </div>

            <div className={cardClass}>
              <p className="text-3xl mb-3">🔇</p>
              <h3 className="font-semibold mb-2">Izolație fonică</h3>
              <p className="text-sm text-gray-300">
                Confort acustic ridicat pentru odihnă și intimitate în familie.
              </p>
            </div>

            <div className={cardClass}>
              <p className="text-3xl mb-3">👨‍👩‍👧</p>
              <h3 className="font-semibold mb-2">Proiect pentru familie</h3>
              <p className="text-sm text-gray-300">
                Plănuit pentru viața de familie, cu spații eficiente și atmosferă caldă.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* CIFRE */}
      <section className="px-4 sm:px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
            <p className="text-4xl font-bold text-primaryGold mb-1">1</p>
            <p className="text-sm text-gray-300">proiect dedicat familiei tale</p>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* GALERIE ȘANTIER */}
      <section className="px-4 sm:px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Progresul <span className="text-primaryGold">șantierului</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl text-sm sm:text-base">
            Actualizăm constant evoluția proiectului. Mai jos poți vedea câteva imagini
            reprezentative din diferite etape de construcție.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-44 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
              Imagine șantier 1
            </div>
            <div className="h-44 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
              Imagine șantier 2
            </div>
            <div className="h-44 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20">
              Imagine șantier 3
            </div>
          </div>

          <a
            href="/santier"
            className="inline-block mt-6 text-sm text-primaryGold hover:underline"
          >
            Vezi mai multe imagini &rarr;
          </a>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* CTA FINAL */}
      <section className="px-4 sm:px-6 md:px-20 py-16 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ești gata să îți găsești{" "}
            <span className="text-primaryGold">noua casă?</span>
          </h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Lasă-ne un mesaj sau sună-ne, iar noi îți oferim toate detaliile despre
            apartamentele disponibile, prețuri și condiții.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-primaryGold text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Mergi la pagina de contact
            </a>
            <a
              href="tel:+37300000000"
              className="px-6 py-3 border border-white/70 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Sună acum
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
