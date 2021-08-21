import {useState} from "react";
import "./TodoForm.css";

function TodoForm({onAdd}){

    const[text, setText] = useState("")

    return (
        <form className = "todoForm" onSubmit = {(e) =>{
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input className = "taskInput" type = "text" value = {text} onChange = {(e) =>{
                setText(e.target.value);
            }}/>
            <button className = "plusBtn">+</button>
        </form>
    )
}

export default TodoForm;