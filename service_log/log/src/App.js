import React from "react";
import ReactDom from "react-dom";
import { Route, Switch } from "react-router";
import Home from "./Home";
import LogMenu from "./LogMenu";
import NewUser from "./NewUser";

const App=()=>{
  return(
    <>
      <LogMenu/>
      <Switch>
        <Route path="/" exact component={()=><Home/>}/>
        <Route path="/newuser" exact component={()=><NewUser/>}/>
        <Route path="" exact component=""/>
      </Switch>
    </>
  );
}

export default App;