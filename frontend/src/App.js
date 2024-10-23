import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import TodoList from './pages/TodoList/todolist';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Login/>}/>
      <Route path='/todo/signup' element= {<Signup/>}/>
      <Route path='/todo/:id' element= {<TodoList/>}/>
    </Routes>
  );
}

export default App;
