import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false)
  // const handleOnClick = ()=> console.log("buttons clicked")
  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisible(false)}>Hidder Alert</Alert>}
      <Button onClick={()=>setAlertVisible(true)}>MyButton</Button>
    </div>
  );
}

export default App;
