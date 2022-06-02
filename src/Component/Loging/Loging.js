
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Loging.css'
import auth from '../../fire.init.auths';
const Loging = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    // sign in with loging add password
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if (user) {
        navigate("/")
    } 
     if(loading){ 
       <h2> loading</h2>
     }
    const loginFormHandle = (e) => {
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(email, password)


    }

    // sign in with google.............................
    const [signInWithGoogle, users] = useSignInWithGoogle(auth);
    if (users) {
        navigate("/")
    }
    // reset password 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );



    if (sending) {
        return console.log("send")

    }



    // if (error) {
    //     return (
    //       <div>
    //         <p>Error: {error.message}</p>
    //       </div>
    //     );
    //   } 




    return (
        <div className=
            'container loging'>
            <form onSubmit={loginFormHandle} className='w-50 m-auto loging'>
                <div className=
                    "mb-3">
                    <label for="exampleInputEmail1" className=
                        "form-label">Email address</label>
                    <input placeholder='Enter Email' onBlur={handleEmail} type="email" className=
                        "form-control" id="exampleInputEmail1" aria-describedby="emailHelp " />
                    <div id="emailHelp" className=
                        "form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className=
                    "mb-3">
                    <label for="exampleInputPassword1" className=
                        "form-label">Password</label>
                    <input placeholder='Enter Password' onBlur={handlePassword} type="password" className=
                        "form-control" id="exampleInputPassword1" />
                </div>

                <div className="btns">
                    <button type="submit" className=
                        "submit">Submit</button>
                    <button
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                           window.confirm ('Sent email');
                        }}
                    >
                        Reset password
                    </button>
                    <ToastContainer />
                    <button onClick={() => { signInWithGoogle() }} className=
                        "signIn">SignIn with Google</button>
                </div>

            </form>
            <div className="singIn" style={{fontSize:"20px"}}>
                <p>create a new account pleas sign in <span> <Link to="/signing" > SignIn</Link>  </span></p>

            </div>
        </div>
    );
};

export default Loging;