// Página de todas as receitas
// Exibe grid com todas as receitas com opções de filtro

import { Suspense } from 'react';
import RecipesContent from './RecipesContent';

// Componente de loading
function RecipesLoading() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Todas as Receitas</h1>
          <p className="text-amber-100">Carregando receitas...</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-gray-600">Carregando conteúdo...</p>
        </div>
      </div>
    </div>
  );
}

export default function RecipesPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<RecipesLoading />}>
        <RecipesContent />
      </Suspense>
    </div>
  );
}
