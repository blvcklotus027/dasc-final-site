// src/pages/Gallery.jsx
import React from "react";

export default function Gallery({ onBack }) {

  const images = [
    "/santier/poza1.jpg",
    "/santier/poza2.jpg",
    "/santier/poza3.jpg",
    "/santier/poza4.jpg",
    "/santier/poza5.jpg",
    "/santier/poza6.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white px-4 sm:px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">

        {/* 🔙 Buton Înapoi */}
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition"
        >
          ⬅ Înapoi
        </button>

        <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gray-300/70 mb-3 text-center">
          GALERIE ȘANTIER
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Galerie foto <span className="text-primaryGold">DASC Family Residence</span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto text-center mb-10">
          Aici poți vedea imagini de pe șantier...
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl bg-white/5 border border-white/5 hover:border-primaryGold/60 transition"
            >
              <img
                src={src}
                alt={`Șantier DASC ${idx + 1}`}
                className="w-full h-32 sm:h-40 md:h-44 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
