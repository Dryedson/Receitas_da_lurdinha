// Componente de cabeçalho do site
// Contém navegação principal, logo e busca

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Função que dispara a busca ao pressionar Enter ou clicar no botão
  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(searchTerm.trim())}`;
    }
  };

  return (
    // Header creme translúcido com leve desfoque — mais leve e premium que o gradiente pesado anterior
    <header className="sticky top-0 z-50 bg-[#faf6f0]/90 backdrop-blur-md border-b border-stone-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Logo e navegação principal */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white ring-2 ring-amber-500/30 shadow-sm shrink-0">
              <Image
                src="/logo-lurdinha.png"
                alt="Logo Receitas da Lurdinha"
                fill
                sizes="(max-width: 640px) 48px, 56px"
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block">
              <span className="block text-lg sm:text-xl font-bold text-stone-800 leading-tight">
                Receitas da Lurdinha
              </span>
              <span className="block text-xs text-amber-700 font-medium tracking-wide">
                Sabor de verdade
              </span>
            </span>
          </Link>

          {/* Barra de busca — refinada, com sombra suave e botão de ação */}
          <div className="hidden md:flex flex-1 max-w-md items-center bg-white rounded-full shadow-sm border border-stone-200 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-100 transition overflow-hidden">
            <Search size={18} className="text-stone-400 ml-4 shrink-0" />
            <input
              type="text"
              placeholder="Buscar receita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
              className="flex-1 px-3 py-2.5 outline-none text-sm text-stone-700 bg-transparent placeholder:text-stone-400"
            />
            <button
              onClick={handleSearch}
              className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 transition"
            >
              Buscar
            </button>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-1 shrink-0">
            <Link href="/" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Início
            </Link>
            <Link href="/receitas" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Receitas
            </Link>
            <Link href="/curiosidades" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Curiosidades
            </Link>
            <Link href="/guias" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Guias
            </Link>
            <Link href="/sobre" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Sobre
            </Link>
          </nav>

          {/* Botão menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-stone-700 p-2 rounded-lg hover:bg-amber-50 transition"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Barra de busca mobile */}
        <div className="mt-3 md:hidden flex items-center bg-white rounded-full shadow-sm border border-stone-200 overflow-hidden">
          <Search size={18} className="text-stone-400 ml-4 shrink-0" />
          <input
            type="text"
            placeholder="Buscar receita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            className="flex-1 px-3 py-2.5 outline-none text-sm text-stone-700 bg-transparent placeholder:text-stone-400"
          />
          <button
            onClick={handleSearch}
            className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 transition"
          >
            Buscar
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 flex flex-col gap-1 pb-2">
            <Link href="/" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Início
            </Link>
            <Link href="/receitas" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Receitas
            </Link>
            <Link href="/curiosidades" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Curiosidades
            </Link>
            <Link href="/guias" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Guias
            </Link>
            <Link href="/sobre" className="px-3 py-2 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-700 transition">
              Sobre
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
