// Componente de conteúdo das receitas
// Separado para usar useSearchParams com Suspense

'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getAllRecipes, getAllCategories } from '@/lib/recipes';
import RecipeCard from '@/components/RecipeCard';
import { Search } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export default function RecipesContent() {
  // Obter query params
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('categoria') || '';
  const queryParam = searchParams.get('q') || '';

  // Obter dados
  const recipes = getAllRecipes();
  const categories = getAllCategories();

  // Estados para filtro e busca
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(queryParam);

  // Sincronizar categoria vinda da URL
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Sincronizar busca vinda da URL
  useEffect(() => {
    if (queryParam) {
      setSearchTerm(queryParam);
    }
  }, [queryParam]);

  // Filtrar receitas baseado em categoria e busca
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    if (selectedCategory) {
      filtered = filtered.filter(
        (recipe) => recipe.categoria === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (recipe) =>
          recipe.titulo.toLowerCase().includes(lowerTerm) ||
          recipe.descricao.toLowerCase().includes(lowerTerm) ||
          recipe.ingredientes.some((ing) =>
            ing.item.toLowerCase().includes(lowerTerm)
          )
      );
    }

    return filtered;
  }, [recipes, selectedCategory, searchTerm]);

  return (
    <>
      {/* Cabeçalho */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Todas as Receitas</h1>
          <p className="text-amber-100">
            Explore nossas {recipes.length} receitas originais e deliciosas
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Barra de busca */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar receita por nome ou ingrediente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && searchTerm.trim()) {
                  router.push(`/busca?q=${encodeURIComponent(searchTerm.trim())}`);
                }
              }}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>
        </div>

        {/* Filtro de categorias */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Filtrar por Categoria</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === null
                  ? 'bg-amber-700 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-amber-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Espaço reservado para anúncio - Listagem de receitas */}
        <AdBanner slot="receitas-lista-topo" format="horizontal" className="mb-8" />

        {/* Grid de receitas */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Nenhuma receita encontrada com os critérios selecionados.
            </p>
          </div>
        )}

        {/* Espaço reservado para anúncio - Final da listagem de receitas */}
        <AdBanner slot="receitas-lista-final" format="horizontal" className="mt-8" />

      </div>
    </>
  );
}
