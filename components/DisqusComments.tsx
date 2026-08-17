// Componente de comentários Disqus
// Exibe seção de comentários em receitas e artigos do blog

'use client';

import { useEffect } from 'react';

interface DisqusCommentsProps {
  identifier: string; // ID único da página (ex: recipe-id ou blog-slug)
  title: string; // Título da página
  url: string; // URL completa da página
}

export function DisqusComments({ identifier, title, url }: DisqusCommentsProps) {
  useEffect(() => {
    // Resetar Disqus para a nova página
    const disqus = (window as any).DISQUS;
    if (disqus) {
      disqus.reset({
        reload: true,
        config: function () {
          this.page.identifier = identifier;
          this.page.title = title;
          this.page.url = url;
        },
      });
    }
  }, [identifier, title, url]);

  return (
    <div className="my-12">
      <div id="disqus_thread"></div>
      <noscript>
        Por favor, ative JavaScript para ver os comentários.
      </noscript>
    </div>
  );
}
