
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Search from './components/Pages/Historysearch/staffpagehistory-searchday';
import Activity from './components/Pages/staffpagehistory-activity-view/Activity';
import Dailyactivity from './components/Pages/Dailyactivity/Dailyactivity';
import Report from './components/Pages/Monthlyreport/Report';

function App() {
  return (
  
    

    <Routes>
      <Route  path="/" element={<Search/>}/>
      <Route  path="/Search/:id/view" element={<Activity/>}/>
      <Route  path="Report" element={<Report />}/>
      </Routes>  
  );
}

export default App;
