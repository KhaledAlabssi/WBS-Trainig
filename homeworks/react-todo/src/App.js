import {useState} from 'react'
import Input from './Input'
import List from './List'
import Item from './Item'

import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo (todo) {
    setTodos([todo, ...todos])

  }


  return (
    <div className="App">
      <Input title='Input' addTodo={addTodo} />
      <List title='List' todos={todos} />
      <Item title='Item' />
      
    </div>
  );
}

export default App;
