import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Formschool from './Pages/Form_school';
import Formuni from './Pages/Form_uni';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Formschool/>} />
      <Route path='/Formuni' element={<Formuni/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
