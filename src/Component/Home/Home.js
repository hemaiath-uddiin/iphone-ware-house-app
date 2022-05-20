
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner'; 
import "./Home.css"

import Services from '../FeaturesItem/FeaturesItem';
import LatestPhone from '../LatestPhone/LatestPhone';
import Footer from '../Loging/Footer/Footer';

const Home = () => {
    const [loading,setLoading] =useState (false) 
     useEffect(()=>{ 
          setLoading(true) 
          setTimeout(() => {
              setLoading(false)
          },1000);
     },[])
    return (
        <div className=' mt-5  d-flex justify-content-center dd'>
             { 
               loading ?<div class="spinner-border text-primary" role="status">
               <span class="visually-hidden">Loading...</span>
             </div> : 
               <div> 
               <Banner></Banner> 
          <Services></Services> 
          <LatestPhone></LatestPhone>  
          <Footer></Footer>
         
          </div>

             }
             
                 
           
                 
                
             
     
             
           
     
            
        </div>
    );
};

export default Home;