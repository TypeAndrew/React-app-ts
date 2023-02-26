import  { useState, useEffect, useRef, SetStateAction } from 'react';

//import logo from './logo.svg';
import './App.css';
import { ITodo } from './types/data';



import { TodoList } from './components/TodoList';


//function App() {
const App: React.FC = () => {
  //const props1: <IProps> = [{ id: '1', text: 'Andrew' }];  
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
     setValue(e.target.value)
  } 

  const handleKeysDown : React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
      }
  }

  const addTodo = () => {
    if (value) {
        setTodos([...todos, { id: Date.now(), title: value, complete: false, }])
      }
  }

  const removeTodo = (id: number): void =>{
    setTodos(todos.filter(todo => todo.id !== id))
   }

  const toggleTodo = (id: number): void => { 
    
    setTodos(todos.map(todo => {
        if (todo.id !== id) return todo;
        else {
        return {
        ...todo,
        complete: !todo.complete
          } 
          }
        }))
  }

  useEffect(() => {
    if (inputRef.current) 
      inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <input value={value} onChange={handleChange} onKeyDown={ handleKeysDown} ref={inputRef} />
        <button onClick={addTodo}>add</button>
      </div>
      <TodoList items={todos} removeTodo={ removeTodo} toggleTodo = {toggleTodo} />
      </>
  );
}

export default App;