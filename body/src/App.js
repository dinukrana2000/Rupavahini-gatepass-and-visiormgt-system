
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Search from './components/Historysearch/staffpagehistory-searchday';
import Activity from './components/staffpagehistory-activity-view/Activity';
function App() {
  return (
  
    <Routes>
      <Route  path="/" element={<Search/>}/>
      <Route  path="/Search/:id/view" element={<Activity/>}/>
      </Routes>
  );
}

export default App;
