// Componente de card de receita
// Exibe preview da receita com imagem, título e informações básicas

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users } from 'lucide-react';
import { Recipe } from '@/lib/recipes';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/receitas/${recipe.slug}`} className="group block h-full">
      {/* Card com cantos suaves, sombra delicada e elevação no hover */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer h-full flex flex-col border border-stone-100 hover:-translate-y-1">
        {/* Imagem da receita com efeito de zoom suave no hover */}
        <div className="relative w-full h-52 overflow-hidden bg-stone-100">
          <Image
            src={recipe.imagem}
            alt={recipe.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
          />
          {/* Gradiente sutil na base da imagem para dar profundidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          {/* Badge de dificuldade — translúcido e elegante */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm capitalize">
            {recipe.dificuldade}
          </div>

          {/* Badge de categoria sobre a imagem */}
          <div className="absolute bottom-3 left-3 bg-amber-600/95 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {recipe.categoria}
          </div>
        </div>

        {/* Conteúdo do card */}
        <div className="p-5 flex flex-col flex-1">
          {/* Título com transição de cor no hover */}
          <h3 className="text-lg font-bold text-stone-800 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
            {recipe.titulo}
          </h3>

          {/* Descrição */}
          <p className="text-sm text-stone-500 mb-4 line-clamp-2 flex-1">
            {recipe.descricao}
          </p>

          {/* Informações de tempo e porções */}
          <div className="flex items-center gap-4 text-sm text-stone-600 border-t border-stone-100 pt-4">
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-amber-600" />
              <span>{recipe.tempoTotal} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={16} className="text-amber-600" />
              <span>{recipe.porcoes} porções</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
