import React, { useEffect, useState } from 'react';

const Services = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => setItem(data))

    }, [])
    return (
        <div className='container'>
            <h2 className='text-center'> feature Items</h2>
            <div className="row">
                {
                    item.map((items) => {
                        const { name, img, des, price, quantity } = items
                        return (
                            <div className="col-lg-4">
                                <div class="card" >
                                    <img src={img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"> {name} </h5>
                                        <p class="card-text"> {des}</p>
                                        <p class="card-text"> {price}</p>
                                        <p class="card-text"> {quantity}</p>
                                        <a href="/" class="btn btn-primary"> updated</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </div>
    );
};

export default Services;