import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import { useRef } from "react";

/// -------------------- Begin Exercise Code -------------------- ///
/// Code in this block (ended by the similar comment several lines below),
/// are relevant to the excerise. You can ignore all other code

interface AppProps {}

interface TodoInterface {
  id: number;
  body: string;
  isComplete?: boolean;
}

const App: React.FC<AppProps> = () => {
  const defaults = [
    {
      id: 0,
      body: "I am the body of a default todo.",
    },
    {
      id: 1,
      body: "I am the body of a complete todo",
      isComplete: true,
    },
  ];
  const [todos, setTodos] = useState<TodoInterface[]>(defaults);
  const [input, setInput] = useState("");

  type InputEvent = React.ChangeEvent<HTMLInputElement>;
  const handleChanges = (e: InputEvent) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}
      >
        <input type="text" placeholder="Add a todo!" value={input} onChange = {handleChanges} />
        <button
          onClick={() => {
            setTodos((prev) => [...prev, { id: Date.now(), body: input, isComplete: false }]);
            setInput("");
          }}
        >
          Submit Todo
        </button>
      </div>
      {todos.map((todo) => (
        <div key = {todo.id}
          style={{
            border: todo.isComplete ? "1px solid darkgreen" : "1px solid grey",
            display: "flex",
            padding: 5,
            width: 500,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: todo.isComplete ? "green" : "initial",
            color: todo.isComplete ? "white" : "initial",
          }}
        >
          <p style={{ textOverflow: "wrap", maxWidth: "75%" }}>{todo.body}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <label
                id={`${todo.body}-label`}
                htmlFor={`${todo.body}-checkbox`}
              >
                Complete
              </label>
              <input
                id={`${todo.body}-checkbox`}
                type="checkbox"
                checked={todo.isComplete === true}
                onChange = {() => {
                  todo.isComplete === true ? todo.isComplete = false : todo.isComplete = true;
                  setTodos([...todos])
                }}
              />
            </div>
            <button
              onClick={() => {
                setTodos(todos.filter(({ id }) => id !== todo.id ));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
/// -------------------- End Exercise Code -------------------- ///

interface TodoProps {}

const Todo: React.FC<TodoProps> = () => {
  return (
    <Grid container direction="column">
      <Paper style={{ padding: 25, marginBottom: 75 }}>
        <Typography variant="h3" align="center">
          Bug Fix
        </Typography>
        <Typography paragraph component="div">
          This exercise is to dig into someone else's existing code and find the
          problems with it. There are several problems with this small app. Fix
          any and all problems that you discover, even if they aren't 100%
          necessary to get the app working!
        </Typography>
        <Typography paragraph component="div">
          In terms of what the "app working" means, here's exactly what you
          should be able to do:
          <ul>
            <li>
              <b>Add:</b> the "Submit Todo" button should add a new todo. This
              todo should be shown on the screen, and a user should be able to
              continue adding as many new todos as they want.
            </li>
            <li>
              <b>Complete:</b> checking the "Complete" checkbox should mark it
              as complete. The todo should turn green when that happens.
            </li>
            <li>
              <b>Delete:</b> clicking the delete button should remove that todo
              and _only that todo_.
            </li>
          </ul>
        </Typography>
      </Paper>
      <App />
    </Grid>
  );
};

export default Todo;
