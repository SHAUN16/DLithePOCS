import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Image from './pics/dlithe.png';

const Top=()=>{
    return(
        <>
            <div className="container-fluid bg-warning">
                <div className="row justify-content-center">
                    <img src={Image} height="90px" width="10px" className="col-3"/>
                    <h1 className="col display-4 text-danger" style={{marginLeft:'600px'}}>Dlithe Keep Notes</h1>
                </div>
            </div>
        </>
    );
}

export default Top;