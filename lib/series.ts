// Banco de dados das Séries/Guias de conteúdo (foco em iniciantes)
// Organiza o conteúdo em séries temáticas, cada uma com vários episódios.
// Alguns episódios são técnicas (dicas) e outros são receitas rápidas.

// Estrutura de um episódio dentro de uma série
export interface Episodio {
  numero: number; // número do episódio dentro da série (ex.: 1, 2, 3...)
  slug: string; // usado na URL (ex.: /guias/arroz-soltinho-de-cinema)
  titulo: string; // título chamativo do episódio
  emoji: string; // emoji usado como selo visual
  resumo: string; // texto curto exibido nos cards (teaser)
  imagem: string; // caminho da foto em /public/images
  introducao: string; // parágrafo de abertura
  ingredientes?: string[]; // opcional: lista de ingredientes (episódios-receita)
  passos?: string[]; // opcional: modo de preparo passo a passo
  // Seções livres de conteúdo (usadas em episódios de técnica/dica)
  secoes?: {
    subtitulo?: string;
    texto?: string;
    itens?: string[];
  }[];
  cta: string; // chamada para ação ao final (estimula engajamento)
}

// Estrutura de uma série (agrupa episódios sob um tema)
export interface Serie {
  id: string;
  slug: string; // identificador da série
  titulo: string; // nome da série
  emoji: string; // emoji da série
  descricao: string; // objetivo/proposta da série
  episodios: Episodio[]; // lista de episódios que compõem a série
}

// Lista de séries disponíveis no site
export const series: Serie[] = [
  {
    id: '1',
    slug: 'cozinha-sem-medo',
    titulo: 'Cozinha Sem Medo',
    emoji: '🎓',
    descricao:
      'Para quem está começando: o básico que ninguém te ensinou, sem ansiedade e com o passo a passo que realmente funciona.',
    episodios: [
      {
        numero: 1,
        slug: 'arroz-soltinho-de-cinema',
        titulo: 'O Arroz Soltinho de Cinema',
        emoji: '🍚',
        resumo:
          'Chega de arroz "unido venceremos"! O segredo para o arroz soltinho não está na marca, e sim num detalhe simples.',
        imagem: '/images/guia-arroz.jpg',
        introducao:
          'Cozinhar arroz parece fácil, mas muita gente ainda sofre com o arroz "unido venceremos" (o famoso papa). O segredo não está na marca do arroz, mas no detalhe!',
        secoes: [
          {
            subtitulo: 'O segredo',
            texto:
              'Refogue bem os grãos no óleo com alho antes de colocar a água. Isso cria uma camada protetora que impede o amido de sair e grudar tudo.',
          },
          {
            subtitulo: 'A medida certa',
            texto: 'Use 2 xícaras de água fervente para cada 1 xícara de arroz.',
          },
          {
            subtitulo: '⚠️ A regra de ouro',
            texto:
              'Colocou a água? Não mexa mais! Deixe a panela semi-tampada e o fogo baixo fazerem todo o trabalho por você.',
          },
        ],
        cta: 'Qual o seu maior trauma na cozinha? Conta aqui que eu te ajudo no próximo post!',
      },
      {
        numero: 2,
        slug: 'refogado-perfeito',
        titulo: 'O Refogado Perfeito (a base de tudo)',
        emoji: '🧅',
        resumo:
          'Sabe por que a comida da vó é tão cheirosa? Tudo começa no refogado — e existe uma ordem certa para fazer.',
        imagem: '/images/guia-refogado.jpg',
        introducao:
          'Sabe por que a comida da vó é tão cheirosa? Tudo começa no refogado. Mas tem uma ordem certa! Muita gente coloca o alho e a cebola juntos, mas o alho queima muito mais rápido que a cebola.',
        secoes: [
          {
            subtitulo: 'O jeito certo',
            texto:
              'Comece pela cebola. Quando ela ficar transparente, aí sim você joga o alho. Assim, você extrai o melhor sabor dos dois sem deixar aquele gostinho de queimado amargo.',
          },
          {
            subtitulo: '💡 Dica extra',
            texto:
              'Uma pitadinha de sal na cebola ajuda ela a soltar água e cozinhar mais rápido sem queimar.',
          },
        ],
        cta: 'Gostou da aula de hoje? Salve para não esquecer na hora do jantar!',
      },
    ],
  },
  {
    id: '2',
    slug: 'pisquei-ficou-pronto',
    titulo: 'Pisquei, Ficou Pronto',
    emoji: '🏃',
    descricao:
      'Sobremesas irresistíveis em até 5 minutos, com pouquíssimos ingredientes e zero complicação. Desejo imediato!',
    episodios: [
      {
        numero: 1,
        slug: 'mousse-de-limao-3-ingredientes',
        titulo: 'Mousse de Limão "3 Ingredientes"',
        emoji: '🍋',
        resumo:
          'Bateu vontade de doce e não quer sujar a cozinha? Essa mousse engrossa sozinha, sem fogo e sem batedeira.',
        imagem: '/images/guia-mousse-limao.jpg',
        introducao:
          'Bateu aquela vontade de um doce depois do almoço e não quer sujar a cozinha toda? Essa mousse é a salvação!',
        ingredientes: [
          '1 lata de leite condensado',
          '1 caixinha de creme de leite',
          'Suco de 3 ou 4 limões',
        ],
        passos: [
          'Misture o leite condensado com o creme de leite.',
          'Vá despejando o suco de limão aos poucos, mexendo com uma colher ou batedor.',
          'A mágica acontece na hora: a mistura engrossa sozinha, sem precisar de fogo ou batedeira!',
          'Leve ao congelador por 5 minutinhos e sirva. É cremoso, azedinho e perfeito.',
        ],
        cta: 'Quem você marcar aqui vai ter que fazer essa sobremesa pra você hoje!',
      },
      {
        numero: 2,
        slug: 'brownie-de-caneca',
        titulo: 'O Melhor Brownie de Caneca da Vida',
        emoji: '☕',
        resumo:
          'Sobremesa individual, sem bagunça e em menos de 2 minutos no micro-ondas. Com direito a vulcão de chocolate!',
        imagem: '/images/guia-brownie-caneca.jpg',
        introducao:
          'Sobremesa individual, sem bagunça e em menos de 2 minutos? Sim, é possível! Tudo é feito dentro da própria caneca.',
        ingredientes: [
          '2 colheres (sopa) de farinha',
          '2 colheres (sopa) de açúcar',
          '2 colheres (sopa) de chocolate em pó (ou cacau)',
          '1 colher (sopa) de óleo',
          '2 colheres (sopa) de leite',
        ],
        passos: [
          'No fundo de uma caneca, misture a farinha, o açúcar e o chocolate em pó.',
          'Adicione o óleo e o leite e misture bem até ficar homogêneo.',
          'Leve ao micro-ondas por cerca de 1 minuto (o tempo varia conforme a potência). O centro deve ficar levemente úmido.',
        ],
        secoes: [
          {
            subtitulo: '✨ Dica de mestre',
            texto:
              'Coloque um quadradinho de chocolate no meio da massa antes de ligar o micro-ondas. Ele vai derreter e virar um vulcão!',
          },
        ],
        cta: 'Curte se você também é do time que ama um docinho rápido!',
      },
    ],
  },
];

// Retorna todas as séries cadastradas
export function getAllSeries(): Serie[] {
  return series;
}

// Retorna uma série pelo seu slug
export function getSerieBySlug(slug: string): Serie | undefined {
  return series.find((s) => s.slug === slug);
}

// Retorna uma lista "achatada" com todos os episódios (útil para sitemap/rotas)
export function getAllEpisodios(): Episodio[] {
  return series.flatMap((s) => s.episodios);
}

// Busca um episódio pelo slug e devolve também a série a que pertence
// (útil na página de detalhe para exibir o contexto da série)
export function getEpisodioBySlug(
  slug: string
): { serie: Serie; episodio: Episodio } | undefined {
  for (const serie of series) {
    const episodio = serie.episodios.find((e) => e.slug === slug);
    if (episodio) return { serie, episodio };
  }
  return undefined;
}
