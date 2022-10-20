
import TodoItem from "../TodoItem/TodoItem"

export default function TodoList({remove, toggle, todo}) {
  return (
      <ul>
          {
              <TodoItem removeTodo={remove} toggleCompleted={toggle} todo={todo} />
          }
   </ul>
  )
}
