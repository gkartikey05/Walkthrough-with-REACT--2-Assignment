import { useState } from 'react';
import './App.css';
import logo from "./assets/instagram.png"

function App() {
  const [login, setlogin] = useState(true)

  const loginSwitch = () => {
    setlogin(!login)
  }
  return (
    <div id='Container'>
      <div id="user">
        <img src={logo} alt="instagram logo" />
        <input hidden={login} type="text" placeholder='Phone number or Email' />
        <input hidden={login} type="text" placeholder='Full Name' />
        <input type="email" placeholder='Phone number, username, or email'/>
        <input type="password" placeholder='Password' />
        <input hidden={login} type="password" placeholder='Confirm Password' />
        <button>{login?"Log in":"Sign up"}</button>
        <div id="forgot">
          <a href="#" target="_blank" rel="noopener noreferrer">Forgot your password?</a>
        </div>
        <div id='footer'>
          {login?"Don't have an account?":"Have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
        </div>
      </div>  
    </div>
  );
}

export default App;