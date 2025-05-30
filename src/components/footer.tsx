interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full flex items-center justify-center font-montserrat text-base text-mauve-12 dark:text-mauve-dark-12 border-t-1 border-mauve-alpha-6 dark:border-mauve-dark-alpha-6 p-5 ${className}`}
    >
      <p className="font-normal text-center">
        {year} © Todos os direitos reservados a{' '}
        <b className="font-semibold">Cubos Movies</b>
      </p>
    </footer>
  );
};

export { Footer };
