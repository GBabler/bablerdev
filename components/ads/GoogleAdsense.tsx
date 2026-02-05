'use client';

import Script from 'next/script';
import { getAdsenseConfig, isAdsenseEnabled } from '@/config/adsense.config';

interface GoogleAdsenseProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

export function GoogleAdsense({
  slot = '1234567890',
  format = 'auto',
  responsive = true,
  className = '',
}: GoogleAdsenseProps) {
  const config = getAdsenseConfig();
  
  // Se AdSense não está ativado neste domínio, não renderiza nada
  if (!isAdsenseEnabled() || !config.client) {
    return null;
  }

  const client = config.client;

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <ins
        className={`adsbygoogle ${className}`}
        style={{
          display: 'block',
          ...(responsive && { width: '100%', height: 'auto' }),
        }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
      <Script
        id={`adsbygoogle-${slot}`}
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: '(adsbygoogle = window.adsbygoogle || []).push({});',
        }}
      />
    </>
  );
}

// Component para anúncios entre posts/conteúdo
export function AdBetweenContent({ className = 'my-8' }: { className?: string }) {
  const config = getAdsenseConfig();
  
  if (!isAdsenseEnabled() || !config.slots.betweenContent) {
    return null;
  }

  return (
    <div className={className}>
      <GoogleAdsense
        slot={config.slots.betweenContent}
        format="rectangle"
        className="mx-auto"
      />
    </div>
  );
}

// Component para anúncio na sidebar
export function AdSidebar({ className = '' }: { className?: string }) {
  const config = getAdsenseConfig();
  
  if (!isAdsenseEnabled() || !config.slots.sidebar) {
    return null;
  }

  return (
    <div className={className}>
      <GoogleAdsense
        slot={config.slots.sidebar}
        format="vertical"
      />
    </div>
  );
}

// Component para anúncio full-width
export function AdFullWidth({ className = 'my-8' }: { className?: string }) {
  const config = getAdsenseConfig();
  
  if (!isAdsenseEnabled() || !config.slots.fullWidth) {
    return null;
  }

  return (
    <div className={className}>
      <GoogleAdsense
        slot={config.slots.fullWidth}
        format="horizontal"
        responsive
      />
    </div>
  );
}
