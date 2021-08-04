import { useState } from "react";
import Bottom from "./Bottom"
import NewNotes from "./NewNotes";
import Top from "./Top"


const App=()=>{
  const[notes,setNotes]=useState([]);

  return(
    <>
      <Top/>
      <NewNotes/>
      <Bottom/>
    </>
  );
}

export default App;
