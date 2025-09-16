import React,{useState} from 'react'

function Signup() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirm,setConfirm] = useState("");

    const handleSignup = (e) =>{
        e.preventDefault();
        if(password !== confirm){
            alert("Passwords do not match");
        }
        else{
            alert("Signup Successful!")
        }
    };
  return (
    <form onSubmit={handleSignup} className='form'>
        <h2 className='login-title'>Signup</h2>
        <input
          type='email'
          placeholder='Email'
          className='input-field'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type='password'
          placeholder='Password'
          className='input-field'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Confirm Password'
          className='input-field'
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <div className='signup-btn-container'>
          < button type='submit' className='login-btn'>
          Signup
        </button>
        </div>
        
    </form>
  );
}

export default Signup;