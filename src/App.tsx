import { useState } from "react";
import "./App.css";
import { produce } from "immer";

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
    const newCart = produce((draft) => {
      const item1 = draft.items.find((item) => item.id === 1);
      item1.qty++;
    });
    setCart(newCart);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
