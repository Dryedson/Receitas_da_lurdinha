// Página de resultados de busca
// Exibe receitas filtradas pelo termo de busca passado via query string

import { Suspense } from 'react';
import SearchContent from './SearchContent';
import { Search } from 'lucide-react';

// Componente de loading
function SearchLoading() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Resultados da Busca</h1>
          <p className="text-amber-100">Carregando resultados...</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <Search size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600">Carregando conteúdo...</p>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<SearchLoading />}>
        <SearchContent />
      </Suspense>
    </div>
  );
}
