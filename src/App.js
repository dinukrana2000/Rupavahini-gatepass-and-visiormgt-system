import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Formschool from './Pages/Forms/Form_uni';
import Formuni from './Pages/Forms/Form_school';

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
