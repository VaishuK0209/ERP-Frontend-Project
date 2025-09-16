import React, {useState} from 'react';

import Login from "./component/Login";
import Signup from "./component/Signup";
import Forgot from "./component/Forgot";


export default function Authform() {
    const [currentForm, setCurrentForm] = useState("login");

    const showLogin = () => setCurrentForm("login");
    const showSignup = () => setCurrentForm("signup");
    const showForgot = () => setCurrentForm("forgotPassword");

  return (
    <div className='login-card'>
      <div className='form-toggle'>
        <button className={currentForm === "login" ? "toggle-btn active" : "toggle-btn"}
        onClick={showLogin} >
            login
        </button>
        <button className={currentForm === "signup" ? "toggle-btn active" :"toggle-btn"}
        onClick={showSignup}>
            Signup
        </button>
      </div>

      {currentForm === "login" && <Login onForgot={showForgot} />}
      {currentForm === "signup" && <Signup/>}
      {currentForm === "forgotPassword" && <Forgot onBackToLogin={showLogin}/>}
    </div>
  );
}

