import { useState } from "react";
import Alert from "./components/Alert";
// import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Karachi","Lahore", "Quetta","Peshawar","Islamabad"]
  const [alertVisible, setAlertVisible] = useState(false)
  // const handleOnClick = ()=> console.log("buttons clicked")
  const handleSelectItem = (item: string) => {console.log(item)}
  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisible(false)}>Hidder Alert</Alert>}
      {/* <Button onClick={()=>setAlertVisible(true)}>MyButton</Button> */}
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup>
    </div>
  );
}

export default App;
