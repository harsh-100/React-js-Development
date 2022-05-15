import React,{useState,useEffect} from 'react';

import './App.css';

function App() {

  //To make the state same afer refreshing the page 
  //I have used the useEffect hook for this 
  const getMode = ()=>{

   const initialMode= localStorage.getItem("mode");
   if(initialMode==null){
     if(window.matchMedia("(prefers-color-scheme:dark)").matches){
       return true
     }
     else{
       return false
     }
   }
   else{
     return JSON.parse(initialMode);
   }
  }
  const [dark, setdark] = useState(getMode());
 
 useEffect(()=>{
   localStorage.setItem("mode",JSON.stringify(dark))
 
 },[dark])
 
  
  return (
    <div className={dark?"App dark-mode":"App"}>
      <div className="nav">
            <label className="switch">
            <input 
            type="checkbox"
            checked = {dark}
            onChange = {()=>setdark(!dark)}
            />
            <span className="slider round"></span>
          </label>
      </div>
      <div className="content">
      <h1>{dark?"Dark Mode":"Light Mode"} </h1>
      <p style={{fontSize: "25px"}}>want to see the magic ? Toggle to Dark Mode</p>
      </div>
      
      
    
    </div>
  );
}

export default App;
