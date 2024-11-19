import React from 'react';


const Box = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 2} }}
        // noValidate
        autoComplete="off">

        {/* <TextField id="field 1" label="Outlined w autofocus" variant="outlined" autoFocus={false}value="apple juice"/> */}
        {/* <TextField inputRef={selectRef} id="field 2" label="Outlined w/o autofocus" variant="outlined" autoFocus={false} value="99" type="number"/> */}

        <div className='flex space-x-4 px-2'>
          <TextField className='' id="field 3" inputRef={selectRef2} variant="outlined" autoFocus={true} type="string" onKeyDown={handleKeyDown} placeholder='submit requirement'
          onSubmit={handleKeyDown} onChange={handleChange}/>
          <button className="text-purple-700" onClick={handleSubmit}>submit</button>
        </div>

        {/* <TextField id="field 4" label="disabled stfu" variant="outlined" autoFocus={false} disabled={true}/> */}
        {/* <TextField id="field 5" label="disabled stfu" variant="outlined" autoFocus={false} disabled={true} defaultValue={"testing"}/> */}
        <div>
          <p>Count: {count}</p>
          <p>query: {data}</p>
          <Comp 
            da={mop}
            da2={data}/>
          {/* <SearchQuery 
            da={mop}
            da2={data}/> */}
          {/* <Storage /> */}

          {/* <Search2 
            da={mop}
            da2={data}/> */}
            
          <Navigate />

          {/* <Routes2 /> */}

        </div>

        {/* {data2.map((a)=>{
          return(
            <div key={a.id}>
              data2: {a.name}
            </div>

          )

        })} */}

          
      
          

        {/* <span>data2: {data2.name}</span> */}
        {/* {data2.map(a =>(
          <p key={a.id}>data2: {a.name}</p>
        ))} */}
        
         {/* <span>
          <button onClick={(e)=> {
            e.preventDefault();
            console.log(data2);
            }}>array</button>
          </span> */}



      </Box>
    </div>
  )
}

export default Box
