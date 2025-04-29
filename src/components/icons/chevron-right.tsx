import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

const ChevronRight = ({
  className = '',
  width = 25,
  height = 24,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 25 24"
      className={`stroke-current ${className}`}
    >
      <path strokeWidth="2" d="m9.5 6 6 6-6 6"></path>
    </svg>
  );
};

export default ChevronRight;
