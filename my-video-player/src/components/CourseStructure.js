import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import '../App.css';
import {Link,useParams} from 'react-router-dom';   //i have used the 'useParams to get the URL as prop in react route dom'
import API_KEY from './api_key.js'



function Course() {
  let {courseName } = useParams();
  const [courses,setCourses]= useState([]);
  const getCourse = ()=>{
    let playlistid = ""

    if(courseName == "reactjs"){
      playlistid = "PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
    }
    else{
      playlistid = "PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"
    }
   
    Axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=${playlistid}&key=${API_KEY}`)
    .then((response)=>{
         const results = response.data.items.map(item=>{
         return {
           title:item.snippet.title,
           vid : item.contentDetails.videoId
        }       
       })
       setCourses(results)
       setVid(courses[0].vid)
       setTitle(courses[0].title)
    })
  }

  useEffect(() => {
    getCourse()
   
  }, []);


  const [vid, setVid] = useState("")
  const [title, setTitle] = useState("")
  const [counter, setCounter] = useState(0);
  const renderVideo = ()=>{
      return (
        <>
       
        <div className="video-container">
        <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" ></iframe>
          
       </div>
       </>
      );
  };
   return (
     <>
     {courses.length > 0?<div>
              <h1>
                  Welcome to {courseName} Course
              </h1>
                  {renderVideo()}
              <div class="collection">
                  
                {
                  courses.map((item,index)=>{
                  return   <a href="#!" className={counter==index?"collection-item myItem ":"collection-item"} onClick={()=>
                    {setVid(item.vid);
                      setTitle(item.title);
                      setCounter(index)
                    }}>{item.title}</a>
                  })
                }
              
              </div>
                  
          </div>
          :
          <h1>loading..</h1>}
          
    </>
  );
}

export default Course