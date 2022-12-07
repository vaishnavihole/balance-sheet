import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home';
import About from './views/About/About';
import Dashboard from './views/Dashboard/Dashboard'
import AddTransaction from './views/AddTransaction/AddTransaction.js';
import AllTransactions from './views/AllTransactions/AllTransactions';


function App() {
  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/add-transaction" element={<AddTransaction/>}/>
            <Route path="/all-transactions" element={<AllTransactions/>}/>
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
