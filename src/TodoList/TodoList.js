import TodoItem from "../TodoItem/TodoItem";


function TodoList({todos, onDelete}){
    return(
        <div>
           {
               todos.map((todo)=> {
                   return (
                       <TodoItem 
                            todo = {todo}
                            onDelete = {onDelete}
                       />
                   )
               })
           }
        </div>
    )
}

export default TodoList;