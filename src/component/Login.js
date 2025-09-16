import React, {useState} from 'react';

function Login({onForgot}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginError , setLoginError] = useState("");
    

    const handleLogin = (e) => {
        e.preventDefault();
        if(email === "admin@test.com" && password === "1234"){
            alert("Login Successful!");
            setLoginError("");
       }else {
            setLoginError("Wrong email or password.");
        }
    };
  return (
    <form onSubmit={handleLogin} className={"form"}>
        <h2 className='login-title'>Login</h2>
        <input
          type='email'
          placeholder='Email'
          value={email}
          className='input-field'
          onChange={(e) => setEmail(e.target.value)}
          required        
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          className='input-field'
          onChange={(e) => setPassword(e.target.value)}
          required        
        />
        
        {loginError && <p className='error-message'>{loginError}</p>}
        
        <div className='login-actions'>
          <a href='#' onClick={onForgot} className='forgot-link'>Forgot Password?</a>
          <div className='login-btn-container'>
            <button type='submit' className='login-btn'>
            Login
            </button>
          </div>
        
        </div>
        
    </form>
  );
}


export default Login;