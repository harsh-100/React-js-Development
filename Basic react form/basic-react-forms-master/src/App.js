import React,{useState} from "react";
import "./index.css";

export default function App() {

  const[values,setValues] =  useState({
    firstName :"",
    lastName:"",
    email:""
  });

  const[submit,setSubmit] = useState(false);
  const [valid,setValid] = useState(false);
  const handleFirstName = function(event){
    setValues({...values,firstName:event.target.value})
  }
  const handleLastName = function(event){
    setValues({...values,lastName:event.target.value})
  }

  const handleEmail = function(event){
    setValues({...values,email:event.target.value})
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    if(values.firstName&&values.lastName&&values.email){
      setValid(true);
    }
    setSubmit(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
       {submit && valid ?<div class="success-message">Success! Thank you for registering</div>:null} 
        <input
          onChange={handleFirstName}
          value = {values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          />
         {submit && !values.firstName? <span>Please Enter the first Name 🤐 </span>:null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleLastName}
          value = {values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         {submit && !values.lastName ?<span>Please Enter the last name 🙄  </span>:null} 
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmail}
          value = {values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submit && !values.email ?<span>Please Enter your Email 🙏!  </span> : null}  
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
