
import React from 'react'; 
import { useForm } from "react-hook-form"; 
import "./AddItem.css"
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
       
  
        console.log(data);
        const url =`http://localhost:5000/item`
        fetch(url, {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data)
           
        })
        .then(res =>res.json())
        .then(result =>{
            alert( "added", result)
        })
    }
    return (
        <div className='container' >
            <h2 className='title text-center'> Add Item </h2>
              <div className="form_wraper"> 
              <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' {...register("Name", { required: true, maxLength: 20 })} /> <br />

                <input placeholder='description' {...register("description",)} /> <br />
                <input placeholder='photo url' type="text" {...register("img",)} /> <br />
                <input placeholder='price' type="number" {...register("price",)} /> <br />
                <input placeholder='quantity' type="number" {...register("quantity",)} /> <br />

                <input className='submite' type="submit" />
            </form>
              
              </div>
        </div>
    );
};

export default AddItem;