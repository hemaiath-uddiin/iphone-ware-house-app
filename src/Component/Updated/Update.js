import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useParams, } from 'react-router-dom';

const Update = ({ children }) => {
    const { id } = useParams();
    const [setupdateDtls, setUpdateDtls] = useState({}) ;
     //update state
    const [update,setUpdate] = useState('') ; 
      const updateQuantity =(e)=>{ 
          setUpdate(e.target.value) 
          
      }  
    
      //load data 
      const loadData =()=>{ 
        const url =`https://protected-dawn-94435.herokuapp.com/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(addQuantity => setUpdateDtls(addQuantity))
      }
     
    useEffect(() => {
       loadData() 
     
    },[])  
   //update delevered button
       const deleverd=()=>{ 
           const newQuantity = setupdateDtls.quantity-1 ;
           const url =`https://protected-dawn-94435.herokuapp.com/item/${id}`;
           fetch(url, {
                        method:"PUT",
                        headers:{'content-type': 'application/json'},
                        body: JSON.stringify({
                            newQuantity
                        }),
                       
                    }) 
                    .then(res=>res.json()) 
                        .then(json=>{ 
                            console.log("succes",json);  
                            loadData()
                            
                        })
           
       } 
       //update quantity
    const updateaddQuantity =(e)=>{ 
        e.preventDefault() ;
        let newQuantity = update ; 
         if(newQuantity> 0){ 
    const addQuantity = parseInt(setupdateDtls.quantity)+parseInt(newQuantity)
     console.log(addQuantity);
     let data = {
        newQuantity: addQuantity
     } 

    // addQuantity send to the server   
         try {
            fetch(`https://protected-dawn-94435.herokuapp.com/item/${id}`, {
                method:"PUT",
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(data)
               
            })
            .then(res=>res.json()) 
            .then(json=>{ 
                const proceeds = window.confirm("Are You sure want to Restock") 
                  if(proceeds){ 
                     console.log("Do You want to add quantity",json);
                  }
                
                loadData()
            })
              
         } catch (error) {
             console.log(error,"error is here");
         }
 
      
    // https://stackoverflow.com/questions/72323480/how-to-use-jwt-token-what-is-the-need-for-using-it
     

      } 
       } 
    return (

        <div>
            <h2 className='text-center'> Item Details </h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card card_style" >
                            <img src={setupdateDtls.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"> <span>Name: </span>  {setupdateDtls.name}  </p>
                                <p className="card-text"> <span>quantity: </span>  {setupdateDtls.quantity} </p>
                                <p className="card-text"> <span>Price: </span>  {setupdateDtls.price}  </p>
                                <p className="card-text"> <span>Description: </span>  {setupdateDtls.des}  </p>
                                <button onClick={()=>{deleverd()}}  className='btn btn-danger'> Deleverd</button>
                                <Link  to="/inventory" className='btn btn-primary'> Manage Inventories </Link>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="restock">
                            <h2> please gives the number of value for restock the Items </h2>

                            <form onSubmit={updateaddQuantity}>
                                <input onBlur={updateQuantity} type="number" placeholder='Enter Number' />  
                                  <button className='btn btn-primary' type="submit"> Restock</button>
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