import { useState } from "react";
import "./App.css";

function App() {
  const [pizza, setPizza]= useState({
    name: "Spicy Papperoni",
    toppings: ["Mushroom", "Olives"]
  })
  console.log(pizza)
  const handleClick = () => {
    const newPizza = { ...pizza, toppings: [...pizza.toppings, "Tommatoes","Sweet Corn"]}
    setPizza(newPizza)
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
