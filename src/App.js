import {React,useState} from 'react';
import Counter from './Counter';

function App() {
  const [num,onClick]=useState(0);
  return (
    <div>
      <Counter num={num} onClick={onClick}/>
    </div>
  );
}

export default App;
