import React, { useEffect } from 'react';
import { useState } from 'react';
const LatestPhone = () => {
    const [latestItem,setLatestitem] = useState([])  
    useEffect(()=>{ 
        fetch('http://localhost:5000/latest') 
        .then(res=>res.json()) 
        .then(data=> setLatestitem(data))
    },[])
    return (
        <div className='container'>
           <h2 className='text-center'> upcoming Latest Phone</h2> 
           <div className="row"> 
              { 
                latestItem.map((latestPhone)=>{ 
                   const {img,name,des} = latestPhone
                    return( 
                      <div className="col-lg-4"> 
                            <div class="card cards_style" >
                                    <img src={img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"> {name} </h5>
                                        <p class="card-text"> {des}</p>
                                        <p class="card-text"> {}</p>
                                        <p class="card-text"> {}</p>
                                       
                                       
                                    </div>
                                </div>
                      
                      </div>
                    )
                })
              }
           
           </div>
        </div>
    );
};

export default LatestPhone;