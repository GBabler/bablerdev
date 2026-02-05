// Configuração de AdSense por domínio/subdomínio
export const adsenseConfig = {
  // Domínio principal
  'bablerdev.com.br': {
    client: 'ca-pub-5971787155500943',
    slots: {
      homepage: '1234567890',
      betweenContent: '2547896541',
      sidebar: '3698745123',
      fullWidth: '4521369874',
    },
  },

  // Subdomínios (adicione aqui conforme criar)
  'blog.bablerdev.com.br': {
    client: 'ca-pub-XXXXXXX', // Substitua pelo cliente do subdomínio
    slots: {
      homepage: '1111111111',
      betweenContent: '2222222222',
      sidebar: '3333333333',
      fullWidth: '4444444444',
    },
  },

  'portfolio.bablerdev.com.br': {
    client: 'ca-pub-YYYYYYY',
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
  
  // Busca a config exata ou usa a padrão
  return adsenseConfig[currentHostname as keyof typeof adsenseConfig] || adsenseConfig['bablerdev.com.br'];
}

// Types para facilitar o uso
export type AdsenseSlot = keyof ReturnType<typeof getAdsenseConfig>['slots'];
