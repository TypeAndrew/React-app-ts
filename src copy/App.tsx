import React, {  } from 'react';

//import logo from './logo.svg';
import './App.css';




import { TodoList } from './components/TodoList/TodoList';
import { ClickStatistic } from './components/ClickStatistic/ClickStatistic';
//function App() {
const App: React.FC = () => {
  //const props1: <IProps> = [{ id: '1', text: 'Andrew' }];  

  return (
    <div className="App">
    
      <TodoList items={[{id: '1', text: 'Andrew'}]}   />
      <ClickStatistic/>
    </div>
  );
}

export default App;