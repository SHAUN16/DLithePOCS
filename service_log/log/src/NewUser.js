import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {TextField,Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
const NewUser=()=>{
  const[username,setUser]
    const evs=()=>{

    }
  return(
      <>
      <div className="container-fluid mt-lg-5">
           <h1 className="display-4 text-center test-primary">New User Enrollment</h1>
              <div className="row-justify-content-center">
                  <form className="col-md-8 col-sm-12 rounded p-5 shadow">
                  <TextField
                    id="outlined-basic" 
                    label="Username" 
                    variant="outlined"
                    placeholder="Tell us username"
                    className="form-control mb-3" 
                    name="username"
                    value={user.password}
                    onChange={evs}
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    className="form-control mb-3" 
                    autoComplete="current-password"
                    variant="outlined"
                    name="password"
                    placeholder="Choose password"
                    value={user.password}
                    onChange={evs}
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    className="form-control mb-3" 
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    placeholder="Confirm password"
                    name="conpassword"
                    value=""
                    onChange={evs}
                    />
                    <TextField
                    id="outlined-basic" 
                    label="Contact" 
                    className="form-control mb-3" 
                    variant="outlined"
                    placeholder="Tell us contact" 
                    name="contact"
                    value=""
                    onChange={evs}
                    />
                    <div className="row justify-content-around">
                        <Button className="col-4" variant="outlined" color="primary">
                            <AddIcon/>
                        </Button>
                    </div>
                  </form>
            </div>
        </div>

      </>
  );
  }
export default NewUser;

