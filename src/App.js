import React, { useState } from 'react';
import Form from './components/Form';
import ItemsList from './components/ItemsList';

function App() {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [items, setItems] = useState([]);
  
  return (
    <div>
      <Form 
        input={input}
        setInput={setInput}
        input2={input2}
        setInput2={setInput2}
        items={items}
        setItems={setItems}
      />
      
        <ItemsList 
          items={items}
          setItems={setItems}
        />
      
    </div>
  )
}

export default App
