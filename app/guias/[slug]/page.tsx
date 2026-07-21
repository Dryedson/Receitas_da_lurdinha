// Página individual de um episódio de série/guia
// Exibe introdução, ingredientes/passos (quando receita), seções (quando técnica) e CTA

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MessageCircle, ShoppingBasket, ListChecks } from 'lucide-react';
import { getAllEpisodios, getEpisodioBySlug } from '@/lib/series';

interface PageProps {
  // No Next mais recente, params é uma Promise que precisa ser aguardada
  params: Promise<{ slug: string }>;
}

// Gera as rotas estáticas para todos os episódios (melhor performance/SEO)
export async function generateStaticParams() {
  return getAllEpisodios().map((e) => ({ slug: e.slug }));
}

// Gera metadados dinâmicos por episódio (título e descrição para SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resultado = getEpisodioBySlug(slug);

  if (!resultado) {
    return { title: 'Episódio não encontrado - Receitas da Lurdinha' };
  }

  return {
    title: `${resultado.episodio.titulo} - ${resultado.serie.titulo}`,
    description: resultado.episodio.resumo,
  };
}

export default async function EpisodioPage({ params }: PageProps) {
  // Resolve a Promise dos params e busca o episódio (com sua série) pelo slug
  const { slug } = await params;
  const resultado = getEpisodioBySlug(slug);

  // Se não existir, retorna página 404
  if (!resultado) {
    notFound();
  }

  const { serie, episodio } = resultado;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb de navegação */}
      <div className="bg-stone-100 px-4 py-3">
        <div className="max-w-4xl mx-auto text-sm">
          <Link href="/" className="text-emerald-700 hover:text-emerald-800">
            Início
          </Link>
          {' > '}
          <Link href="/guias" className="text-emerald-700 hover:text-emerald-800">
            Guias
          </Link>
          {' > '}
          <span className="text-stone-600">{episodio.titulo}</span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Selo da série + número do episódio */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{episodio.emoji}</span>
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {serie.titulo} · Episódio {episodio.numero}
          </span>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
          {episodio.titulo}
        </h1>

        {/* Imagem de destaque */}
        <div className="relative w-full h-80 md:h-96 bg-stone-200 rounded-2xl overflow-hidden mb-8">
          <Image
            src={episodio.imagem}
            alt={episodio.titulo}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Introdução */}
        <p className="text-lg text-stone-700 leading-relaxed mb-8">
          {episodio.introducao}
        </p>

        {/* Ingredientes (exibido apenas em episódios-receita) */}
        {episodio.ingredientes && episodio.ingredientes.length > 0 && (
          <section className="mb-8 bg-emerald-50 rounded-xl p-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-4">
              <ShoppingBasket className="text-emerald-600" size={24} />
              Você vai precisar de
            </h2>
            <ul className="space-y-2">
              {episodio.ingredientes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Modo de preparo (exibido apenas em episódios-receita) */}
        {episodio.passos && episodio.passos.length > 0 && (
          <section className="mb-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-4">
              <ListChecks className="text-emerald-600" size={24} />
              Como fazer
            </h2>
            <ol className="space-y-4">
              {episodio.passos.map((passo, i) => (
                <li key={i} className="flex gap-4">
                  {/* Número do passo */}
                  <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-full bg-emerald-500 text-white font-bold">
                    {i + 1}
                  </div>
                  <p className="text-stone-700 leading-relaxed flex-1 pt-1">{passo}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Seções livres (exibidas em episódios de técnica/dica) */}
        {episodio.secoes && episodio.secoes.length > 0 && (
          <div className="space-y-8">
            {episodio.secoes.map((secao, index) => (
              <section key={index}>
                {secao.subtitulo && (
                  <h2 className="text-2xl font-bold text-stone-800 mb-3">
                    {secao.subtitulo}
                  </h2>
                )}
                {secao.texto && (
                  <p className="text-stone-700 leading-relaxed">{secao.texto}</p>
                )}
                {secao.itens && (
                  <ul className="space-y-4 mt-2">
                    {secao.itens.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-full bg-emerald-500 text-white font-bold">
                          {i + 1}
                        </div>
                        <p className="text-stone-700 leading-relaxed flex-1">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Chamada para ação (CTA) — estimula comentários e engajamento */}
        <div className="mt-10 bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <MessageCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
            <p className="text-lg font-semibold text-emerald-900">{episodio.cta}</p>
          </div>
        </div>

        {/* Botão para voltar à listagem de guias */}
        <div className="text-center mt-10">
          <Link
            href="/guias"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-700 transition"
          >
            <ArrowLeft size={20} />
            Ver todos os guias
          </Link>
        </div>
      </article>
    </div>
  );
}
