
import React from 'react';
import { useForm } from "react-hook-form";
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
        <div>
            <h2>this is add item </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' {...register("Name", { required: true, maxLength: 20 })} />

                <input placeholder='description' {...register("description",)} />
                <input placeholder='photo url' type="text" {...register("img",)} />
                <input placeholder='price' type="number" {...register("price",)} />
                <input placeholder='quantity' type="number" {...register("quantity",)} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItem;