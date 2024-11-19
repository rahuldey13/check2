import React, { useContext } from 'react';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import { createContext } from 'react';
import { AppContext } from './App';
import Navigate from './Navigate';
import Notif from './Notif';
import Notif2 from './Notif2';
import List from './Arr.jsx';


const Home = () => {

  const r=useContext(AppContext);
  const navigate=useNavigate();

  const ArrEg=()=>{
      const array1 = [5, 12, 8, 130, 44];

      let index = 2;

      console.log(`An index of ${index} returns ${array1.at(index)}`);
      // Expected output: "An index of 2 returns 8"
  }

  return (
    <div>
      {/* <p>home: {r.data}</p> */}
      <h1 className='text-7xl text-purple-600'>hello crackadeal</h1>
      <p>home: {r.data}</p>

      <Navigate />
      <Notif />
      <Notif2 />
      {/* <List /> */}
      {/* <ArrEg /> */}
      <button onClick={ArrEg}>hello3</button>


      
      
    </div>
  )
}

export default Home;

