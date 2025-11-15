// src/pages/Quality.jsx

export default function Quality() {
  const cardClass =
    "bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primaryGold/20";

  return (
    <div className="flex flex-col text-white bg-gradient-to-b from-black via-neutral-900 to-black min-h-screen pt-28">
      {/* HERO */}
      <section className="px-6 md:px-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-3">
            CALITATEA CONSTRUCȚIEI
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Calitate în fiecare <span className="text-primaryGold">detaliu</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-base md:text-lg">
            DASC Family Residence este construit cu accent pe siguranță, confort
            și durabilitate. De la fundația pe piloni, până la izolațiile dintre
            apartamente și înălțimea tavanelor, fiecare element este gândit pentru
            a oferi un „acasă” liniștit și confortabil pe termen lung.
          </p>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* FILOSOFIA CALITĂȚII */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className={cardClass}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Filosofia noastră despre <span className="text-primaryGold">calitate</span>
            </h2>
            <p className="text-gray-200/90 text-sm md:text-base leading-relaxed mb-3">
              Pentru noi, calitatea nu înseamnă doar materiale bune, ci un ansamblu
              de decizii corecte: structură sigură, izolații eficiente, confort
              acustic și termic, plus detalii de finisare care contează în viața
              de zi cu zi.
            </p>
            <p className="text-gray-200/90 text-sm md:text-base leading-relaxed">
              Rezultatul este un bloc în care familia ta se simte în siguranță,
              iar apartamentul rămâne confortabil și peste ani.
            </p>
          </div>

          {/* Card 2 */}
          <div className={cardClass}>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Ce înseamnă „calitate” la{" "}
              <span className="text-primaryGold">DASC Family Residence?</span>
            </h3>
            <ul className="text-sm md:text-base text-gray-200/90 leading-relaxed space-y-2">
              <li>• Fundație pe piloni și structură sigură</li>
              <li>• Izolație fonică între apartamente și între etaje</li>
              <li>• Izolație termică cu vată minerală</li>
              <li>• Tavane înalte de aproximativ 2.9 m</li>
              <li>• Balcoane de tip deschis, cu multă lumină naturală</li>
              <li>• Materiale premium în finisaje și instalații</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* STRUCTURA PE PILONI */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Structură pe <span className="text-primaryGold">pilonii de fundație</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={cardClass}>
              <h3 className="text-lg font-semibold mb-2">Stabilitate crescută</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Fundația pe piloni ajută la distribuirea uniformă a încărcărilor
                clădirii și oferă o stabilitate mai bună în timp.
              </p>
            </div>

            <div className={cardClass}>
              <h3 className="text-lg font-semibold mb-2">Durabilitate</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Structura este gândită pentru a rezista la cicluri de îngheț-dezgheț
                și variații de sol, reducând riscul de fisuri majore.
              </p>
            </div>

            <div className={cardClass}>
              <h3 className="text-lg font-semibold mb-2">Siguranță pentru familie</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                O structură calculată corect înseamnă un bloc sigur, în care te
                poți baza pe rezistența clădirii pe termen lung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* IZOLAȚIE FONICĂ & TERMICĂ */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Izolație <span className="text-primaryGold">fonică</span> și{" "}
            <span className="text-primaryGold">termică</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className={cardClass}>
                <h3 className="text-lg font-semibold mb-2">Între apartamente</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Pereții dintre apartamente sunt realizați cu grosimi și straturi
                  de materiale gândite pentru a reduce transmiterea zgomotelor.
                  Vecinii se aud mai puțin, iar intimitatea crește.
                </p>
              </div>

              <div className={cardClass}>
                <h3 className="text-lg font-semibold mb-2">Între etaje</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Plăcile de beton și straturile de șapă și pardoseală ajută la
                  diminuarea zgomotelor de pași și impact dintre etaje, pentru
                  un confort acustic mai bun.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className={cardClass}>
                <h3 className="text-lg font-semibold mb-2">Izolare cu vată minerală</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Vata minerală este folosită pentru a îmbunătăți atât izolația
                  termică, cât și pe cea fonică. Ajută la menținerea temperaturii
                  interioare și reduce pierderile de căldură.
                </p>
              </div>

              <div className={cardClass}>
                <h3 className="text-lg font-semibold mb-2">Ferestre & tâmplărie</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Tâmplăria cu geam termoizolant contribuie la reducerea zgomotului
                  din exterior și la eficiența energetică a apartamentului.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* TAVANE ÎNALTE & BALCOANE */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className={cardClass}>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Tavane înalte de ~2.9 m
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3">
              Înălțimea tavanelor de aproximativ 2.9 m oferă o senzație de spațiu
              și aerisire, greu de găsit în blocurile standard.
            </p>
            <ul className="text-sm text-gray-200/90 leading-relaxed space-y-1">
              <li>• Senzație de apartament mai mare și mai luminos</li>
              <li>• Posibilități mai multe de design interior</li>
              <li>• Circulație mai bună a aerului</li>
            </ul>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Balcoane de tip deschis
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3">
              Balcoanele deschise aduc mai multă lumină și oferă un spațiu
              suplimentar pentru relaxare, cafea dimineața sau plante.
            </p>
            <ul className="text-sm text-gray-200/90 leading-relaxed space-y-1">
              <li>• Lumină naturală mai multă în living și dormitoare</li>
              <li>• Spațiu pentru masă mică, scaune sau plante</li>
              <li>• Conectare vizuală cu exteriorul</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LINIE AURIE */}
      <div className="px-6 md:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryGold/70 to-transparent opacity-70" />
      </div>

      {/* MATERIALE PREMIUM & INSTALAȚII */}
      <section className="px-6 md:px-20 py-16 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-2">Materiale premium</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Acolo unde contează – structură, izolații, tâmplărie, finisaje – se
              folosesc materiale alese pentru durabilitate și aspect.
            </p>
          </div>

          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-2">Instalații gândite corect</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Instalațiile sanitare, electrice și de încălzire sunt proiectate
              pentru funcționare stabilă și acces ușor la eventuale intervenții.
            </p>
          </div>

          <div className={cardClass}>
            <h3 className="text-lg font-semibold mb-2">Confort pe termen lung</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Combinația dintre structură, izolații și materiale premium înseamnă
              mai puține probleme în timp și un apartament care „îmbătrânește”
              frumos împreună cu familia ta.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
