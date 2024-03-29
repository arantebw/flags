import React from 'react';

type Props = {
  className?: string;
};

const Ireland: React.FC<Props> = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-ie"
    viewBox="0 0 640 480"
    width="21"
    height="14"
  >
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#009A49" d="M0 0h213.3v480H0z" />
      <path fill="#FF7900" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
);

export default Ireland;
