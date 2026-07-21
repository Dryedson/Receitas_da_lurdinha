// Página de Política de Privacidade
// Documento legal obrigatório para aprovação do Google AdSense

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Política de Privacidade</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Introdução</h2>
          <p className="text-gray-700 mb-4">
            A Receitas Deliciosas ("nós", "nosso" ou "nos") opera o site Receitas Deliciosas. Esta página informa você sobre nossas políticas sobre a coleta, uso e divulgação de dados pessoais quando você usa nosso site e as escolhas que você tem associadas a esses dados.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Coleta e Uso de Dados</h2>
          <p className="text-gray-700 mb-4">
            Coletamos vários tipos de informações para diversos fins, a fim de fornecer e melhorar nosso serviço para você.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.1 Dados Coletados Automaticamente</h3>
          <p className="text-gray-700 mb-4">
            Quando você visita nosso site, coletamos automaticamente certas informações sobre seu dispositivo, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Endereço IP</li>
            <li>Tipo de navegador</li>
            <li>Páginas visitadas</li>
            <li>Hora e data da visita</li>
            <li>Tempo gasto em cada página</li>
            <li>Informações de referência</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.2 Google Analytics</h3>
          <p className="text-gray-700 mb-4">
            Usamos o Google Analytics para entender como você usa nosso site. O Google Analytics coleta informações como quantas vezes você visita o site, quais páginas você visita, e outras informações sobre sua atividade no site. Para mais informações sobre como o Google Analytics coleta e processa dados, visite a Política de Privacidade do Google.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2.3 Google AdSense</h3>
          <p className="text-gray-700 mb-4">
            Nosso site exibe anúncios do Google AdSense. O Google pode usar cookies para exibir anúncios com base em suas visitas anteriores ao nosso site ou a outros sites. Você pode desativar os cookies de publicidade personalizados visitando as Configurações de Anúncios do Google.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Usamos cookies para melhorar sua experiência em nosso site. Um cookie é um pequeno arquivo de dados armazenado em seu dispositivo. Você pode controlar o uso de cookies através das configurações do seu navegador.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Segurança de Dados</h2>
          <p className="text-gray-700 mb-4">
            A segurança de seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus dados pessoais, não podemos garantir sua segurança absoluta.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Links para Outros Sites</h2>
          <p className="text-gray-700 mb-4">
            Nosso site pode conter links para outros sites que não são operados por nós. Esta Política de Privacidade se aplica apenas ao nosso site. Não somos responsáveis pelas práticas de privacidade de outros sites e o encorajamos a revisar suas políticas de privacidade.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Mudanças nesta Política de Privacidade</h2>
          <p className="text-gray-700 mb-4">
            Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre qualquer alteração publicando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização" no topo desta página.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Contato Conosco</h2>
          <p className="text-gray-700 mb-4">
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do formulário de contato em nosso site.
          </p>
        </div>
      </div>
    </div>
  );
}
