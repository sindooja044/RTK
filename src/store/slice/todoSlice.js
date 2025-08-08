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
            console.log(action)  // action  = payload
            state.todoList.push(action.payload)
            return state
        }
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
