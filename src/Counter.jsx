import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    
    const handleIncrement=()=>{
        setCount(count=>count+1)
    }
    const handleDecrement=()=>{
        setCount(count=>count-1)
    }
  return (
    <div style={{marginLeft:'20px'}}>
        <p>Counter : {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter