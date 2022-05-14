import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle,  } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../fire.init.auths';
const Loging = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')  
    const handleEmail =(e)=>{ 
        setEmail(e.target.value)
  }  
  const handlePassword =(e)=>{ 
    setPassword(e.target.value)
}    
 
const [signInWithEmailAndPassword, user,loading, error ] = useSignInWithEmailAndPassword(auth);
    const loginFormHandle =(e)=>{ 
        e.preventDefault();
               console.log(email,password);   
               signInWithEmailAndPassword(email,password)
    } 
    const navigate = useNavigate()
    // sign in with google.............................
    const [signInWithGoogle] = useSignInWithGoogle(auth); 
    
    if(user){ 
        navigate("/item")
    }  
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      } 
      
    
    
   
    return (
        <div className=
            'container'>
            <form onSubmit={loginFormHandle} className='w-50 m-auto'>
                <div className=
                    "mb-3">
                    <label for="exampleInputEmail1" className=
                        "form-label">Email address</label>
                      <input onBlur={handleEmail} type="email" className=
                        "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className=
                        "form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className=
                    "mb-3">
                    <label for="exampleInputPassword1" className=
                        "form-label">Password</label>
                    <input onBlur={handlePassword} type="password" className=
                        "form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className=
                    "btn btn-primary">Submit</button> 
                    <button onClick={()=>{signInWithGoogle()}} className=
                    "btn btn-danger">SignIn with Google</button> 

            </form> 
               <div className="singIn"> 
                    <p>create an new account <span> <Link to="/signing" > SignIn</Link>  </span></p>
               
               </div>
        </div>
    );
};

export default Loging;