import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../fire.init.auths'; 
import "./Navbar.css"


// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Navbar = () => {
  const [user] = useAuthState(auth);
  const signOUt = () => {
    signOut(auth)
  }
  return (
    <div className='navs mt-5'>
      <nav className="navbar navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand iphone" to="/"> Iphone Warehous</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/latest">Latest</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/item">inventorie Item</Link>
              </li>   
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                 { 
                    user &&  <Link className="nav-link active" aria-current="page" to="/manage">ManageItem</Link>
                 }
               
              </li> 
              <li className="nav-item">
                 { 
                    user &&  <Link className="nav-link active" aria-current="page" to="/additem">Add Item</Link>
                 }
               
              </li>

              <li className="nav-item singout">
                {
                  user ?
                    <button className='signOut' onClick={signOUt}> sigout</button>
                    :
                    <Link className="nav-link logg" to="/loging">Loging</Link>

                }
              </li>


            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;