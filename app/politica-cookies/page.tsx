// Página de Política de Cookies
// Documento legal obrigatório para aprovação do Google AdSense

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Política de Cookies</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. O que são Cookies?</h2>
          <p className="text-gray-700 mb-4">
            Cookies são pequenos arquivos de dados armazenados em seu navegador ou dispositivo. Eles são usados para lembrar informações sobre você, como suas preferências e histórico de navegação.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Por que usamos Cookies?</h2>
          <p className="text-gray-700 mb-4">
            Usamos cookies para:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Melhorar sua experiência em nosso site</li>
            <li>Entender como você usa nosso site</li>
            <li>Personalizar o conteúdo e os anúncios</li>
            <li>Manter você conectado (se aplicável)</li>
            <li>Analisar o tráfego do site</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Tipos de Cookies que Usamos</h2>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3.1 Cookies Essenciais</h3>
          <p className="text-gray-700 mb-4">
            Estes cookies são necessários para o funcionamento básico do nosso site. Sem eles, o site pode não funcionar corretamente.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3.2 Cookies de Análise</h3>
          <p className="text-gray-700 mb-4">
            Usamos cookies de análise para entender como você usa nosso site. Estes cookies nos ajudam a melhorar nosso site e conteúdo.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3.3 Cookies de Publicidade</h3>
          <p className="text-gray-700 mb-4">
            Usamos cookies de publicidade para exibir anúncios relevantes para você. O Google AdSense usa cookies para exibir anúncios com base em suas visitas anteriores ao nosso site ou a outros sites.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Google Analytics</h2>
          <p className="text-gray-700 mb-4">
            Nosso site usa o Google Analytics, um serviço de análise da web fornecido pelo Google, Inc. ("Google"). O Google Analytics usa cookies para ajudar o site a analisar como os usuários usam o site. As informações geradas pelo cookie sobre o seu uso do site (incluindo seu endereço IP) serão transmitidas e armazenadas pelo Google nos servidores dos EUA.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Google AdSense</h2>
          <p className="text-gray-700 mb-4">
            Nosso site exibe anúncios do Google AdSense. O Google pode usar cookies para exibir anúncios com base em suas visitas anteriores ao nosso site ou a outros sites. Você pode desativar os cookies de publicidade personalizados visitando as Configurações de Anúncios do Google.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Como Controlar Cookies</h2>
          <p className="text-gray-700 mb-4">
            Você pode controlar e/ou excluir cookies conforme desejar. Para mais informações, visite allaboutcookies.org. Você pode excluir todos os cookies que já estão em seu computador e pode definir a maioria dos navegadores para impedir que eles sejam colocados. Se você fizer isso, no entanto, você pode ter que ajustar manualmente algumas preferências cada vez que visitar um site e alguns serviços e funcionalidades podem não funcionar.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Mudanças nesta Política de Cookies</h2>
          <p className="text-gray-700 mb-4">
            Podemos atualizar esta Política de Cookies de tempos em tempos. Notificaremos você sobre qualquer alteração publicando a nova Política de Cookies nesta página e atualizando a data de "Última atualização" no topo desta página.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Contato</h2>
          <p className="text-gray-700 mb-4">
            Se você tiver dúvidas sobre esta Política de Cookies, entre em contato conosco pelo email lreceitas9@gmail.com ou pela página /contato.
          </p>
        </div>
      </div>
    </div>
  );
}
