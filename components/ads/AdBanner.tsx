'use client'; // Componente que roda no navegador para carregar os scripts do Google AdSense

import { useEffect, useRef } from 'react';

// Tipagem das propriedades do banner de anúncio
interface AdBannerProps {
  slot: string; // Identificador do bloco de anúncio no Google AdSense
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'; // Formato do anúncio
  className?: string; // Classes extras para ajustar margens e alinhamento
  style?: React.CSSProperties; // Estilos inline opcionais
}

// Mapeamento de formatos para tamanhos sugeridos via CSS
const formatStyles: Record<string, React.CSSProperties> = {
  auto: { display: 'block' },
  rectangle: { display: 'inline-block', minWidth: '300px', minHeight: '250px' },
  horizontal: { display: 'block', width: '100%', minHeight: '90px' },
  vertical: { display: 'inline-block', minWidth: '160px', minHeight: '600px' },
};

export function AdBanner({ slot, format = 'auto', className = '', style }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Garante que o push do AdSense só aconteça no ambiente do cliente
    if (typeof window === 'undefined') return;

    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (e) {
      // Evita quebrar a aplicação caso o script do AdSense não esteja carregado
      console.error('Erro ao carregar anúncio AdSense:', e);
    }
  }, []);

  return (
    <div
      ref={adRef}
      className={`flex justify-center items-center my-4 w-full ${className}`}
      style={style}
      aria-hidden="true"
    >
      <ins
        className="adsbygoogle"
        style={formatStyles[format] || formatStyles.auto}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-xxxxxxxxxxxxxxxx'}
        data-ad-slot={slot}
        data-ad-format={format === 'auto' ? 'auto' : format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
