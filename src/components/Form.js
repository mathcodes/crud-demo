import React from 'react'
import { v4 as uuidv4 } from "uuid";

function Form({ input, setInput, input2, setInput2, items, setItems, editItem, setEditItem }) {

  const updateItem = (title, id, completed, favoriteNumber) => {
    const newItem = items.map((item) => (
      item.id === id ? { title, id, completed, favoriteNumber } : item
    ))
    setItems(newItem);
    setEditItem('');
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      setItems([...items, { id: uuidv4(), title: input, favoriteNumber: input2, completed: false }]);
      setInput("");
      setInput2("");
    } else {
      updateItem(input, editItem.id, editItem.completed, input2)
    }
  }
  return (

    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={input}
        required
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="Favorite Number"
        value={input2}
        required
        onChange={onInputChange2}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
