import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './utils/userSlice'


const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const clickHandler= async()=>{
    try{
    const response = await axios.post("http://localhost:3000/login", {
                  emailId,
                  password
              },
              {withCredentials: true} )
    dispatch(addUser(response.data))
    }
    catch(error){
        console.log(error)
      }
    
}
  return (
    <div className='flex justify-center items-center my-30'>
      
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4" onClick={clickHandler}>Login</button>
      </fieldset>
    </div>
   
  
  )
 
}

export default Login