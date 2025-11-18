// src/pages/Home.jsx
import bgVideo from "../assets/video/background.mp4";
// imagini planimetrie
import plan1 from "../assets/apartments/plan-1.png";
import plan2 from "../assets/apartments/plan-2.png";
import plan3 from "../assets/apartments/plan-3.png";

export default function Home() {
  const cardClass =
    "bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 md:p-7 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20";

  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col text-white bg-gradient-to-b from-black via-neutral-900 to-black">
      {/* HERO */}
      <section
        id="hero"
        className="relative w-screen h-[90vh] sm:h-screen overflow-hidden"
      >
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
            <button
              onClick={() => smoothScrollTo("apartments")}
              className="w-full sm:w-auto px-6 py-3 bg-primaryGold text-gray-900 text-sm sm:text-base font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Vezi apartamentele
            </button>

            <button
              onClick={() => smoothScrollTo("contact")}
              className="w-full sm:w-auto px-6 py-3 border border-white/80 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white hover:text-black transition"
            >
              Programează o vizionare
            </button>
          </div>
        </div>
      </section>

      {/* linie aurie */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* DESPRE */}
      <section id="about" className="px-4 sm:px-6 md:px-20 py-14 md:py-20">
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
        </div>
      </section>

      {/* linie aurie */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* APARTAMENTE */}
      <section id="apartments" className="px-4 sm:px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Tipuri de <span className="text-primaryGold">apartamente</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl text-sm sm:text-base">
            De la apartamente compacte de 1 cameră până la spații generoase cu 3
            camere pentru familii numeroase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 cameră */}
            <div className={cardClass}>
              <img
                src={plan1}
                alt="Plan apartament 1 cameră"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-400 mb-1">
                Pentru tineri / investiție
              </p>
              <h3 className="text-xl font-semibold mb-2">1 cameră</h3>
              <p className="text-gray-200 mb-2">de la ~44 m²</p>
              <p className="text-primaryGold font-bold mb-4">
                Potrivit pentru start
              </p>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="text-sm text-primaryGold hover:underline"
              >
                Cere oferta &rarr;
              </button>
            </div>

            {/* 2 camere */}
            <div className={cardClass + " border-primaryGold/60 bg-white/8"}>
              <img
                src={plan2}
                alt="Plan apartament 2 camere"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-400 mb-1">Echilibru perfect</p>
              <h3 className="text-xl font-semibold mb-2">2 camere</h3>
              <p className="text-gray-200 mb-2">de la ~60–65 m²</p>
              <p className="text-primaryGold font-bold mb-4">
                Ideal pentru familie
              </p>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="text-sm text-primaryGold hover:underline"
              >
                Cere oferta &rarr;
              </button>
            </div>

            {/* 3 camere */}
            <div className={cardClass}>
              <img
                src={plan3}
                alt="Plan apartament 3 camere"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-400 mb-1">Spațiu pentru toți</p>
              <h3 className="text-xl font-semibold mb-2">3 camere</h3>
              <p className="text-gray-200 mb-2">de la ~75–80 m²</p>
              <p className="text-primaryGold font-bold mb-4">Confort maxim</p>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="text-sm text-primaryGold hover:underline"
              >
                Cere oferta &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* linie aurie */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* SANTIER */}
      <section id="santier" className="px-4 sm:px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gray-300/70 mb-3 text-center">
            PROGRES ȘANTIER
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Progresul <span className="text-primaryGold">șantierului</span>
          </h2>

          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-center text-sm sm:text-base">
            Actualizăm periodic evoluția construcției. Mai jos poți vedea câteva
            cadre reprezentative din diferite etape de execuție.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl h-44 flex items-center justify-center text-gray-300 text-sm">
              Imagine șantier 1
            </div>
            <div className="bg-white/10 rounded-xl h-44 flex items-center justify-center text-gray-300 text-sm">
              Imagine șantier 2
            </div>
            <div className="bg-white/10 rounded-xl h-44 flex items-center justify-center text-gray-300 text-sm">
              Imagine șantier 3
            </div>
          </div>
        </div>
      </section>

      {/* linie aurie */}
      <div className="px-4 sm:px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* CONTACT */}
      <section id="contact" className="px-4 sm:px-6 md:px-20 py-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gray-300/70 mb-3">
              CONTACT
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ești gata să îți găsești{" "}
              <span className="text-primaryGold">noua casă?</span>
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              Suntem aici să îți oferim toate detaliile despre apartamente,
              prețuri, condiții de plată și vizionări la șantier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className={cardClass}>
              <p className="text-3xl mb-3">📞</p>
              <h3 className="font-semibold mb-2">Sună direct</h3>
              <p className="text-sm text-gray-300 mb-3">
                Discutăm rapid la telefon despre nevoile tale și îți oferim
                informațiile de bază.
              </p>
              <a
                href="tel:+373 79 50 50 99"
                className="text-sm text-primaryGold hover:underline"
              >
                +373 79 50 50 99
              </a>
            </div>

            <div className={cardClass}>
              <p className="text-3xl mb-3">📅</p>
              <h3 className="font-semibold mb-2">Programează o vizionare</h3>
              <p className="text-sm text-gray-300 mb-3">
                Stabilim împreună o zi și o oră convenabilă pentru vizionare.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "mailto:contact@dasc.md?subject=Programare vizionare DASC Family Residence",
                    "_blank"
                  )
                }
                className="text-sm text-primaryGold hover:underline"
              >
                Trimite cerere de vizionare &rarr;
              </button>
            </div>

            <div className={cardClass}>
              <p className="text-3xl mb-3">📍</p>
              <h3 className="font-semibold mb-2">Locație șantier</h3>
              <p className="text-sm text-gray-300 mb-3">
                Buiucani, Chișinău – zonă liniștită, cu acces facil spre centru,
                parcări și transport public.
              </p>
              <span className="text-sm text-primaryGold">
                DASC Family Residence · Buiucani
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="tel:+37300000000"
                className="px-6 py-3 bg-primaryGold text-gray-9
00 font-semibold rounded-lg hover:bg-yellow-400 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Sună acum
              </a>
              <a
                href="mailto:contact@dasc.md"
                className="px-6 py-3 border border-white/70 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Scrie-ne un mesaj
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
