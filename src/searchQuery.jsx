
import React from 'react';
import Comp from './comp';
import Notif3 from './Notif3';

const SearchQuery = ({data3}) => {
  return (
    <div className='text-2xl flex flex-col space-y-1'>
      <h1 className='text-4xl'>searchQuery section</h1>
      <br />
      <p>1. display resut from existing list</p> 
      <div className='flex space-x-4'>
        <div>2. send query to all accounts</div> 
        <button onClick={Notif3}>send query</button>
      </div>
      <p>2. send query as notif (text notif 1st and then with sound)</p> 
      <p>3. different accounts, submitting query, all getting stored as a single long array of requirements </p>
      <p>4. fulfilling said requirements</p>

      {/* <br /> */}
      {/* <span className='text-2xl'>query: {data}</span> */}
      {/* <Comp /> */}
      {/* <p>da: {m1}</p>
      <p>da2: {m2}</p> */}

    
    </div>
  )
}

export default SearchQuery;
