import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import '../App.css';
import {Link,useParams} from 'react-router-dom';   //i have used the 'useParams to get the URL as prop in react route dom'
//https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails%2Csnippet&id=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&maxResults=15&key=AIzaSyBMMIWS3LM_0wsHepwHl1rfjRrZvnZ0cuc
//https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&key=[YOUR_API_KEY]
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
    Axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=${playlistid}&key=AIzaSyBMMIWS3LM_0wsHepwHl1rfjRrZvnZ0cuc`)
    .then((response)=>{
      console.log(response.data.items)
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

  // const courses = {
  //   reactjs:[
  //     {title:"Reactjs Lecture 1",vid:"QFaFIcGhPoM"},
  //     {title:"Reactjs Lecture 2",vid:"9hb_0TZ_MVI"},
  //     {title:"Reactjs Lecture 3",vid:"9VIiLJL0H4Y"}
  //   ],
  //   nodejs:[
  //     {title:"Nodejs Lecture 1",vid:"YFmgNiimfyk"},
  //     {title:"Nodejs Lecture 2",vid:"eSh1FZDJEWU"},
  //     {title:"Nodejs Lecture 3",vid:"ALzoL4c4yGA"}
  //   ]
  // }

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
                  {/* <a href="#!" className="collection-item">Alvin</a>
                  <a href="#!" className="collection-item ">Alvin</a>
                  <a href="#!" className="collection-item">Alvin</a>
                  <a href="#!" className="collection-item">Alvin</a> */}
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