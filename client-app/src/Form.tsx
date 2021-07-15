import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { Form, Button, Checkbox } from "semantic-ui-react";

const FormComponent = () => {

  const initialState = {
    record: "",
    date: new Date(),
    completed: false
  };

  const [todo, setTodo] = useState(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
    const {name, value} = event.target;
    setTodo({...todo, [name]:value})
  }
  const submitForm = () => {
    axios({
      method: "POST",
      url: "http://localhost:3001/api/test/create",
      data: {
        record: todo.record,
        date: new Date().toLocaleDateString(),
        completed: false,
      },
    });
  };
  return (
    <Form success onSubmit={submitForm}>
      <Form.Field>
        <label>Todo Title</label>
        <Form.Input
          value={todo.record}
          name="record"
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <Form.Field>Date</Form.Field>
        <Form.Input placeholder={todo.date} disabled />
      </Form.Field>
      <Form.Field>
        <Form.Checkbox>

        </Form.Checkbox>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FormComponent;
