// Página de Contato
// Obrigatória para aprovação no Google AdSense

import { Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  // Email de contato do site (fornecido pelo dono)
  const email = 'lreceitas9@gmail.com';

  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Entre em Contato</h1>
          <p className="mt-4 text-lg text-amber-50">
            Tem dúvidas, sugestões ou receitas para compartilhar? Fale com a Lurdinha!
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card de email */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-amber-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-3">Email</h2>
            <p className="text-stone-600 mb-4">
              Responderemos o mais rápido possível. Envie sua mensagem diretamente para:
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition"
            >
              {email}
            </a>
          </div>

          {/* Card de tempo de resposta */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-orange-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-3">Tempo de Resposta</h2>
            <p className="text-stone-600">
              Normalmente respondemos em até 48 horas úteis. Agradecemos sua paciência e interesse!
            </p>
          </div>
        </div>

        {/* Chamada para engajamento */}
        <div className="mt-12 bg-amber-50 p-8 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <MessageCircle className="text-amber-600" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-3">Quer mandar uma receita?</h2>
              <p className="text-stone-700 leading-relaxed">
                Adoramos conhecer novas ideias de culinária! Envie o nome da receita, os ingredientes
                e o passo a passo pelo email acima. As melhores sugestões podem virar posts aqui no site.
              </p>
            </div>
          </div>
        </div>

        {/* Aviso legal */}
        <p className="mt-8 text-center text-sm text-stone-500">
          Ao entrar em contato, você concorda com nossa{' '}
          <a href="/politica-privacidade" className="text-amber-700 hover:underline">
            Política de Privacidade
          </a>.
        </p>
      </div>
    </div>
  );
}
