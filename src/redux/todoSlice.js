import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo(state, action) {
            state.todo.push({
                id: nanoid(),
                text: action.payload.text,
                completed: false
            });
        },
        removeTodo(state, action) { },
        toggleCompleted(state, action) { }
    }
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer