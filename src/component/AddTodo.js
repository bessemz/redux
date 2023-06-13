import React, { useState } from 'react'
import {addTodo} from '../redux/Action/Todoaction'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


const AddTodo = () => {
const [input, setInput] = useState("")
const handleInput=(e)=>{
  setInput(e.target.value)
}
const dispatch=useDispatch()
  return (
    <div>
       <Form.Control size="lg" type="text" placeholder="Large text" onChange={handleInput} />
       <Button onClick={()=>dispatch(addTodo({id:Math.random(),text:input}))} >add</Button>
    </div>
  )
}

export default AddTodo