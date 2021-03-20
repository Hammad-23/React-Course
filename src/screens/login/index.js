import React, { useState } from 'react'
import Button from '../../components/button'



function LogIn(){
    const [useremail,setUseremail]=useState("")
    const [pass,setPass]=useState("")
    const email=(e)=>{
      const inp=e.target.value
      setUseremail(inp)
    }
    const password=(e)=>{
        const inp=e.target.value
        setPass(inp)
        
    
    }

    const login=()=>{
      let registerEmail=localStorage.getItem("userName")
       let registerPass=localStorage.getItem("password")
       if(useremail===registerEmail&&pass===registerPass){
           alert("login Successfully")
       }else{
           alert("Incorrcet")
       }

    }
    return(

        <div>
         
         <h1>Log In</h1>

            <input onChange={email} placeholder='Enter Email' />
            <input onChange={password} placeholder='Enter Password' type='password' />
            <Button  onClick={login} text='Log In'/>

        </div>

    )
}
export default LogIn;