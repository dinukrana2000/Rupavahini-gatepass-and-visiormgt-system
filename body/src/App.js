
import './App.css';
import Request from './Pages/Request/Request';
import Form from './Pages/Form/Formschool';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import FormA from './Pages/Form/Formappoi';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Request/>} />
      <Route path="/Formv" element={<Form/>} />
      <Route path="/FormA" element={<FormA/>} />

    </Routes>
    </BrowserRouter>
  
   </div>
  );
}

export default App;
