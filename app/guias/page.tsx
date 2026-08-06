// Página de listagem dos Guias/Séries para iniciantes
// Agrupa os episódios por série, incentivando quem está começando na cozinha

import type { Metadata } from 'next';
import { getAllSeries } from '@/lib/series';
import EpisodioCard from '@/components/EpisodioCard';
import { AdBanner } from '@/components/ads/AdBanner';

// Metadados específicos desta página para SEO
export const metadata: Metadata = {
  title: 'Guias para Iniciantes - Receitas da Lurdinha',
  description:
    'Séries de conteúdo para quem está começando na cozinha: aprenda o básico sem medo e faça sobremesas rápidas em poucos minutos.',
};

export default function GuiasPage() {
  // Obtém todas as séries com seus episódios
  const series = getAllSeries();

  return (
    <div className="min-h-screen">
      {/* Cabeçalho da página */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Guias para Iniciantes</h1>
          <p className="text-emerald-100">
            Cozinhar sem medo! Séries com o passo a passo que encoraja quem está começando
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Espaço reservado para anúncio - Listagem de guias */}
        <AdBanner slot="guias-lista-topo" format="horizontal" className="mb-8" />

        {/* Cada série vira um bloco com seus episódios */}
        <div className="space-y-16">
          {series.map((serie) => (
            <section key={serie.id}>
              {/* Cabeçalho da série */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{serie.emoji}</span>
                  <h2 className="text-3xl font-bold text-stone-800">{serie.titulo}</h2>
                </div>
                <p className="text-stone-600 text-lg max-w-3xl">{serie.descricao}</p>
              </div>

              {/* Grade de episódios da série */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serie.episodios.map((episodio) => (
                  <EpisodioCard
                    key={episodio.slug}
                    episodio={episodio}
                    serieTitulo={serie.titulo}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
