import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../fire.init.auths';

const RequerAuth = ({children}) => {
 
       
        const [user,loading] = useAuthState(auth); 
       
        const location = useLocation();  
        if(loading){ 
               return <h2 className='text center'> Loading </h2>
              }
        if(!user){ 
           return <Navigate to="/loging" state={{from: location}} replace/>
        }
        return children;
 
};

export default RequerAuth;