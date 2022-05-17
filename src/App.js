
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Component/Home/Home'; 
import Item from "./Component/FeaturesItem/FeaturesItem"
import Navbar from './Component/Navbar/Navbar';
import Loging from './Component/Loging/Loging';
import Signing from './Component/Signig/Signing';
import RequerAuth from './Component/RequerAuth/RequerAuth';
import Updated from "./Component/Updated/Update";
import ManageInventory from './Component/ManageInventory/ManageInventory';
import LatestPhone from './Component/LatestPhone/LatestPhone';


function App() {
  return (
    <div className="App"> 
       <Navbar></Navbar>
            <Routes> 
            <Route path="/" element={<Home></Home>} />
            <Route path="/item" element={<Item></Item>} />  
            <Route path="/inventory" element={<ManageInventory></ManageInventory>} /> 
            <Route path="/latest" element={<LatestPhone />} /> 
            <Route path="/loging" element={<Loging></Loging>} />
            <Route path="/signing" element={<Signing></Signing>} />
             <Route path='/update/:id' element={ 
                <RequerAuth> 
                   <Updated></Updated>

                </RequerAuth>

             }  > </Route>
            
            </Routes>
          
    </div>
  );
}

export default App;
