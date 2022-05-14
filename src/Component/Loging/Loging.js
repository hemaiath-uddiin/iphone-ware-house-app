import React from 'react';
import { Link } from 'react-router-dom';
const Loging = () => {
    return (
        <div className=
            'container'>
            <form className='w-50 m-auto'>
                <div className=
                    "mb-3">
                    <label for="exampleInputEmail1" className=
                        "form-label">Email address</label>
                      <input type="email" className=
                        "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className=
                        "form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className=
                    "mb-3">
                    <label for="exampleInputPassword1" className=
                        "form-label">Password</label>
                    <input type="password" className=
                        "form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className=
                    "btn btn-primary">Submit</button> 

            </form> 
               <div className="singIn"> 
                    <p>create an new account <span> <Link to="/signing" > SignIn</Link>  </span></p>
               
               </div>
        </div>
    );
};

export default Loging;