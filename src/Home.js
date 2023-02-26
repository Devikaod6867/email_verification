import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [user,loading,error] = useAuthState(auth)
    const navigate = useNavigate()
    return ( 
        
        <div>
            <h1>Home</h1>
            <h2>Welcome {user?.email}</h2>
            <button onClick={()=>{auth.signOut(); navigate('/')}}>Logout</button>
        </div>
     );
}
 
export default Home;