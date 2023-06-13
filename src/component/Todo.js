import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditTodo from './EditTodo'
import { Button } from 'react-bootstrap'
import { deleteTodo } from '../redux/Action/Todoaction'
const Todo = () => {

  const todos=useSelector(Store=>Store)
  

  const dispatch=useDispatch()



  return (
    <div>
    {todos && todos.map((todo)=>
    <div style={{display:"flex"}} >
       <h1> {todo.text}  </h1>
      <Button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</Button>
   <EditTodo todo={todo}/>
    </div> )}
    
    </div>
  )
}

export default Todo