import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Disease_Detector from './Pages/Disease_Detector';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/Disease_Detector" element={<Disease_Detector />} />
      </Routes>
    </div>
  );
}

export default App;



