import { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState("black");

  const increase = () => {
    setTextColor("#03C988");
    setCount(count+1);
  }

  const decrease = () => {
    setTextColor("#D61355");
    setCount(count-1);
  }

  const setToZero = () => {
    setTextColor("black");
    setCount(0);
  }

  return (
    <div className="App">
      <h1 style={{color:textColor}}>{count}</h1>
      <div className='buttons'>
        <button className='increase' onClick={increase}>Increase</button>
        <button className='decrease' onClick={decrease}>Decrease</button>
        <button className='zero' onClick={setToZero}>Set To Zero</button>    
      </div>
      
    </div>
  );
}

export default App;
