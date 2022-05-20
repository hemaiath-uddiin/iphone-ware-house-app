import React from 'react';
import { useState } from 'react'; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';  
import { useNavigate } from 'react-router-dom';
import auth from '../../fire.init.auths'

const Signing = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')  
    const navigate = useNavigate()
     // handele state from here .................. 
     const handleName=(e)=>{ 
        setName(e.target.value)
   }; 
   const handleEmail=(e)=>{ 
      setEmail(e.target.value)
 }; 
 const handlePassword=(e)=>{ 
  setPassword(e.target.value)
};   

const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if(user){ 
      navigate('/')
  }
  // handle form from here 
  const handleForm=(e)=>{ 
    e.preventDefault() 
    console.log(name,email,password);  
    createUserWithEmailAndPassword(email,password)
   

}
    
    return (
        <div className='container'>
           <form onSubmit={handleForm} className='w-50 m-auto'>
           <div className=
                    "mb-3">
                    <label for="exampleInputPassword1" className=
                        "form-label">Name</label>
                    <input onBlur={handleName} type="name" className=
                        "form-control" id="exampleInputPassword1" />
                </div>
                <div className=
                    "mb-3">
                    <label for="exampleInputEmail1" className=
                        "form-label">Email address</label>
                      <input onBlur={handleEmail} type="email" className=
                        "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                 
                </div>
               
                <div className=
                    "mb-3">
                    <label for="exampleInputPassword1" className=
                        "form-label"> Password</label>
                    <input onBlur={handlePassword} type="password" className=
                        "form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className=
                    "btn btn-primary">Submit</button> 

            </form> 
        </div>
    );
};

export default Signing;