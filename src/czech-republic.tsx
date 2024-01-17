import React from 'react';

type Props = {
  className?: string;
};

const CzechRepublic: React.FC<Props> = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-cz"
    viewBox="0 0 640 480"
    width="21"
    height="14"
  >
    <path fill="#fff" d="M0 0h640v240H0z" />
    <path fill="#d7141a" d="M0 240h640v240H0z" />
    <path fill="#11457e" d="M360 240 0 0v480z" />
  </svg>
);

export default CzechRepublic;
