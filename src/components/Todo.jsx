import React, { useState } from 'react'
import { useDispatch } from './../../node_modules/react-redux/src/hooks/useDispatch';
import { addTodo,deleteTodo } from '../store/slice/todoSlice';
import { useSelector } from 'react-redux';
const Todo = () => {
    const [currentTodo,setCurrentTodo]=useState("")
    console.log(currentTodo)
    const dispatch=useDispatch();
    const {todoList}= useSelector(state => state.todo)  //destructuring  todo==reducername
    //const updatedShowingData= useSelector(state => state)
   
    function handleTodo(){
        //dispatch(addTodo('sindhu'))   adding this name
    dispatch(addTodo(currentTodo))  // adding input value 
    }
    function onDeleteTodo(getCurrentTodo){
      dispatch(deleteTodo(getCurrentTodo))
    }
  return (
    <div>
      <input type="text" value={currentTodo} name="name" onChange={(e)=>setCurrentTodo(e.target.value)}/>
      <button disabled={currentTodo===''} onClick={handleTodo}>Add Todo</button>
      <ul>
        {todoList && todoList.length>0? todoList.map((todoItem)=><li key={todoItem.id}>{todoItem.title} <button onClick={()=>onDeleteTodo(todoItem.id)}>Delete</button></li>):null}
        
      </ul>
    </div>
  )
}

export default Todo
