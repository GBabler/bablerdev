# AdSense por Subdomínio - GUIA DE IMPLEMENTAÇÃO

## Estrutura Atual:

```
bablerdev.com.br/                  ← SEM AdSense (landing page)
├── /about
├── /services
├── /contact
└── /sitemap.xml

leitorbarras.bablerdev.com.br/     ← COM AdSense ✅ (aplicação real)
```

## Como Implementar o Subdomínio leitorbarras.bablerdev.com.br

### Opção 1: Monorepo (Recomendado)
Se você quer manter tudo em um repositório:

```
/app                           ← Site principal (bablerdev.com.br)
  ├── /layout.tsx             ← SEM AdSense no head
  ├── /page.tsx
  ├── /about
  ├── /services
  └── /contact

/domains                       ← Subdomínios
  └── /leitorbarras
      ├── /layout.tsx         ← COM AdSense no head
      ├── /page.tsx           ← Adicione <GoogleAdsense /> aqui
      ├── /screens
      ├── /components
      └── /[route]
```

**Arquivo: `domains/leitorbarras/layout.tsx`**
```tsx
import Script from 'next/script';
import { GoogleAdsense } from '@/components/ads/GoogleAdsense';

export const metadata = {
  title: "Leitor de QR Code | BABLER",
};

export default function LeitorBarrasLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Script global do AdSense para este subdomínio */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5971787155500943"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### Opção 2: Repositório Separado
Se preferir manter em repositórios separados:

```
bablerdev/              ← Reposiório original
  └── next.config.ts

leitorbarras/           ← Novo repositório
  └── next.config.js
  └── app/
      ├── layout.tsx   ← Com AdSense
      └── page.tsx
```

---

## Próximos Passos:

### 1. **Estruture o leitorbarras como subdomínio**
   - Se monorepo: crie pasta `domains/leitorbarras`
   - Se repo separado: configure DNS apontando para leitorbarras.bablerdev.com.br

### 2. **Adicione AdSense APENAS no subdomínio**
```tsx
// Em domains/leitorbarras/page.tsx ou components/
import { GoogleAdsense, AdFullWidth } from '@/components/ads/GoogleAdsense';

export default function LeitorBarrasPage() {
  return (
    <div>
      <h1>Leitor de QR Code</h1>
      
      {/* App aqui */}
      
      {/* Anúncios aparecem APENAS em leitorbarras.bablerdev.com.br */}
      <AdFullWidth />
    </div>
  );
}
```

### 3. **Confirme a config**
- `bablerdev.com.br` → AdSense DESATIVADO ✅
- `leitorbarras.bablerdev.com.br` → AdSense ATIVADO ✅

### 4. **Deploy e Teste**
```bash
npm run build
npm start
# Acesse https://leitorbarras.bablerdev.com.br e verifique anúncios
# Acesse https://bablerdev.com.br e confirme que NÃO tem anúncios
```

### 5. **Selecione no Google AdSense**
- No painel AdSense, adicione `leitorbarras.bablerdev.com.br` como novo site
- Verifique e aguarde a aprovação do Google

### 6. **Solicite revisão**
- No Google Search Console, vá até "Anúncios veiculados pelo Google em telas sem conteúdo"
- Clique em "Confirmo que corrigi os problemas"
- Google reexaminará em 1-2 semanas

---

## Pontos Importantes:

✅ **Evita violação de política**: Anúncios APENAS onde há conteúdo real  
✅ **Escalável**: Adicione mais subdomínios quando crescer  
✅ **Simples**: O componente detecta automaticamente o domínio  
✅ **Seguro**: Se AdSense não estiver ativado em um domínio, nenhum anúncio aparece  

---

## Config Atualizada (já pronta):

```typescript
// config/adsense.config.ts
export const adsenseConfig = {
  'bablerdev.com.br': { enabled: false },
  'leitorbarras.bablerdev.com.br': { enabled: true, client: 'ca-pub-5971787155500943' },
};
```

O componente `<GoogleAdsense />` verificará automaticamente o domínio!
