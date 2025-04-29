import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

const ChevronLeft = ({
  className = '',
  width = 25,
  height = 19,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`stroke-current ${className}`}
      fill="none"
      viewBox="0 0 25 19"
    >
      <path strokeOpacity="0.43" strokeWidth="2" d="m15.5 3.5-6 6 6 6"></path>
    </svg>
  );
};

export default ChevronLeft;
