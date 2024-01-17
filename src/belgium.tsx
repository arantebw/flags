import React from 'react';

type Props = {
  className?: string;
};

const Belgium: React.FC<Props> = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-be"
    viewBox="0 0 640 480"
    width="21"
    height="14"
  >
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#000001" d="M0 0h213.3v480H0z" />
      <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
);

export default Belgium;
