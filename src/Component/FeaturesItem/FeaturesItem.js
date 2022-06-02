import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import "./FeaturesItem.css" 
import '../Updated/Update.responsive.css'

const Services = () => {
    const [item, setItem] = useState([]); 
   
       
    useEffect(() => { 
        fetch('https://protected-dawn-94435.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItem(data))

    }, []) 
    const navigate = useNavigate()
    const navigateUpdate =(id)=>{ 
        navigate(`/update/${id}`)
     } 
    
    return (
        <div className='container'>
            <h2 className='text-center mb-5'> Item</h2>
           
              <div className="row">
                {
                    item.map((items) => {
                        const { _id, name, img, des, price, quantity } = items 
                        
                        return (
                            <div  className="col-lg-4 d-block d-lg-flex align_item">
                                <div class="card card_style" >
                                    <img src={img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"> <span>Name:</span> {name} </h5>
                                        <p class="card-text"><span>Description</span> {des}</p>
                                        <p class="card-text"><span>Price:</span> {price}</p> 
                                        <p class="card-text"><span>Quantity:</span> {quantity}</p>
                                          <div className="btn_wraper  "> 
                                          <button onClick={()=>{navigateUpdate(_id)}} class="btn btn-primary btns"> updated</button> 
                                          <Link to="/manage" className='btn btn-primary btns'> Inventories </Link>
                                          
                                          </div>
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

export default Services;