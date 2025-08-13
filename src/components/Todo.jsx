import React, { useState } from 'react'
import { useDispatch } from './../../node_modules/react-redux/src/hooks/useDispatch';
import { addTodo,deleteTodo, editTodo } from '../store/slice/todoSlice';
import { useSelector } from 'react-redux';
const Todo = () => {
    const [currentTodo,setCurrentTodo]=useState("")
    const [getCurrentEditedTodo,setgetCurrentEditedTodo]=useState(null)

    console.log(currentTodo)
    const dispatch=useDispatch();
    const {todoList}= useSelector(state => state.todo)  //destructuring  todo==reducername
    //const updatedShowingData= useSelector(state => state)
   
    function handleTodo(){
        //dispatch(addTodo('sindhu'))   adding this name
    dispatch(addTodo(currentTodo))  // adding input value
     
     setCurrentTodo("")
    }
    function handleEditTodo(){
      dispatch(editTodo({getCurrentEditedTodo,currentTodo}))

    }
    function onDeleteTodo(getCurrentTodo){
      dispatch(deleteTodo(getCurrentTodo))
    }
    function onUpdateTodo(getCurrentTodo){
      setCurrentTodo(getCurrentTodo.title)   // setting value in the input box when clicked updated button
      setgetCurrentEditedTodo(getCurrentTodo.id)
    }
  return (
    <div>
      <input type="text" value={currentTodo} name="name" onChange={(e)=>setCurrentTodo(e.target.value)}/>
      <button disabled={currentTodo===''} onClick={getCurrentEditedTodo!==null? handleEditTodo: handleTodo}>
        {getCurrentEditedTodo!== null ? 'Edit':'Add todo'}
        </button>
      <ul>
        {todoList && todoList.length>0? todoList.map((todoItem)=><li key={todoItem.id}>{todoItem.title} <button onClick={()=>onDeleteTodo(todoItem.id)}>Delete</button> <button onClick={()=>onUpdateTodo(todoItem)}>Update</button></li>):null}
        
      </ul>
    </div>
  )
}

export default Todo
