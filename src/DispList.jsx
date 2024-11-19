import React, { useContext, useEffect, useState } from 'react'
import { AppContext, Data3Context } from './App'
import Options from './Options';
import read from 'body-parser/lib/read';
// import { useState } from 'react';

const DispList = () => {

    const r=useContext(AppContext);
    const st=useContext(Data3Context);
    const [c1,setC1] =useState(false);
    const p=1;


    // let j=0;
    const [j, setJ]=useState(0);
    
    
    const ArrEg=()=>{
        const arr=[5, 12, 8, 130, 44];
        let index=3;
        console.log(arr.at(index));
    }
    
    let ans=0;
    let pns="g";
    let global2 = pns;
    
    

    let brr=st.data3;
    let global = ans;
    let no;

    // const [po, setPo]=useState["o"];

    // let [num, setNum]=useState[0];
    const [place, setPlace] =useState("p");
    const [name, setName]=useState(false);

    const accessArray=()=>{
        
        console.log(place);
        if (name ==false) 
            setName(true); 
        else setName(false);

        return pns;

    }

    const changeBoolean=()=>{

        console.log(st.data3);
        setlen(readAr.length);

        if (c1==false)
            setC1(true);
        else
            setC1(false);
    }


    // const [j, setJ]=usestate([]);
    const [ar, setAr]= useState([]);
    const [foo, setFoo]=useState([]);
    const [dep, setDep]=useState(0);

    // let readAr=["st"];
    const [readAr, setReadAr]=useState(["st"]);
    const [len, setlen]=useState();
    const [string2, setString2] =useState("");

    const settoStorage=()=>{
        let string = JSON.stringify(st.data3);
        // setString2(string);
        console.log(string);
        localStorage.setItem("list", string);
        // setReadAr(JSON.parse(string));
        setDep(dep+1);



    }

    // let readArray=[null];
    const [readArray, setReadArray]=useState(["lop"])
    // const [readstring, setReadstring]=useState("guj")
    let readstring="guj";
    
    // let readstring="jp"

    const clearStorage=()=>{
        localStorage.clear();
    }
    
    const dispStorage=()=>{
        // console.log("readAr: ",readAr);
        // console.log("length: ", len)
        
        // console.log("length: ",leng)

        // console.log(readArray.length);

        // console.log("readString: ", readstring);
        // console.log("readArray: ", readArray);


        console.log("hoo: ", hoo)
        console.log("st.data3: ", st.data3);



    }

    
    const [leng, setLeng]=useState(0);

    const fetchStorage=()=>{
        readstring=(localStorage.getItem("list"));
        setReadArray(JSON.parse(readstring));
        // setLeng(readArray.length);
        // addtoList();
        // setDep(dep+1);




    }

    let x=0;

    const setAr2=()=>{

        // setAr([
        //     ...ar, 
        //     { id: ar.length, name: readAr[j].name }
        //   ]);
        // //   j++;
        // setJ(j+1);

        for (let a=0; a<=(len-1); a++){
            x=readAr[a];
            foo.push(x);
        }
          console.log("set to 2nd ar")

    }

    const dispAr=()=>[
        console.log("foo: ", foo)
    ]

    const [hoo, setHoo]=useState([]);
    const [hoo2, setHoo2]=useState([]);
    // const [h, setH]=useState(0);
    let h=0;


    const addtoList=()=>{

         for(let i4=0;i4<=(readArray.length-1); i4++){
                // url=URL.createObjectURL(files[i4]);

                hoo.push(readArray[i4].name);
                // setH(i4);
        }

        for(let i5=readArray.length;i5<=(readArray.length+st.data3.length-1); i5++){
            // url=URL.createObjectURL(files[i4]);

            hoo.push(st.data3[h].name);
            h++;
            console.log(h);
        }
        // console.log(h);

        setDep(dep+1);

    }

    useEffect(()=>{

        // readstring=(localStorage.getItem("list"));
        // setReadArray(JSON.parse(readstring));
        // settoStorage();
        
        // let string = JSON.stringify(st.data3);
        
        // localStorage.setItem("list", string);
        // console.log("setitem ran")

        fetchStorage();
        dispStorage();
        // addtoList();

        // console.log("length: ",leng)
        
        



    }, [dep]);



  return (
    <div>
        <br />
        <p>DispList</p>

        <p>data: {r.data}</p>
        <button onClick={()=>{console.log("DispList: ",st.data3)}}>check list</button>
        <div>
            <div>

            <br />
            <div className='flex flex-row space-x-4'>
                {/* {fetchStorage()}; */}
                <button onClick={changeBoolean}> disp list on click</button>
                <button onClick={settoStorage}>set to localstorage</button>
                <button onClick={fetchStorage}>fetch from local storage</button>
                <button onClick={dispStorage}>disp storage</button>
                <button onClick={addtoList}>add to list</button>
                <button onClick={dispAr}>disp ar</button>

                

                {/* <ul className="list-decimal px-4">
                    {readArray.map(artist => (
                        <li key={artist.id}>{artist.name}</li>
                    ))}
                </ul> */}


            </div>

            <div className='m-4'>
                <p>storage list</p>
                <ul className="list-decimal px-4">
                        {readArray.map(artist => (
                            <li className='space-x-4' key={artist.id}>{artist.name} </li>
                        ))}
                    </ul>
            </div>

            <div className='m-4'>
                <p>full list</p>
                <ul className="list-decimal px-4">
                        {hoo.map(artist => (
                            <li className='space-x-4' key={artist.id}>{artist} </li>
                        ))}
                    </ul>
            </div>

            {c1 && (
                <ul className="list-decimal px-4">
                    {st.data3.map(artist => (
                        <li key={artist.id}>{artist.name} {<button onClick={()=>{no=artist.id; setPlace(artist.name);  console.log(no+1, artist.name);}}>fulfill</button>}</li>
                    ))}
                </ul>
            )}
            <br />
            </div>

            <div>
                <button onClick={accessArray}>access array data </button> 
                {name && (
                    <div>
                        <p>{place}</p>
                    </div>
                )}
                <br />
                <Options />
                

            </div>

        </div>

    



    </div>
  )

    // if (c1) {
    //         return <Working />;
    //     }
    //     return <NotWorking />;
    //     // else {
    //     //     return <NotWorking />;
    //     // }
    
}

export default DispList
