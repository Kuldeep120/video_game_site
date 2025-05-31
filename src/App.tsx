import { useState } from "react";
import "./App.css";
import { produce } from "immer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ExpendableText from "./components/ExpendableText";
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <div>
      <ListUsers />
    </div>
  );
}

export default App;
