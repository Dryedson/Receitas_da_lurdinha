// Banco de dados de artigos do blog - Conteúdo original sobre culinária
// Artigos sobre técnicas, tendências, ingredientes e histórias de receitas

export interface BlogPost {
  id: string;
  titulo: string;
  descricao: string;
  conteudo: string;
  autor: string;
  data: string;
  categoria: string;
  imagem: string;
  slug: string;
  receitasRelacionadas?: string[]; // IDs de receitas relacionadas
  tempoLeitura: number; // em minutos
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    titulo: 'O Segredo do Bolo Úmido: Técnica da Lurdinha',
    descricao: 'Descubra como fazer bolos que não ficam secos. A técnica que uso há 30 anos para deixar o bolo macio por dias.',
    conteudo: `Fazer um bolo úmido é uma arte que aprendi observando minha avó. Muitas pessoas acham que é complicado, mas na verdade são pequenos detalhes que fazem toda a diferença.

## O Papel do Leite Morno

O primeiro segredo é usar leite morno, não frio. Quando você adiciona leite frio à massa, a temperatura cai e o fermento não trabalha direito. O leite morno ativa o fermento e deixa a massa mais leve.

## A Importância do Palito

Quando você tira o bolo do forno, o palito deve sair com alguns fios úmidos, não completamente seco. Se sair completamente limpo, o bolo já está ressecando. Aqueles fios úmidos significam que o bolo vai continuar cozinhando com o calor residual.

## Deixar Esfriar Corretamente

Aqui é onde muita gente erra. Depois de tirar do forno, deixe o bolo na forma por 10 minutos. Isso permite que a estrutura firme sem ressecar. Depois desenforma e deixa esfriar completamente em uma grade.

## Armazenamento Correto

Para manter o bolo úmido por mais dias, guarde em um pote fechado com um pedaço de pão. O pão absorve a umidade e mantém o bolo macio. Troque o pão a cada dois dias.

Com essas técnicas simples, seu bolo vai ficar tão bom quanto o meu!`,
    autor: 'Lurdinha',
    data: '2024-08-15',
    categoria: 'Técnicas',
    imagem: '/images/blog-bolo-umido.jpg',
    slug: 'segredo-bolo-umido',
    receitasRelacionadas: ['1', '12', '21'],
    tempoLeitura: 4,
  },
  {
    id: '2',
    titulo: 'Frango Grelhado Perfeito: Temperatura é Tudo',
    descricao: 'Como grelhar frango sem deixar seco. Aprenda a temperatura ideal e o tempo exato para cada espessura.',
    conteudo: `Grelhar frango é uma das técnicas mais pedidas na cozinha. Muita gente reclama que o frango fica seco, mas isso é porque não conhece o segredo da temperatura.

## A Temperatura Ideal

A temperatura interna do frango deve chegar a 75°C no centro mais grosso. Use um termômetro de carne para ter certeza. Isso garante que está cozido mas ainda suculento.

## Deixar Descansar é Sagrado

Depois de tirar do fogo, deixe o frango descansar por 5 minutos. Durante esse tempo, os sucos se redistribuem pela carne. Se cortar logo, todo o suco escorre no prato.

## Marinada Faz Diferença

Uma boa marinada não é só para sabor. Os ácidos (limão, vinagre) e os óleos penetram a carne e mantêm ela úmida durante o cozimento. Deixe marinar pelo menos 20 minutos.

## Espessura Uniforme

Bata o frango para deixar com espessura uniforme. Assim cozinha de forma igual. Se tiver partes mais grossas, elas cozinham mais devagar e as finas ficam ressecadas.

Seguindo esses passos, seu frango vai ser tão suculento que a família vai pedir de novo!`,
    autor: 'Lurdinha',
    data: '2024-08-14',
    categoria: 'Técnicas',
    imagem: '/images/blog-frango-grelhado.jpg',
    slug: 'frango-grelhado-perfeito',
    receitasRelacionadas: ['2', '13', '16'],
    tempoLeitura: 5,
  },
  {
    id: '3',
    titulo: 'Brigadeiro Gourmet: Quando Simples Vira Sofisticado',
    descricao: 'Transforme o brigadeiro clássico em uma iguaria sofisticada. Variações que impressionam em festas.',
    conteudo: `O brigadeiro é um clássico brasileiro, mas poucos sabem que é possível elevar esse doce simples a um patamar gourmet.

## Escolha do Chocolate

Tudo começa com o chocolate. Um chocolate de qualidade faz toda a diferença. Eu uso chocolate belga com 70% de cacau. O sabor é muito mais complexo e sofisticado.

## Adições Criativas

Você pode adicionar café coado, licor, essência de baunilha ou até pimenta. Cada adição cria um sabor único. O café, por exemplo, intensifica o sabor do chocolate.

## Apresentação Elegante

Em vez de cobrir com granulado, use chocolate ralado, castanhas picadas ou até ouro comestível. A apresentação faz parte da experiência gourmet.

## Temperatura de Servir

Brigadeiro gourmet é melhor servido ligeiramente morno, não gelado. A temperatura deixa os sabores mais evidentes. Retire da geladeira 10 minutos antes de servir.

## Embalagem Especial

Se for presentear, use caixas elegantes com papel de seda. A embalagem é tão importante quanto o produto. Isso transforma um simples brigadeiro em um presente especial.

Experimente essas técnicas e veja como seu brigadeiro vira assunto em qualquer festa!`,
    autor: 'Lurdinha',
    data: '2024-08-13',
    categoria: 'Técnicas',
    imagem: '/images/blog-brigadeiro-gourmet.jpg',
    slug: 'brigadeiro-gourmet',
    receitasRelacionadas: ['4', '15', '17'],
    tempoLeitura: 4,
  },
  {
    id: '4',
    titulo: 'Molho de Tomate Caseiro: Receita que Dura Semanas',
    descricao: 'Como fazer molho de tomate que dura semanas na geladeira. Simples, saudável e muito mais saboroso que industrializado.',
    conteudo: `Um bom molho de tomate caseiro é a base de muitos pratos. Aprenda a fazer um que dura semanas e fica cada vez melhor.

## Escolha do Tomate

Use tomates maduros e vermelhos. Se não encontrar tomates bons, use tomate em lata de qualidade. A qualidade do tomate é fundamental.

## Técnica de Cozimento Lento

O segredo é cozinhar em fogo baixo por muito tempo. Quanto mais tempo, mais os sabores se concentram. Cozinho por pelo menos 2 horas.

## Adições que Fazem Diferença

Adicione cebola, alho, cenoura e um pouco de açúcar para equilibrar a acidez. Ervas como manjericão e orégano fresco deixam o sabor mais complexo.

## Armazenamento Correto

Deixe esfriar completamente antes de guardar na geladeira em potes de vidro. Dura até 2 semanas. Você também pode congelar em porções pequenas.

## Uso Versátil

Use em massas, pizzas, sopas ou como base para outros molhos. Um bom molho caseiro economiza tempo durante a semana.

Faça um grande lote no fim de semana e aproveite durante toda a semana!`,
    autor: 'Lurdinha',
    data: '2024-08-12',
    categoria: 'Técnicas',
    imagem: '/images/blog-molho-tomate.jpg',
    slug: 'molho-tomate-caseiro',
    receitasRelacionadas: ['5', '19', '34'],
    tempoLeitura: 4,
  },
  {
    id: '5',
    titulo: 'Pão Caseiro: Do Fermento Natural ao Forno',
    descricao: 'Guia completo para fazer pão caseiro com fermento natural. Desde a criação do fermento até o pão pronto.',
    conteudo: `Fazer pão com fermento natural é uma jornada fascinante. Leva tempo, mas o resultado é incomparável.

## Criando o Fermento Natural

O fermento natural é feito com farinha e água. Misture partes iguais e deixe em temperatura ambiente. Alimente diariamente removendo metade e adicionando farinha e água fresca.

## Quando Está Pronto

O fermento está pronto quando dobra de tamanho em 4-8 horas após alimentar. Deve ter um cheiro agradável e estar cheio de bolhas.

## Primeira Fermentação

Misture o fermento com farinha, água e sal. Deixe fermentar em temperatura ambiente por 4-8 horas. Quanto mais frio o ambiente, mais tempo leva.

## Modelagem e Segunda Fermentação

Modele o pão e deixe em uma cesta de fermentação por 2-4 horas. Deve aumentar de tamanho e quando você toca, deve voltar lentamente.

## Assar Corretamente

Asse em forno muito quente (250°C) com vapor. O vapor cria aquela crosta crocante característica. Asse até ficar dourado e soar oco quando batido.

## Paciência é a Chave

Pão com fermento natural não é rápido, mas é gratificante. Cada pão é único e você aprende algo novo a cada vez.

Comece hoje e em uma semana você terá seu próprio fermento!`,
    autor: 'Lurdinha',
    data: '2024-08-11',
    categoria: 'Técnicas',
    imagem: '/images/blog-pao-caseiro.jpg',
    slug: 'pao-caseiro-fermento-natural',
    receitasRelacionadas: ['10', '9', '24'],
    tempoLeitura: 6,
  },
  {
    id: '6',
    titulo: 'Frutos do Mar Frescos: Como Escolher e Preparar',
    descricao: 'Guia prático para escolher frutos do mar frescos e prepará-los corretamente na cozinha.',
    conteudo: `Frutos do mar frescos são um tesouro culinário. Aprenda a escolher e preparar corretamente.

## Sinais de Frescor

Peixes devem ter olhos brilhantes e claros, não opacos. As guelras devem ser vermelhas ou rosa, não marrom. O cheiro deve ser de mar, não de peixe podre.

## Camarões e Crustáceos

Camarões frescos têm cor brilhante e corpo firme. Se estiverem moles ou com cheiro forte, não compre. Devem estar frios quando você toca.

## Armazenamento Correto

Guarde em gelo ou na parte mais fria da geladeira. Use no máximo em 2 dias. Se não usar logo, congele em potes com água.

## Limpeza Adequada

Remova as vísceras e a veia preta do camarão. Para peixes, remova as escamas e as vísceras. Lave bem em água corrente.

## Cozimento Rápido

Frutos do mar cozinham rápido. Camarão leva 3-4 minutos, peixe 6-8 minutos. Cozinhe demais e fica borrachudo.

## Sabor Natural

Deixe o sabor natural aparecer. Use apenas limão, sal e um pouco de azeite. Não precisa de molhos pesados.

Frutos do mar frescos são uma delícia quando preparados corretamente!`,
    autor: 'Lurdinha',
    data: '2024-08-10',
    categoria: 'Técnicas',
    imagem: '/images/blog-frutos-mar.jpg',
    slug: 'frutos-mar-frescos',
    receitasRelacionadas: ['11', '31', '6'],
    tempoLeitura: 4,
  },
  {
    id: '7',
    titulo: 'Risoto: A Técnica que Ninguém Ensina',
    descricao: 'O segredo do risoto cremoso está na técnica, não nos ingredientes. Aprenda o método correto.',
    conteudo: `Risoto é um prato que parece complicado, mas é pura técnica. Aprenda a técnica e você domina o risoto.

## O Papel do Caldo Quente

O caldo DEVE estar quente. Se estiver frio, o risoto para de cozinhar. Mantenha o caldo em uma panela separada, quente o tempo todo.

## Mexer Sem Parar

Não é mito. Você precisa mexer constantemente. Isso libera o amido do arroz, que é o que cria o creme. Sem mexer, não tem creme.

## Adicionar Caldo Gradualmente

Adicione uma concha de caldo de cada vez. Só adicione mais quando o anterior foi absorvido. Isso leva cerca de 18-20 minutos.

## O Ponto do Arroz

O arroz deve estar al dente, não mole. Quando morde, deve ter um pequeno núcleo firme no centro. Isso é o ponto perfeito.

## Manteiga e Queijo no Final

Desligue o fogo e adicione manteiga e queijo parmesão. Mexa vigorosamente. Isso cria um creme extra e deixa o risoto brilhante.

## Servir Imediatamente

Risoto não espera. Sirva logo após fazer. Se deixar esfriar, perde a cremosidade.

Pratique essa técnica e você vai fazer risoto tão bom quanto em restaurante italiano!`,
    autor: 'Lurdinha',
    data: '2024-08-09',
    categoria: 'Técnicas',
    imagem: '/images/blog-risoto.jpg',
    slug: 'risoto-tecnica-correta',
    receitasRelacionadas: ['8', '5', '19'],
    tempoLeitura: 5,
  },
  {
    id: '8',
    titulo: 'Doces Sem Culpa: Alternativas Saudáveis',
    descricao: 'Como fazer doces deliciosos usando ingredientes mais saudáveis. Sem perder o sabor.',
    conteudo: `Você não precisa escolher entre saúde e sabor. Existem formas inteligentes de fazer doces mais saudáveis.

## Substituindo Açúcar

Você pode usar mel, xarope de agave ou até banana amassada. Cada um tem um sabor diferente. Experimente para encontrar o que você gosta.

## Farinha Integral

Use farinha integral em vez de branca. Deixa o doce mais nutritivo e com mais fibra. Pode usar metade integral e metade branca no começo.

## Gordura Saudável

Use óleo de coco ou azeite em vez de manteiga. Ou use abacate em algumas receitas. Isso adiciona gordura saudável.

## Frutas Frescas

Adicione frutas frescas aos doces. Maçã, banana, morango. Isso adiciona doçura natural e nutrientes.

## Chocolate Escuro

Use chocolate com 70% de cacau ou mais. Tem menos açúcar e mais antioxidantes. O sabor é mais intenso.

## Porções Menores

Doces saudáveis não significa comer mais. Mantenha as porções pequenas. Um pequeno pedaço de bolo bom é melhor que um grande pedaço de bolo ruim.

Você pode ter seus doces e comer também!`,
    autor: 'Lurdinha',
    data: '2024-08-08',
    categoria: 'Nutrição',
    imagem: '/images/blog-doces-saudaveis.jpg',
    slug: 'doces-saudaveis',
    receitasRelacionadas: ['4', '7', '9'],
    tempoLeitura: 4,
  },
  {
    id: '9',
    titulo: 'Café da Manhã Energético: Receitas Rápidas',
    descricao: 'Ideias de café da manhã que dão energia para o dia todo. Rápidas de fazer e muito saudáveis.',
    conteudo: `Um bom café da manhã é a base de um dia produtivo. Aqui estão minhas receitas favoritas.

## Bowl de Açaí Perfeito

Açaí congelado batido com leite de amêndoa e banana. Cubra com granola, frutas e sementes. Leva 5 minutos e é super nutritivo.

## Ovos Mexidos Cremosos

Ovos mexidos em fogo baixo com manteiga. Adicione queijo e ervas. Cremoso e delicioso. Leva 10 minutos.

## Pão Integral com Abacate

Pão integral torrado com abacate amassado. Adicione um ovo frito por cima. Sal, pimenta e limão. Perfeito para começar o dia.

## Iogurte com Granola

Iogurte natural com granola caseira e mel. Adicione frutas frescas. Simples mas muito satisfatório.

## Smoothie Rápido

Banana, iogurte, leite e mel. Bata e pronto. Você pode adicionar espinafre ou frutas vermelhas.

## Panquecas de Banana

Apenas banana e ovo. Sem farinha. Cozinhe na frigideira. Leva 10 minutos e é delicioso.

Um bom café da manhã te dá energia para conquistar o dia!`,
    autor: 'Lurdinha',
    data: '2024-08-07',
    categoria: 'Receitas Rápidas',
    imagem: '/images/blog-cafe-manha.jpg',
    slug: 'cafe-manha-energetico',
    receitasRelacionadas: ['9', '18', '24'],
    tempoLeitura: 4,
  },
  {
    id: '10',
    titulo: 'Temperos Caseiros: Faça Seus Próprios',
    descricao: 'Como fazer temperos caseiros para ter sempre à mão. Mais fresco e muito mais barato.',
    conteudo: `Temperos caseiros são mais frescos e muito mais baratos que comprados prontos.

## Sal de Ervas

Misture sal grosso com ervas secas (orégano, tomilho, alecrim). Deixe secar completamente. Use em carnes e vegetais.

## Pimenta Caseira

Seque pimentas frescas e bata no liquidificador. Você controla o nível de ardência. Muito mais fresco que pimenta moída.

## Curry Caseiro

Misture cúrcuma, gengibre, cominho, coentro e pimenta. Você cria seu próprio blend. Muito mais saboroso que curry pronto.

## Chimichurri

Salsa, orégano, alho, azeite e vinagre. Bata tudo junto. Perfeito para carnes grelhadas.

## Tempero para Frango

Alho, limão, orégano, sal e pimenta. Misture com azeite. Use como marinada ou tempero seco.

## Armazenamento

Guarde em potes de vidro bem fechados. Longe da luz e do calor. Duram meses.

Temperos caseiros elevam qualquer prato!`,
    autor: 'Lurdinha',
    data: '2024-08-06',
    categoria: 'Técnicas',
    imagem: '/images/blog-temperos.jpg',
    slug: 'temperos-caseiros',
    receitasRelacionadas: ['2', '8', '19'],
    tempoLeitura: 3,
  },
];

// Função para obter todos os artigos
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

// Função para obter artigo por slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Função para obter artigos por categoria
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.categoria === category);
}

// Função para obter todas as categorias únicas
export function getAllBlogCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.categoria));
  return Array.from(categories).sort();
}

// Função para buscar artigos por termo
export function searchBlogPosts(term: string): BlogPost[] {
  const lowerTerm = term.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.titulo.toLowerCase().includes(lowerTerm) ||
      post.descricao.toLowerCase().includes(lowerTerm) ||
      post.conteudo.toLowerCase().includes(lowerTerm)
  );
}
