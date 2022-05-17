import React, { useEffect, useState } from 'react';
import { button } from 'react-router-dom';

const ManageInventory = () => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [])
    return (
        <div>
             <div className="row"> 
             
             { 
                inventory.map((inventory)=>{ 
                    const {name,img,des,price,quantity} = inventory
                    return( 
                       <div className="col-lg-4"> 
                            <div class="card">
                        <img className='img-fluid' src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p> {name} </p>
                            <p class="card-text"> Price: {price} </p>
                            <p class="card-text"> Description: {des} </p>
                            <p class="card-text"> Quantity: {quantity} </p> 
                             <button className='btn btn-danger'> Delet  </button>
                           
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

export default ManageInventory;