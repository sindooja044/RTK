import React, { useState } from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,  // ✅ fixed spelling

    reducers: { 
        addTodo(state, action) {     //adding todo
           const newlyCreatedTodo = {
            //id:new Date(),
        id: state.todoList.length === 0 ? 1 : state.todoList.length + 1,
        title: action.payload,
      };

      state.todoList.push(newlyCreatedTodo);
      
      return state;
        },
        deleteTodo(state,action){
            state.todoList=state.todoList.filter(todoItem=>todoItem.id!==action.payload)
            return state;
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
