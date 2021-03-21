import React from 'react'

function Button(prop){
    console.log(prop)
    return(
        <div>
      
        <button onClick={prop.onClick} >{prop.text}</button>


        </div>

    )
}

export default Button;