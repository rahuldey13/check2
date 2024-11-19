import React from 'react'
import searchQuery from './search';
import SearchQuery from './searchQuery';
import { AppContext, Data3Context } from './App';
import { useContext } from 'react';
import Navigate from './Navigate';
// import { use } from 'express/lib/application';



const Search2 = () => {
    const r=useContext(AppContext);
    const st=useContext(Data3Context)
    // const st=useContext(AppContext2);
    // const { value, value2 } = useContext(AppContext);
    // const [data, setData] =value;
    // const [data3, setData3]=value2;
    // const r1=r.data3;

    const displayArray=()=>{
      console.log(st.data3);
      // console.log(st.data3);
    }
  return (
    <div className='px-3'>
      <br />
        <p>search2: latest query: {r.data}</p>
        <button onClick={displayArray}>disp list</button>
        <br />
        {/* <p>search2: {r.data}</p> */}
        {/* <div className='text-3xl'>{r.data}</div> */}
        <SearchQuery />
        <Navigate />
    </div>
  )
}

export default Search2
