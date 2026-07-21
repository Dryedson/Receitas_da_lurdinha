// Componente de card de episódio de uma série/guia
// Exibe preview de um episódio com imagem, selo da série, número do episódio e resumo

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Episodio } from '@/lib/series';

interface EpisodioCardProps {
  episodio: Episodio;
  // Nome da série exibido no selo (passado pelo componente pai)
  serieTitulo: string;
}

export default function EpisodioCard({ episodio, serieTitulo }: EpisodioCardProps) {
  return (
    // Link envolve todo o card, levando para a página de detalhe do episódio
    <Link href={`/guias/${episodio.slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer h-full flex flex-col border border-stone-100 hover:-translate-y-1">
        {/* Imagem com zoom suave no hover */}
        <div className="relative w-full h-52 overflow-hidden bg-stone-100">
          <Image
            src={episodio.imagem}
            alt={episodio.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradiente para dar profundidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>

          {/* Emoji em destaque */}
          <div className="absolute top-3 left-3 text-3xl drop-shadow-md">
            {episodio.emoji}
          </div>

          {/* Selo com série + número do episódio */}
          <div className="absolute bottom-3 left-3 bg-emerald-600/95 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {serieTitulo} · Ep. {episodio.numero}
          </div>
        </div>

        {/* Conteúdo textual do card */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-stone-800 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
            {episodio.titulo}
          </h3>

          <p className="text-sm text-stone-500 mb-4 line-clamp-3 flex-1">
            {episodio.resumo}
          </p>

          {/* Chamada visual para leitura */}
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 group-hover:gap-2.5 transition-all">
            Ver episódio
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
