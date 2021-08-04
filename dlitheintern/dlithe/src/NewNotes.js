import { useState } from "react";

const NewNotes=()=>{

    const[bundle,setBundle]=useState({
        title:"",
        content:""
    })

    const save=()=>{
        alert(bundle.content+""+bundle.title+" about to save");
    }

    const textEve=(eve)=>{
        //alert('text eve invoked');
        const {name,value}=eve.target;
        setBundle((old)=>{
            return{
                ...old,
                [name]:value
            }
        });
    }
    return(
        <>
            <div className="container-fluid">
                <h1 className="text-center text-primary">New DLithe Keep Note</h1>
                <div className="mt-lg-3 row justify-content-center">
                    <div className="card rounded shadow-lg col-6">
                        <div className="card-body">
                            <form>
                                <input type="text" 
                                placeholder="Title" 
                                name="title" 
                                className="form-control"
                                onChange={textEve}
                                value={bundle.title}
                                />
                                <textarea name="content" 
                                placeholder="Write note" 
                                className="form-control"
                                value={bundle.content}
                                onChange={textEve}>
                                </textarea>
                                <div className="row justify-content-center">
                                    <button className="col-4 btn btn-outline-success badge-pill" onClick={save}>
                                        Create Note
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewNotes;