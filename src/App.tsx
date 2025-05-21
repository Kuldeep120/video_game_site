import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        product: "Product 1",
        qty: 1,
      },
      {
        id: 2,
        product: "Product 2",
        qty: 1,
      },
    ],
  });
  console.log(cart);
  const handleClick = () => {
    const newCart = {...cart,items: cart.items.map((item)=> item.id===1?{...item, qty:2}:item)};
    setCart(newCart);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
