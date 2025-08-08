import React, { useState } from 'react'
import { useDispatch } from './../../node_modules/react-redux/src/hooks/useDispatch';
import { addTodo } from '../store/slice/todoSlice';
const Todo = () => {
    const [currentTodo,setCurrentTodo]=useState("")
    console.log(currentTodo)
    const dispatch=useDispatch();
    function handleTodo(){
        //dispatch(addTodo('sindhu))   adding this name
    dispatch(addTodo(currentTodo))  // adding input value 
    }
  return (
    <div>
      <input type="text" value={currentTodo} name="name" onChange={(e)=>setCurrentTodo(e.target.value)}/>
      <button disabled={currentTodo===''} onClick={handleTodo}>Add Todo</button>
    </div>
  )
}

export default Todo
