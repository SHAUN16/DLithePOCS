import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Bottom=()=>{
    return(
        <>
            <div className="container-fluid bg-warning text-danger" style={{marginTop:'600px'}}>
                <footer>
                    <p className="text-center">&copy; All Copyrights reserved to DLithe</p>
                </footer>
            </div>
        </>
    );
}

export default Bottom;