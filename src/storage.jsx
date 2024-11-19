import React, { useState } from 'react';
import Comp from './comp';

const Storage = (props) => {
    const [at, setAt]= useState("st");

    const  setStorage =(e)=> {
        let x="", a="", att="s", y="";

        e.preventDefault();
        // console.log(att);

        localStorage.setItem("a" , "perry");
        localStorage.setItem("b", "ball");

        x=localStorage.getItem("a");
        y=localStorage.getItem("b");

        att="hello";
        setAt("hello");

        console.log(x);
        console.log(y);
        console.log(props.mop);
        // console.log(at);
        // localStorage.clear();

        // return(
        //     <div>
        //         <p> disp: {att}</p>

        //     </div>
        // )
    }
    
    return(
        <div>
            <br />
            <button onClick={setStorage}>Storage</button>
            <p>disp: {at}</p>
            {/* <Storage /> */}
            <button onClick={localStorage.clear()}> clear</button>
            {/* <Comp /> */}

        </div>
    )
  
}

export default Storage;
