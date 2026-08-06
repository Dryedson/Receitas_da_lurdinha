// Página Sobre - Design profissional com logo como fundo

import { AdBanner } from '@/components/ads/AdBanner';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Cabeçalho com Logo como Fundo */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/logo-lurdinha.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Conteúdo */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Sobre Receitas da Lurdinha
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-amber-100 drop-shadow-md">
            Conheça a história e a paixão da Lurdinha pela culinária
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Missão */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">A Lurdinha e Suas Receitas</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Receitas da Lurdinha foi criada com uma missão simples: compartilhar as receitas originais e deliciosas da Lurdinha com o mundo. Com anos de experiência na cozinha, a Lurdinha desenvolveu suas próprias técnicas e segredos que tornam cada receita especial.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Cada receita em nosso site foi cuidadosamente desenvolvida pela Lurdinha e reescrita para garantir que seja 100% original, sem plágio. Aqui você encontra instruções claras, dicas práticas e o toque especial que só a Lurdinha sabe dar.
          </p>
        </section>

        {/* O que oferecemos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">O que Oferecemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">📚 Receitas Originais</h3>
              <p className="text-gray-700">
                Conteúdo 100% original e exclusivo, desde bolos e sobremesas até pratos principais e molhos. Cada receita foi reescrita para garantir autenticidade.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">👨‍🍳 Instruções Detalhadas</h3>
              <p className="text-gray-700">
                Passo a passo claro e fácil de seguir, com ingredientes bem medidos e instruções que funcionam para cozinheiros de todos os níveis.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">💡 Dicas Práticas</h3>
              <p className="text-gray-700">
                Dicas valiosas para melhorar seus resultados, evitar erros comuns e personalizar as receitas de acordo com suas preferências.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">🎯 Categorias Variadas</h3>
              <p className="text-gray-700">
                Receitas organizadas por categoria para facilitar a busca. De bolos a frutos do mar, temos algo para todos os gostos.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossos Valores</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Originalidade</h3>
              <p className="text-gray-700">
                Todas as nossas receitas são 100% originais. Nós reescrevemos e adaptamos conteúdo para garantir que seja único e sem plágio.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Qualidade</h3>
              <p className="text-gray-700">
                Cada receita é testada e refinada para garantir que funcione perfeitamente. Fornecemos apenas conteúdo de alta qualidade.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Acessibilidade</h3>
              <p className="text-gray-700">
                Nossas receitas são projetadas para serem fáceis de seguir, com ingredientes comuns e instruções claras para todos os níveis.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Transparência</h3>
              <p className="text-gray-700">
                Somos transparentes sobre nossas práticas, incluindo o uso de anúncios do Google AdSense para manter o site funcionando.
              </p>
            </div>
          </div>
        </section>

        {/* Por que confiar em nós */}
        <section className="mb-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Confiar em Nós?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✓</span>
              <span>Conteúdo 100% original e exclusivo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✓</span>
              <span>Receitas testadas e refinadas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✓</span>
              <span>Instruções claras e detalhadas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✓</span>
              <span>Dicas práticas para melhorar seus resultados</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✓</span>
              <span>Site seguro e com política de privacidade clara</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-xl">✓</span>
              <span>Atualizado regularmente com novas receitas</span>
            </li>
          </ul>
        </section>

        {/* Contato */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tem Alguma Dúvida?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Adoraríamos ouvir de você! Se tiver sugestões, dúvidas ou comentários, entre em contato conosco.
          </p>
          <a
            href="mailto:lreceitas9@gmail.com"
            className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition"
          >
            Entre em Contato
          </a>
        </section>
      </div>

      {/* Espaço reservado para anúncio - Página Sobre */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <AdBanner slot="sobre-pagina" format="horizontal" />
      </div>
    </div>
  );
}
