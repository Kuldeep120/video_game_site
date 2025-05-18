// import React, { type ReactNode } from "react";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
//   color?: string;
  onClick: () => void;
  // children: ReactNode
}
const Button = ({ children, onClick, color="primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
