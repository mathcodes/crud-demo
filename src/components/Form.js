import React from 'react'
import {v4 as uuidv4} from "uuid";

function Form({input, setInput, items, setItems}) {

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setItems([...items, {id: uuidv4(), title: input, completed: false}])
    setInput('');
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
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
