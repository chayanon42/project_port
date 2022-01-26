import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { AuthContext } from '../components/Auth/Auth'

import Navbar from '../components/Navber/Navbers'
const Home = () => {
    // const { currentUser } = useContext(AuthContext);

    return (
        <>
      <Navbar/>
            <div >
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}> HOME PAGE </h1>
                
            </div>
            
        </>
    )
}

export default Home;



