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
  {
    id: '12',
    slug: 'como-temperar-carne-perfeita',
    titulo: 'Como temperar carne de churrasco perfeita: técnicas infalíveis',
    emoji: '🥩',
    categoria: 'Técnica de Cozinha',
    resumo:
      'Descubra segredos para temperar carne de churrasco que deixam qualquer corte suculento e cheio de sabor, do sal grosso ao tempo de descanso.',
    imagem: '/images/artigo-temperar-carne.jpg',
    introducao:
      'Temperar carne de churrasco parece simples, mas pequenos detalhes fazem toda a diferença entre um corte sem graça e uma experiência memorável. A combinação certa de sal, temperos, tempo de descanso e controle do fogo transforma até o corte mais simples em um prato de restaurante. Neste artigo, você vai aprender técnicas práticas para temperar carne de churrasco perfeita sem complicação.',
    secoes: [
      {
        subtitulo: 'Escolha do sal e a quantidade certa',
        texto:
          'O sal grosso é o grande aliado do churrasco. Ele forma uma crosta que sele a carne e mantém os sucos internos. A dica é salgar generosamente poucos minutos antes de colocar na grelha. Quanto mais cedo você salga, mais a carne perde líquido e pode ressecar. Para carnes mais grossas, salgue 10 minutos antes. Para cortes finos, 5 minutos é suficiente.',
      },
      {
        subtitulo: 'Aromatize com alho, limão e ervas',
        texto:
          'Além do sal, um tempero básico de alho amassado, limão e azeite realça o sabor da carne sem esconder a sua essência. Você pode adicionar chimichurri, alecrim ou tomilho para variar. O importante é não exagerar: o tempero deve complementar, não dominar. Experimente massagear a carne para que os aromas penetrem melhor.',
      },
      {
        subtitulo: 'O tempo de descanso antes de cortar',
        texto:
          'Após retirar a carne da grelha, deixe-a descansar por 5 a 10 minutos. Esse descanso permite que os sucos se redistribuam pelo corte, garantindo cada fatia suculenta. Se cortar logo, os sucos escorrem e a carne fica seca. Paciência é o segredo de um churrasco perfeito.',
      },
    ],
    cta: 'Qual é o seu corte favorito para churrasco? Conta para a Lurdinha nos comentários!',
  },
  {
    id: '13',
    slug: 'dicas-cafe-manha-saudavel',
    titulo: 'Café da manhã saudável: como começar o dia com energia',
    emoji: '🍳',
    categoria: 'Nutrição e Bem-estar',
    resumo:
      'Aprenda a montar um café da manhã saudável, balanceado e saboroso, com combinações que mantêm a saciedade e o astral até o meio-dia.',
    imagem: '/images/artigo-cafe-manha.jpg',
    introducao:
      'O café da manhã é a refeição mais importante do dia, mas muita gente acaba recorrendo a pães brancos e achocolatados cheios de açúcar. A boa notícia é que com algumas trocas simples, você pode começar a manhã com energia de sobra. Neste artigo, vamos mostrar como montar um café da manhã saudável, gostoso e prático para o dia a dia.',
    secoes: [
      {
        subtitulo: 'Priorize proteínas e gorduras boas',
        texto:
          'Ovos, queijo cottage, pasta de amendoim e iogurte natural são ótimas fontes de proteína. Eles ajudam a manter a saciedade por mais tempo e evitam aquela vontade de beliscar antes do almoço. Combine com abacate, castanhas ou azeite para incluir gorduras saudáveis que fazem bem para o cérebro.',
      },
      {
        subtitulo: 'Inclua fibras e frutas',
        texto:
          'Pães integrais, aveia, linhaça e frutas da estação trazem fibras, vitaminas e minerais essenciais. Uma fatia de pão integral com abacate e ovo, acompanhada de uma fruta, já é um café completo. Evite sucos industrializados e prefira a fruta inteira, que tem mais fibra e menos açúcar concentrado.',
      },
      {
        subtitulo: 'Hidrate-se logo cedo',
        texto:
          'Muitas vezes confundimos sede com fome. Comece o dia com um copo de água antes mesmo do café. Café e chás são bem-vindos, mas a água é essencial para acordar o organismo e ajudar a digestão.',
      },
    ],
    cta: 'Qual é a sua combinação preferida para o café da manhã? Compartilhe com a gente!',
  },
  {
    id: '14',
    slug: 'segredos-massas-italianas',
    titulo: 'Segredos das massas italianas que todo mundo deveria conhecer',
    emoji: '🍝',
    categoria: 'Técnica de Cozinha',
    resumo:
      'Descubra os truques por trás de uma massa italiana autêntica, do cozimento ao molho, para impressionar em casa sem ser chef.',
    imagem: '/images/artigo-massas-italianas.jpg',
    introducao:
      'A culinária italiana é amada no mundo todo, mas poucos sabem que os segredos de uma boa massa estão nos detalhes. Cozimento, escolha do molho, finalização e até a água do cozimento fazem diferença. Neste artigo, você vai aprender técnicas simples para transformar seu prato de massa em uma verdadeira experiência italiana em casa.',
    secoes: [
      {
        subtitulo: 'Água do cozimento é ouro líquido',
        texto:
          'Sempre reserve uma concha da água do cozimento antes de escorrer a massa. Essa água com amido é o segredo para emulsificar o molho e deixá-lo grudadinho no espaguete. Misture a massa ao molho ainda no fogo, adicionando aos poucos a água do cozimento até criar um creme sedoso.',
      },
      {
        subtitulo: 'Não lave a massa depois de cozinhar',
        texto:
          'Lavar a massa sob água fria remove o amido natural que ajuda o molho a aderir. Escorra a massa al dente e leve diretamente para a panela do molho. A única exceção é para saladas de macarrão, onde você quer parar o cozimento.',
      },
      {
        subtitulo: 'Combine o formato com o molho certo',
        texto:
          'Espaguete vai bem com molhos leves e oleosos, como o aglio e olio. Penne e rigatoni seguram molhos mais encorpados porque o molho entra dentro do formato. Para molhos cremosos, escolha fettuccine ou pappardelle. Respeitar essa combinação faz toda a diferença na experiência.',
      },
    ],
    cta: 'Você já experimentou finalizar a massa no molho? Conta como ficou!',
  },
  {
    id: '15',
    slug: 'como-fazer-brunch-casa',
    titulo: 'Como fazer um brunch em casa que impressiona sem estresse',
    emoji: '🥞',
    categoria: 'Receitas para Ocasiões',
    resumo:
      'Aprenda a organizar um brunch delicioso em casa, com dicas de preparo, cardápio e apresentação para receber amigos e família.',
    imagem: '/images/artigo-brunch-casa.jpg',
    introducao:
      'Brunch é a refeição perfeita para reunir amigos e família em um fim de semana descontraído. O segredo está na organização: preparar a maior parte das coisas antes e montar uma mesa convidativa. Neste artigo, vamos mostrar como fazer um brunch em casa sem correria e com muito sabor.',
    secoes: [
      {
        subtitulo: 'Planeje um cardápio equilibrado',
        texto:
          'Um bom brunch mistura pratos doces e salgados. Panquecas ou waffles, ovos mexidos, uma salada de frutas, pães e geleias são ótimas escolhas. Escolha no máximo três itens principais para não se perder na cozinha. Dessa forma, você consegue preparar tudo com calma e aproveitar a mesa.',
      },
      {
        subtitulo: 'Prepare o que puder na véspera',
        texto:
          'Massa de panqueca, geleia caseira, frutas cortadas e sucos podem ser preparados com antecedência. Na hora do brunch, você só precisa aquecer e montar. Isso reduz drasticamente o estresse e permite que você curta a companhia dos convidados.',
      },
      {
        subtitulo: 'Monte uma mesa bonita',
        texto:
          'A aparência conta muito em um brunch. Use tábuas de madeira para pães e queijos, potes de vidro para geleias e flores ou folhas como decoração. Não precisa ser perfeito: o charme está no aspecto caseiro e acolhedor.',
      },
    ],
    cta: 'Qual item não pode faltar no seu brunch ideal? Conta pra gente!',
  },
  {
    id: '16',
    slug: 'frutas-estacao-cozinha',
    titulo: 'Frutas da estação: por que usar e como aproveitar na cozinha',
    emoji: '🍓',
    categoria: 'Ingredientes',
    resumo:
      'Entenda os benefícios de usar frutas da estação e descubra dicas criativas para incluí-las em receitas doces e salgadas.',
    imagem: '/images/artigo-frutas-estacao.jpg',
    introducao:
      'Usar frutas da estação é uma escolha inteligente para a saúde, o bolso e o planeta. Elas estão mais saborosas, baratas e nutritivas na época certa. Além disso, podem ser exploradas em pratos doces e salgados que surpreendem o paladar. Neste artigo, você vai aprender como aproveitar frutas da estação de formas criativas.',
    secoes: [
      {
        subtitulo: 'Sabores mais intensos e preços melhores',
        texto:
          'Frutas colhidas no auge da safra têm sabor mais concentrado, textura ideal e maior quantidade de nutrientes. Por não dependerem de armazenamento prolongado ou transporte de longa distância, costumam ser mais baratas. Visitar feiras livres é uma ótima forma de encontrar opções frescas e de qualidade.',
      },
      {
        subtitulo: 'Receitas doces e salgadas',
        texto:
          'Além de sobremesas, frutas podem complementar saladas, molhos e carnes. Manga e manga verde ficam deliciosas em saladas com folhas e queijos. Abacaxi pode ser grelhado e servido com carne suína. Morangos e framboesas combinam com iogurte e aveia no café da manhã.',
      },
      {
        subtitulo: 'Congele para aproveitar o ano todo',
        texto:
          'Quando uma fruta está em abundância, aproveite para congelar cubos ou polpas. Assim você pode fazer vitaminas, smoothies e molhos mesmo fora da temporada. Lave, descasque, corte em pedaços e embale em saquinhos herméticos.',
      },
    ],
    cta: 'Qual fruta da sua região você mais gosta de usar na cozinha? Conta aqui!',
  },
  {
    id: '17',
    slug: 'truques-saladas-gostosas',
    titulo: 'Saladas gostosas: truques para nunca mais comer folhas sem graça',
    emoji: '🥗',
    categoria: 'Técnica de Cozinha',
    resumo:
      'Aprenda a montar saladas saborosas, crocantes e nutritivas com combinações de texturas, temperos e molhos caseiros.',
    imagem: '/images/artigo-saladas-gostosas.jpg',
    introducao:
      'Muita gente acha salada sem graça porque nunca aprendeu a montar uma salada de verdade. O segredo está na combinação de texturas, cores, temperos e um molho equilibrado. Com os truques certos, a salada passa de acompanhamento sem graça para estrela do prato. Neste artigo, você vai aprender a fazer saladas gostosas de verdade.',
    secoes: [
      {
        subtitulo: 'Varie as texturas',
        texto:
          'Uma salada boa tem crocância, maciez e algum toque cremoso ou crocante por cima. Alface e rúcula trazem frescor, castanhas e sementes dão crocância, queijos e abacate trazem cremosidade. Quanto mais contrastes, mais interessante a salada fica.',
      },
      {
        subtitulo: 'Molho caseiro faz toda a diferença',
        texto:
          'Molho de mostarda e mel, limão com azeite, tahine com limão ou iogurte com ervas são opções simples e deliciosas. Prepare o molho em um pote fechado e regue a salada somente na hora de servir. Folhas molhadas por muito tempo perdem a crocância.',
      },
      {
        subtitulo: 'Adicione proteína para virar refeição',
        texto:
          'Para transformar a salada em prato principal, adicione frango grelhado, ovos cozidos, grão-de-bico assado, quinoa ou atum. Assim a salada fica nutritiva e satisfatória, sem deixar qualquer um com fome.',
      },
    ],
    cta: 'Qual ingrediente você nunca imaginou colocar em uma salada? Vamos trocar ideias!',
  },
  {
    id: '18',
    slug: 'o-poder-ervas-frescas',
    titulo: 'O poder das ervas frescas: como transformar qualquer prato',
    emoji: '🌿',
    categoria: 'Ingredientes',
    resumo:
      'Descubra como usar ervas frescas no dia a dia para dar sabor, aroma e cor aos pratos sem adicionar calorias.',
    imagem: '/images/artigo-ervas-frescas.jpg',
    introducao:
      'Ervas frescas são um dos ingredientes mais subutilizados na cozinha do dia a dia. Elas têm o poder de transformar pratos simples em experiências aromáticas e saborosas, sem acrescentar calorias. Sálvia, tomilho, manjericão, cebolinha e coentro podem fazer milagres na sua cozinha. Neste artigo, você vai aprender a usar ervas frescas com confiança.',
    secoes: [
      {
        subtitulo: 'Quando adicionar ervas no cozimento',
        texto:
          'Ervas mais robustas, como alecrim, tomilho e louro, aguentam o calor e podem ser adicionadas durante o cozimento. Elas liberam o aroma lentamente e aromatizam molhos, sopas e assados. Já ervas delicadas, como manjericão e salsinha, devem ir por último para não perderem o frescor.',
      },
      {
        subtitulo: 'Combinações clássicas que funcionam',
        texto:
          'Manjericão combina com tomate e mozzarella. Coentro vai bem com pratos mexicanos e asiáticos. Sálvia é perfeita com manteiga e massas recheadas. Hortelã refresca saladas de frutas e drinks. Conhecer essas combinações facilita muito o dia a dia.',
      },
      {
        subtitulo: 'Como conservar ervas frescas por mais tempo',
        texto:
          'Mantenha ervas em um copo com água na geladeira, como um buquê, ou envolva em papel toalha levemente úmido. Evite deixá-las dentro de sacolas fechadas, que aceleram o apodrecimento. Quando usar, rasgue as folhas com as mãos para liberar mais aroma.',
      },
    ],
    cta: 'Qual erva fresca você não vive sem na cozinha? Conta para a Lurdinha!',
  },
  {
    id: '19',
    slug: 'marmitas-congelaveis',
    titulo: 'Marmitas congeláveis: organize a semana com sabor e praticidade',
    emoji: '🍱',
    categoria: 'Planejamento de Refeições',
    resumo:
      'Aprenda a preparar marmitas congeláveis saudáveis, com dicas de armazenamento e receitas que aguentam bem o congelamento.',
    imagem: '/images/artigo-marmitas.jpg',
    introducao:
          'Cozinhar todos os dias pode ser desafiador, mas com marmitas congeláveis você organiza a semana de uma só vez. Além de economizar tempo, você come melhor, gasta menos e evita desperdício. Neste artigo, vamos mostrar como montar marmitas congeláveis saborosas, seguras e práticas para a rotina.',
    secoes: [
      {
        subtitulo: 'Escolha receitas que congelam bem',
        texto:
          'Sopas, ensopados, arroz de forno, frango desfiado e feijoada light aguentam bem o congelamento. Evite batatas cozidas e saladas, que perdem textura. Legumes refogados com pouco caldo também ficam ótimos quando descongelados.',
      },
      {
        subtitulo: 'Armazene corretamente',
        texto:
          'Use potes herméticos de vidro ou freezers específicos para alimentos. Deixe a marmita esfriar completamente antes de congelar e deixe um espaço no pote para a expansão. Etiquete com nome e data para controlar o prazo de consumo de até 3 meses.',
      },
      {
        subtitulo: 'Descongele com segurança',
        texto:
          'A melhor forma de descongelar é transferir a marmita do freezer para a geladeira na noite anterior. Para aquecer, use micro-ondas ou forno, adicionando um pouco de água ou caldo para recuperar a umidade. Mexa no meio do aquecimento para distribuir o calor.',
      },
    ],
    cta: 'Você já tentou fazer marmitas congeláveis? Qual receita deu mais certo?',
  },
  {
    id: '20',
    slug: 'cozinha-rapida-semana',
    titulo: 'Cozinha rápida para a semana: jantares prontos em até 30 minutos',
    emoji: '⏱️',
    categoria: 'Praticidade na Cozinha',
    resumo:
      'Veja dicas e combinações para preparar refeições rápidas, nutritivas e saborosas durante a semana sem passar horas na cozinha.',
    imagem: '/images/artigo-cozinha-rapida.jpg',
    introducao:
          'O dia a dia corrido nem sempre deixa tempo para cozinhar elaborado, mas isso não significa abrir mão de uma refeição gostosa. Com planejamento e técnicas certas, é possível montar jantares nutritivos em até 30 minutos. Neste artigo, você vai aprender a fazer cozinha rápida para a semana sem comer mal.',
    secoes: [
      {
        subtitulo: 'Mise en place: organize antes de ligar o fogo',
        texto:
          'Tenha todos os ingredientes cortados e medidos antes de começar. Assim você cozinha sem parar e economiza tempo. Prepare legumes e temperos no fim de semana e guarde em potes na geladeira. Na hora do preparo, é só juntar tudo.',
      },
      {
        subtitulo: 'Aposte em uma panela só',
        texto:
          'Receitas de uma panela só reduzem lavar louça e aceleram o cozimento. Macarrão com molho, arroz de forno, refogados e frigideiras completas são ótimas opções. O segredo é cortar ingredientes em tamanhos parecidos para cozinharem uniformemente.',
      },
      {
        subtitulo: 'Ingredientes que salvam o dia',
        texto:
          'Ovos, frango desfiado, massas, legumes congelados e conservas de boa qualidade são coringas. Com eles, você monta omeletes, wraps, saladas e pratos quentes em poucos minutos. Sempre tenha um desses itens disponível.',
      },
    ],
    cta: 'Qual é o seu truque para jantar rápido durante a semana? Compartilhe!',
  },
  {
    id: '21',
    slug: 'plating-embelezar-pratos',
    titulo: 'Plating: como embelezar pratos caseiros e impressionar na mesa',
    emoji: '🍽️',
    categoria: 'Arte Culinária',
    resumo:
      'Aprenda técnicas simples de plating para deixar pratos caseiros mais bonitos, convidativos e dignos de foto para as redes sociais.',
    imagem: '/images/artigo-plating.jpg',
    introducao:
      'Comer começa pelos olhos. Um prato bem apresentado desperta o apetite e transforma qualquer refeição em algo especial. Felizmente, não é preciso ser chef para embelezar pratos caseiros. Com algumas técnicas simples de plating, você pode servir pratos lindos e convidativos na sua casa. Neste artigo, você vai aprender os princípios básicos para arrasar na apresentação.',
    secoes: [
      {
        subtitulo: 'Comece com pratos limpos e cores contrastantes',
        texto:
          'Use pratos brancos ou lisos para destacar a comida. Busque contraste de cores: um filé com molho escuro ganha vida com um purê de mandioquinha amarelo e vegetais verdes. Quanto mais colorido o prato, mais apetitoso ele parece.',
      },
      {
        subtitulo: 'Altura e textura fazem diferença',
        texto:
          'Pratos altos chamam mais atenção do que os achatados. Empilhe ingredientes em camadas e adicione toques crocantes, como castanhas, sementes ou ervas frescas por cima. Isso cria interesse visual e textural a cada garfada.',
      },
      {
        subtitulo: 'Salsinha e azeite finalizam com charme',
        texto:
          'Um fio de azeite de qualidade e algumas folhas de salsinha, cebolinha ou manjericão são suficientes para elevar a aparência. Evite polvilhar aleatoriamente: distribua os elementos de forma intencional para um resultado harmonioso.',
      },
    ],
    cta: 'Você se preocupa com a apresentação dos pratos em casa? Conta para nós!',
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
