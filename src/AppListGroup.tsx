import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App (){
  const items = ["Karach", "Lahore", "Islamabad", "Quetta"];
  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return <div><ListGroup items={items} heading="Check" onSelectItem={handleSelectItem}/></div>;
}

export default App