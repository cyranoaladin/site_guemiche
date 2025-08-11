"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    quote: "Des explications claires et un suivi régulier: j’ai gagné en confiance pour le bac.",
    author: "Élève, Terminale",
  },
  {
    quote: "Mon enfant a vraiment progressé en méthodes. Merci pour l’accompagnement.",
    author: "Parent d’élève",
  },
  {
    quote: "Des exercices ciblés et des corrections détaillées, parfait pour réviser.",
    author: "Élève, Première",
  },
];

export default function TestimonialCarousel() {
  const slides = items.length;
  const enableLoop = slides >= 4;
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={enableLoop}
      pagination={{ clickable: true }}
      slidesPerView={1}
      breakpoints={{ 768: { slidesPerView: Math.min(2, slides) }, 1024: { slidesPerView: Math.min(3, slides) } }}
      className="mt-8"
    >
      {items.map((t, i) => (
        <SwiperSlide key={i}>
          <blockquote className="h-full rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-sm text-black/80">« {t.quote} »</p>
            <footer className="mt-3 text-xs text-black/60">{t.author}</footer>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
