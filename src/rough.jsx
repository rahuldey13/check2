import { useState } from "react";
import Images from "./Images";

const Rough=()=> {
  const [count, setCount] = useState(0);

  // Directly update state
  const increase = () => {
    setCount(count + 1);
    // console.log("Count: ", count)
    // count2();
  }

  const count2=()=>{
    console.log("Count2: ", count)
  }

  // Render UI
  return (
    <div className="text-4xl">
      <span>Count: {count}</span>
      {/* <br />
      <button onClick={increase}>Add +1</button> */}
      <br />
      <button onClick={count2}>count2</button>
      <br />
      <button onClick={()=>{
        increase();
        count2();
      }}>Add +1</button>

    </div>
  );
  console.log("Count2: ", count)

}

export default Rough;