// Página de listagem do blog - Artigos sobre culinária e técnicas

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts, getAllBlogCategories } from '@/lib/blog';
import { AdBanner } from '@/components/ads/AdBanner';
import { Search, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Receitas da Lurdinha',
  description:
    'Artigos sobre técnicas culinárias, dicas de cozinha e histórias de receitas. Aprenda com a Lurdinha.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllBlogCategories();

  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog da Lurdinha</h1>
          <p className="text-orange-100 text-lg">
            Artigos sobre técnicas culinárias, dicas de cozinha e histórias de receitas
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Espaço reservado para anúncio - Topo do blog */}
        <AdBanner slot="blog-lista-topo" format="horizontal" className="mb-8" />

        {/* Filtro por categoria */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Categorias</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              Todos
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?categoria=${encodeURIComponent(category)}`}
                className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid de artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {/* Imagem do artigo */}
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src={post.imagem}
                  alt={post.titulo}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.categoria}
                  </span>
                </div>
              </div>

              {/* Conteúdo do artigo */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {post.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.descricao}
                </p>

                {/* Metadados */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.data).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.tempoLeitura} min
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Espaço reservado para anúncio - Final do blog */}
        <AdBanner slot="blog-lista-final" format="horizontal" className="mb-8" />
      </div>
    </div>
  );
}
