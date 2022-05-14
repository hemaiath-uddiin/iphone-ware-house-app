
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Component/Home/Home'; 
import Item from "./Component/FeaturesItem/FeaturesItem"
import Navbar from './Component/Navbar/Navbar';
import Loging from './Component/Loging/Loging';
import Signing from './Component/Signig/Signing';



function App() {
  return (
    <div className="App"> 
       <Navbar></Navbar>
            <Routes> 
            <Route path="/" element={<Home></Home>} />
            <Route path="/item" element={<Item></Item>} />
            <Route path="/loging" element={<Loging></Loging>} />
            <Route path="/signing" element={<Signing></Signing>} />
            
            
            </Routes>
          
    </div>
  );
}

export default App;
