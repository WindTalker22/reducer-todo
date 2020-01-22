// import React, { useState, useReducer } from "react"
// import { initialState, Reducer } from "../reducers/Reducer"
// import TodoList from "../components/TodoList"

// const TodoForm = () => {
//   const [item, setItem] = useState("")
//   const { state, dispatch } = useReducer(Reducer, initialState)

//   console.log("hi from the todoform reducer", state)

//   const handleChanges = e => {
//     setItem(e.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           name="item"
//           placeholder="Todo..."
//           // value={props.toDoText}
//           onChange={handleChanges}
//           id="standard-basic"
//           label="Add New ToDo"
//           variant="standard"
//         />
//         &nbsp;
//         <button className="add-butt" type="submit" variant="contained" col>
//           Add Todo
//         </button>
//         <TodoList />
//       </form>
//     </div>
//   )
// }

// export default TodoForm

import React, { useState, useReducer } from "react"
import { initialState, Reducer } from "../reducers/Reducer"
import TodoList from "../components/TodoList"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

export const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("")
  const [state, dispatch] = useReducer(Reducer, initialState)

  console.log("i am state", state)

  const handleChanges = e => {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="New Todo"
        variant="outlined"
        className="todo-input"
        type="text"
        name="newTodo"
        value={newTodo}
        onChange={handleChanges}
      />
      <Button
        className="add-butt"
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo })}
      >
        Add Todo
      </Button>
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  )
}
