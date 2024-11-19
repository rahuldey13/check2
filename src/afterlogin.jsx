import React from 'react';
import Navigate from './Navigate';
import { useContext } from 'react';
import { AppContext, Data3Context } from './App';

const AfterLogin = () => {
  const r=useContext(AppContext);
  const st=useContext(Data3Context);

  const dispList=()=>{
    console.log(st.data3);
  }
  return (
    <div>
      <p className="text-4xl">afterLogin section</p>
      <br />
      <p> welcome rd13</p>
      <p> query: {r.data}</p>
      <button onClick={dispList}>display list</button>
      <Navigate />
    </div>
  )
}

export default AfterLogin;
