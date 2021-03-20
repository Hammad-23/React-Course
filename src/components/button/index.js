import React from 'react'

function Button(prop){
    return(
        <div>
      
        <button onClick={prop.onClick} >{prop.text}</button>


        </div>

    )
}

export default Button;