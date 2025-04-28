'use client';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-mauve-1 dark:bg-mauve-dark-1">
      <Header showLogoutButton={false} />

      <main className="flex-grow flex items-center justify-center px-4 py-8 md:py-12">
        <div className="bg-mauve-3/30 dark:bg-mauve-dark-3/30 p-6 md:p-8 rounded-xl shadow-md max-w-lg w-full text-center">
          <div className="text-6xl mb-6">😕</div>
          <h1 className="font-montserrat font-bold text-xl md:text-2xl text-mauve-12 dark:text-mauve-dark-12 mb-4">
            404 - Conteúdo não encontrado
          </h1>
          <p className="font-montserrat text-sm md:text-base text-mauve-11 dark:text-mauve-dark-11 mb-6 md:mb-8">
            Não foi possível encontrar o conteúdo que você está procurando.
          </p>
          <Link href="/" className="block">
            <Button variant="primary" className="w-full md:w-auto">
              Voltar para a lista de filmes
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
