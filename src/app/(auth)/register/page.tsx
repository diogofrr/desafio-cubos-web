'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

import {
  RegisterFormData,
  registerSchema,
  useRegister,
} from '@/hooks/auth/register/use-register';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ViewHide from '@/components/icons/view-hide';
import View from '@/components/icons/view';

export default function Register() {
  const {
    confirmPasswordIsVisible,
    passwordIsVisible,
    handleChangeConfirmPasswordVisibility,
    handleChangePasswordVisibility,
    handleSubmitRegister,
    isPending,
  } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className="w-full px-4 flex justify-center">
      <form
        className="max-w-[412px] w-full rounded-sm p-4 flex flex-col gap-4 bg-mauve-3 dark:bg-mauve-dark-3"
        onSubmit={handleSubmit(handleSubmitRegister)}
        noValidate
      >
        <Input
          {...register('name')}
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          disabled={isPending}
          errorMessage={errors.name?.message}
        />
        <Input
          {...register('email')}
          id="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu E-mail"
          disabled={isPending}
          errorMessage={errors.email?.message}
        />
        <Input
          {...register('password')}
          id="password"
          label="Senha"
          type={passwordIsVisible ? 'text' : 'password'}
          placeholder="Digite sua senha"
          disabled={isPending}
          errorMessage={errors.password?.message}
          rightIcon={
            <button
              type="button"
              onClick={handleChangePasswordVisibility}
              className="cursor-pointer"
              disabled={isPending}
            >
              {passwordIsVisible ? <ViewHide /> : <View />}
            </button>
          }
        />
        <Input
          {...register('confirmPassword')}
          id="confirmPassword"
          label="Confirmação de senha"
          type={confirmPasswordIsVisible ? 'text' : 'password'}
          placeholder="Digite sua senha novamente"
          disabled={isPending}
          errorMessage={errors.confirmPassword?.message}
          rightIcon={
            <button
              type="button"
              onClick={handleChangeConfirmPasswordVisibility}
              className="cursor-pointer"
              disabled={isPending}
            >
              {confirmPasswordIsVisible ? <ViewHide /> : <View />}
            </button>
          }
        />
        <footer className="self-end">
          <Button variant="primary">Cadastrar</Button>
        </footer>
      </form>
    </div>
  );
}
