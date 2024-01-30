import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import User_Login from './Pages/Login/User_login';
import Staff_Login from './Pages/Login/Staff_Login';
import Forgot from './Pages/Password/Forgot_Pwd';
import Change from './Pages/Password/Change_Pwd';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User_Login/>} />
      <Route path='/Staff_Login' element={<Staff_Login/>} />
      <Route path='/Forgot' element={<Forgot/>} />
      <Route path='/Change' element={<Change/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
