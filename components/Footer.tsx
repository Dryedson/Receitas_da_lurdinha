// Componente de rodapé
// Contém links importantes, informações de contato e aviso de AdSense

import Link from 'next/link';
import { Heart, Share2, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid de conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sobre Nós</h3>
            <p className="text-sm">
              Receitas da Lurdinha é um site dedicado a compartilhar receitas originais e deliciosas para sua cozinha. Aqui você encontra o toque especial da Lurdinha em cada receita.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/receitas" className="hover:text-orange-500 transition">
                  Receitas
                </Link>
              </li>
              <li>
                <Link href="/curiosidades" className="hover:text-orange-500 transition">
                  Curiosidades
                </Link>
              </li>
              <li>
                <Link href="/guias" className="hover:text-orange-500 transition">
                  Guias
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-orange-500 transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-orange-500 transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Políticas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politica-privacidade" className="hover:text-orange-500 transition">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="hover:text-orange-500 transition">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:text-orange-500 transition">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-orange-500 transition"
                aria-label="Compartilhar"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition"
                aria-label="Favoritar"
              >
                <Heart size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-stone-700 pt-8">
          {/* Aviso de anúncios */}
          <p className="text-xs text-stone-500 mb-4">
            Este site contém anúncios do Google AdSense. Ao usar este site, você concorda com nossa Política de Privacidade e Termos de Uso.
          </p>

          {/* Copyright */}
          <p className="text-center text-sm text-stone-500">
            &copy; {currentYear} Receitas da Lurdinha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
