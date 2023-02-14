import { useState } from "react";
import Counter from "./Components/counter";

function App() {
  const [backgroundColor, setBackgroundColor] = useState ("white");
  const [count, setCount] = useState (0);
  // const [name, setName] = useState("") 
  return (
    <div style={{position:"absolute",width:"100%", height:"100%", backgroundColor:backgroundColor}}>
      
      <div
      style={{
        height:"100%",
      }}>
        <div style={{marginTop:10, marginLeft:10,display:'flex',alignItems:'center'}}>
          <h4>change Background Color</h4>
          <input type="color"
           onChange={(e) => setBackgroundColor(e.target.value)} 
          style={{marginLeft:20}} />
        </div>
        <h2 style={{textAlign:"center",marginTop:40}} >Welcome to Count App</h2>
        <div>
          <p style={{fontSize:18,textAlign:"center",margin:"20px 0"}} >Total Count: <b>{count}</b> </p>
          <div style={{textAlign:"center"}}>

            <button style={{borderRadius:20, backgroundColor:"green", col:"white", borderWidth:0,marginRight:10,width:"90px"}} onClick={() => setCount(count + 1 )}>+</button>
            <button style={{borderRadius:20, backgroundColor:"red", col:"white", borderWidth:0,marginRight:10,width:"90px"}} onClick={() => setCount(count - 1 )}>-</button>
        </div>
        <div style={{marginTop:14, textAlign:"center"}}>

          <button style={{borderRadius:20, backgroundColor:"green", col
            :"white", borderWidth:0,marginRight:10,width:"90px"}} onClick={() => setCount(count + 5 )}>+5</button>
          <button style={{borderRadius:20, backgroundColor:"red", col
            :"white", borderWidth:0,marginRight:10,width:"90px"}} onClick={() => setCount(count - 5 )}>-5</button>

        </div>

        <div style={{marginTop1:14, textAlign:"center"}}>
          <button style={{borderRadius:20, backgroundColor:"gray", col
            :"white", borderWidth:0,marginRight:10}} onClick={() => setCount(0 )}>reset count</button>
        </div>
        </div>
      </div>
      <Counter/>
    </div>
  );
}

export default App; 