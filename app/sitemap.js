export default function sitemap() {
  const baseUrl = 'https://logikids-mocha.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Page d'accueil 
    },
    {
      url: `${baseUrl}/multiplication`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // Jeu des tables de multiplication
    },
    {
      url: `${baseUrl}/devinette`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // Jeu de devinette avec indices
    },
  ];
}