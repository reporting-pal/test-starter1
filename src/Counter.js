import {React,useState} from 'react';


function Counter(props) {
  
  return (
    <div>
      <p>{props.num}</p>
      <button onClick={()=>props.onClick(props.num+1)}>Suma</button>
    </div>
  );
}

export default Counter;
