import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["London", "Paris", "New York", "Madrid", "Berlin"];
  const heading = "Cities";

  const handleSelectItem = (item: string, index: number) =>
    console.log(`${item} selected at ${index}`);
  return (
    <>
      <ListGroup
        heading={heading}
        items={cities}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
