import './App.css';
import React,{useState} from 'react';
function App() {
  const [count,setCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header" >
        <h1>Counter App</h1>
      </header>
    <h2>Value : {count}</h2>
    <button onClick={()=> setCount(0)}>Reset</button>
    <button onClick={()=> count>=15 ?"":setCount(count+1)}> Increment</button>
    <button onClick={()=> count<=0 ?"":setCount(count-1)}> Decrement</button>

    </div>
  );
}

export default App;
