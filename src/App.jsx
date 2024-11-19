import React, { Children, createContext, useContext } from 'react';
import { useState } from 'react';
import Test from './test.jsx';
// import BasicButtons from './app2.jsx';

import Routes2 from './routes.jsx';
import { Search } from '@mui/icons-material';
import SearchBar from './search.jsx';
import { data } from 'autoprefixer';

export const AppContext = createContext();
export const Data3Context = createContext();

// export const AppContext2=createContext();

const App = ({mop}) => {
  
  const [data, setData]= useState("s");
  // const [data2, setData2]=useState("pine");
  const [data3, setData3]=useState([]);

  // const id=0, mop="paddy";

  // let i2="", y=0;
  // let i=0;

  // const [count, setCount] = useState(0);

  // const selectRef=useRef(null);
  // const selectRef2=useRef(null);
  // const x=useRef(true);

  // const r=useContext(AppContext);

  

  return (
    
    
    <AppContext.Provider value={{data, setData}}>
      <Data3Context.Provider value={{data3, setData3}}>

      
    
      <p>app: {data}</p>

      <div>
        <Routes2 />
      </div>

      </Data3Context.Provider>
      {/* </AppContext2.Provider> */}
    </AppContext.Provider>

    
    
    
    
  )
}

export default App;