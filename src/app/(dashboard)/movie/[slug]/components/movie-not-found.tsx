import { Button } from '@/components/button';
import Link from 'next/link';

interface MovieNotFoundProps {
  message?: string;
}

const MovieNotFound = ({
  message = 'Filme não encontrado',
}: MovieNotFoundProps) => {
  return (
    <section className="m-4 p-4 md:m-8 md:p-8 flex flex-col items-center justify-center gap-6 min-h-[60vh]">
      <div className="bg-mauve-3/30 dark:bg-mauve-dark-3/30 p-8 rounded-xl shadow-md max-w-lg w-full text-center">
        <div className="text-6xl mb-6">😕</div>
        <h1 className="font-montserrat font-bold text-2xl text-mauve-12 dark:text-mauve-dark-12 mb-4">
          {message}
        </h1>
        <p className="font-montserrat text-mauve-11 dark:text-mauve-dark-11 mb-8">
          Não foi possível encontrar o conteúdo que você está procurando.
        </p>
        <Link href="/dashboard">
          <Button variant="primary" className="w-full md:w-auto">
            Voltar para a lista de filmes
          </Button>
        </Link>
      </div>
    </section>
  );
};

export { MovieNotFound };
