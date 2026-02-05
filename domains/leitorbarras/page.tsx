'use client';

import { GoogleAdsense, AdFullWidth } from '@/components/ads/GoogleAdsense';

export default function LeitorBarrasPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] px-6 py-10">
      {/* Anúncio no topo */}
      <AdFullWidth className="mb-8 max-w-4xl w-full" />

      {/* Conteúdo da aplicação */}
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Leitor de QR Code
          </h1>
          <p className="text-slate-400 text-lg">
            Escaneie seus códigos QR facilmente
          </p>
        </div>

        {/* Área de camera/escanear virá aqui */}
        <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 aspect-square flex items-center justify-center">
          <p className="text-slate-500 text-center">
            Sua aplicação de leitor QR será renderizada aqui
          </p>
        </div>

        {/* Anúncio entre conteúdo */}
        <GoogleAdsense
          format="rectangle"
          className="mx-auto my-8"
        />
      </div>

      {/* Anúncio no rodapé */}
      <div className="mt-12 max-w-4xl w-full">
        <AdFullWidth className="mt-8" />
      </div>
    </div>
  );
}
