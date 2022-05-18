import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, } from 'react-router-dom';

const Update = ({ children }) => {
    const { id } = useParams()
    const [setupdateDtls, setUpdateDtls] = useState({}) ;
    const [update,setUpdate] = useState() ; 
      const updateQuantity =(e)=>{ 
          setUpdate(e.target.value)
      }
    
      
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(addQuantity => setUpdateDtls(addQuantity))
    }, [])
    const updateaddQuantity =(e)=>{ 
        e.preventDefault() ;
        let newQuantity = update ; 
         if(newQuantity> 0){ 
    const addQuantity = parseInt(setupdateDtls.quantity)+parseInt(newQuantity)
     console.log(addQuantity);
    // addQuantity send to the server  
    fetch(`http://localhost:5000/item/${id}`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            addQuantity
        ),
      }) 
      .then(res => res.json()) 
      .then(json => {
        console.log('Success:', json);
      })
    
     

      }
       } 
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
                                <p className="card-text"> quantity: {setupdateDtls.quantity} </p>
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

                            <form onSubmit={updateaddQuantity}>
                                <input onBlur={updateQuantity} type="number" placeholder='Enter Number' />  
                                  <button type="submit"> Restock</button>
                                <br />
                            </form>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Update;