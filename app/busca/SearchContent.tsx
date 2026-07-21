// Componente de conteúdo da busca
// Separado para usar useSearchParams com Suspense

'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { getAllRecipes } from '@/lib/recipes';
import RecipeCard from '@/components/RecipeCard';
import { Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SearchContent() {
  // Obter parâmetro de busca da URL
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // Obter todas as receitas
  const recipes = getAllRecipes();

  // Filtrar receitas pelo termo de busca
  const results = useMemo(() => {
    if (!query.trim()) {
      return recipes;
    }

    const lowerTerm = query.toLowerCase().trim();

    return recipes.filter((recipe) => {
      // Buscar em título, descrição, categoria e ingredientes
      const matchTitle = recipe.titulo.toLowerCase().includes(lowerTerm);
      const matchDesc = recipe.descricao.toLowerCase().includes(lowerTerm);
      const matchCategory = recipe.categoria.toLowerCase().includes(lowerTerm);
      const matchIngredients = recipe.ingredientes.some((ing) =>
        ing.item.toLowerCase().includes(lowerTerm)
      );
      const matchSteps = recipe.modoPreparo.some((passo) =>
        passo.toLowerCase().includes(lowerTerm)
      );

      return matchTitle || matchDesc || matchCategory || matchIngredients || matchSteps;
    });
  }, [query, recipes]);

  return (
    <>
      {/* Cabeçalho */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Resultados da Busca</h1>
          <p className="text-amber-100">
            {query
              ? `Encontramos ${results.length} resultado(s) para "${query}"`
              : 'Use o campo de busca para encontrar receitas'}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Link voltar */}
        <Link
          href="/receitas"
          className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 mb-8"
        >
          <ArrowLeft size={20} />
          Voltar para todas as receitas
        </Link>

        {/* Resultados */}
        {query.trim() ? (
          <>
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search size={64} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Nenhuma receita encontrada
                </h2>
                <p className="text-gray-600 mb-6">
                  Não encontramos receitas para "{query}". Tente outros termos.
                </p>
                <Link
                  href="/receitas"
                  className="inline-block bg-amber-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-800 transition"
                >
                  Ver todas as receitas
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <Search size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Nenhum termo de busca
            </h2>
            <p className="text-gray-600 mb-6">
              Digite um termo no campo de busca para encontrar receitas.
            </p>
            <Link
              href="/receitas"
              className="inline-block bg-amber-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-800 transition"
            >
              Explorar receitas
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
