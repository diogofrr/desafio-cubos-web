import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Link } from '@/components/link';

export default function Login() {
  return (
    <div className="w-full px-4 flex justify-center">
      <form
        className="max-w-[412px] w-full rounded-sm p-4 flex flex-col gap-4 bg-mauve-3 dark:bg-mauve-dark-3"
        noValidate
      >
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu E-mail"
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
        <footer className="flex flex-row justify-between items-center">
          <Link href="/" target="_self">
            Esqueci minha senha
          </Link>
          <Button variant="primary">Entrar</Button>
        </footer>
      </form>
    </div>
  );
}
