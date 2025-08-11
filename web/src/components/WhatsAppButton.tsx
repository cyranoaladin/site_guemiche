"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const message = encodeURIComponent("Bonjour ! Je suis intéressé(e) par des cours particuliers (programme français).");
  const url = number ? `https://wa.me/${number}?text=${message}` : `https://wa.me/?text=${message}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
      aria-label="Open WhatsApp chat"
    >
      <MessageCircle size={22} />
    </a>
  );
}
