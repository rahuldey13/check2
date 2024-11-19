const handleEnter=(e)=>{
    const y= selectRef2.current.value;
    setData(y);
    e.preventDefault();
    console.log("handle enter working");
    console.log("entered data:", e.target.value);

    console.log("prev data:", data);
    setData(e.target.value);
    console.log("new data:", data);
    handleFocus(e);
    // handleBlur(e);
  }


  const handleKeyUp=(e)=>{
    //   // console.log("up");
    //   // console.log("e.key: "+ e.key);
    //   // console.log("e.code: "+ e.code);
    }

    
    // useEffect(() => {
  //   // handleFocus();
  //   if (x.current === true)
    
  //     console.log("check useeffect", data , data2, data3);
  //     x.current=false;
    
      

  // },[data])


  const handleBlur=()=>{
    selectRef2.current.blur();
    console.log("handleblur working")
  }


  const handleFocus=()=>{
    // selectRef.current.focus();
    // console.log("handle focus working")

  }

  const checkKey=(e)=>{
    //   // console.log('${e.key}')
    //   // console.log("typeof is: " + typeof e.key);
      
    //   // if (e.key==='Enter')
    //   //   {console.log("its enter")}
    //   // else
    //   //   {console.log("its not enter")}
  
    }

    const increase=()=>{
        setCount(count+1);
        // console.log("count "+count)
      }

      
      const handleSubmit =(e)=>{

        // const y=e.target.value;
        // console.log(y); //onchange registering
        e.preventDefault();
    
        // console.log("submitted");
        const x = selectRef2.current.value;
        // console.log("query: " , x);
    
        // setArr([
        //   ...arr,
        //   { id:nextId++, name: x }
        // ]);
        // console.log(...arr);
        
        // setData(x);
        // console.log(data);
        // console.log(data);
        // console.log("");
        // handleFocus(e);
        // handleBlur(e);
    
        // navigate("/searchQuery");
    
        // return(
        //   <SearchQuery /> 
        // )
    
      }

      App(

        // <div className="text-5xl text-purple-600">
    //   <p>hello crackadeal</p>
      
    //   {/* <BasicButtons /> */}
    //   <Test />
    //   <Search />


    // </div>
    
    
    // <div>
    //   <SearchBar />
    // </div>
    
      )

      const Working =()=>{
        return(
            <h1>working</h1>
        )
    }

    const NotWorking =()=>{
        return(
            <h1>not working</h1>
        )
    } //from dispList


    const ArrEg2=()=>{
      const array1 = [5, 12, 8, 130, 44];

      let index = 2;
      ans=array1.at(index);

      return ans;

  
  } //from displist

   // if (c1) {
        //     return <Working />;
        // }
        // else {
        //     return <NotWorking />;
        // } //from displist
    