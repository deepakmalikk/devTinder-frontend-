
import axios from 'axios'
import { baseURL } from '../utils/constent'
import { addConnections } from '../utils/connectionSlice';
import { useDispatch } from 'react-redux';
import  { useEffect }  from 'react'
import { useSelector } from 'react-redux'
const Connection = () => {
    

    const connections = useSelector((state)=>state.connection)
   
   const dispatch = useDispatch();
    const fetchConnection = async()=>{
        try{
            const response = await axios.get(baseURL+"/user/connections", {
                withCredentials: true
            })
        
            dispatch(addConnections(response?.data.data))
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchConnection()
    },[])
    if(!connections) return;
    if(connections.length ===0) return <h1>No connections</h1>
    
    return (
    <div className='  text-center my-30'> 
        <h1 className='text-bold  text-4xl '>Connection</h1>
    
    
        {connections.map((connection)=>{
            const {firstName, lastName, about, photoUrl} = connection
            return(
                <div className='flex  m-auto p-4 border-2 rounded-lg w-1/2'>
                    <div>  
                        <img className="w-20 h-20 rounded-full" src={photoUrl} alt="userPhoto" />
                    </div>
                    <div className='text-left mx-4'> 
                     <h1 className='font-bold uppercase'>{firstName} {lastName}</h1>
                   
                        <p>{about}</p>
                    </div>
                   
           
          
             </div>
        )})}
    
    </div>

  )
}

export default Connection