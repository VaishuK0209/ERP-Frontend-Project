import React, { useState } from "react";

export default function Loginsignupform() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword , setIsForgotPassword]=useState(false);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isForgotPassword ? (
            <div className="form">
                  <h2>Forgot password</h2>
                   <input type='email' placeholder="Enter your email"/>
                    <button>Reset Password</button>
                    <p>Remember your password?{" "}
                           <a href='#' onClick={()=>setIsForgotPassword(false)}>Login</a>
                            </p>
                  </div>
         ) : isLogin ? <>
        <div className='form'>
           <h2>Login Form</h2>
           <input type="email" placeholder="Email" />
           <input type="password" placeholder="Password" />
           <a href="#" onClick={()=>setIsForgotPassword(true)}>Forgot Password</a>
           <button>Login</button>
           <p>Not a user? <a href="#" onClick={()=>setIsLogin(false)}>Signup now</a></p>
        </div>
        </> : (<>
          <div className="form">
            <h2>Signup Form</h2>
           <input type="email" placeholder="Email" />
           <input type="password" placeholder="Password" />
           <input type="password" placeholder="Confirm Password" />
           <button>Signup</button>
          </div>
        </>)}
      </div>
    </div>
  );
}
