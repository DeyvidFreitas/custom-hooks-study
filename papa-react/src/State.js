import React, {useState} from "react";
import App from "./App";
import { useState } from "react";

function App (){
   const [count, setCount] = useState(0);



    const increment = () =>{
        count += 1; // Errado
      
       setCount(count + 1) //Certo 

    };


    const decrement = () => {
        count -= 1; //Errado

      setCount(count - 1)  //Certo
    }

    return (
      <div>
          <h1>Olá marilene</h1>
          <p>Calcule: {count}</p>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
      </div>  
    );

}

export default App;