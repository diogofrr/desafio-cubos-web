import * as React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

const Bell = ({ className = '', width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={`stroke-current ${className}`}
    >
      <path
        strokeWidth="2"
        d="M6.448 7.97a5.586 5.586 0 0 1 11.104 0l.252 2.266.006.057a8 8 0 0 0 1.074 3.18l.03.05.577.963c.525.874.787 1.311.73 1.67a1 1 0 0 1-.345.61c-.279.234-.789.234-1.808.234H5.932c-1.02 0-1.53 0-1.808-.233a1 1 0 0 1-.346-.611c-.056-.359.206-.796.73-1.67l.579-.964.03-.05a8 8 0 0 0 1.073-3.179l.006-.057z"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="2"
        d="M8 17a4 4 0 1 0 8 0"
      ></path>
    </svg>
  );
};

export default Bell;
