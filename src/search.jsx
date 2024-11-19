import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchQuery from './searchQuery';
import Storage from './storage';
import Comp from './comp';
import App, { AppContext, Data3Context } from './App';
import Routes2 from './routes';
import Search2 from './Search2';
import { useContext } from 'react';
import Navigate from './Navigate';
import DispList from './DispList';


function SearchBar()  {

  const r=useContext(AppContext);
  const st=useContext(Data3Context);
  const navigate =useNavigate();

  const [data, setData]= useState("");
  const [data2, setData2]=useState([]);
  const [data3, setData3]=useState([]);
  // const [data4, setData4]=useState([1, 2, 3, 4]); //delete states from here and define it in the parent component for usecontext


  const id=0, mop="paddy";

  let i2="", y=0;
  let i=0, i3=0;

  

  const [count, setCount] = useState(0);
  
  


  const handleChange=(e)=>{
    // console.log(10);

    y=e.target.value;
    console.log(y);
    // console.log("iprev: ", i);

    setData(y);
    r.setData(y);    //imp line to be uncommented
  

    setData2([
      ...data2,
      { key:data2.length, 
        name:y }
    ]);
    
    setCount(count+1);
    i++;

    // console.log("iafter ", i);

    // console.log(data2)
    // setData2(data);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate("/search2");

  }

  

  

  const handleKeyDown=(e)=>{
    // console.log("down");
    // console.log("e.key: "+ e.key);
    // console.log("e.code: "+ e.code);
    // checkKey(e);
    //navigate to the searchQuery section
    let i=0;
    
    if (e.key==='Enter')
      {
        setData3();
        e.preventDefault();
        console.log("data: ",data); //displaying the array in the console
        console.log("data2: ",data2);//displaying "data: <the input>" in the console

        // y="data";
        console.log("y: ", data);
        setData3([
          ...data3, 
          { id: data3.length, name: data }
        ]);

        st.setData3([
          ...data3, 
          { id: data3.length, name: data }
        ]); //test

        
        

        // navigate("/search2"); //comment this line to disable navigating to the search2 page on enter pressing

        // <Storage data={mop}/>
        // setData2([
        //   ...data2,
        //   {id: i++, name: data}
        // ]);
        // i2=data;

        // navigate("/search2");

        // <SearchQuery data={data}/>
        // handleSubmit(e);

    // const value =e.target.value;
      }

      // console.log(data2[i]);


  }

 

  

  const selectRef=useRef(null);
  const selectRef2=useRef(null);

  const x=useRef(true);

  

  
  
  const disp2=()=>{
    console.log("data3: ", st.data3);
    // return(
    //   <div>
    //     <ul>
    //       {data3.map(artist => (
    //         <li key={artist.id}>{artist.name}</li>
    //       ))} //correct format to display list from array
    //     </ul>  
    //   </div>
    // )
  }

  

  return (
    <div className='px-2 flex flex-col space-y-2' >
      <div className='text-4xl'>searchBar section</div>
      <br />
      <p className='px-2'>searchbar: {data}</p>


      <div className='flex space-x-6 px-2'>
          <TextField value={data} style= {{width:350}} id="field 3" inputRef={selectRef2} variant="outlined" autoFocus={true} type="string" onKeyDown={handleKeyDown} placeholder='submit requirement'
          onSubmit={handleKeyDown} onChange={handleChange}/>
          <button className="text-purple-700" onClick={handleSubmit}>submit</button>
        </div>
        {/* <br /> */}

        {/* <div className='px-1'> */}
          <div className='px-2'>
            <p>Count: {count}</p>
            <p>query: {data}</p>
            <Comp 
              da={mop}
              da2={r.data}/>
          {/* </div> */}
          
         
          {/* <SearchQuery 
            da={mop}
            da2={data}/> */}
          {/* <Storage /> */}

          {/* <Search2 
            da={mop}
            da2={data}/> */}
            
          <Navigate />

          {/* disp2() */}

          <button onClick={disp2}>display data3</button>

          {/* <div>
            <ul className="list-none">
              <li>{data3.name}</li>
            </ul>
          </div> */} 
          {/* // incorrect format to display list from array */}

          {/* let ji=0;
          if ji===1  //kora jaayena naki */}
           {
            <ul className="list-decimal px-4">
              {data3.map(artist => (
                  <li key={artist.id}>{artist.name}</li>
              ))}
            </ul> 

          }
          <DispList />
          {/* correct format to display list from array */}
          


          {/* <Routes2 /> */}

        </div>

    {/* <div>
      <Routes2 />
    </div> */}

    </div>

    
  )
}

export default SearchBar;
