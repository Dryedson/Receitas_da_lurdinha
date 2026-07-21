// Página de Termos de Uso
// Documento legal obrigatório para aprovação do Google AdSense

export default function TermsOfUse() {
  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Termos de Uso</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-gray-700 mb-4">
            Ao acessar e usar o site Receitas da Lurdinha (receitasdalurdinha.com.br), você aceita estar vinculado por estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não use nosso site.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Uso Licenciado</h2>
          <p className="text-gray-700 mb-4">
            É concedida a você uma licença limitada, não exclusiva e revogável para acessar e usar nosso site para fins pessoais e não comerciais. Você não pode:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Modificar ou copiar o material</li>
            <li>Usar o material para qualquer propósito comercial ou para qualquer propósito público</li>
            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site</li>
            <li>Remover qualquer aviso de direitos autorais ou propriedade de qualquer material</li>
            <li>Transferir o material para outra pessoa ou "espelhar" o material em qualquer outro servidor</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Isenção de Responsabilidade</h2>
          <p className="text-gray-700 mb-4">
            O material em nosso site é fornecido "como está". Não oferecemos garantias, expressas ou implícitas, e renunciamos e excluímos qualquer garantia, incluindo, sem limitação, qualquer garantia implícita de comercialização ou adequação para um propósito específico.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Limitações de Responsabilidade</h2>
          <p className="text-gray-700 mb-4">
            Em nenhum caso o Receitas da Lurdinha ou seus fornecedores serão responsáveis por danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a interrupção de negócios) decorrentes do uso ou da incapacidade de usar o material em nosso site.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Precisão do Material</h2>
          <p className="text-gray-700 mb-4">
            O material em nosso site foi compilado com o cuidado. No entanto, não garantimos a precisão, integridade ou qualidade do material. Se você notar um erro em nosso site, entre em contato conosco.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Links</h2>
          <p className="text-gray-700 mb-4">
            Não analisamos todos os sites vinculados ao nosso site e não somos responsáveis pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso do site por nós. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Modificações</h2>
          <p className="text-gray-700 mb-4">
            Podemos revisar estes Termos de Uso do nosso site a qualquer momento sem aviso prévio. Ao usar este site, você está concordando em estar vinculado pela versão atual destes Termos de Uso.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Lei Aplicável</h2>
          <p className="text-gray-700 mb-4">
            Estes Termos de Uso e qualquer disputa relacionada serão regidos pelas leis do Brasil, sem considerar suas disposições sobre conflitos de leis.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Contato</h2>
          <p className="text-gray-700 mb-4">
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo email lreceitas9@gmail.com ou pela página /contato.
          </p>
        </div>
      </div>
    </div>
  );
}
