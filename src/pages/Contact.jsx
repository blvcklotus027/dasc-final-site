// src/pages/Contact.jsx

export default function Contact() {
  const cardClass =
    "bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20";

  return (
    <div className="flex flex-col text-white bg-gradient-to-b from-black via-neutral-900 to-black min-h-screen pt-28">
      {/* HERO */}
      <section className="px-6 md:px-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-3">
            CONTACT
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hai să vorbim despre{" "}
            <span className="text-primaryGold">noua ta casă</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Completează datele tale sau contactează-ne direct prin telefon sau WhatsApp,
            iar noi îți oferim toate detaliile despre apartamente, prețuri și condiții.
          </p>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* CONTACT + FORMULAR */}
      <section className="px-6 md:px-20 py-16 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Info contact */}
          <div className="space-y-6">
            <div className={cardClass}>
              <h2 className="text-xl font-semibold mb-3">Date de contact</h2>
              <p className="text-sm text-gray-300 mb-3">
                Ne poți suna sau scrie oricând pentru informații suplimentare
                despre proiect, disponibilitate și modalități de plată.
              </p>
              <div className="space-y-2 text-sm text-gray-200">
                <p>
                  📍 <span className="font-medium">Buiucani, Chișinău</span>
                </p>
                <p>
                  ☎️{" "}
                  <a href="tel:+37300000000" className="hover:text-primaryGold">
                    +373 00 000 000
                  </a>
                </p>
                <p>
                  💬{" "}
                  <a
                    href="https://wa.me/37300000000"
                    className="hover:text-primaryGold"
                  >
                    WhatsApp disponibil
                  </a>
                </p>
                <p>
                  ✉️{" "}
                  <a
                    href="mailto:contact@dasc.md"
                    className="hover:text-primaryGold"
                  >
                    contact@dasc.md
                  </a>
                </p>
              </div>
            </div>

            <div className={cardClass}>
              <h3 className="text-lg font-semibold mb-3">Program orientativ</h3>
              <p className="text-sm text-gray-300">
                Luni – Vineri: 09:00 – 18:00
                <br />
                Sâmbătă: 10:00 – 15:00
                <br />
                Duminică: cu programare prealabilă.
              </p>
            </div>
          </div>

          {/* Formular */}
          <div className={cardClass}>
            <h2 className="text-xl font-semibold mb-4">Trimite o solicitare</h2>
            <p className="text-sm text-gray-300 mb-6">
              Lasă-ne datele tale și te contactăm pentru a-ți prezenta
              opțiunile de apartamente disponibile.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Nume și prenume
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm outline-none focus:border-primaryGold"
                  placeholder="Ex: Ion Popescu"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm outline-none focus:border-primaryGold"
                  placeholder="+373 ..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Interesat de
                </label>
                <select
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm outline-none focus:border-primaryGold"
                >
                  <option>Apartament 1 cameră</option>
                  <option>Apartament 2 camere</option>
                  <option>Apartament 3 camere</option>
                  <option>Parcare</option>
                  <option>Altele</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Mesaj (opțional)
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm outline-none focus:border-primaryGold resize-none"
                  placeholder="Scrie aici întrebările tale..."
                />
              </div>

              <button
                type="button"
                className="w-full mt-2 px-4 py-2.5 bg-primaryGold text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Trimite solicitarea
              </button>

              <p className="text-[11px] text-gray-400 mt-2">
                Acest formular este demonstrativ. Ulterior poate fi conectat la email,
                CRM sau WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
