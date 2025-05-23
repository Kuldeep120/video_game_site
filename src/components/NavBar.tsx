import React from "react";
interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>Total Items Cart {cartItemsCount}</div>;
};

export default NavBar;
