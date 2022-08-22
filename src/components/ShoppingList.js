import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    if (event.target.name === "filter"){
      setSelectedCategory(event.target.value);
    }
    else{ //perhaps this should be it's own function handleSearch?  Perhaps.
      setSearch(event.target.value.trim().toLowerCase());
    }
  }

  const itemsToDisplay = items.filter((item) => {
    return (selectedCategory === "All" ? true : item.category === selectedCategory) && (search === "" ? true : item.name.toLowerCase().match(search));
  });

  return (
    <div className="ShoppingList">
      <ItemForm addItem={addItem}/>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} isInCart={(item.isInCart || false)} addToCart={_ => addToCart(item.id)}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
