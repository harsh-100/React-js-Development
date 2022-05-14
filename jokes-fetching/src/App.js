import React,{useState,useEffect} from 'react';
import Axios from 'axios';


import './App.css';
//using the AXIOS for fetching the data from the API 
function App() {
  const [joke,setJoke]=useState("loading a new Joke 😀")
  const [error, seterror] = useState(null);
  const [fName, setfName] = useState("Chuck");
  const [lName, setlName] = useState("Norris");

  const getJoke=()=>{
    Axios.get(`https://api.icndb.com/jokes/random?firstName=${fName}&lastName=${lName}`)
    .then((response)=>{
     setJoke("👉"+response.data.value.joke)
     })
     .catch((err) =>{
       console.log("Error fetching data: ",err);
       seterror(err)
     })
  }

  useEffect(()=>{
    getJoke()
  },[fName,lName])

  return (
    <div className="App">
      <h1>Jokes Fetching Web App </h1>
      <h3>Have a joke For your friend </h3>
      <input type="text" placeholder="First Name" onChange={(e)=>setfName(e.target.value)}/>
      <input type="text" placeholder="Second Name"onChange={(e)=>setlName(e.target.value)}/>
      <button onClick = {getJoke}>New 🤣</button>
      <p style={{fontSize:"20px"}}>  {joke} </p>
     
    </div>
  );
}

export default App;
