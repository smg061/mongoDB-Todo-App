import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { set } from "mongoose";

const FormComponent = () => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(new Date())
  const [completed, setCompleted] = useState(false)
  const submitForm = () => {
        setTodo("Henlo");
        axios({
          method: "POST",
          url: "http://localhost:3001/api/test/create",
          data: {
            record: todo,
            date: date,
            completed: completed
          },
        });
  }
  return (
    <Form success onSubmit={submitForm}>
      <Form.Field>
        <label>Todo Title</label>
        <input value={todo}onChange={(e)=> {setTodo(e.target.value)}} />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <input placeholder={date.toLocaleString()} disabled />
      </Form.Field>
      <Form.Field>
        <Checkbox label="Completed?" onChange={()=> {setCompleted(!completed)}}/>
      </Form.Field>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
