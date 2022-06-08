
import React from 'react'; 
import { useForm } from "react-hook-form"; 
import "./AddItem.css" 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddItem = () => {
    const { register, handleSubmit,reset} = useForm(); 
    const notify = () => toast(" A new Items are added");
    const onSubmit = data => {
            reset()
  
        console.log(data);
        const url =`https://protected-dawn-94435.herokuapp.com/item`
        fetch(url, {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data)
           
        })
        .then(res =>res.json())
        .then(result =>{
            console( "added", result)
        }) 
        
    }
    return (
        <div className='container' >
            <h2 className='title text-center'> Add Item </h2>
              <div className="form_wraper mt-5"> 
              <form onSubmit={handleSubmit(onSubmit,reset)}>
                <input placeholder='name'  {...register("Name", { required: true, maxLength: 20 })} /> <br />

                <input placeholder='description' {...register("description",)} /> <br />
                <input placeholder='photo url' type="text" {...register("img",)} /> <br />
                <input placeholder='price' type="number" {...register("price",)} /> <br />
                <input placeholder='quantity' type="number" {...register("quantity",)} /> <br />

                <input  onClick={notify}  className='submite' type="submit" /> 
                <ToastContainer />
            </form>
              
              </div>
        </div>
    );
};

export default AddItem;