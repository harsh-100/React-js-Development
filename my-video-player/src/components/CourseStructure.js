import React,{useState} from 'react';

import '../App.css';
import {Link,useParams} from 'react-router-dom';   //i have used the 'useParams to get the URL as prop in react route dom'

function Course() {
  let {courseName } = useParams();
  const courses = {
    reactjs:[
      {title:"Reactjs Lecture 1",vid:"QFaFIcGhPoM"},
      {title:"Reactjs Lecture 2",vid:"9hb_0TZ_MVI"},
      {title:"Reactjs Lecture 3",vid:"9VIiLJL0H4Y"}
    ],
    nodejs:[
      {title:"Nodejs Lecture 1",vid:"YFmgNiimfyk"},
      {title:"Nodejs Lecture 2",vid:"eSh1FZDJEWU"},
      {title:"Nodejs Lecture 3",vid:"ALzoL4c4yGA"}
    ]
  }

  const [vid, setVid] = useState(courses[courseName][0].vid)
  const [title, setTitle] = useState(courses[courseName][0].title)
  const [counter, setCounter] = useState(0);
  const renderVideo = ()=>{
      return (
        <>
        <h4>{title}</h4>
        <div className="video-container">
        <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" ></iframe>
          
       </div>
       </>
      );
  };
   return (
    <div>
        <h1>
            Welcome to {courseName} Course
        </h1>
            {renderVideo()}
         <div class="collection">
            {/* <a href="#!" className="collection-item">Alvin</a>
            <a href="#!" className="collection-item ">Alvin</a>
            <a href="#!" className="collection-item">Alvin</a>
            <a href="#!" className="collection-item">Alvin</a> */}
          {
            courses[courseName].map((item,index)=>{
             return   <a href="#!" className={counter==index?"collection-item myItem ":"collection-item"} onClick={()=>
              {setVid(item.vid);
                setTitle(item.title);
                setCounter(index)
              }}>{item.title}</a>
            })
          }
        
        </div>
            
    </div>
  );
}

export default Course