// Página de listagem de todas as curiosidades e dicas de culinária

import type { Metadata } from 'next';
import { getAllCuriosidades } from '@/lib/curiosidades';
import CuriosidadeCard from '@/components/CuriosidadeCard';
import { AdBanner } from '@/components/ads/AdBanner';

// Metadados específicos desta página para SEO
export const metadata: Metadata = {
  title: 'Curiosidades e Dicas de Culinária - Receitas da Lurdinha',
  description:
    'Curiosidades, dicas e segredos de cozinha da Lurdinha: truques práticos que facilitam o seu dia a dia na cozinha.',
};

export default function CuriosidadesPage() {
  // Obtém todas as curiosidades cadastradas
  const curiosidades = getAllCuriosidades();

  return (
    <div className="min-h-screen">
      {/* Cabeçalho da página */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Curiosidades da Cozinha</h1>
          <p className="text-amber-100">
            Dicas, truques e segredos que vão transformar o seu jeito de cozinhar
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Espaço reservado para anúncio - Listagem de curiosidades */}
        <AdBanner slot="curiosidades-lista-topo" format="horizontal" className="mb-8" />

        {/* Grid de curiosidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curiosidades.map((curiosidade) => (
            <CuriosidadeCard key={curiosidade.id} curiosidade={curiosidade} />
          ))}
        </div>
      </div>
    </div>
  );
}
