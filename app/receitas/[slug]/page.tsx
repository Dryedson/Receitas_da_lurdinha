// Página individual de receita
// Exibe todos os detalhes da receita com imagem, ingredientes e modo de preparo

import Image from 'next/image';
import Link from 'next/link';
import { getRecipeBySlug, getAllRecipes } from '@/lib/recipes';
import { Clock, Users, ChefHat } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  // Gerar parâmetros estáticos para todas as receitas
  const recipes = getAllRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipePage({ params }: PageProps) {
  // Resolver a Promise dos params
  const { slug } = await params;
  // Obter receita pelo slug
  const recipe = getRecipeBySlug(slug);

  // Se receita não existir, retornar 404
  if (!recipe) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-orange-600 hover:text-orange-700">
            Início
          </Link>
          {' > '}
          <Link href="/receitas" className="text-orange-600 hover:text-orange-700">
            Receitas
          </Link>
          {' > '}
          <span className="text-gray-600">{recipe.titulo}</span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Cabeçalho da receita */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {recipe.categoria}
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
              {recipe.dificuldade}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.titulo}</h1>
          <p className="text-xl text-gray-600 mb-6">{recipe.descricao}</p>

          {/* Informações de tempo e porções */}
          <div className="grid grid-cols-3 gap-4 bg-orange-50 p-6 rounded-lg">
            <div className="text-center">
              <Clock className="text-orange-500 mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-600">Tempo de Preparo</p>
              <p className="text-xl font-bold text-gray-800">{recipe.tempoPreparo}min</p>
            </div>
            <div className="text-center">
              <ChefHat className="text-orange-500 mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-600">Tempo Total</p>
              <p className="text-xl font-bold text-gray-800">{recipe.tempoTotal}min</p>
            </div>
            <div className="text-center">
              <Users className="text-orange-500 mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-600">Porções</p>
              <p className="text-xl font-bold text-gray-800">{recipe.porcoes}</p>
            </div>
          </div>
        </div>

        {/* Imagem da receita */}
        <div className="mb-8">
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={recipe.imagem}
              alt={recipe.titulo}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Anúncio Google AdSense */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded-lg p-4 text-center text-gray-600 min-h-[250px] flex items-center justify-center">
            <p className="text-sm">Espaço reservado para anúncios</p>
          </div>
        </div>

        {/* Grid com ingredientes e modo de preparo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Ingredientes */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-orange-500 rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredientes</h2>
              <ul className="space-y-3">
                {recipe.ingredientes.map((ing, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-orange-500 rounded cursor-pointer"
                      id={`ing-${index}`}
                    />
                    <label htmlFor={`ing-${index}`} className="cursor-pointer flex-1">
                      <span className="font-semibold text-gray-800">{ing.quantidade}</span>
                      <span className="text-gray-600"> {ing.item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modo de Preparo */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Modo de Preparo</h2>
            <div className="space-y-6">
              {recipe.modoPreparo.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-500 text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Anúncio Google AdSense */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded-lg p-4 text-center text-gray-600 min-h-[250px] flex items-center justify-center">
            <p className="text-sm">Espaço reservado para anúncios</p>
          </div>
        </div>

        {/* Dicas */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">💡 Dicas Importantes</h3>
          <ul className="space-y-2">
            {recipe.dicas.map((dica, index) => (
              <li key={index} className="text-blue-800 flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>{dica}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão voltar */}
        <div className="text-center">
          <Link
            href="/receitas"
            className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition"
          >
            ← Voltar para Receitas
          </Link>
        </div>
      </div>
    </div>
  );
}
