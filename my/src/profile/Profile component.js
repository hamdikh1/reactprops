import React from 'react'


const Greeting =({fullName,bio, profession}) => {

const handelName  =()=>{
        alert(`hello Mr ${fullName}`)
    }



return <>
    <h1>hello <span style = {{color : "blue"}}> {fullName}</span> my bio is <span style = {{color : "red"}}> {bio}</span> and i m {profession} </h1>
    <button onClick={()=> handelName ()}>click here</button>
    
    </>
}

profile.defaultProps ={
    fullName : "sarah clair",
    bio : "Student",
  }
 
export default Greeting

Greeting.prototype ={
    fullName:prototype.string,
    handelName:prototype.func
        
  
}