// Página individual de receita
// Exibe todos os detalhes da receita com imagem, ingredientes e modo de preparo

import Image from 'next/image';
import Link from 'next/link';
import { getRecipeBySlug, getAllRecipes } from '@/lib/recipes';
import { Clock, Users, ChefHat } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';
import { DisqusComments } from '@/components/DisqusComments';
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

        {/* Espaço reservado para anúncio - Topo da receita */}
        <AdBanner slot="receita-detalhe-topo" format="horizontal" className="mb-8" />

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

        {/* Espaço reservado para anúncio - Meio da receita */}
        <AdBanner slot="receita-detalhe-meio" format="rectangle" className="mb-8" />

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

        {/* Veja também... - Receitas relacionadas */}
        {recipe.receitasRelacionadas && recipe.receitasRelacionadas.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Veja também...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recipe.receitasRelacionadas.map((receitaId) => {
                const relatedRecipe = getAllRecipes().find((r) => r.id === receitaId);
                if (!relatedRecipe) return null;
                return (
                  <Link
                    key={relatedRecipe.slug}
                    href={`/receitas/${relatedRecipe.slug}`}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative w-full h-40 bg-gray-200">
                      <Image
                        src={relatedRecipe.imagem}
                        alt={relatedRecipe.titulo}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-orange-600 font-semibold mb-1">{relatedRecipe.categoria}</p>
                      <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2">{relatedRecipe.titulo}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{relatedRecipe.descricao}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Seção de comentários */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Comentários</h3>
          <DisqusComments
            identifier={recipe.id}
            title={recipe.titulo}
            url={`https://receitasdalurdinha.com.br/receitas/${recipe.slug}`}
          />
        </div>

        {/* Botão voltar */}
        <div className="text-center mt-12">
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
