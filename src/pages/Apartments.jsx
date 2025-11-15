// src/pages/Apartments.jsx

export default function Apartments() {
  const cardClass =
    "bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20";

  return (
    <div className="flex flex-col text-white bg-gradient-to-b from-black via-neutral-900 to-black min-h-screen pt-28">
      {/* HERO */}
      <section className="px-6 md:px-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-3">
            APARTAMENTE
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Alege <span className="text-primaryGold">apartamentul potrivit</span> familiei tale
          </h1>
          <p className="text-gray-300 max-w-3xl text-base md:text-lg">
            De la apartamente compacte, ideale pentru start sau investiție, până la
            spații generoase pentru familii. Toate planimetriile sunt gândite pentru
            luminozitate, funcționalitate și confort.
          </p>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* TIPURI DE APARTAMENTE */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* 1 CAMERA */}
          <div className={cardClass}>
            <p className="text-sm text-gray-400 mb-1">START / INVESTIȚIE</p>
            <h2 className="text-xl font-semibold mb-2">Apartamente cu 1 cameră</h2>
            <p className="text-gray-200 text-sm mb-3">
              Potrivite pentru tineri sau ca investiție, cu spațiu optim și cost
              de întreținere redus.
            </p>
            <ul className="text-sm text-gray-300 space-y-1 mb-4">
              <li>• Suprafață de la ~44 m²</li>
              <li>• Bucătărie și living funcțional</li>
              <li>• Ideal pentru 1–2 persoane</li>
            </ul>
            <p className="text-primaryGold font-semibold text-sm">
              Planimetrii disponibile la cerere
            </p>
          </div>

          {/* 2 CAMERE */}
          <div
            className={
              cardClass +
              " border-primaryGold/60 bg-white/8"
            }
          >
            <p className="text-sm text-gray-400 mb-1">ECHILIBRU PERFECT</p>
            <h2 className="text-xl font-semibold mb-2">Apartamente cu 2 camere</h2>
            <p className="text-gray-200 text-sm mb-3">
              Ideal pentru familii tinere, cu spațiu suficient pentru o viață
              confortabilă zi de zi.
            </p>
            <ul className="text-sm text-gray-300 space-y-1 mb-4">
              <li>• Suprafață aproximativ 60–65 m²</li>
              <li>• Living generos și dormitor separat</li>
              <li>• Posibilitate de dressing și spații de depozitare</li>
            </ul>
            <p className="text-primaryGold font-semibold text-sm">
              Raport optim preț / confort
            </p>
          </div>

          {/* 3 CAMERE */}
          <div className={cardClass}>
            <p className="text-sm text-gray-400 mb-1">FAMILII NUMEROASE</p>
            <h2 className="text-xl font-semibold mb-2">Apartamente cu 3 camere</h2>
            <p className="text-gray-200 text-sm mb-3">
              Pentru familii care au nevoie de mai mult spațiu – copii, birou
              acasă, zone de relaxare.
            </p>
            <ul className="text-sm text-gray-300 space-y-1 mb-4">
              <li>• Suprafață aproximativ 75–80 m²</li>
              <li>• 3 camere separate, bucătărie și baie spațioase</li>
              <li>• Posibilitate de amenajare personalizată</li>
            </ul>
            <p className="text-primaryGold font-semibold text-sm">
              Perfect pentru confort pe termen lung
            </p>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* BENEFICII / SERVICII */}
      <section className="px-6 md:px-20 py-16 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-3">White / Grey box</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Posibilitatea de livrare în diferite stadii de finisare, în funcție
              de planul tău de amenajare.
            </p>
          </div>

          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-3">Parcare</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Locuri de parcare planificate, pentru a evita aglomerația și
              disconfortul din jurul blocului.
            </p>
          </div>

          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-3">Consultanță dedicată</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Te ajutăm cu detalii despre planimetrii, etaje, orientare și
              modalități de achitare.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
