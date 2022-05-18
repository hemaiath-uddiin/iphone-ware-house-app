
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
import ManageItem from './Component/ManageItem/ManageItem';
import AddItem from './Component/AddItem/AddItem';


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
               <RequerAuth>  <Updated></Updated> </RequerAuth>

            } > </Route>
            <Route path='/manage' element={
               <RequerAuth>  <ManageItem></ManageItem> </RequerAuth>

            } > </Route>
            <Route path='/additem' element={
               <RequerAuth>  <AddItem></AddItem> </RequerAuth>

            } > </Route>
         </Routes>

      </div>
   );
}

export default App;
