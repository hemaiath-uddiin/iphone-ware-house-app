import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../fire.init.auths';

const RequerAuth = ({children}) => {
 
       
        const [user] = useAuthState(auth);
        const location = useLocation(); 
        if(!user){ 
           return <Navigate to="/loging" state={{from: location}} replace/>
        }
        return children;
 
};

export default RequerAuth;