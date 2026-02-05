'use client';

import Script from 'next/script';

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
  const client = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT || 'ca-pub-5971787155500943';

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
  return (
    <div className={className}>
      <GoogleAdsense
        slot="2547896541"
        format="rectangle"
        className="mx-auto"
      />
    </div>
  );
}

// Component para anúncio na sidebar
export function AdSidebar({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <GoogleAdsense
        slot="3698745123"
        format="vertical"
      />
    </div>
  );
}

// Component para anúncio full-width
export function AdFullWidth({ className = 'my-8' }: { className?: string }) {
  return (
    <div className={className}>
      <GoogleAdsense
        slot="4521369874"
        format="horizontal"
        responsive
      />
    </div>
  );
}
