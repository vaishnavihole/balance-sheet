import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home';
import About from './views/About/About';
import Dashboard from './views/Dashboard/Dashboard'

function App() {
  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
