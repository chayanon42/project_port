import React from 'react'
import Navbar from '../components/Navber/Navbers'
import Footers from '../components/footer/Footers';
const SayHi=()=> {
    return (
        <div ><Navbar/>
           <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}> SAY HI PAGE</h1> 
            <Footers />
        </div>
    )
}

export default SayHi
