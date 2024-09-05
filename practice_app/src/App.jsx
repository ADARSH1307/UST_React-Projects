import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="header">
       <h3 className="brand">Brandname</h3>
      <nav>
        <ul  className="navbar">
          <li className="nav-items">Home</li>
          <li className="nav-items">Products</li>
          <li className="nav-items">Pricing</li>
          <li className="nav-items">Contact us</li>
        </ul>
      </nav>
      <button className="button">Login</button>
      <button className="button1">Join us</button>
      </div>
      <div>

        
      </div>

      </>
  )
}

export default App
