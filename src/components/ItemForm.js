import React, { useState } from "react";

function ItemForm({addItem}) {
  const [newItem, setNewItem] = useState({name: "", category: "Produce"})

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={e => setNewItem({...newItem, name: e.target.value})} value={newItem.name} placeholder="Add Item..."/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => setNewItem({...newItem, category: e.target.value})} value={newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={e => {e.preventDefault(); setNewItem({...newItem, name: ""}); return addItem(newItem)}}>Add to List</button>
    </form>
  );
}

export default ItemForm;
