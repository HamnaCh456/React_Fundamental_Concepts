import React from 'react';
import { useState } from 'react';
function Toggle(){ 
    const[toogle,setToogle]=useState(false)   
    return (
        <button onClick={()=>setToogle(!toogle)}>
        {toogle?"ON":"OFF" }
        </button>
    );
}
export default Toggle;