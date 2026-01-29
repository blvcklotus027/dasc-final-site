// src/pages/Gallery.jsx
import React, { useState } from "react";

export default function Gallery({ onBack }) {
  /**
   * IMPORTANT:
   * 1) Creează aceste foldere în /public:
   *    - /public/santier/thumb/   (≈ 900px lățime, .webp, 100–200KB)
   *    - /public/santier/large/   (≈ 1800–2000px lățime, .webp, 300–700KB)
   *
   * 2) Pune fișierele cu aceleași nume:
   *    /santier/thumb/poza469.webp
   *    /santier/large/poza469.webp
   *    etc.
   */

  const images = [
    { thumb: "/santier/thumb/poza464.webp", large: "/santier/large/poza464.webp" },
    { thumb: "/santier/thumb/poza465.webp", large: "/santier/large/poza465.webp" },
    { thumb: "/santier/thumb/poza466.webp", large: "/santier/large/poza466.webp" },
    { thumb: "/santier/thumb/poza467.webp", large: "/santier/large/poza467.webp" },
    { thumb: "/santier/thumb/poza468.webp", large: "/santier/large/poza468.webp" },
    { thumb: "/santier/thumb/poza469.webp", large: "/santier/large/poza469.webp" },
    { thumb: "/santier/thumb/poza470.webp", large: "/santier/large/poza470.webp" },
    { thumb: "/santier/thumb/poza471.webp", large: "/santier/large/poza471.webp" },
    { thumb: "/santier/thumb/poza472.webp", large: "/santier/large/poza472.webp" },
    { thumb: "/santier/thumb/poza473.webp", large: "/santier/large/poza473.webp" },
    { thumb: "/santier/thumb/poza474.webp", large: "/santier/large/poza474.webp" },
    { thumb: "/santier/thumb/poza475.webp", large: "/santier/large/poza475.webp" },
    { thumb: "/santier/thumb/poza476.webp", large: "/santier/large/poza476.webp" },
    { thumb: "/santier/thumb/poza477.webp", large: "/santier/large/poza477.webp" },
    { thumb: "/santier/thumb/poza478.webp", large: "/santier/large/poza478.webp" },
    { thumb: "/santier/thumb/poza479.webp", large: "/santier/large/poza479.webp" },
    { thumb: "/santier/thumb/poza480.webp", large: "/santier/large/poza480.webp" },
    { thumb: "/santier/thumb/poza481.webp", large: "/santier/large/poza481.webp" },
    { thumb: "/santier/thumb/poza482.webp", large: "/santier/large/poza482.webp" },
    { thumb: "/santier/thumb/poza483.webp", large: "/santier/large/poza483.webp" },
    { thumb: "/santier/thumb/poza484.webp", large: "/santier/large/poza484.webp" },
    { thumb: "/santier/thumb/poza485.webp", large: "/santier/large/poza485.webp" },
    { thumb: "/santier/thumb/poza486.webp", large: "/santier/large/poza486.webp" },
    { thumb: "/santier/thumb/poza487.webp", large: "/santier/large/poza487.webp" },
    { thumb: "/santier/thumb/poza488.webp", large: "/santier/large/poza488.webp" },
    { thumb: "/santier/thumb/poza489.webp", large: "/santier/large/poza489.webp" },
    { thumb: "/santier/thumb/poza490.webp", large: "/santier/large/poza490.webp" },
    { thumb: "/santier/thumb/poza491.webp", large: "/santier/large/poza491.webp" },
    { thumb: "/santier/thumb/poza492.webp", large: "/santier/large/poza492.webp" },
    { thumb: "/santier/thumb/poza493.webp", large: "/santier/large/poza493.webp" },
    { thumb: "/santier/thumb/poza494.webp", large: "/santier/large/poza494.webp" },
    { thumb: "/santier/thumb/poza495.webp", large: "/santier/large/poza495.webp" },
    { thumb: "/santier/thumb/poza496.webp", large: "/santier/large/poza496.webp" },
    { thumb: "/santier/thumb/poza497.webp", large: "/santier/large/poza497.webp" },
    { thumb: "/santier/thumb/poza498.webp", large: "/santier/large/poza498.webp" },
    { thumb: "/santier/thumb/poza499.webp", large: "/santier/large/poza499.webp" },
  ];

  // ținem în state DOAR imaginea mare (large)
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white px-4 sm:px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        {/* buton înapoi */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-white/40 rounded-lg text-sm text-gray-200 hover:bg-white hover:text-black transition"
          >
            ← Înapoi la site
          </button>
        )}

        <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gray-300/70 mb-3 text-center">
          GALERIE ȘANTIER
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Galerie foto <span className="text-primaryGold">DASC Family Residence</span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto text-center mb-10">
          Imagini reale de la șantier, din diferite etape de construcție. Vom actualiza
          constant pe măsură ce proiectul avansează.
        </p>

        {/* GRID GALERIE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImage(img.large)}
              className="overflow-hidden rounded-xl bg-white/5 border border-white/5 hover:border-primaryGold/60 transition focus:outline-none focus:ring-2 focus:ring-primaryGold/70"
            >
              <img
                src={img.thumb}
                alt={`Șantier DASC - imagine ${idx + 1}`}
                loading="lazy"
                decoding="async"
                // ajută la viteza percepută: primele 4 imagini au prioritate mai mare
                fetchpriority={idx < 4 ? "high" : "auto"}
                className="w-full h-32 sm:h-40 md:h-44 object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* MODAL / LIGHTBOX pentru poza mare */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)} // click pe fundal închide
        >
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // nu închide când click pe imagine
          >
            {/* buton închidere */}
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-3 -right-3 bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm border border-white/40 hover:bg-white hover:text-black transition"
            >
              ✕
            </button>

            <img
              src={activeImage}
              alt="Șantier DASC - imagine mare"
              decoding="async"
              className="max-w-full max-h-[90vh] object-contain rounded-xl border border-white/20 shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}