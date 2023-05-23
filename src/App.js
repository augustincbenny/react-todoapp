import React, {useState,useEffect} from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  //state stuff
  const [inputText,setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos]= useState([]);
 //use effect
 useEffect(() => {
  const filterHandler =  () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true ));
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false ));
        break;
        default:
        setFilteredTodos(todos);
        break;
    }
  };
  filterHandler();
 },[todos,status]);


  //functions
  
  return (
    <div className="App">
    <header>
      <h1>TODO LIST</h1>
    </header>
    <Form 
    inputText={inputText}
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}
    
    />
    <TodoList 
    todos={todos} 
    filteredTodos={filteredTodos}
    setTodos={setTodos} />
    </div>

  );
}

export default App;
