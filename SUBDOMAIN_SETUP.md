# Configuração de Subdomínios no Next.js - Guia Prático

## Problema Resolvido ✅

Você recebia violação de política do Google AdSense porque o site principal está sendo usado para veicular anúncios, mas não tem conteúdo suficiente.

**Solução**: Separar AdSense por subdomínio

```
bablerdev.com.br                  ❌ SEM AdSense
└── landing page, portfolio, etc

leitorbarras.bablerdev.com.br     ✅ COM AdSense
└── aplicação real com conteúdo
```

---

## Como Usar Subdomínios no Next.js

### Opção 1: Rotas Dinâmicas (Monorepo) - ⭐ RECOMENDADO

Use a estrutura de middleware para detectar o subdomínio:

**Arquivo: `middleware.ts`** (na raiz do projeto)
```typescript
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isLeitorbarras = hostname.includes('leitorbarras');

  // Redireciona para a pasta correta
  if (isLeitorbarras) {
    return NextResponse.rewrite(new URL(`/domains/leitorbarras${request.nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|assets).*)'],
};
```

**Vantagem:**
- ✅ Um repositório
- ✅ Um build
- ✅ Fácil de manter
- ✅ Documentação oficial: https://nextjs.org/docs/advanced-features/multi-zone-deployments

### Opção 2: Repositórios Separados (Mais Simples)

Se preferir manter separado:

```
github.com/GBabler/bablerdev                    ← Este repo
github.com/GBabler/leitorbarras                 ← Novo repo
```

**DNS/Hosting:**
```
bablerdev.com.br              → aponta para bablerdev repo
leitorbarras.bablerdev.com.br → aponta para leitorbarras repo
```

---

## Estrutura Atual no Monorepo

```
/app                           ← bablerdev.com.br
  ├── layout.tsx              (SEM AdSense)
  ├── page.tsx
  ├── /about
  ├── /services
  └── /contact

/domains/leitorbarras          ← leitorbarras.bablerdev.com.br
  ├── layout.tsx              (COM AdSense)
  └── page.tsx
```

---

## Próximos Passos

### 1️⃣ Escolha a Opção
- **Monorepo** (middleware.ts): Mais prático agora
- **Separado**: Mais prático depois quando crescer

### 2️⃣ Se Usar Monorepo
Crie `middleware.ts` na raiz:
```bash
cp MIDDLEWARE_EXAMPLE.ts middleware.ts
```

### 3️⃣ Configure o Subdomínio
No seu provider de DNS/hosting:
```
leitorbarras.bablerdev.com.br → mesma infra que bablerdev.com.br
```

### 4️⃣ Deploy
```bash
npm run build
npm start
# Teste em https://leitorbarras.bablerdev.com.br
```

### 5️⃣ Google AdSense
1. Adicione `leitorbarras.bablerdev.com.br` no painel AdSense
2. Aguarde verificação
3. Volte ao Search Console
4. Clique "Confirmo que corrigi os problemas"

---

## Arquivos já Preparados ✅

- `config/adsense.config.ts` → Define qual subdomínio tem AdSense
- `components/ads/GoogleAdsense.tsx` → Detecta automaticamente
- `domains/leitorbarras/` → Layout pronto para o app

---

## Referências

- Next.js Multi-Zone: https://nextjs.org/docs/advanced-features/multi-zone-deployments
- Middleware: https://nextjs.org/docs/advanced-features/middleware
- Vercel Wildcard Subdomains: https://vercel.com/docs/concepts/projects/domains/subdomains

---

## Suporte

Se tiver dúvidas:
1. Verifique se `leitorbarras.bablerdev.com.br` está resolvendo corretamente
2. Teste: `curl -H "Host: leitorbarras.bablerdev.com.br" http://localhost:3000`
3. Verifique os logs do Next.js

---

**Status:**
- ✅ Site principal (bablerdev.com.br) - AdSense REMOVIDO
- ✅ Subdomínio (leitorbarras.bablerdev.com.br) - AdSense ATIVADO
- ⏳ Aguardando configuração no seu hosting/DNS
