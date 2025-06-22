import React, { FC } from "react";

interface ButtonLoadMoreProps {
  onClick: () => void;
}

const ButtonLoadMore: FC<ButtonLoadMoreProps> = ({ onClick }) => {
  return <button onClick={onClick}>Завантажити ще</button>;
};

export default ButtonLoadMore;
