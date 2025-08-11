import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes = [
    '',
    'a-propos', 'cours', 'inscription', 'tarifs', 'disponibilites', 'ressources', 'actualites', 'faq', 'quiz', 'newsletter',
    'subjects/math', 'subjects/physics', 'subjects/ses',
    'diagnostic', 'tuteurs', 'reserver', 'espace-eleve', 'espace-parent', 'espace-tuteur',
  ];
  return routes.map((r) => ({ url: `${base}/${r}`.replace(/\/$/, ''), changeFrequency: 'weekly', priority: r === '' ? 1 : 0.7 }));
}
