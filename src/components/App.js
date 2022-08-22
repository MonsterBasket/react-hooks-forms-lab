import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function addItem({name, category}){ //found I had to move this here as this is where the itemData is being imported from.
    setItems([...items, {
      id: uuid(),
      name: name,
      category: category  
    }])
  }

  function addToCart(id){ //as above, itemData is being imported from here.  And couldn't keep this in Item because using the filter re-renders them with default value.  An "isInCart" property needed to be added at this level.
    const updatedItems = [...items];
    updatedItems.find(a => a.id === id).isInCart = !updatedItems.find(a => a.id === id).isInCart;
    setItems(updatedItems);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} addItem={addItem} addToCart={addToCart}/>
    </div>
  );
}

export default App;
