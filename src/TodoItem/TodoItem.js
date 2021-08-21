import "./TodoItem.css";


function TodoItem({todo, onDelete}){
    return(
        <div>
            <label>
                <div className = "todoItemBox" >
                    <p className = "todoText">{todo.text}</p>
                    <button className = "deleteText" onClick = {() => {
                        onDelete(todo);
                    }}>X</button>
                </div>               
            </label>
        </div>
    )
}



export default TodoItem;