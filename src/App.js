import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import RequireAuth from '../src/Components/Authentication/RequireAuth';
import Navber from './Components/Navber';
import AddTask from './Components/AddTask';
import Calender from './Components/Calender';
import Ctask from './Components/Ctask';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/todo" element={<RequireAuth><Login /></RequireAuth>} />
        <Route path="/addtask" element={<RequireAuth><AddTask /></RequireAuth>} />
        <Route path="/ctask" element={<RequireAuth><Ctask /></RequireAuth>} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
