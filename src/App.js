
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Component/Home/Home'; 
import Item from "./Component/FeaturesItem/FeaturesItem"
import Navbar from './Component/Navbar/Navbar';



function App() {
  return (
    <div className="App"> 
       <Navbar></Navbar>
            <Routes> 
            <Route path="/" element={<Home></Home>} />
            <Route path="/item" element={<Item></Item>} />
            
            </Routes>
          
    </div>
  );
}

export default App;
