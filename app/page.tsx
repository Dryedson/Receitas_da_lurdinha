// Página inicial - Design profissional e elegante com logo como fundo

import Link from 'next/link';
import { getAllRecipes, getAllCategories } from '@/lib/recipes';
import { getAllCuriosidades } from '@/lib/curiosidades';
import { getAllSeries } from '@/lib/series';
import { pickWeekly } from '@/lib/destaques';
import RecipeCard from '@/components/RecipeCard';
import CuriosidadeCard from '@/components/CuriosidadeCard';
import EpisodioCard from '@/components/EpisodioCard';
import { ChefHat, Clock, Sparkles, ArrowRight, CalendarDays, GraduationCap } from 'lucide-react';

// Revalida a página a cada 24h. Como os destaques dependem do número da semana,
// isso garante que a troca automática (a cada 7 dias) seja refletida sem rebuild manual.
export const revalidate = 86400;

export default function Home() {
  const recipes = getAllRecipes();
  const categories = getAllCategories();
  const curiosidades = getAllCuriosidades();
  const featuredRecipes = recipes.slice(0, 6);
  // Curiosidades em destaque exibidas na home (as 3 primeiras)
  const featuredCuriosidades = curiosidades.slice(0, 3);
  // Destaques da semana: 1 receita + 1 curiosidade escolhidas de forma
  // determinística pelo número da semana (trocam automaticamente a cada 7 dias)
  const receitaDaSemana = pickWeekly(recipes);
  const curiosidadeDaSemana = pickWeekly(curiosidades);
  // Guias para iniciantes: primeiros episódios de todas as séries (achatados)
  // limitados a 3 para o destaque na home
  const featuredEpisodios = getAllSeries().flatMap((serie) =>
    serie.episodios.map((episodio) => ({ episodio, serieTitulo: serie.titulo }))
  ).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section com Logo como Fundo */}
      <section 
        className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/logo-lurdinha.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Conteúdo */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Receitas da Lurdinha
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md leading-relaxed">
            Descubra receitas originais, dicas e curiosidades da cozinha com o toque especial da Lurdinha
          </p>
          
          <p className="text-lg text-amber-200 mb-12 drop-shadow-md">
            Desde bolos irresistíveis até pratos principais sofisticados
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/receitas"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-4 px-10 rounded-lg hover:from-amber-600 hover:to-orange-700 transition transform hover:scale-105 shadow-lg"
            >
              Explorar Receitas
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-10 rounded-lg hover:bg-white/30 transition border border-white/50"
            >
              Conheça a Lurdinha
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Destaques da Semana - trocam automaticamente a cada 7 dias */}
      <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Selo indicando a rotação semanal */}
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <CalendarDays size={16} />
              Novidades toda semana
            </span>
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Destaques da Semana</h2>
            <p className="text-stone-600 text-lg">
              Uma receita e uma curiosidade selecionadas a dedo — trocam a cada 7 dias!
            </p>
          </div>

          {/* Grade com a receita e a curiosidade da semana lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Receita da semana */}
            {receitaDaSemana && (
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-stone-800 mb-4">
                  <ChefHat size={22} className="text-amber-600" />
                  Receita da Semana
                </h3>
                <RecipeCard recipe={receitaDaSemana} />
              </div>
            )}

            {/* Curiosidade da semana */}
            {curiosidadeDaSemana && (
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-stone-800 mb-4">
                  <Sparkles size={22} className="text-amber-600" />
                  Curiosidade da Semana
                </h3>
                <CuriosidadeCard curiosidade={curiosidadeDaSemana} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Anúncio Google AdSense */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-stone-100 rounded-xl p-4 text-center text-stone-500 min-h-[250px] flex items-center justify-center border border-stone-200">
          <p className="text-sm">Espaço reservado para anúncios</p>
        </div>
      </div>

      {/* Receitas em Destaque */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Receitas em Destaque</h2>
            <p className="text-stone-600 text-lg">As melhores receitas da Lurdinha</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/receitas"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:from-amber-600 hover:to-orange-700 transition"
            >
              Ver Todas as Receitas
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Curiosidades da Cozinha em destaque */}
      <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Curiosidades da Cozinha</h2>
            <p className="text-stone-600 text-lg">Dicas, truques e segredos que facilitam o seu dia a dia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCuriosidades.map((curiosidade) => (
              <CuriosidadeCard key={curiosidade.id} curiosidade={curiosidade} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/curiosidades"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:from-amber-600 hover:to-orange-700 transition"
            >
              Ver Todas as Curiosidades
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Guias para Iniciantes - séries que encorajam quem está começando */}
      <section className="py-16 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Selo de destaque para iniciantes */}
            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <GraduationCap size={16} />
              Para quem está começando
            </span>
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Cozinhe Sem Medo</h2>
            <p className="text-stone-600 text-lg">
              Séries com o passo a passo que ninguém te ensina — do arroz soltinho à sobremesa em 5 minutos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEpisodios.map(({ episodio, serieTitulo }) => (
              <EpisodioCard
                key={episodio.slug}
                episodio={episodio}
                serieTitulo={serieTitulo}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/guias"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition"
            >
              Ver Todos os Guias
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Por que escolher nossas receitas */}
      <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Por que Escolher Nossas Receitas?</h2>
            <p className="text-stone-600 text-lg">Qualidade, originalidade e excelência</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl hover:shadow-xl transition duration-300 border border-stone-200 hover:border-amber-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6 group-hover:scale-110 transition">
                <ChefHat size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">100% Originais</h3>
              <p className="text-stone-600 leading-relaxed">
                Todas as receitas são criadas e testadas pela Lurdinha. Conteúdo único e exclusivo.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl hover:shadow-xl transition duration-300 border border-stone-200 hover:border-amber-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6 group-hover:scale-110 transition">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Fácil de Seguir</h3>
              <p className="text-stone-600 leading-relaxed">
                Instruções claras, detalhadas e bem organizadas. Perfeito para cozinheiros de todos os níveis.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl hover:shadow-xl transition duration-300 border border-stone-200 hover:border-amber-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6 group-hover:scale-110 transition">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Qualidade Premium</h3>
              <p className="text-stone-600 leading-relaxed">
                Receitas testadas, refinadas e com dicas práticas para garantir o melhor resultado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anúncio Google AdSense */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-stone-100 rounded-xl p-4 text-center text-stone-500 min-h-[250px] flex items-center justify-center border border-stone-200">
          <p className="text-sm">Espaço reservado para anúncios</p>
        </div>
      </div>

      {/* Categorias de Receitas - movida para o final da página */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Categorias de Receitas</h2>
            <p className="text-stone-600 text-lg">Encontre receitas por categoria</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/receitas?categoria=${encodeURIComponent(category)}`}
                className="group relative bg-white p-6 rounded-xl text-center hover:shadow-xl transition duration-300 border border-stone-200 hover:border-amber-400"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition"></div>
                <p className="relative font-semibold text-stone-700 group-hover:text-amber-700 transition">
                  {category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para Cozinhar?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Escolha uma receita e impressione com o toque especial da Lurdinha
          </p>
          <Link
            href="/receitas"
            className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold py-4 px-10 rounded-lg hover:bg-amber-50 transition transform hover:scale-105 shadow-lg"
          >
            Explorar Receitas Agora
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
