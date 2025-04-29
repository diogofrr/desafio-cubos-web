import { LinkHTMLAttributes, ReactNode } from 'react';

interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  target: string;
}

const Link = ({ children, ...props }: LinkProps) => {
  return (
    <a
      className="text-purple-9 dark:text-purple-dark-9 font-functional font-normal text-base underline"
      {...props}
      rel={props.target === '_blank' ? 'noopener noreferrer' : props.rel}
    >
      {children}
    </a>
  );
};

export { Link };
