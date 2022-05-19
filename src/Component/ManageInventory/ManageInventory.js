import React, { useEffect, useState } from 'react';
import { button } from 'react-router-dom';

const ManageInventory = () => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [])
    // handle delet item from database 
    const handleDelet = (id) => {
        const proceed = window.confirm("Are You sure want to Delet") 
       
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`
            console.log("deletin id", id);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => { 
                    if(data.deletedCount > 0){ 
                        console.log("delet"); 
                        const remaining = inventory.filter(item=> item._id !== id)  
                        setInventory(remaining)

                    }
                   
                })
        }

    }

    return (
        <div>
            <div className="row">

                {
                    inventory.map((inventory) => {
                        const { name, img, des, price, quantity } = inventory


                        return (
                            <div className="col-lg-4">
                                <div class="card">
                                    <img className='img-fluid' src={img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p> {name} </p>
                                        <p class="card-text"> Price: {price} </p>
                                        <p class="card-text"> Description: {des} </p>
                                        <p class="card-text"> Quantity: {quantity} </p>
                                        <button onClick={() => { handleDelet(inventory._id) }} className='btn btn-danger'> Delet  </button>

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