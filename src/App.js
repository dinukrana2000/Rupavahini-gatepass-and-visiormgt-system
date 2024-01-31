import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Staff from './Pages/Staff_req';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Staff/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
