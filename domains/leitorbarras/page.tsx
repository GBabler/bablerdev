'use client';

export default function LeitorBarrasPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] px-6 py-10">
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
      </div>
    </div>
  );
}
