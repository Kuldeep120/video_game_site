import { useState } from "react";
import "./App.css";
import { produce } from "immer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setcartItems] = useState(["Product 1", "Product 2"]);
  const onHandleClick = ()=>{
    const newCart = [...cartItems, "Product "+(cartItems.length+1)  ]
    setcartItems(newCart)
  } 
  const handleClear = () => {
    setcartItems([])
  }
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length }/>
      <Cart cartItems={cartItems} addItemtoCart={onHandleClick} onClear={handleClear} />
    </div>
  );
}

export default App;
