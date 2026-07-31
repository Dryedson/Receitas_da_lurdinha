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
    slug: 'como-temperar-carne-de-churrasco-perfeita',
    titulo: 'Como temperar carne de churrasco perfeita: o guia completo da Lurdinha',
    emoji: '🥩',
    categoria: 'Técnica de Cozinha',
    resumo:
      'Aprenda a temperar carne de churrasco com técnicas detalhadas que a Lurdinha usa em casa para deixar picanha, alcatra e contrafilé suculentos e cheios de sabor.',
    imagem: '/images/artigo-temperar-carne.jpg',
    introducao:
      'Desde que comecei a cozinhar para a família, o churrasco de domingo virou tradição aqui em casa. No começo, errava feio: a carne saía sem sabor, ou então ficava salgada demais, ou ressecava na grelha. Com o tempo, fui testando cada detalhe e descobri que temperar carne de churrasco é muito mais do que jogar sal por cima. O corte, a quantidade de sal, o tempo de descanso e até a temperatura da grelha fazem toda a diferença. Neste guia, vou contar passo a passo o que aprendi ao longo dos anos para você fazer um churrasco perfeito na próxima vez.',
    secoes: [
      {
        subtitulo: 'O tipo de sal faz diferença',
        texto:
          'Eu uso sal grosso moído na hora para churrasco. O sal grosso comum também funciona, mas prefiro o moído grosso porque adere melhor à carne e forma uma crosta dourada sem ficar excessivamente salgado. Para cada quilo de carne, uso cerca de duas colheres de chá de sal grosso. O segredo é salgar poucos minutos antes de levar à grelha: para cortes finos, como maminha, salgo cinco minutos antes. Para cortes mais grossos, como picanha, deixo dez minutos. Salgar muito cedo faz a carne perder líquido e ressecar.',
      },
      {
        subtitulo: 'Temperos que acompanham sem roubar a cena',
        texto:
          'No meu churrasco, o sal quase sempre é o protagonista, mas gosto de aromatizar com alho amassado, limão e azeite quando quero variar. Faço uma pastinha rápida com quatro dentes de alho, suco de meio limão e três colheres de sopa de azeite. Espalho essa mistura com as mãos pelo corte, massagando levemente. Às vezes adiciono chimichurri caseiro ou alecrim fresco. O importante é equilibrar: se o tempero for muito forte, você não sente o gosto da carne.',
      },
      {
        subtitulo: 'Fogo e grelha no ponto certo',
        texto:
          'Brasa viva e grelha quente são essenciais para selar a carne. Quando a grelha está bem aquecida, coloco o corte e deixo dois minutos de cada lado sem mexer. Isso cria uma crosta dourada que segura os sucos dentro. Depois, abaixo um pouco o fogo e termino o cozimento vira-vira conforme a espessura. Para picanha, gosto de selar bem e deixar o centro rosado. Para alcatra, prefiro grelhar mais um pouco para ficar macia sem ficar seca.',
      },
      {
        subtitulo: 'O descanso que salva o suculento',
        texto:
          'Quando tiro a carne da grelha, envolvo em papel-alumínio e deixo descansar de cinco a dez minutos antes de cortar. Esse descanso é sagrado: durante esse tempo, os sucos se redistribuem e cada fatia fica suculenta. Já cortei cedo demais e vi o suco escorrer no prato. Aprendi na marra que a paciência é o último tempero do churrasco.',
      },
      {
        subtitulo: 'Combinações que adoro servir',
        texto:
          'Na minha mesa de churrasco, a carma nunca anda sozinha. Farofa de bacon e ovos, vinagrete de cebola roxa e pimentão, pão de alho caseiro e uma salada de tomate com cebola completam o prato. Para bebida, um suco de laranja natural ou um chá gelado de limão ficam perfeitos. Essas combinações transformam o churrasco em uma refeição completa e especial.',
      },
    ],
    cta: 'Me conta: qual corte de carne você mais gosta de colocar no churrasco? Picanha, maminha ou contrafilé?',
  },
  {
    id: '13',
    slug: 'cafe-da-manha-saudavel-para-toda-semana',
    titulo: 'Café da manhã saudável para toda a semana: o que a Lurdinha prepara em casa',
    emoji: '🍳',
    categoria: 'Nutrição e Bem-estar',
    resumo:
      'Descubra como montar um café da manhã saudável, prático e saboroso, com combinações que a Lurdinha usa para manter a energia das irmãs até o meio-dia.',
    imagem: '/images/artigo-cafe-manha.jpg',
    introducao:
      'Por muitos anos, o café da manhã aqui em casa era pão francês com manteiga e um café forte. Só percebi que precisava mudar quando minha filha começou a sentir fome uma hora depois de sair de casa. Fui testando combinações e descobri que um café da manhã saudável não precisa ser sem graça. Pelo contrário: com ovos, frutas, pães bons e um pouco de planejamento, dá para começar o dia com energia e disposição. Neste artigo, compartilho as combinações que viram rotina por aqui.',
    secoes: [
      {
        subtitulo: 'Proteína no prato para segurar a fome',
        texto:
          'Ovos são meus grandes aliados no café da manhã. Faço mexido com azeite, omelete recheada com espinafre ou ovos cozidos no fim de semana para a semana toda. Queijo cottage, iogurte natural e pasta de amendoim também entram na mesa. A proteína ajuda a manter a saciedade e evita aquela vontade de beliscar antes do almoço. Quando incluo ovos no café, sinto que o dia rende mais.',
      },
      {
        subtitulo: 'Fibras e frutas para o corpo funcionar direito',
        texto:
          'Troquei o pão branco pelo integral e a diferença foi enorme. Hoje, gosto de uma fatia de pão de fermentação natural com abacate e um ovo, acompanhada de uma fruta da estação. Morango, mamão, banana e maçã são opções baratas e saborosas. Troquei sucos caixa por fruta inteira, porque a fibra faz falta. Uma tigelinha de aveia com canela e frutas secas também entra na rotina quando faz frio.',
      },
      {
        subtitulo: 'Hidratação antes do primeiro gole de café',
        texto:
          'Sempre que acordo, tomo um copo de água antes de qualquer coisa. Foi difícil criar o hábito, mas senti que a digestão melhorou e a disposição também. Depois do café da manhã, gosto de um café passado na hora ou um chá verde. Evito refrigerantes e sucos industrializados no início do dia, porque o açúcar derruba a energia antes mesmo de meio-dia.',
      },
      {
        subtitulo: 'Cardápios práticos que uso na correria',
        texto:
          'Na semana, preparo potinhos de iogurte com frutas e sementes, ovos cozidos e pães congelados. Assim consigo montar o café em menos de cinco minutos. Um exemplo: iogurte natural com banana, aveia e castanha-do-pará. Outro: pão integral com queijo branco, tomate e orégano, acompanhado de mamão. Essas combinações são simples, baratas e satisfazem.',
      },
      {
        subtitulo: 'Erros que eu já cometi e você pode evitar',
        texto:
          'Pular o café da manhã foi meu maior erro. Sem comer, eu compensava no almoço comendo demais e ficava com sono à tarde. Outro erro foi exagerar no açúcar: achava que achocolatado dava energia, mas na verdade me deixava com fome mais cedo. Hoje, o segredo é equilibrar proteína, fibra e gordura boa para um café que sustenta.',
      },
    ],
    cta: 'Qual café da manhã te faz sentir mais disposto durante a manhã? Conta sua experiência!',
  },
  {
    id: '14',
    slug: 'massa-italiana-em-casa-segredos-da-lurdinha',
    titulo: 'Massa italiana em casa: os segredos que aprendi cozinhando para minha família',
    emoji: '🍝',
    categoria: 'Técnica de Cozinha',
    resumo:
      'Aprenda a fazer massa italiana em casa com técnicas práticas de cozimento, finalização e escolha de molhos que a Lurdinha usa no dia a dia.',
    imagem: '/images/artigo-massas-italianas.jpg',
    introducao:
      'Quando me casei, meu marido adorava massa e eu cozinhava macarrão como todo mundo: jogava no fogão, escorria e despejava o molho por cima. O resultado era bom, mas nada especial. Só quando uma amiga italiana me ensinou os segredos da massa italiana em casa é que tudo mudou. Descobri que cozinhar a massa al dente, salvar a água do cozimento e finalizar no molho transformam um prato simples em algo digno de restaurante. Aqui vou contar tudo o que aprendi.',
    secoes: [
      {
        subtitulo: 'A água do cozimento é ouro na cozinha',
        texto:
          'Sempre que cozinho massa, antes de escorrer, pego com uma concha de meia xícara da água do cozimento. Essa água está cheia de amido e é o segredo para deixar o molho grudadinho na massa. Quando passo o espaguete para a panela do molho, vou adicionando a água do cozimento aos poucos e mexendo bem. O resultado é um creme sedoso que envolve cada fio de macarrão. Sem essa água, a massa fica seca e sem brilho.',
      },
      {
        subtitulo: 'Sal na água e nunca enxágue a massa',
        texto:
          'Uma dica básica que muita gente esquece: a água do cozimento precisa estar salgada, como o mar. Coloco uma colher de sopa cheia de sal para cada quatro litros de água. Outra coisa que aprendi foi nunca lavar a massa na água fria depois de cozinhar. A água fria remove o amido e faz com que o molho escorra. Só escorro e levo direto para o molho. A exceção é para salada de macarrão, onde eu quero parar o cozimento.',
      },
      {
        subtitulo: 'Cada massa tem o seu molho ideal',
        texto:
          'Espaguete combina com molhos leves, como aglio e olio ou pomodoro. Já penne e rigatoni seguram molhos encorpados porque o molho entra nos canudinhos. Fettuccine e pappardelle ficam perfeitos com molhos cremosos, como o Alfredo. Para gnocchi, prefiro molhos mais leves de tomate com manjericão. Quando respeito essa combinação, cada garfada fica harmoniosa.',
      },
      {
        subtitulo: 'Finalização no fogo com manteiga e queijo',
        texto:
          'Depois de misturar a massa ao molho, desligo o fogo e adiciono um pedaço de manteiga ou um fio de azeite de boa qualidade. Polvilho queijo parmesão ralado na hora e finalizo com ervas frescas, como manjericão ou salsinha. Esse toque final dá brilho, sabor e um cheiro que conquista qualquer um. Quando sirvo assim, minha família sempre elogia.',
      },
      {
        subtitulo: 'Meu molho de tomate caseiro preferido',
        texto:
          'Para um molho rápido, refogo meia cebola picada em azeite, adiciono três tomates maduros sem pele e sem semente, uma pitada de açúcar para cortar a acidez, sal e manjericão fresco. Deixo cozinhar por vinte minutos em fogo baixo, batendo levemente com um garfo. É simples, barato e muito mais saboroso que molhos industrializados.',
      },
    ],
    cta: 'Você finaliza a massa no molho ou costuma escorrer e despejar o molho por cima? Me conta!',
  },
  {
    id: '15',
    slug: 'brunch-em-casa-sem-estresse-lurdinha',
    titulo: 'Brunch em casa sem estresse: como receber sem passar a manhã na cozinha',
    emoji: '🥞',
    categoria: 'Receitas para Ocasiões',
    resumo:
      'Veja como montar um brunch caseiro delicioso, com cardápio, preparo antecipado e apresentação que fazem sucesso entre amigos e família.',
    imagem: '/images/artigo-brunch-casa.jpg',
    introducao:
      'O brunch nasceu em casa de repente. No aniversário da minha mãe, queria fazer algo diferente do almoço tradicional, mas não queria passar a manhã toda cozinhando. Decidi reunir pães, ovos, frutas e uma mesa bonita. Deu tão certo que virou tradição em datas especiais. Hoje, vou ensinar como montar um brunch em casa sem estresse, com preparação antecipada e um cardápio que agrada todo mundo.',
    secoes: [
      {
        subtitulo: 'Cardápio balanceado e sem exageros',
        texto:
          'Escolho no máximo três itens principais para não me perder. Geralmente faço panquecas ou uma fritada de ovos, um pão especial com manteiga e uma salada de frutas. Adiciono geleia caseira, mel e queijo como acompanhamentos. Essa quantidade é suficiente para uma mesa fartasem acumular trabalho. Quanto mais simples, melhor fica a experiência.',
      },
      {
        subtitulo: 'Prepare tudo o que puder na véspera',
        texto:
          'A massa da panqueca fica perfeita preparada um dia antes e guardada na geladeira. Frutas cortadas, geleia, suco de laranja e pães também podem ser descongelados ou organizados antecipadamente. Na hora do brunch, só preciso aquecer os ovos e fazer as panquecas. Isso me deixa tranquila para conversar com os convidados.',
      },
      {
        subtitulo: 'Monte uma mesa acolhedora sem gastar muito',
        texto:
          'Uso uma toalha limpa, tábua de madeira para cortes, potes de vidro para geleia e mel e flores do jardim como centro de mesa. Gosto de colocar pratos e copos misturados, porque o charme do brunch é o clima descontraído. Não precisa de louça nova: o importante é a organização e o carinho na arrumação.',
      },
      {
        subtitulo: 'Bebidas que acompanham bem o brunch',
        texto:
          'Suco de laranja natural, café passado, chá preto com limão e água aromatizada com morango e manjericão são minhas opções favoritas. Para quem gosta de algo diferente, um cappuccino caseiro ou um smoothie de banana com aveia fica perfeito. Ofereço bebidas à parte para as pessoas se servirem à vontade.',
      },
      {
        subtitulo: 'Erros que cometi nos primeiros brunches',
        texto:
          'A primeira vez, preparei muitas opções e acabei desperdiçando comida. Também esqueci de esquentar os pratos para os ovos, que esfriaram rápido. Com o tempo, aprendi que o brunch funciona melhor quando é simples, bem planejado e com hora certa para servir. Recomendo começar a montar a mesa meia hora antes dos convidados chegarem.',
      },
    ],
    cta: 'Se você fizesse um brunch amanhã, qual seria o prato principal: panqueca, ovos ou pães?',
  },
  {
    id: '16',
    slug: 'frutas-de-cada-estacao-na-minha-cozinha',
    titulo: 'Frutas de cada estação na minha cozinha: como economizar e comer melhor',
    emoji: '🍓',
    categoria: 'Ingredientes',
    resumo:
      'Descubra como a Lurdinha aproveita frutas da estação em receitas doces e salgadas, economizando e garantindo sabor e nutrição na mesa.',
    imagem: '/images/artigo-frutas-estacao.jpg',
    introducao:
      'Cresci indo à feira com a minha avó, e ela sempre dizia: fruta fora da época não tem alma. Com o tempo, entendi o que ela queria dizer. Frutas da estação são mais doces, têm textura melhor, chegam mais baratas e ainda carregam mais nutrientes. Além disso, usar frutas do momento é uma forma de respeitar o tempo da terra e variar o cardápio ao longo do ano. Neste artigo, vou mostrar como incluo frutas da estação no meu dia a dia, desde o café da manhã até receitas salgadas.',
    secoes: [
      {
        subtitulo: 'Por que frutas da estação valem a pena',
        texto:
          'Frutas colhidas no auge da safra amadurecem naturalmente e não precisam ser transportadas por longas distâncias. Por isso, têm sabor mais concentrado e preço mais acessível. Morangos no inverno, por exemplo, são caros e sem graça. Já no fim da primavera, ficam doces e perfumados. Comprar frutas no tempo certo é economia garantida.',
      },
      {
        subtitulo: 'Uso frutas em receitas salgadas',
        texto:
          'Manga verde entra em saladas com folhas e queijo coalho. Abacaxi grelhado acompanha bem carne de porco. Laranja e limão viram molhos para aves e peixes. Maçã adocicada complementa assados de carne suína. Essas combinações trazem frescor e surpreendem o paladar, sem deixar o prato doce demais.',
      },
      {
        subtitulo: 'Sobremesas simples com frutas frescas',
        texto:
          'Gosto de preparar sobremesas que deixem a fruta brilhar. Banana assada com canela e mel, salada de morango com manjericão, pêssego grelhado com iogurte natural e maçã caramelizada com creme de leite são exemplos fáceis. Não precisa de complicação: a fruta boa já é o protagonista.',
      },
      {
        subtitulo: 'Como congelar para aproveitar o ano todo',
        texto:
          'Quando encontro frutas em oferta, compro a mais e congelo. Morango, banana, manga e abacaxi vão lavados, descascados e cortados em saquinhos separados. Uso para vitaminas, smoothies e molhos. Para compotas, cozinho as frutas com açúcar ou mel e congelo em potes pequenos. Assim, tenho sabor de verão até no inverno.',
      },
      {
        subtitulo: 'Frutas preferidas por estação',
        texto:
          'No verão, abuso de melão, melancia e manga. No outono, aproveito uva, figo e maçã. No inverno, laranja, tangerina e caqui. Na primavera, morango, pêssego e ameixa. Montar o cardápio em volta dessas frutas deixa a alimentação mais colorida e nutritiva sem forçar o bolso.',
      },
    ],
    cta: 'Qual fruta da sua região você mais gosta de usar na cozinha? Conta para a gente!',
  },
  {
    id: '17',
    slug: 'salada-gostosa-de-verdade-lurdinha',
    titulo: 'Salada gostosa de verdade: como eu aprendi a amar folhas na minha cozinha',
    emoji: '🥗',
    categoria: 'Técnica de Cozinha',
    resumo:
      'Veja como a Lurdinha monta saladas saborosas, nutritivas e capazes de virar refeição completa com molhos caseiros e combinações especiais.',
    imagem: '/images/artigo-saladas-gostosas.jpg',
    introducao:
      'Por muito tempo, salada para mim era alface com tomate e limão. Comia porque fazia bem, mas não com gosto. Só quando comecei a experimentar texturas, molhos e combinações diferentes é que a salada virou um prato que eu realmente queria comer. Hoje, salada entra no almoço e no jantar como refeição completa. Neste artigo, vou mostrar como montar uma salada gostosa de verdade, do molho à montagem final.',
    secoes: [
      {
        subtitulo: 'A base faz diferença: escolha folhas com sabor',
        texto:
          'Alface crespa é crocante, rúcula tem um leve amargor, agrião dá um toque picante e a couve fininha traz resistência. Eu gosto de misturar duas ou três folhas para criar contraste. Lavar e secar bem é obrigatório: folhas molhadas não seguram o molho e ficam sem graça. Uso centrífuga de salada ou enxugo com pano de prato limpo.',
      },
      {
        subtitulo: 'Crocância, cremosidade e surpresas no prato',
        texto:
          'Cada salada boa tem um elemento crocante, um cremoso e uma surpresa de sabor. Castanhas, sementes ou croutons de pão integral dão a crocância. Abacate, queijo feta ou iogurte grego trazem a cremosidade. Frutas secas, uvas passas ou damasco picado dão o toque doce que equilibra o molho. Quando consigo esses três elementos, a salada fica interessante de verdade.',
      },
      {
        subtitulo: 'Molho caseiro: minha receita básica',
        texto:
          'No liquidificador, coloco um terço de xícara de azeite, duas colheres de sopa de vinagre de maçã, uma colher de chá de mostarda, uma colher de chá de mel, sal e pimenta-do-reino. Bato por trinta segundos e guardo em um pote de vidro. Esse molho dura uma semana na geladeira e fica perfeito com qualquer salada. Outra opção que gosto é iogurte natural com limão, alho picado e ervas.',
      },
      {
        subtitulo: 'Transformando salada em prato principal',
        texto:
          'Para fazer da salada uma refeição, adiciono proteína. Filé de frango grelhado em tiras, ovos cozidos cortados ao meio, grão-de-bico assado com páprica, atum em lata ou quinoa cozida são minhas escolhas favoritas. Assim, a salada sustenta e não deixa ninguém com fome. Uma vez por semana, faço uma salada grande de frango desfiado que dura dois dias na geladeira.',
      },
      {
        subtitulo: 'Erros que eu cometi e como evitá-los',
        texto:
          'Antes, eu jogava o molho bem antes de servir e a salada murchava. Hoje, só rego na hora de comer. Também exagerava em ingredientes e o prato ficava confuso. Aprendi que menos é mais: três ou quatro complementos são suficientes. Outro erro era não temperar as folhas. Uma pitada de sal e pimenta direto nas folhas antes do molho ajuda o sabor a se espalhar.',
      },
    ],
    cta: 'Qual o ingrediente estranho que você já colocou em uma salada e deu certo? Conta!',
  },
  {
    id: '18',
    slug: 'ervas-frescas-na-minha-cozinha',
    titulo: 'Ervas frescas na minha cozinha: o segredo para dar vida aos pratos',
    emoji: '🌿',
    categoria: 'Ingredientes',
    resumo:
      'Descubra como a Lurdinha usa ervas frescas para aromatizar pratos, conservá-las por mais tempo e criar combinações de sabores memoráveis.',
    imagem: '/images/artigo-ervas-frescas.jpg',
    introducao:
      'Quando comecei a cultivar um pequeno vaso de manjericão na janela, minha cozinha mudou. Descobri que ervas frescas são como tempero vivo: trazem aroma, cor e um sabor que nenhum tempero seco consegue copiar. Hoje, tenho salsinha, cebolinha, hortelã, alecrim e tomilho sempre à mão. Neste artigo, vou compartilhar como uso ervas frescas no dia a dia, desde o cozimento até a finalização.',
    secoes: [
      {
        subtitulo: 'Ervas resistentes vão no fogo, delicadas vão por cima',
        texto:
          'Alecrim, tomilho, louro e sálvia aguentam o calor. Coloco no início do cozimento, em assados, molhos e sopas. Já manjericão, salsinha, cebolinha e coentro perdem o sabor quando expostos ao calor por muito tempo. Por isso, adiciono essas ervas no final, quando o prato já está pronto, para manter o frescor e o aroma.',
      },
      {
        subtitulo: 'Combinações que nunca falham na minha casa',
        texto:
          'Manjericão com tomate é clássico e perfeito para molhos e caprese. Coentro acompanha comida mexicana, brasileira e tailandesa. Sálvia com manteiga derretida fica divina em massas recheadas. Hortelã vai bem com saladas de frutas, chás e doces. Tomilho e alecrim dão um toque especial em carnes de forno e batatas assadas. Essas combinações me salvam quando não sei o que fazer.',
      },
      {
        subtitulo: 'Como eu conservo ervas frescas por mais tempo',
        texto:
          'Para ervas com caule, como salsinha e cebolinha, coloco em um copo com água na geladeira, como um buquê, trocando a água a cada dois dias. Para folhas mais delicadas, como manjericão, envolvo em papel toalha levemente úmido e guardo em um pote fechado. Nunca deixo dentro de sacolas plásticas, porque acumula umidade e apodrece. Quando sobra muito, transformo em pesto ou congelo em azeite em formas de gelo.',
      },
      {
        subtitulo: 'Receita rápida de manteiga de ervas',
        texto:
          'Uma das minhas receitas favoritas é a manteiga de ervas: amasso um dente de alho, misturo com duas colheres de sopa de manteiga amolecida, salsinha e cebolinha picadas, sal e pimenta. Uso para passar no pão, finalizar carnes grelhadas ou colocar por cima de batatas assadas. Fica pronta em cinco minutos e dura cinco dias na geladeira.',
      },
      {
        subtitulo: 'Quando usar ervas secas no lugar das frescas',
        texto:
          'Ervas secas têm lugar na cozinha, mas funcionam de forma diferente. Uso orégano, tomilho e alecrim secos em pratos longos, como ensopados e assados. Como o sabor é mais concentrado, uso a metade da quantidade em relação às ervas frescas. Salsinha e cebolinha secas entram em caldos e farofas. Mesmo assim, quando tenho a versão fresca disponível, ela ganha.',
      },
    ],
    cta: 'Qual erva fresca você não consegue viver sem na cozinha? Conta para nós!',
  },
  {
    id: '19',
    slug: 'marmitas-congeladas-que-funcionam',
    titulo: 'Marmitas congeladas que funcionam: como organizo a semana em uma tarde',
    emoji: '🍱',
    categoria: 'Planejamento de Refeições',
    resumo:
      'Aprenda a preparar marmitas congeladas práticas, saborosas e seguras com as receitas e dicas de armazenamento que a Lurdinha usa semanalmente.',
    imagem: '/images/artigo-marmitas.jpg',
    introducao:
      'Há uns anos, minha semana virou um caos de delivery e comida carregada. Até que uma amiga me ensinou o hábito de fazer marmitas congeladas. Demorei para acreditar que congelar comida caseira pudesse ficar boa, mas depois de testar receitas certas, me apaixonei. Hoje, separo uma tarde de domingo para preparar quatro ou cinco marmitas que levam minha família até sexta-feira. Neste artigo, vou contar o que aprendi.',
    secoes: [
      {
        subtitulo: 'Receitas que congelam bem e ficam gostosas',
        texto:
          'Sopas de legumes, feijoada light, strogonoff de frango, arroz de forno, frango desfiado com molho e carne moída refogada são minhas apostas certeiras. Carnes em molho costumam ficar melhores porque o caldo mantém a umidade. Já saladas, batatas cozidas e frituras não vão bem para o freezer, porque perdem textura. Legumes refogados congelam razoavelmente, desde que estejam al dente.',
      },
      {
        subtitulo: 'Minha rotina de preparo em quatro passos',
        texto:
          'Primeiro, escolho as receitas e faço a lista de compras. Segundo, separo a tarde para cozinhar três ou quatro pratos diferentes. Terceiro, deixo esfriar completamente antes de armazenar. Quarto, coloco em potes herméticos de vidro, deixando um dedo de espaço para a expansão, e etiqueto com nome e data. Costumo fazer porções individuais para almoço e congelo por até três meses.',
      },
      {
        subtitulo: 'Como descongelar sem perder sabor',
        texto:
          'A melhor forma é passar a marmita do freezer para a geladeira na noite anterior. Para aquecer, uso micro-ondas com uma colher de água ou caldo no fundo, mexendo no meio do tempo. Também posso usar forno: coloco em uma travessa, cubro com papel-alumínio e aqueço por vinte minutos. Isso recupera a umidade e deixa o prato quase como recém-feito.',
      },
      {
        subtitulo: 'Combinações de marmitas que faço em casa',
        texto:
          'Arroz integral com frango desfiado e brócolis no vapor. Feijão carioca com carne moída, couve e batata-doce. Macarrão ao molho de salsicha com legumes. Arroz de forno com queijo, presunto e ervilha. Essas são opções que aprovo aqui em casa e que congelam sem perder o sabor. Variação é importante para não enjoar.',
      },
      {
        subtitulo: 'Dicas de segurança alimentar que sigo',
        texto:
          'Nunca coloco marmita quente no freezer, porque gera bactérias e aumenta o consumo de energia. Também não recongelo comida já descongelada. Uso potes fechados hermeticamente para evitar ressecamento e gosto de freezer. E, antes de consumir, sempre verifico o cheiro e a aparência. Segurança em primeiro lugar.',
      },
    ],
    cta: 'Você já faz marmitas congeladas? Qual a sua receita preferida para congelar?',
  },
  {
    id: '20',
    slug: 'jantar-rapido-de-semana-lurdinha',
    titulo: 'Jantar rápido de semana: receitas que eu faço em até 30 minutos',
    emoji: '⏱️',
    categoria: 'Praticidade na Cozinha',
    resumo:
      'Veja como a Lurdinha prepara jantares nutritivos, saborosos e práticos para a semana sem passar horas na cozinha.',
    imagem: '/images/artigo-cozinha-rapida.jpg',
    introducao:
      'Entre trabalho, filhos e compromissos, cozinhar jantar elaborado durante a semana é quase impossível. Por muito tempo, a solução era comida industrializada. Até que criei um conjunto de receitas rápidas que me tiram da fria e ainda são nutritivas. Hoje, consigo colocar jantar na mesa em trinta minutos ou menos. Neste artigo, vou compartilhar minhas estratégias e pratos favoritos.',
    secoes: [
      {
        subtitulo: 'O mise en place doméstico que funciona',
        texto:
          'No domingo, lavo e corto legumes, tempero carnes e preparo potes com temperos. Na geladeira, deixo cenoura, cebola, pimentão e alho poró já picados. Na hora de cozinhar, é só juntar tudo. Essa organização diminui a preguiça e faz a semana fluir. Outro truque é ter ovos, massas e legumes congelados sempre disponíveis.',
      },
      {
        subtitulo: 'Receitas de uma panela só',
        texto:
          'Macarrão na panela com caldo de legumes, tomate e frango é uma delícia e só suja um utensílio. Arroz de forno montado com sobras da geladeira fica pronto em vinte minutos. Fritada de ovos com legumes e queijo é outro resgate. O segredo é cortar os ingredientes em tamanhos parecidos para cozinharem no mesmo tempo.',
      },
      {
        subtitulo: 'Proteínas que cozinham rápido',
        texto:
          'Filé de peito de frango em tiras, sardinha em lata, ovos e atum são proteínas que ficam prontas em minutos. Grelho o frango com limão e alho, adiciono legumes e fecho com uma tampa por cinco minutos. Ovos cozidos ou fritos salvam qualquer refeição. Cogumelos e grão-de-bico são ótimas opções vegetarianas.',
      },
      {
        subtitulo: 'Molhos prontos que encurtam o caminho',
        texto:
          'Mantenho sempre molho de tomate caseiro congelado em porções, pesto no vidro e azeite com alho na geladeira. Com esses três itens, consigo montar massas, arroz e carnes com sabor em pouco tempo. Um molho de mostarda com mel também funciona para dar vida a peitos de frango sem graça.',
      },
      {
        subtitulo: 'Cardápio de uma semana na minha casa',
        texto:
          'Segunda: arroz com frango desfiado e legumes. Terça: omelete com espinafre e batatas soutadas. Quarta: macarrão integral ao molho de tomate e almôndegas rápidas. Quinta: sopa de legumes com torradas. Sexta: peixe grelhado com salada e batata-doce. Esse planejamento me ajuda a variar sem perder tempo.',
      },
    ],
    cta: 'Qual é o seu salva-vidas na cozinha quando o dia aperta? Conta para a gente!',
  },
  {
    id: '21',
    slug: 'embelezar-pratos-caseiros-lurdinha',
    titulo: 'Embelezar pratos caseiros: como eu transformo o almoço em uma refeição especial',
    emoji: '🍽️',
    categoria: 'Arte Culinária',
    resumo:
      'Aprenda técnicas simples de empratamento que a Lurdinha usa para deixar pratos caseiros bonitos, convidativos e dignos de fotografia.',
    imagem: '/images/artigo-plating.jpg',
    introducao:
      'Antes, eu servia a comida direto na panela e cada um se virava. Quando comecei a empratar com um pouco de capricho, percebi que o mesmo prato ganhava outra cara. A apresentação não precisa ser de restaurante sofisticado, basta ter cuidado. Hoje, gosto de servir mesa posta para a família, mesmo no dia a dia. Neste artigo, vou mostrar como embelezar pratos caseiros de forma simples e sem estresse.',
    secoes: [
      {
        subtitulo: 'O prato certo faz metade do trabalho',
        texto:
          'Pratos brancos ou em cores claras destacam a comida. Tigelas fundas funcionam para sopas, risotos e açaís. Pratos rasos e amplos são ideais para pratos com mais elementos, como filé com legumes. Tábuas de madeira dão um clima rústico para pães e queijos. Não precisa de louça nova: um prato limpo e sem manchas já é um bom começo.',
      },
      {
        subtitulo: 'Contraste de cores e altura no prato',
        texto:
          'Tento colocar três cores no prato: o branco do arroz ou purê, o verde dos legumes e o marrom ou vermelho da proteína. Depois, busco dar altura: empilho o purê com uma colher ou coloco o frango levemente inclinado sobre a cama de arroz. Pratos mais altos chamam mais atenção e parecem mais apetitosos.',
      },
      {
        subtitulo: 'Texturas e toques finais',
        texto:
          'Sementes de gergelim, castanhas trituradas, ervas frescas, cebola crispy e um fio de azeite são meus toques finais preferidos. Além de bonitos, adicionam sabor e textura. Polvilho a salsinha picada com as mãos para liberar o aroma. Um fio de redução de balsâmico ou de azeite de oliva ao redor do prato dá um ar de capricho.',
      },
      {
        subtitulo: 'Erros que eu ainda evito',
        texto:
          'Nunca emprato a comida muito antes da hora de comer, porque esfria e murcha. Também evito encher o prato até a borda: a comida precisa respirar. Outro erro comum é polvilhar aleatoriamente. Agora, distribuo os elementos de forma intencional. Cada ingrediente no prato tem um lugar.',
      },
      {
        subtitulo: 'Exemplo prático de prato bonito',
        texto:
          'Para montar um prato simples, faço uma cama de arroz branco, coloco filé de frango grelhado em tiras sobre o arroz, adiciono brócolis no vapor ao lado, uma concha de molho de mostarda e mel por cima do frango e finalizo com salsinha e amêndoas laminadas. O resultado é colorido, saboroso e leva menos de cinco minutos para montar.',
      },
    ],
    cta: 'Você se preocupa com a apresentação dos pratos em casa? Me conta como você monta a mesa!',
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
