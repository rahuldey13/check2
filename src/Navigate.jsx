import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';

const Navigate = () => {

    const navigate=useNavigate();
  return (
    <div className='px-2 flex-col space-y-2'>
        <br/>
        <div>navigate section</div>
        {/* <br /> */}
        <div className='flex space-x-6'>
          <Button variant ="contained" onClick={()=> navigate("/")}>home</Button>
          <br />
          <br />
          <Button variant ="contained" onClick={()=> navigate("/searchBar")}>search</Button>
          <br />
          <br />
          <Button variant ="contained" onClick={()=> navigate("/login")}>login</Button>
          <br />
          <br />
          <Button variant ="contained" onClick={()=> navigate("/rough")}>rough</Button>
        </div>
    </div>
  )
}

export default Navigate
