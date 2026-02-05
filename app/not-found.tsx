import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada | BABLER",
  description: "A página que você procura não existe.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          404
        </h1>
        <h2 className="text-4xl font-bold text-white mt-6">Página não encontrada</h2>
        <p className="text-slate-400 mt-4 text-lg">
          Desculpe, a página que você procura não existe.
        </p>
        <a
          href="/"
          className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:scale-105 transition-transform"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
}
