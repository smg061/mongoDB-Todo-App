import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Header, List } from "semantic-ui-react";
import "./App.css";
import FormComponent from "./Form";
import { Todo } from "./models/Todo";
import TodoList from "./TodoList";
import agent from "./api/agent"
import NavBar from "./NavBar";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/test/", {}).then((res) => {
      console.log(res);
      setTodos(res.data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Container style={{ marginTop:"7rem"}}>
      <Grid>
        <Grid.Column width="5">
          <TodoList todos={todos} />
        </Grid.Column>
        <FormComponent />
      </Grid>
      </Container>
    </div>
  );
}

export default App;
