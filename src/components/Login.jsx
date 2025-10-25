import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '../utils/constent'
const Login = () => {
  const [emailId, setEmailId] = useState("deepak@gmail.com");
  const [password, setPassword] = useState("Testing@2025");
  const [error,setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const clickHandler= async()=>{
    try{
    const response = await axios.post(baseURL+"/login", {
                  emailId,
                  password
              },
              {withCredentials: true} )
 
              dispatch(addUser(response.data))
              navigate("/feed")
    }
    catch(error){
        console.log(error)
        setError(error.response.data || "Something went wrong")
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
        <p className="text-red-500">{error}</p>
      </fieldset>
    </div>
   
  
  )
 
}

export default Login