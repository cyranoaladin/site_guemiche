"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Script from "next/script";

const faqs = [
  { q: "Quels niveaux sont couverts ?", a: "Collège, lycée et post‑bac sur demande." },
  { q: "Suivez‑vous le programme français ?", a: "Oui, tous les cours sont alignés avec les programmes officiels." },
  { q: "Cours en ligne ou en présentiel ?", a: "Les deux, selon votre localisation et vos préférences." },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Questions fréquentes</h1>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}
      </Script>
      <Accordion.Root type="single" collapsible className="mt-6 divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
        {faqs.map((f, i) => (
          <Accordion.Item key={i} value={String(i)}>
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-4 py-3 text-left font-medium hover:bg-black/5">
                {f.q}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 pb-4 text-black/70">
              {f.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
