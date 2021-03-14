
import React, {useState} from 'react'



function Class2() {
  const [hide,setHide]=useState(false)
  const [user,setUser]=useState('')
  const val=(e)=>{
    const inp=e.target.value
    console.log(inp) 
    setUser(inp)

  }

  const submit=()=>{
    console.log("state-->"+user)
    localStorage.setItem("userName",user)
  }

  const getName=localStorage.getItem("userName")
  
  const show=()=>{
    
   console.log("show-->"+getName)
   setHide(true)

  }

  
  return (
    <div>
    <h1>Hello</h1>
    <input onChange={val} />
    <button onClick={submit} >Submit</button>
    <button onClick={show} >Show</button>
  
     { hide ?  <p>{getName}</p> : "" }
   
    </div>
    


  );
}


export default Class2;