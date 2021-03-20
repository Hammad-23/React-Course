import React, { useState } from 'react'
import Button from '../../components/button'



function SignUp(props){
    console.log(props)
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const email=(e)=>{
      const inp=e.target.value
     
      setUser(inp)
    }

    const password=(e)=>{
        const inp=e.target.value
        
        setPass(inp)
    }

    const register=()=>{
        console.log(user)
        console.log(pass)
        localStorage.setItem("userName",user)
        localStorage.setItem("password",pass)
        props.setSignup(false)
        props.setLogin(true)

    }

    return(

        <div>

            <h1>Sign Up</h1>

            <input onChange={email} placeholder='Enter Email' />
            <input onChange={password} placeholder='Enter Password' type='password' />
            <Button onClick={register} text='Sign Up'/>


        </div>

    )
}
export default SignUp;