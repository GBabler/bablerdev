// Configuração de AdSense por domínio/subdomínio
// IMPORTANTE: AdSense APENAS em subdomínios com conteúdo substancial
export const adsenseConfig = {
  // Site principal NÃO tem anúncios (é landing page)
  'bablerdev.com.br': {
    enabled: false,
    client: null,
    slots: {},
  },

  // Leitor de QR Code - tem conteúdo real
  'leitorbarras.bablerdev.com.br': {
    enabled: true,
    client: 'ca-pub-5971787155500943',
    slots: {
      homepage: '1234567890',
      betweenContent: '2547896541',
      sidebar: '3698745123',
      fullWidth: '4521369874',
    },
  },

  // Futuros subdomínios (adicione aqui conforme criar)
  'blog.bablerdev.com.br': {
    enabled: false,
    client: 'ca-pub-XXXXXXX', // Substitua quando ativar
    slots: {
      homepage: '1111111111',
      betweenContent: '2222222222',
      sidebar: '3333333333',
      fullWidth: '4444444444',
    },
  },

  'portfolio.bablerdev.com.br': {
    enabled: false,
    client: 'ca-pub-YYYYYYY', // Substitua quando ativar
    slots: {
      homepage: '5555555555',
      betweenContent: '6666666666',
      sidebar: '7777777777',
      fullWidth: '8888888888',
    },
  },
} as const;

// Função helper para obter a config do domínio atual
export function getAdsenseConfig(hostname?: string) {
  const currentHostname = hostname || (typeof window !== 'undefined' ? window.location.hostname : 'bablerdev.com.br');

  // Busca a config exata ou usa a padrão (desativada)
  const castedConfig = adsenseConfig[currentHostname as keyof typeof adsenseConfig];
  if (castedConfig) return castedConfig;

  return { enabled: false, client: null, slots: {} as any };
}

// Função helper para verificar se AdSense deve estar ativo
export function isAdsenseEnabled(hostname?: string) {
  const config = getAdsenseConfig(hostname);
  return config.enabled && config.client;
}

// Types para facilitar o uso
export type AdsenseSlot = 'homepage' | 'betweenContent' | 'sidebar' | 'fullWidth';
