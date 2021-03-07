import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const arr=["hammad","usama","ammar","arif"]
  const [list,setList]=useState([])
  const [person,setPerson]=useState('')
  const [text,setText]=useState()
 const inp=function(e){
   const name=e.target.value
  
   setPerson(name)
   
 }
 const add=function(){
 const newList=[...list]
 newList.push(person)
 setList(newList)
 
 }
 
  return (
   <div>

      <h1 style={{color:'red'}}>Hello</h1>
      <input value={text} onChange={inp} style={{height:'30px',}}/>
      <button onClick={add} >
           add
      </button>

      <ul>
        {
          list.map(function(item){
             return(
               <li>{item}</li>
             )
          })
        }
      </ul>


   </div>
  );
}


export default App;
