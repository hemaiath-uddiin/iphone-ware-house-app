import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NotFount = () => {
    const notify = () => toast("Wow so easy!");
    return (
       
      <div>
            <h2 className='text-center h2'> page Not Found  </h2>  
            <button onClick={notify}>Notify!</button> 
            <ToastContainer />

        </div>
    );
};

export default NotFount;