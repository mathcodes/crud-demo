import React, { useState } from 'react';
import Form from './components/Form';
import ItemsList from './components/ItemsList';

function App() {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  return (
    <div>
      <Form 
        input={input}
        setInput={setInput}
        input2={input2}
        setInput2={setInput2}
        items={items}
        setItems={setItems}
        editItem={editItem}
        setEditItem={setEditItem}
      />
      
        <ItemsList 
          items={items}
          setItems={setItems}
          setEditItem={setEditItem}
        />
      
    </div>
  )
}

export default App
