import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchBar from './search.jsx';

import Home from './home.jsx';
import SearchQuery from './searchQuery.jsx';
import Login from './login.jsx';
import afterLogin from './afterlogin.jsx';
import AfterLogin from './afterlogin.jsx';
import Rough from './rough.jsx';
import Search2 from './Search2.jsx';
import { AppContext, Data3Context } from './App.jsx';
import { X } from '@mui/icons-material';


const Routes2 = () => {
  
  const r = useContext(AppContext);
  const st=useContext(Data3Context);

  const checkClick=()=>{
    // console.log(r.data);
    console.log(st.data3); //test 

  }

  // const [x, setX]=useState(0); setX(0);


  return (
    <div>
      <p>routes: {r.data}</p>

      <ul className="list-decimal px-4">
              {st.data3.map(artist => (
                  <li key={artist.id}>{artist.name}</li>
              ))}
      </ul> 

      <button onClick={checkClick}>check list</button>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchbar" element={<SearchBar />} />
            <Route path="/search2" element={<Search2 
            />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/afterLogin" element={<AfterLogin />} />
            <Route path="/rough" element={<Rough />} />


        </Routes>
      </Router>
    </div>
  )
}

export default Routes2;
