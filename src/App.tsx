import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';

interface Todo {
  id: number;      // 고유 ID
  text: string;    // 투두 텍스트
}

function App() { 
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector((state: RootState) => state.todos);
  const [ todoValue, setTodoValue ] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setTodoValue(e.target.value);
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const newTodo: Todo = { id: Date.now(), text: todoValue};
    dispatch({ type: "ADD_TODO", todo: newTodo });
    setTodoValue("");
  }
  const deleteTodo = (id : number) => {
    dispatch({ type: "DELETE_TODO", id });
  }

  return (
    <div className="App">
        
        <h2>To Do List</h2>
        <ul>
          {todos.map(todo =>(
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
        </ul>

        <form onSubmit={addTodo}>
          <input
            className='todoinput'
            type="text"
            value={todoValue}
            onChange={handleChange}
            placeholder="  할 일을 입력해 주세요"
          />
          <input className='submitinput' type="submit" value={"추가"} />
        </form>
    </div>
  );  
}

export default App;
