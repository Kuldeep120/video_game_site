import { useState } from "react";
import "./App.css";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  console.log(game)
  const handleClick = () => {
    const newGame = { ...game, player: { ...game.player, name: "Bob" } };
    setGame(newGame);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
