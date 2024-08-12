import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count,setCount] = useState(0)
  const [count2,setCount2]= useState(0)
  // First types of useEffect

//   useEffect(()=>{
//     console.log("hello world")
//   },[])

// second types of useEffect
//   useEffect(()=>{
//     console.log("Second types of useEffect")
//   },[count,count2])
// useEffect(()=>{
//     console.log("third type of useEffect")
// })
  return (
   <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <h1>{count2}</h1>
    <button onClick={()=>setCount2(count2-1)}>-</button>

   </div>
  )
}

export default UseEffect