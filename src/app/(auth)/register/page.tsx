import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Login() {
  return (
    <div className="w-full px-4 flex justify-center">
      <form
        className="max-w-[412px] w-full rounded-sm p-4 flex flex-col gap-4 bg-mauve-3 dark:bg-mauve-dark-3"
        noValidate
      >
        <Input
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
        />
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
        <Input
          id="confirmPassword"
          label="Confirmação de senha"
          type="password"
          placeholder="Digite sua senha novamente"
        />
        <footer className="self-end">
          <Button variant="primary">Cadastrar</Button>
        </footer>
      </form>
    </div>
  );
}
