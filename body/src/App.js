
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Search from './components/Pages/Historysearch/staffpagehistory-searchday';
import Activity from './components/Pages/staffpagehistory-activity-view/Activity';
import Dailyactivity from './components/Pages/Dailyactivity/Dailyactivity';
function App() {
  return (
  

    <Routes>
      <Route  path="/" element={<Search/>}/>
      <Route  path="/Search/:id/view" element={<Activity/>}/>
      </Routes> 
  );
}

export default App;
