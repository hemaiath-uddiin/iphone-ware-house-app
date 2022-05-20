import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4 d-block d-lg-flex">
                    <div class="card" style={{fontSize:"20px"}}  >
                        <div class="card-body">
                            <h5 class="card-title"> Difference between javascript and nodejs</h5>
                            
                            <p class="card-text">JavaScript is a programming language. It is running in any web browser with a proper browser engine..</p> 
                            <p> It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately. </p>

                        </div>
                    </div>

                </div> 
                <div className="col-lg-4 d-block d-lg-flex">
                    <div class="card" style={{fontSize:"20px"}} >
                        <div class="card-body">
                            <h5 class="card-title">Differences between sql and nosql databases.</h5>
                            
                            <p class="card-text">SQL databases are relational, NoSQL databases are non-relational.</p> 
                            <p> SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. </p>

                        </div>
                    </div>

                </div> 
                <div className="col-lg-4 d-block d-lg-flex">
                    <div class="card" style={{fontSize:"20px"}}>
                        <div class="card-body">
                            <h5 class="card-title"> When should you use nodejs and when should you use mongodb</h5>
                            
                            <p class="card-text">Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p> 
                            <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;