import { ADD_TODO, EDIT_TODO, DELETE_TODO  } from "../Constant/TodoTypes";







const initialState=[]
export const todoReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case ADD_TODO:
        return [...state,payload]
    case EDIT_TODO:
        return   state.map((todo)=>todo.id==payload.id?todo=payload:todo) 
    case DELETE_TODO:
        return state.filter((todo)=>todo.id!=payload)
    default:
        break;
}
}


