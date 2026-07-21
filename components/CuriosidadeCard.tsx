// Componente de card de curiosidade
// Exibe preview de uma curiosidade/dica de culinária com imagem, categoria e resumo

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Curiosidade } from '@/lib/curiosidades';

interface CuriosidadeCardProps {
  curiosidade: Curiosidade;
}

export default function CuriosidadeCard({ curiosidade }: CuriosidadeCardProps) {
  return (
    // Link envolve todo o card, levando para a página de detalhe
    <Link href={`/curiosidades/${curiosidade.slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer h-full flex flex-col border border-stone-100 hover:-translate-y-1">
        {/* Imagem com zoom suave no hover */}
        <div className="relative w-full h-52 overflow-hidden bg-stone-100">
          <Image
            src={curiosidade.imagem}
            alt={curiosidade.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
          />
          {/* Gradiente para dar profundidade na base da imagem */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>

          {/* Emoji em destaque */}
          <div className="absolute top-3 left-3 text-3xl drop-shadow-md">
            {curiosidade.emoji}
          </div>

          {/* Selo de categoria */}
          <div className="absolute bottom-3 left-3 bg-amber-600/95 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {curiosidade.categoria}
          </div>
        </div>

        {/* Conteúdo textual do card */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-stone-800 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
            {curiosidade.titulo}
          </h3>

          <p className="text-sm text-stone-500 mb-4 line-clamp-3 flex-1">
            {curiosidade.resumo}
          </p>

          {/* Chamada visual para leitura */}
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 group-hover:gap-2.5 transition-all">
            Ler curiosidade
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
