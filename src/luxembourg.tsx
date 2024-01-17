import React from 'react';

type Props = {
  className?: string;
};

const Luxembourg: React.FC<Props> = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-lu"
    viewBox="0 0 640 480"
    width="21"
    height="14"
  >
    <path fill="#00a1de" d="M0 240h640v240H0z" />
    <path fill="#ed2939" d="M0 0h640v240H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
  </svg>
);

export default Luxembourg;