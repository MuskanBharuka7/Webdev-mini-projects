import React from "react";
import Todo from './Components/Todo';

function App() {
  return (
    <div>
    <center><h1>My Todo(s)</h1></center>

    <div className="mainCard">
      <center>
      <Todo text='Learn React'/> 
      <Todo text='Learn OOPs'/>
      <Todo text='Read Think Like a monk'/>

      </center>
    </div></div>

  );
}

//tp.js- component -- card


export default App;