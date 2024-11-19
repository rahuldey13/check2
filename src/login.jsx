import React, { useRef } from 'react'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';
import Navigate from './Navigate';

const Login = () => {

  const selectRef3=useRef(null);
  const selectRef4=useRef(null);

  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    const u=selectRef3.current.value;
    
    const p=selectRef4.current.value;
    
    if (u==="rd13" && p==="pwd")
    {
      console.log (u);
      console.log (p);
      navigate ("/afterLogin");
    }
    else 
    {
  
      console.log("incorrect username/password")
      console.log("")

    }



  }
  return (
    <div>
      <p className='text-4xl'> login section</p>
      <br />
      <TextField id="field 1" inputRef={selectRef3} variant="outlined" autoFocus={false} type="string" onSubmit={handleSubmit} placeholder='enter username' />
      <br />
      <br />
      <TextField id="field 1" inputRef={selectRef4} variant="outlined" autoFocus={false} type="string" onSubmit={handleSubmit} placeholder='enter password' />
      <br />
      <br />
      <button onClick={handleSubmit}> submit </button>

      <Navigate />

    </div>
  )
}

export default Login;
