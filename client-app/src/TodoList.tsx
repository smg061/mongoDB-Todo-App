import React from "react";
import { Item, Label, List as Segment } from "semantic-ui-react";
import { Todo } from "./models/Todo";
interface Props {
  todos: Todo[];
}
const TodoList = ({ todos }: Props) => {
  return (
    <div>
      <Segment>
        <Item.Group divided>
          {todos.map((todo: Todo) => (
            <Item key={todo._id}>
              <Item.Content >{todo.record}</Item.Content>
              <Item.Meta>{todo.date}</Item.Meta>
              <Label color={todo.completed? "blue": "red"} style={{marginLeft: "1rem"}}> {todo.completed?"Complete":"Incomplete"}</Label>

            </Item>
          ))}
        </Item.Group>
      </Segment>
    </div>
  );
};

export default TodoList;
