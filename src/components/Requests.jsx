import React, { useEffect } from 'react'
import axios from 'axios'
import { baseURL } from '../utils/constent'
import { useDispatch } from 'react-redux'
import { addRequest } from '../utils/requestSlice'
import { useSelector } from 'react-redux'

const Requests = () => {
    const request = useSelector((state)=>state.request)
    const dispatch = useDispatch()
    const fetchRequest = async()=>{
    try {
        const response = await axios.get(baseURL+"/user/requests/received", {
                withCredentials: true
            })
       
        dispatch(addRequest(response?.data.data))
    } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchRequest()
    },[])
 if(!request) return;
    if(request.length ===0) return <h1>No Request</h1>
    
    return (
    <div className='  text-center my-30'> 
        <h1 className='text-bold  text-4xl my-5'>Request</h1>
    
    
        {request.map((request)=>{
            const { _id, firstName, lastName, about, photoUrl} = request.fromUserId;
            return(
                <div key={_id} className='flex item-center justify-center m-auto p-4 border-2 rounded-lg w-1/2'>
                    <div>  
                        <img className="w-20 h-20 rounded-full" src={photoUrl} alt="userPhoto" />
                    </div>
                    <div className='text-left mx-4'> 
                     <h1 className='font-bold uppercase'>{firstName} {lastName}</h1>
                   
                        <p>{about}</p>
                    </div>
                   
           <div className='flex justify-center align-center '>
            <button className="btn btn-info mr-2">Reject</button>
            <button className="btn btn-success">Accept</button></div>
          
             </div>
        )})}
    
    </div>

  )
}

export default Requests