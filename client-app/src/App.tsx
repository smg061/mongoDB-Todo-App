import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Header, List} from 'semantic-ui-react';
import './App.css';
import FormComponent from './Form'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:3001/api/test/', {})
    .then(res => {
      console.log(res);
      setTodos(res.data);
    })
  }, [todos])

  return (
    <div className="App">
      <Header as="h2" icon='users' content='Todos'/>
      <List>
          {todos.map((todo: any)=> (
          <List.Item key={todo.id}>
            {todo.record}
          </List.Item>
        ))}
      </List>

      <FormComponent/>
      
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
