import React, {useState} from "react";
import "./user.css"
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";


function User  ({handleLogout}){

    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: "Lorem Ipsum1"
        },
        {   
            id: Math.random(),
            text: "Lorem Ipsum2"
        },
        {
            id: Math.random(),
            text: "Lorem Ipsum3"
        }
    ]);

    return(
        <section className = "user">
            <div className = "userContainer">
                <div className = "headerPart">
                    <h1 className = "pageTitle">Task List</h1>
                    <button className = "logOutBtn" onClick = {handleLogout}>Log out</button>
                </div> 
                <TodoForm className = "todoForm" onAdd = {(text) => {
                    setTodos([
                        ...todos,
                        {
                            id: Math.random(),
                            text: text
                        }
                    ])
                }} />
                <TodoList
                    todos = {todos}  
                    onDelete = {(todo) =>{
                        setTodos(todos.filter((t) => t.id !== todo.id));
                    }}
                />
            </div>    
        </section>
    )
}

export default User;