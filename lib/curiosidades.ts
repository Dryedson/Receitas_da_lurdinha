// Banco de dados de curiosidades e dicas de culinária
// Conteúdo original voltado para engajamento (dicas, curiosidades e segredos de cozinha)

// Interface que descreve a estrutura de uma curiosidade
export interface Curiosidade {
  id: string;
  slug: string; // usado na URL (ex.: /curiosidades/parar-de-chorar-cebola)
  titulo: string; // título chamativo do post
  emoji: string; // emoji usado como selo visual nos cards
  categoria: string; // tipo de conteúdo (ex.: "Dica de Utilidade", "Segredo do Chef")
  resumo: string; // texto curto exibido no card (teaser)
  imagem: string; // caminho da foto em /public/images
  introducao: string; // parágrafo de abertura
  // Seções do corpo do texto: podem conter subtítulo, um parágrafo e/ou uma lista
  secoes: {
    subtitulo?: string;
    texto?: string;
    itens?: string[];
  }[];
  cta: string; // chamada para ação (pergunta ao final para estimular comentários)
}

// Lista de curiosidades — cada item é 100% original e pronto para publicação
export const curiosidades: Curiosidade[] = [
  {
    id: '1',
    slug: 'parar-de-chorar-picando-cebola',
    titulo: 'Pare de chorar picando cebola!',
    emoji: '🧅',
    categoria: 'Dica de Utilidade',
    resumo:
      'Chega de terminar o jantar em prantos! Veja 3 truques reais e comprovados para picar cebola sem lágrimas.',
    imagem: '/images/curiosidade-cebola.jpg',
    introducao:
      'Você já tentou de tudo e ainda termina o jantar em prantos? O segredo não é usar óculos de mergulho! A ciência explica: quando cortamos a cebola, liberamos uma enzima que vira gás e reage com a umidade dos nossos olhos.',
    secoes: [
      {
        subtitulo: '3 truques reais que funcionam',
        itens: [
          'Cebola gelada: deixe a cebola na geladeira por 15 minutos antes de cortar. O frio retarda a liberação do gás.',
          'Faca afiada: uma lâmina cega "esmaga" as fibras, liberando mais gás. Uma faca afiada faz um corte limpo.',
          'Água por perto: pique a cebola perto de uma torneira aberta ou coloque um pote com água ao lado da tábua. O gás é atraído pela umidade da água antes de chegar aos seus olhos.',
        ],
      },
    ],
    cta: 'Qual desses você já testou? Ou você tem um segredo de família? Conta pra gente nos comentários!',
  },
  {
    id: '2',
    slug: 'mel-nunca-estraga',
    titulo: 'Você sabia que o Mel é o único alimento que NUNCA estraga?',
    emoji: '🍯',
    categoria: 'Curiosidade Histórica',
    resumo:
      'Arqueólogos encontraram mel de 3.000 anos ainda comestível em tumbas egípcias. Entenda o porquê!',
    imagem: '/images/curiosidade-mel.jpg',
    introducao:
      'Arqueólogos já encontraram potes de mel em tumbas egípcias com mais de 3.000 anos... e ele ainda estava comestível! Impressionante, não é?',
    secoes: [
      {
        subtitulo: 'Por que isso acontece?',
        texto:
          'O mel tem baixíssima umidade e é naturalmente ácido. Isso cria um ambiente onde as bactérias simplesmente não conseguem sobreviver.',
      },
      {
        subtitulo: 'E se o mel cristalizar?',
        texto:
          'Se o seu mel cristalizou (ficou durinho), não jogue fora! Isso é sinal de pureza. Basta colocar o pote em banho-maria morno que ele volta ao normal.',
      },
    ],
    cta: 'Você prefere mel no café, na fruta ou em receitas salgadas?',
  },
  {
    id: '3',
    slug: 'erro-que-destroi-sabor-do-cafe',
    titulo: 'O erro que está destruindo o sabor do seu café!',
    emoji: '☕',
    categoria: 'Erro Comum',
    resumo:
      'Ferver a água demais pode estar deixando seu café amargo. Saiba a temperatura ideal para um café mais doce.',
    imagem: '/images/curiosidade-cafe.jpg',
    introducao:
      'Se você ferve a água até ela borbulhar muito antes de passar o café, você pode estar queimando o pó e deixando a bebida amarga.',
    secoes: [
      {
        subtitulo: 'A dica de ouro',
        texto:
          'A temperatura ideal é quando começam a subir aquelas bolinhas pequenas no fundo da panela (cerca de 90°C). Se a água ferveu, desligue o fogo e espere 1 minutinho antes de coar. Você vai notar que o café fica muito mais doce e aromático naturalmente!',
      },
    ],
    cta: 'Marque aquele amigo que não vive sem um cafezinho, mas precisa aprender essa!',
  },
  {
    id: '4',
    slug: 'segredo-da-manteiga-gelada-dos-chefs',
    titulo: 'Por que a comida de restaurante parece mais gostosa? O segredo da manteiga gelada',
    emoji: '🧈',
    categoria: 'Segredo do Chef',
    resumo:
      'O molho brilhante e aveludado dos restaurantes tem um segredo simples chamado "monter au beurre". Aprenda!',
    imagem: '/images/curiosidade-manteiga.jpg',
    introducao:
      'Sabe aquele molho de carne brilhante e aveludado que você vê na TV? O segredo não é nenhum ingrediente caro, é a finalização.',
    secoes: [
      {
        subtitulo: 'A técnica: monter au beurre',
        texto:
          'Quando o molho já está pronto, os chefs desligam o fogo e adicionam um cubinho de manteiga bem gelada, mexendo rápido até derreter. Isso cria uma emulsão que dá um brilho incrível e uma textura que derrete na boca.',
      },
      {
        subtitulo: 'Onde usar',
        texto:
          'Funciona em molhos de tomate, carnes e até risotos! Um toque final simples que transforma o prato.',
      },
    ],
    cta: 'Gostou da dica? Clique em "Seguir" para mais segredos de cozinha todos os dias!',
  },
  {
    id: '5',
    slug: 'agua-do-macarrao-ouro-liquido',
    titulo: 'Não jogue a água do macarrão fora!',
    emoji: '🍝',
    categoria: 'Dica de Massa',
    resumo:
      'A água do cozimento do macarrão é um dos ingredientes mais valiosos da cozinha italiana. Descubra por quê!',
    imagem: '/images/curiosidade-agua-macarrao.jpg',
    introducao:
      'Você sabia que a água que sobra do cozimento do macarrão é um dos ingredientes mais valiosos da cozinha italiana? Aquele líquido turvo é ouro puro na hora de finalizar o prato.',
    secoes: [
      {
        subtitulo: 'O segredo dos chefs',
        texto:
          'Muitas vezes o molho fica "separado" da massa ou seco demais. O segredo é adicionar uma concha dessa água (cheia de amido) na hora de misturar o molho ao macarrão. O amido age como uma liga natural, criando aquela textura cremosa e fazendo o molho grudar perfeitamente no fio.',
      },
      {
        subtitulo: 'Dica extra',
        texto:
          'Nunca lave o macarrão em água corrente após cozinhar! Isso remove o amido e faz com que ele perca o sabor e a capacidade de segurar o molho.',
      },
    ],
    cta: 'Qual seu molho de macarrão favorito? Comenta aqui embaixo!',
  },
  {
    id: '6',
    slug: 'ovos-temperatura-ambiente-bolo-fofo',
    titulo: 'Bolo solado nunca mais!',
    emoji: '🍰',
    categoria: 'Ciência da Confeitaria',
    resumo:
      'Seu bolo não cresce como deveria? O culpado pode ser a temperatura dos ingredientes. Entenda!',
    imagem: '/images/curiosidade-ovos.jpg',
    introducao:
      'Você já seguiu uma receita de bolo à risca e, mesmo assim, ele não cresceu como deveria? O culpado pode estar na temperatura dos ingredientes!',
    secoes: [
      {
        subtitulo: 'Por que a temperatura importa',
        texto:
          'Usar ovos e manteiga direto da geladeira impede que eles se misturem corretamente, criando uma massa pesada. Ingredientes em temperatura ambiente criam uma emulsão que retém bolhas de ar. Resultado? Um bolo muito mais fofinho e aerado.',
      },
      {
        subtitulo: 'Truque rápido',
        texto:
          'Esqueceu de tirar os ovos da geladeira? Coloque-os em uma tigela com água morna (não quente!) por 5 minutos. Problema resolvido!',
      },
    ],
    cta: 'Gostou desse segredinho? Compartilha com aquela amiga que ama fazer bolo!',
  },
  {
    id: '7',
    slug: 'chocolate-esbranquicado-fat-bloom',
    titulo: 'O chocolate ficou branco? Não jogue fora!',
    emoji: '🍫',
    categoria: 'Curiosidade',
    resumo:
      'Aquela mancha esbranquiçada no chocolate não é mofo. Saiba o que é e como aproveitar.',
    imagem: '/images/curiosidade-chocolate.jpg',
    introducao:
      'Abriu um chocolate e ele estava com uma mancha esbranquiçada ou opaca? Calma, não é mofo!',
    secoes: [
      {
        subtitulo: 'O que é o "Fat Bloom"',
        texto:
          'Isso acontece quando o chocolate sofre variações de temperatura, fazendo com que a manteiga de cacau se separe e suba para a superfície. Ele continua seguro para comer e o sabor é o mesmo, apenas a textura muda um pouco.',
      },
      {
        subtitulo: 'Como salvar',
        texto:
          'Você pode derreter esse chocolate e usá-lo em coberturas ou brownies. Ele voltará a ficar brilhante e delicioso!',
      },
    ],
    cta: 'Você já deixou de comer um chocolate por causa dessas manchas? Conta pra gente!',
  },
  {
    id: '8',
    slug: 'ervas-frescas-duram-mais',
    titulo: 'Chega de jogar tempero murcho no lixo!',
    emoji: '🌿',
    categoria: 'Dica de Economia',
    resumo:
      'Salsinha e coentro estragam rápido? Veja como fazê-los durar até 2 semanas na geladeira.',
    imagem: '/images/curiosidade-ervas.jpg',
    introducao:
      'Salsinha e coentro estragam num piscar de olhos, né? Mas existe um jeito de fazer eles durarem até 2 semanas na geladeira!',
    secoes: [
      {
        subtitulo: 'Trate suas ervas como flores',
        itens: [
          'Corte a pontinha dos talos.',
          'Coloque-as em um copo com um pouco de água (como um buquê).',
          'Cubra o topo com um saquinho plástico e prenda com um elástico.',
          'Guarde na porta da geladeira.',
        ],
      },
      {
        texto:
          'Isso mantém a hidratação e evita que as folhas queimem com o frio direto da geladeira.',
      },
    ],
    cta: 'Qual tempero não pode faltar na sua comida? Eu não vivo sem manjericão!',
  },
  {
    id: '9',
    slug: 'sal-ou-acidez-toque-de-mestre',
    titulo: 'Comida sem graça? Talvez não precise de mais sal!',
    emoji: '🍋',
    categoria: 'O Toque de Mestre',
    resumo:
      'Quando falta "algo" no prato, o segredo pode não ser o sal, e sim a acidez. Aprenda o truque.',
    imagem: '/images/curiosidade-limao.jpg',
    introducao:
      'Sabe quando você prova a comida, sente que falta algo, taca sal e... continua estranho? O segredo pode ser a acidez.',
    secoes: [
      {
        subtitulo: 'A acidez "acorda" os sabores',
        texto:
          'Um toque de limão ou um fio de vinagre no final do cozimento realça os temperos que já estão lá. A acidez equilibra a gordura e traz frescor. Tente isso no feijão, em sopas ou em carnes assadas. Você vai se surpreender!',
      },
      {
        subtitulo: 'Dica de Chef',
        texto:
          'Se o prato estiver pesado ou gorduroso demais, o limão é o seu melhor amigo para equilibrar tudo.',
      },
    ],
    cta: 'Você costuma usar limão ou vinagre para finalizar seus pratos? Conta pra gente!',
  },
];

// Função para obter todas as curiosidades
export function getAllCuriosidades(): Curiosidade[] {
  return curiosidades;
}

// Função para obter uma curiosidade pelo slug
export function getCuriosidadeBySlug(slug: string): Curiosidade | undefined {
  return curiosidades.find((c) => c.slug === slug);
}
