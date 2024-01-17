import React from 'react';

type Props = {
  className?: string;
};

const Poland: React.FC<Props> = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-pl"
    viewBox="0 0 640 480"
    width="21"
    height="14"
  >
    <g fill-rule="evenodd">
      <path fill="#fff" d="M640 480H0V0h640z" />
      <path fill="#dc143c" d="M640 480H0V240h640z" />
    </g>
  </svg>
);

export default Poland;
