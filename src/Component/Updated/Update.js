import React from 'react';
import { useParams } from 'react-router-dom';

const Update = ({children}) => {
    const {id} = useParams()
    return (
   
      <div>
            <h2>  update {id} </h2>
        </div>
    );
};

export default Update;