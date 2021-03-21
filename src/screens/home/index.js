import React, { useState } from 'react'
import './style.css'

function Home(){
      const [text,setText]=useState('')
      const [list,setList]=useState([])
      
    //   const [newlist,setNewlist]=useState('')
    const val=(e)=>{
     const inp =e.target.value
     setText(inp)
    }
    const addItem=()=>{
        
        const newlist= [...list]
        console.log(newlist)
        newlist.push(text)
        setList(newlist)
        setText('')

    }
    return(
        <div>
            
          <h1>Todolist</h1>
          <input onChange={val} value={text} id='inp'  />
          <button onClick={addItem}>Add</button>
          {
              list.map((item)=>{
                return(
                    <li>{item}</li> 
                )
              })
          }

         
        </div>
    )
}

export default Home