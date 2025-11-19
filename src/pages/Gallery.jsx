// src/pages/Gallery.jsx
import React, { useState } from "react";

export default function Gallery({ onBack }) {
  // Pozele din public/santier
  const images = [
    "/santier/poza1.jpg",
    "/santier/poza2.jpg",
    "/santier/poza3.jpg",
    "/santier/poza4.jpg",
    "/santier/poza6.jpg",
    "/santier/poza7.jpg",
    "/santier/poza8.jpg",
    "/santier/poza9.jpg",
    "/santier/poza10.jpg",
    "/santier/poza11.jpg",
    "/santier/poza12.jpg",
    "/santier/poza13.jpg",
    "/santier/poza14.jpg",
    "/santier/poza15.jpg",
    "/santier/poza16.jpg",
    "/santier/poza17.jpg",
    "/santier/poza18.jpg",
    "/santier/poza19.jpg",
    "/santier/poza20.jpg",
    "/santier/poza21.jpg",
    
    // când adaugi altele, continui:
    // "/santier/poza4.JPG",
    // "/santier/poza5.JPG",
  ];

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
          Galerie foto{" "}
          <span className="text-primaryGold">DASC Family Residence</span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto text-center mb-10">
          Imagini reale de la șantier, din diferite etape de construcție. Vom
          actualiza constant pe măsură ce proiectul avansează.
        </p>

        {/* GRID GALERIE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {images.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImage(src)}
              className="overflow-hidden rounded-xl bg-white/5 border border-white/5 hover:border-primaryGold/60 transition focus:outline-none focus:ring-2 focus:ring-primaryGold/70"
            >
              <img
                src={src}
                alt={`Șantier DASC - imagine ${idx + 1}`}
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
              className="max-w-full max-h-[90vh] object-contain rounded-xl border border-white/20 shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
