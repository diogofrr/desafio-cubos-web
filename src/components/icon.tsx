import React from 'react';
import Image from 'next/image';

interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const iconPath = `/icons/${name}.svg`;

  return (
    <Image
      src={iconPath}
      alt={`${name} icon`}
      className={`${className} fill-current`}
      height={24}
      width={24}
    />
  );
};

export default Icon;
