import React from "react"
import Todo from "../components/Todo"
import Button from "@material-ui/core/Button"

const TodoList = props => {
  console.log("I am props", props)

  return (
    <div className="todo-list">
      {props.todos.todos.map(item => (
        <Todo key={item.id} todo={item} dispatch={props.dispatch} />
      ))}
      <Button
        variant="contained"
        color="primary"
        className="DELETE_TODO"
        onClick={() =>
          props.dispatch({ type: "DELETE_TODO", payload: props.completed })
        }
      >
        Delete Completed Todos
      </Button>
    </div>
  )
}

export default TodoList
