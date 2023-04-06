import './App.css';
import React, {useState} from 'react'; 
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One"}, 
    {rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two"}, 
    {rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One"}, 
    {rowNumber: 4, rowDescription: "Charge phone battery", rowAssigned: "User One"}
  ]) 

  const addTodo = (description, assigned) => {
    // this will start the unique identifire for each todo 
    let rowNumber = 0; 
    // if there are todos in the list then do this 
    if(todos.length > 0) {
      // find the last number of the element and adds 1
      rowNumber = todos[todos.length - 1].rowNumber + 1; 
    } 
    // else start the new row at 1
    else {
      rowNumber = 1; 
    }
    // this will create a new todo 
      const newTodo = {
        rowNumber: rowNumber, 
        rowDescription: description, 
        rowAssigned: assigned 
      }; 
      // will add all the old todos and add the new one 
      setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    // passes in the row number of the row to be deleted 
    // filtered will filter the row number out 
    let filtered = todos.filter(function(value) {
      return value.rowNumber !== deleteTodoRowNumber; 
    })
    // will set the new todo list 
    setTodos(filtered); 
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className="btn btn-primary">
            Add new todo
          </button>
          <NewTodoForm addTodo = {addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
