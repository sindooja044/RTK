import React, { useState } from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchTodos= createAsyncThunk("fetchTodos",async ()=>{
    const fetchedData=await fetch('https://dummyjson.com/todos')
    const response=await fetchedData.json()
    console.log(response)
    return response;
});

const initialState = {
    todoList: [],
    loading:false,
    fetchedAPITodos:[],
    isError:false,
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
        },

        editTodo(state,action){
            console.log(action)
            console.log(state.todoList)
            let getTodos=state.todoList;
            const  getCurrentEditIndex=getTodos.findIndex((item)=>item.id===action.payload.getCurrentEditedTodo)
            getTodos[getCurrentEditIndex]={...getTodos[getCurrentEditIndex],title:action.payload.currentTodo}
            console.log(getTodos[getCurrentEditIndex])
            console.log(getTodos);
            console.log(getCurrentEditIndex);
            state.todoList=getTodos;
            console.log(state.todoList)
            return state;
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending, (state,action)=>{
            state.loading=true
        })
         builder.addCase(fetchTodos.fulfilled, (state,action)=>{
             state.loading=false
         state.fetchedAPITodos=action.payload.todos
        })
         builder.addCase(fetchTodos.rejected, (state,action)=>{
            state.loading=false
            state.isError=true
        })
    }
})

export const { addTodo, deleteTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer
