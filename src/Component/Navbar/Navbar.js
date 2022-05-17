import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../fire.init.auths';


// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Navbar = () => {
  const [user] = useAuthState(auth);
  const signOUt = () => {
    signOut(auth)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
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
                <Link className="nav-link active" aria-current="page" to="/item">Feature</Link>
              </li>
              <li className="nav-item">
                {
                  user ?
                    <button onClick={signOUt}> sigout</button>
                    :
                    <Link className="nav-link" to="/loging">Loging</Link>

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