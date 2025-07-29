'use client'
import ContadorPalabras from "./componentes/ContadorPalabras";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2>Contador de palabras</h2>
        <ContadorPalabras />
      </main>
    </div>
  );
}
