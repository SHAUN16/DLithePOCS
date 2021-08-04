import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Home=()=>{
    const[given,setGiven]=useState({
        username="",
        password="",
    })

    const eve=(event)=>{
        const name=[]

    }
    const clean=()=>{

    }
    const login=()=>{

    }

    return(
        <>
            <div className="container-fluid mt-lg-5">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-12 align-self-center shadow rounded p-4">
                    <h1>Login to LogService</h1>
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" 
                                className="form-control" 
                                onChange={eve}
                                placeholder="Tell us username"
                                name="username"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" 
                                className="form-control" 
                                onChange={eve}
                                placeholder="Tell us password"
                                name="password"
                                />
                            </div>
                            <div className="mt-lg-3 row justify-content-around">
                                <button className="col btn btn-success" onClick={login}>Login</button>
                                <button className="col btn btn-danger" onClick={clean}>Clear</button>
                            </div>
                        </form>
                        <a href="/newuser" className="text-primary float-end">Create New User</a>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="images/service.jfif" className="w-100 rounded shadow" style={{height:'600px'}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;