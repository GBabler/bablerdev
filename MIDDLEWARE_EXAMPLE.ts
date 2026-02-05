import { NextRequest, NextResponse } from 'next/server';

/**
 * Exemplo de Middleware para Subdomínios no Next.js
 * 
 * COMO USAR:
 * 1. Copie este arquivo para a raiz do projeto como 'middleware.ts'
 * 2. Configure seu DNS para apontar os subdomínios
 * 3. Faça build e deploy
 * 
 * ESTRUTURA:
 * - bablerdev.com.br → /app (principal)
 * - leitorbarras.bablerdev.com.br → /domains/leitorbarras
 */

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Detecta subdomínio
  const isLeitorbarras = hostname.includes('leitorbarras');
  
  // Reescreve a URL para a pasta correta
  if (isLeitorbarras) {
    return NextResponse.rewrite(
      new URL(`/domains/leitorbarras${pathname}`, request.url),
      { request: { headers: { 'x-from-subdomain': 'leitorbarras' } } }
    );
  }

  // Default: app principal (bablerdev.com.br)
  return NextResponse.next();
}

export const config = {
  // Aplica middleware a todas as rotas exceto arquivos estáticos
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
