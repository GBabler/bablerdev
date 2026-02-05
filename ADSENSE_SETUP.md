// Exemplos de como usar os componentes de Google AdSense

/**
 * EXEMPLO 1: Usando o componente base GoogleAdsense
 * 
 * Importe o componente e use em qualquer página/componente:
 */

import { GoogleAdsense } from '@/components/ads/GoogleAdsense';

export default function ExamplePage() {
  return (
    <div>
      <h1>Minha Página</h1>
      
      {/* Anúncio automático com configurações padrão */}
      <GoogleAdsense />
      
      {/* Anúncio customizado */}
      <GoogleAdsense 
        slot="7654321234"
        format="rectangle"
        className="my-8"
      />
    </div>
  );
}

/**
 * EXEMPLO 2: Usando os componentes pré-configurados
 * 
 * - AdBetweenContent: para colocar entre posts/conteúdo
 * - AdSidebar: para sidebar
 * - AdFullWidth: para anúncio full-width
 */

import { AdBetweenContent, AdSidebar, AdFullWidth } from '@/components/ads/GoogleAdsense';

export default function BlogPage() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Conteúdo principal */}
      <div className="col-span-2">
        <article>
          <h1>Post 1</h1>
          <p>Conteúdo do post...</p>
        </article>
        
        {/* Anúncio entre posts */}
        <AdBetweenContent />
        
        <article>
          <h1>Post 2</h1>
          <p>Mais conteúdo...</p>
        </article>
      </div>
      
      {/* Sidebar com anúncio */}
      <aside>
        <AdSidebar />
      </aside>
    </div>
  );
}

/**
 * EXEMPLO 3: Usando com configuração por domínio
 * 
 * Para ter diferentes IDs de AdSense por subdomínio,
 * atualize o arquivo: /config/adsense.config.ts
 * 
 * Exemplo:
 * export const adsenseConfig = {
 *   'bablerdev.com.br': { client: 'ca-pub-XXXXX', slots: {...} },
 *   'blog.bablerdev.com.br': { client: 'ca-pub-YYYYY', slots: {...} },
 * }
 * 
 * O componente detectará automaticamente qual domínio está usando!
 */

/**
 * EXEMPLO 4: Variáveis de Ambiente
 * 
 * Você pode usar variáveis de ambiente para a chave do cliente:
 * 
 * .env.local:
 * NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT=ca-pub-5971787155500943
 * 
 * Isso será usado se nenhuma configuração específica for encontrada.
 */

/**
 * PASSOS FINAIS:
 * 
 * 1. Substitua os slot numbers pelos seus slots reais do AdSense
 * 2. Na página raiz (home), adicione <AdFullWidth /> ou <GoogleAdsense format="horizontal" />
 * 3. Faça build e deploy: npm run build && npm start
 * 4. Aguarde o Google rastrear as páginas (isso leva tempo)
 * 5. Monitore no Google Search Console
 * 
 * O aviso do Google deve desaparecer em 1-2 semanas após novas indexações!
 */
