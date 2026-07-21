// Gerador de sitemap para SEO
// Cria automaticamente um sitemap com todas as páginas e receitas

import { MetadataRoute } from 'next';
import { getAllRecipes } from '@/lib/recipes';
import { getAllCuriosidades } from '@/lib/curiosidades';
import { getAllEpisodios } from '@/lib/series';

export default function sitemap(): MetadataRoute.Sitemap {
  // Obter todas as receitas
  const recipes = getAllRecipes();
  // Obter todas as curiosidades
  const curiosidades = getAllCuriosidades();
  // Obter todos os episódios das séries/guias
  const episodios = getAllEpisodios();

  // URLs estáticas
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: 'https://receitas-deliciosas.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://receitas-deliciosas.com/receitas',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://receitas-deliciosas.com/curiosidades',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://receitas-deliciosas.com/guias',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://receitas-deliciosas.com/sobre',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://receitas-deliciosas.com/politica-privacidade',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://receitas-deliciosas.com/termos-uso',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://receitas-deliciosas.com/politica-cookies',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // URLs dinâmicas das receitas
  const recipeUrls: MetadataRoute.Sitemap = recipes.map((recipe) => ({
    url: `https://receitas-deliciosas.com/receitas/${recipe.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // URLs dinâmicas das curiosidades
  const curiosidadeUrls: MetadataRoute.Sitemap = curiosidades.map((c) => ({
    url: `https://receitas-deliciosas.com/curiosidades/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // URLs dinâmicas dos episódios das séries/guias
  const guiaUrls: MetadataRoute.Sitemap = episodios.map((e) => ({
    url: `https://receitas-deliciosas.com/guias/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Combinar todas as URLs
  return [...staticUrls, ...recipeUrls, ...curiosidadeUrls, ...guiaUrls];
}
