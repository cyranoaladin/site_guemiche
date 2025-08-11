import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TutorStars from "@/components/TutorStars";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-blue-50 via-white to-rose-50 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center text-sm sm:px-6 lg:px-8">
          <span className="font-medium">Offre découverte :</span> premier cours d’essai à tarif réduit.
        </div>
      </div>
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="hero-decor" />
        <div className="relative grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="badge">Objectif la Mention au Bac</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Plus que des cours, un déclic.</h1>
            <p className="mt-4 text-lg text-black/70">Des méthodes claires, une motivation durable, des résultats tangibles. Nous accompagnons votre réussite avec exigence et bienveillance.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/diagnostic" className="btn-primary">Démarrer mon diagnostic</Link>
              <Link href="/tuteurs" className="btn-secondary">Voir les tuteurs</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="card p-4">
                <div className="text-2xl font-semibold">98%</div>
                <div className="text-sm text-black/70">Objectif mention</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-semibold">1:1</div>
                <div className="text-sm text-black/70">Accompagnement individuel</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-semibold">100%</div>
                <div className="text-sm text-black/70">Programme français</div>
              </div>
            </div>
          </div>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-blue-50 via-white to-rose-50">
              <Image src="/hero_image.png" alt="Élève confiant révisant — Objectif la Mention au Bac" fill className="object-cover" priority />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Reveal>
            <SectionTitle title="Notre révolution" subtitle="Avant / Après : de la confusion à la clarté." />
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card p-6">
                <div className="text-sm font-medium">Avant</div>
                <div className="mt-2 text-sm text-black/80">Méthodes floues, stress, progrès irréguliers.</div>
                <div className="mt-4 h-36 rounded-lg bg-gradient-to-br from-rose-50 to-white" />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="card p-6">
                <div className="text-sm font-medium">Après</div>
                <div className="mt-2 text-sm text-black/80">Outils simples, confiance, amélioration mesurable.</div>
                <div className="mt-4 h-36 rounded-lg bg-gradient-to-br from-blue-50 to-white" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Reveal>
            <SectionTitle title="Comment ça marche ?" subtitle="3 étapes simples pour démarrer." />
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="card p-6">
                <div className="text-sm font-medium">Diagnostiquer</div>
                <p className="mt-2 text-sm text-black/80">Un mini‑bilan pour cerner votre profil d’apprenant.</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="card p-6">
                <div className="text-sm font-medium">Réserver</div>
                <p className="mt-2 text-sm text-black/80">Choisissez un créneau et réglez en toute sécurité.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card p-6">
                <div className="text-sm font-medium">Progresser</div>
                <p className="mt-2 text-sm text-black/80">Des séances efficaces et des conseils actionnables.</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12" />
          <Reveal>
            <SectionTitle title="Nos tuteurs stars" subtitle="Des profils d’exception, choisis pour leur impact." />
          </Reveal>
          <Reveal delay={0.1}>
            <TutorStars />
          </Reveal>
          <div className="mt-12" />
          <Reveal>
            <SectionTitle title="Ils témoignent" subtitle="Parents et élèves parlent de leur progression et de leur réussite." />
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/5 bg-gradient-to-r from-blue-50 via-white to-rose-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionTitle title="Prêt(e) à viser la mention ?" subtitle="Réservez un créneau ou contactez‑nous pour un premier échange." />
          </Reveal>
          <div className="mt-6 text-sm text-black/70">Garantie sérénité : séance d’essai et conseils personnalisés.</div>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/inscription" className="btn-primary">Commencer maintenant</Link>
              <Link href="/disponibilites" className="btn-secondary">Voir les disponibilités</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
