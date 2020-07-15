import React from 'react';
import './App.css';
import hello from "./video.mp4"
import hiii from "./image.jpg"
import './style.css';


function app() {
  return (

    <div className="app">
    <h1  className=" title">Your name here</h1>

    <br />
    <img src="res/user.png" className="user" />
    <br />

    <video className=" video "  >
      <source src={hello} type="video/mp4"></source>
    </video>
    <br />

    
    
    <img className=" image "  src={hiii} >
    </img>




    </div>
  
  );
}

export default app