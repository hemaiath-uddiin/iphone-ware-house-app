
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Component/Home/Home';
import Item from "./Component/FeaturesItem/FeaturesItem"
import Navbar from './Component/Navbar/Navbar';
import Loging from './Component/Loging/Loging';
import Signing from './Component/Signig/Signing';
import RequerAuth from './Component/RequerAuth/RequerAuth';
import Updated from "./Component/Updated/Update";

import LatestPhone from './Component/LatestPhone/LatestPhone';
import ManageItem from './Component/ManageItem/ManageItem';
import AddItem from './Component/AddItem/AddItem';
import Footer from './Component/Loging/Footer/Footer';
import Space from './Component/Space/Space';
import Blog from './Component/Blog/Blog';
import NotFount from './Component/NotFound/NotFount';
import ManageInventory from './Component/ManageInventory/ManageInventory';


function App() {
   return (
      <div className="App">
         <Navbar></Navbar>  
           <Space></Space>
        
         <Routes> 
            <Route path="/" element={<Home></Home>} />
            <Route path="/item" element={<Item></Item>} />
            <Route path="/manage" element={<ManageInventory></ManageInventory>} />
            <Route path="/latest" element={<LatestPhone />} />
           
            <Route path="/loging" element={<Loging></Loging>} />
            <Route path="*" element={<NotFount></NotFount>} />
            
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
          {/* <Footer></Footer> */}
      </div>
   );
}

export default App;
