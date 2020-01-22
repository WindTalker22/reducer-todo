// export const initialState = {
//   todos: [
//     {
//       item: "Learn about reducers",
//       completed: false,
//       id: 3892987589
//     },
//     {
//       item: "Kind of understand reducers",
//       completed: false,
//       id: 3892987590
//     },
//     {
//       item: "Kind of got the syntax of reducers",
//       completed: false,
//       id: 3892987591
//     }
//   ]
// }

// export const todoReducer = (state, action) => {
//   // if (action.type === 'TOGGLE_EDIT') {
//   //   return {
//   //     ...state,
//   //     editing: !state.editing
//   //   };
//   // } else if (action.type === 'UPDATE_TITLE') {
//   //   return {
//   //     ...state,
//   //     title: action.payload,
//   //     editing: false
//   //   };
//   // } else {
//   //   return state;
//   // }
//   switch (action.type) {
//     // case "ADD_TODO":
//     //   return [
//     //     ...state,
//     //     {
//     //       item: action.payload,
//     //       completed: false,
//     //       id: new Date()
//     //     }
//     //   ]
//     // case "UPDATE_COMPLETED":
//     //   return {
//     //     ...state,
//     //     item: action.payload,
//     //     completed: false
//     //   }
//     default:
//       return state
//   }
// }

export const initialState = {
  todos: [
    {
      item: "Feed Animals",
      id: 123,
      completed: false
    },
    {
      item: "Walk Dog",
      id: 124,
      completed: false
    },
    {
      item: "Buy Ammo",
      id: 1235,
      completed: false
    },
    {
      item: "Clean Firearms",
      id: 1246,
      completed: false
    },
    {
      item: "Wash Car",
      id: 1237,
      completed: false
    },
    {
      item: "Laundry",
      id: 1248,
      completed: false
    }
  ]
}

export const Reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
      // console.log("console", state, action)
      const toggler = state.todos.map(item => {
        if (item.id === action.payload.id) {
          item.completed = !item.completed
        } else return item
      })
      return {
        todos: [...state.todos, toggler]
      }
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      }
    case "DELETE_TODO":
      return {
        todos: state.todos.filter(e => !e.completed)
      }
    default:
      return state
  }
}
