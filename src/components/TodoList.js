import React from "react";
//importing components
import Todo from "./Todo"


const TodoList = ({todos,setTodos,filteredTodos}) =>{
  

    return(
        <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
          <Todo 
          setTodos={setTodos}
          todos={todos} 
          key={todo.id} 
          todo={todo}
          text={todo.text} 
          />
          ))}
        </ul>
      </div>
    

    );
}
export default TodoList;