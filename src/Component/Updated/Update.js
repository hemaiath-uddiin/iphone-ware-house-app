import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, } from 'react-router-dom';

const Update = ({ children }) => {
    const { id } = useParams()
    const [setupdateDtls, setUpdateDtls] = useState({})
   
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateDtls(data))
    }, [])
    return (

        <div>
            <h2 className='text-center'> full Details </h2>
            <div className="container">
                <div className="row"> 
                <div className="col-lg-8"> 
                <div className="card" >
                    <img src={setupdateDtls.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text"> Name: {setupdateDtls.name}  </p>
                        <p className="card-text"> quantity: {setupdateDtls.quantity
                        } </p> 
                        <p className="card-text"> Price: {setupdateDtls.price}  </p>
                        <p className="card-text"> Description: {setupdateDtls.des}  </p> 
                        <button className='btn btn-danger'> Deleverd</button>
                        <button className='btn btn-primary'> Manage Inventories </button>
                    </div>
                </div>
                
                </div> 
                <div className="col-lg-4"> 
                     <div className="restock"> 
                     <h2> please gives the number of value for restock the Items </h2>  
                     <input type="number" placeholder='Enter Number' /> <br />
                     <button className='btn btn-primary'>Restock</button>
                     </div>
                    
                
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default Update;