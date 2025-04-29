import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

const Search = ({ className = '', width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current stroke-current ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-12a5 5 0 0 0-5 5 1 1 0 1 0 2 0 3 3 0 0 1 3-3 1 1 0 1 0 0-2"
        clipRule="evenodd"
      ></path>
      <path strokeLinecap="round" strokeWidth="2" d="m20 20-2-2"></path>
    </svg>
  );
};

export default Search;
