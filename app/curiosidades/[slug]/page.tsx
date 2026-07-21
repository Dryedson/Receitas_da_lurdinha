// Página individual de uma curiosidade/dica de culinária
// Exibe o conteúdo completo: introdução, seções, imagem e chamada para ação (CTA)

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { getAllCuriosidades, getCuriosidadeBySlug } from '@/lib/curiosidades';

interface PageProps {
  // No Next mais recente, params é uma Promise que precisa ser aguardada
  params: Promise<{ slug: string }>;
}

// Gera as rotas estáticas para todas as curiosidades (melhor performance/SEO)
export async function generateStaticParams() {
  const curiosidades = getAllCuriosidades();
  return curiosidades.map((c) => ({ slug: c.slug }));
}

// Gera metadados dinâmicos por curiosidade (título e descrição para SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const curiosidade = getCuriosidadeBySlug(slug);

  if (!curiosidade) {
    return { title: 'Curiosidade não encontrada - Receitas da Lurdinha' };
  }

  return {
    title: `${curiosidade.titulo} - Receitas da Lurdinha`,
    description: curiosidade.resumo,
  };
}

export default async function CuriosidadePage({ params }: PageProps) {
  // Resolve a Promise dos params e busca a curiosidade pelo slug
  const { slug } = await params;
  const curiosidade = getCuriosidadeBySlug(slug);

  // Se não existir, retorna página 404
  if (!curiosidade) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb de navegação */}
      <div className="bg-stone-100 px-4 py-3">
        <div className="max-w-4xl mx-auto text-sm">
          <Link href="/" className="text-amber-700 hover:text-amber-800">
            Início
          </Link>
          {' > '}
          <Link href="/curiosidades" className="text-amber-700 hover:text-amber-800">
            Curiosidades
          </Link>
          {' > '}
          <span className="text-stone-600">{curiosidade.titulo}</span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Selo de categoria + emoji */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{curiosidade.emoji}</span>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {curiosidade.categoria}
          </span>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
          {curiosidade.titulo}
        </h1>

        {/* Imagem de destaque */}
        <div className="relative w-full h-80 md:h-96 bg-stone-200 rounded-2xl overflow-hidden mb-8">
          <Image
            src={curiosidade.imagem}
            alt={curiosidade.titulo}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Introdução */}
        <p className="text-lg text-stone-700 leading-relaxed mb-8">
          {curiosidade.introducao}
        </p>

        {/* Seções do conteúdo */}
        <div className="space-y-8">
          {curiosidade.secoes.map((secao, index) => (
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
                      {/* Número do passo/dica */}
                      <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-full bg-amber-500 text-white font-bold">
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

        {/* Chamada para ação (CTA) — estimula comentários e engajamento */}
        <div className="mt-10 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <MessageCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <p className="text-lg font-semibold text-amber-900">{curiosidade.cta}</p>
          </div>
        </div>

        {/* Botão para voltar à listagem */}
        <div className="text-center mt-10">
          <Link
            href="/curiosidades"
            className="inline-flex items-center gap-2 bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition"
          >
            <ArrowLeft size={20} />
            Ver todas as curiosidades
          </Link>
        </div>
      </article>
    </div>
  );
}
