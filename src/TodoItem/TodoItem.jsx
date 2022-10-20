import { CheckBox } from "../App.styled"

export default function TodoItem({removeTodo, toggleCompleted, todo}) {
    
  return (
      <>
       {
          todo.map(todo => <li key={todo.id} style={{display:"flex", gap:"1em"}}>
            <CheckBox type="checkbox" style={{ width: "12px", height: "12px" }} checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
            <span>{todo.text}</span>
            <span style={{color:"red", cursor:"pointer"}} onClick={() => removeTodo(todo.id)}>&times;</span>
          </li>)
        }
      </>
  )
}
