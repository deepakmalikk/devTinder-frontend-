import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../utils/constent'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'

const NavBar = () => {
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(user)
    const handleLogout = async() => {
        try {
          const response = await axios.post(baseURL+"/logout",
            {}, 
            {withCredentials: true}); 
          console.log(response)
          dispatch(removeUser())
          navigate("/login")
        } catch (error) {
          console.log(error)
        }
    }
    return (
     <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">devTinder</Link>
        </div>
       
         
          {user && (
           <div className="flex gap-2">
            <p className="text-xl flex items-center">Welcome, {user.firstName}</p>
          <div className="dropdown dropdown-end mx-10 flex">
            
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
            
              <div className="w-10 rounded-full">
                <img
                  alt="user Photo"
                  src={user.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        )}
      </div>

     </div>
  )
}

export default NavBar;