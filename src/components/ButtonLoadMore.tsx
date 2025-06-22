import React, { FC } from "react";

interface ButtonLoadMoreProps {
  onClick: () => void;
}

const ButtonLoadMore: FC<ButtonLoadMoreProps> = ({ onClick }) => (
  <div style={{ textAlign: "center", margin: "20px" }}>
    <button onClick={onClick}>Завантажити ще</button>
  </div>
);

export default ButtonLoadMore;
