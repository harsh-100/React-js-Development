import React,{useState} from 'react';
import './App.css';

function App() 
{
     const [Hori, setHori] = useState(10);
     const [Veri, setVeri] = useState(10);
     const [Blur, setBlur] = useState(10);
     const [Color, setColor] = useState("black");
     const [checkOn, setCheckOn] = useState(false);

     const [boxColor, setboxColor] = useState("indianRed");

  return ( 
     <div className="App">
      <div className="controls">
      <label for="hori" >Horizontal</label>
      <input name="hori" type="range"  min="-200" max="200" value={Hori} onChange={(e)=> setHori(e.target.value)}/>     
      <label >Vertical</label>
      <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=> setVeri(e.target.value)}/>
      <label >Blur</label>
      <input type="range"  min="0" max="200" value={Blur} onChange={(e)=> setBlur(e.target.value)}/>
      <label >Color</label>
      <input type="color" value={Color} onChange={(e)=> setColor(e.target.value)}/>
      </div>


      <div className="switch">
    <label>
      Outline
      <input type="checkbox" checked={checkOn} onChange={()=>setCheckOn(!checkOn)}/>
      <span className="lever"></span>
      Inset
    </label>
  </div>
  
      
      <div className="output">
        <div className="box" style={{ backgroundColor: `${boxColor}`, boxShadow:`${checkOn?"inset":""} ${Hori}px ${Veri}px ${Blur}px ${Color} `}}>
          <h3> Your input is :</h3>
          <p>Box-Shadow:{Hori}px {Veri}px {Blur}px {Color}</p>
        </div>
        <label >Set Box Color</label>
      <input type="color" value={boxColor} onChange={(e)=> setboxColor(e.target.value)}/>
        
  
        
        
      </div>
    </div>
  );
}

export default App;
