import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx"
import "./App.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Report from './pages/report/Report.jsx';


function App() {
  return (
    <Router> 
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/report" element={<Report/>} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
