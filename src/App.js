import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Class2 from './classes/class2'
import Button from './components/button'
import Home from './screens/home'
import SignUp from './screens/signup'
import LogIn from './screens/login'



function App() {

  const [signup,setSignup]=useState(true)
  const [login,setLogin]=useState(false)
 

  
  return (
    <div>
      
        <Home/>
     {/* 
     <Button text='Submit'/> */}

      {/* <Class2/> */}

     {/* { signup ? <SignUp setSignup={setSignup} setLogin={setLogin} /> : "" }
      { login ? <LogIn/> : "" } */}
      

      {/* <Button text='add'/> */}
   
    </div>
    


  );
}


export default App;
