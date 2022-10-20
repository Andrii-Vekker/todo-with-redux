import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import Form from "./Form/Form";
import TodoList from "./TodoList/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const addTodo = () => {
    if (!text.length) {
      return
    };
    setTodo([
      ...todo,
      {
        id: nanoid(),
        text,
        completed: false
      }
    ]);
    setText("");
  };

  const removeTodo = (todoId) => {
    setTodo(todo.filter(todo => todo.id !== todoId))
  };

  const toggleCompleted = (todoId) => {
    setTodo(todo.map(todo => {
      if (todo.id !== todoId) {
        return todo
      }
      return {
        ...todo,
        completed: !todo.completed
      };
    }));
  };

  return (
    <div >
      <Form text={text} addTodo={addTodo} setText={setText} />
      <TodoList remove={removeTodo} toggle={toggleCompleted} todo={todo} />
     </div>
  )
}



export default App;

// function App() {
//   const [todo, setTodo] = useState([]);
//   const [text, setText] = useState("");
// console.log(todo)
//   const addTodo = () => {
//     if (!text.length) {
//       return
//     };
//     setTodo([
//       ...todo,
//       {
//         id: nanoid(),
//         text,
//         completed: false
//       }
//     ]);
//     setText("");
//   };

//   const removeTodo = (todoId) => {
//     setTodo(todo.filter(todo => todo.id !== todoId))
//   };

//   const toggleCompleted = (todoId) => {
//     setTodo(todo.map(todo => {
//       if (todo.id !== todoId) {
//         return todo
//       }
//       return {
//         ...todo,
//         completed: !todo.completed
//       };
//     }));
//   };

//   return (
//     <div >
//       <label style={{display:"flex", alignItems:"center", flexWrap:"nowrap"}}>
//         <input value={text} onChange={(e) => setText(e.target.value)} />
//         <button type="submit" onClick={addTodo} style={{ width:"100px", height:"22px"}}>add</button>
//       </label>
//       <ul>
//         {
//           todo.map(todo => <li key={todo.id} style={{display:"flex", gap:"1em"}}>
//             <CheckBox type="checkbox" style={{ width: "12px", height: "12px" }} checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
//             <span>{todo.text}</span>
//             <span style={{color:"red", cursor:"pointer"}} onClick={() => removeTodo(todo.id)}>&times;</span>
//           </li>)
//         }
//       </ul>
//     </div>
//   )
// }