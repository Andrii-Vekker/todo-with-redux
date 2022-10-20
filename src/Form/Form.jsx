

export default function Form({text, addTodo, setText}) {
  return (
      <label style={{display:"flex", alignItems:"center", flexWrap:"nowrap"}}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" onClick={addTodo} style={{ width:"100px", height:"22px"}}>add</button>
      </label>
  )
}
