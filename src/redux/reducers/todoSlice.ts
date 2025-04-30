import { Todo, TodoState } from '@/src/Types/todo.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState: TodoState = {
  data: []
}
export const todoSlice =
  createSlice({
    name: "todo",
    initialState,
    reducers: {
      addTodo: (state, action: PayloadAction<{ title: string; desc: string }>) => {
        const todoData: Todo = {
          id: state.data?.length + 1,
          title: action.payload.title,
          desc: action.payload.desc,
        }
        state.data = [todoData, ...state.data]
      },
      deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
        state.data = state.data.filter((item) => item?.id !== action.payload.id)

      },
      updateTodo: (state, action: PayloadAction<{ id: number, title: string, desc: string }>) => {
        const { id, title, desc } = action.payload;
        const index = state.data?.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.data[index] = { ...state.data[index], title, desc }
        }
      }
    }
  });
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer