import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

const Upload = ({ className = '', width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.086 13.07-1.702-1.363a7 7 0 1 0 13.232 0l-1.702 1.362q.085.454.086.93a5 5 0 1 1-9.914-.93"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="m12 4-.625-.78.625-.5.625.5zm1 9a1 1 0 1 1-2 0zM6.375 7.22l5-4 1.25 1.56-5 4zm6.25-4 5 4-1.25 1.56-5-4zM13 4v9h-2V4z"
      ></path>
    </svg>
  );
};

export default Upload;
