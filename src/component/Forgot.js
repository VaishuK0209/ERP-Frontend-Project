import React, {useState} from 'react';

function Forgot({onBackToLogin}) {
    const [email,setEmail] = useState("");

    const handleReset = (e) => {
        e.preventDefault();
        alert(`Reset link sent to ${email}`);
    };

  return (
    <form onSubmit={handleReset} className='form' >
        <h2 className='login-title'>Forgot Password</h2>
        <input 
          type='email'
          placeholder='Enter your email'
          className='input-field'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit' className='login-btm'>
            Reset Password
        </button>
        <p>
            Remembered?{" "}
            <a href='#' onClick={onBackToLogin}
            >Login
            </a>
        </p>
    </form>
  )
}

export default Forgot