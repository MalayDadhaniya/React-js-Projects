import EmptyMessage from "./Components/EmptyMessage";
import FoodItem from "./Components/FoodItem";
import React from "react";
import FoodInput from "./Components/FoodInput";
import Container from "./Components/Container";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  let [FoodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...FoodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1>Food Items</h1>
        <FoodInput hendleKeyDown={onKeyDown}></FoodInput>
        <EmptyMessage items={FoodItems}></EmptyMessage>
        <FoodItem items={FoodItems}></FoodItem>
      </Container>
    </>
  );
}

export default App;