function ListGroup() {
    const items = [
        "Karach",
        "Lahore",
        "Islamabad",
        "Quetta"
    ]
    
    return (
    <>
        <h1>list group</h1>
        <ul className="list-group">
            {items.map((item) => (<li key = {item}>{item}</li>))}
        </ul>
    </>
  );
}

export default ListGroup;
