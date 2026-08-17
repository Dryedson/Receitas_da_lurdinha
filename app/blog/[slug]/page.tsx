// Página individual de artigo do blog

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import { getAllRecipes } from '@/lib/recipes';
import { AdBanner } from '@/components/ads/AdBanner';
import { DisqusComments } from '@/components/DisqusComments';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Obter receitas relacionadas
  const recipesRelacionadas = post.receitasRelacionadas
    ? post.receitasRelacionadas
        .map((id) => getAllRecipes().find((r) => r.id === id))
        .filter((r) => r !== undefined)
    : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-orange-600 hover:text-orange-700">
            Início
          </Link>
          {' > '}
          <Link href="/blog" className="text-orange-600 hover:text-orange-700">
            Blog
          </Link>
          {' > '}
          <span className="text-gray-600">{post.titulo}</span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Cabeçalho do artigo */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.categoria}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.titulo}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.descricao}</p>

          {/* Metadados */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.autor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.data).toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.tempoLeitura} minutos de leitura</span>
            </div>
          </div>
        </div>

        {/* Imagem do artigo */}
        <div className="mb-8">
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={post.imagem}
              alt={post.titulo}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Espaço reservado para anúncio - Topo do artigo */}
        <AdBanner slot="blog-detalhe-topo" format="horizontal" className="mb-8" />

        {/* Conteúdo do artigo */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {post.conteudo.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Espaço reservado para anúncio - Meio do artigo */}
        <AdBanner slot="blog-detalhe-meio" format="rectangle" className="mb-8" />

        {/* Receitas relacionadas */}
        {recipesRelacionadas.length > 0 && (
          <div className="bg-orange-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Receitas Relacionadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recipesRelacionadas.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/receitas/${recipe.slug}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative w-full h-40 bg-gray-200">
                    <Image
                      src={recipe.imagem}
                      alt={recipe.titulo}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-orange-600 font-semibold mb-1">{recipe.categoria}</p>
                    <h4 className="text-sm font-bold text-gray-800 line-clamp-2">{recipe.titulo}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Seção de comentários */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Comentários</h3>
          <DisqusComments
            identifier={`blog-${post.id}`}
            title={post.titulo}
            url={`https://receitasdalurdinha.com.br/blog/${post.slug}`}
          />
        </div>

        {/* Botão voltar */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition"
          >
            <ArrowLeft size={20} />
            Voltar para Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
