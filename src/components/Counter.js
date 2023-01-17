import React, { useState } from "react";

const Counter =()=>{
    
    const [number, setNumber] = useState(0);

    const up =()=>{
        setNumber(prevNumber => prevNumber + 1);
    }
    const down=()=>{
        setNumber(prevNumber => prevNumber - 1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={up}>+1</button>
            <button onClick={down}>-1</button>
        </div>
    )
}

export default Counter;