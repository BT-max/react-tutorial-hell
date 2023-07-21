import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    // pizza.toppings.push("Cheese");
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <>
      <div>{JSON.stringify(pizza)}</div>
      <button onClick={handleClick}></button>
    </>
  );
}

export default App;
