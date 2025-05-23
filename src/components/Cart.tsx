import React from 'react'
interface Props {
    cartItems: string[],
    addItemtoCart: ()=> void,
    onClear: () => void
}

const Cart = ({ cartItems, addItemtoCart, onClear }: Props) => {
  return (
    <>
        <ul>
        {cartItems.map((cartItem)=> <li key={cartItem}>{cartItem}</li>)}    
    </ul>
        <button onClick={addItemtoCart}>Click new Product</button>
        <button onClick={onClear}>clear Cart</button>
    </>


  );
}

export default Cart