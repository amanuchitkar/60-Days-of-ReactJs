import React from 'react'
import Loaderx from './loader.gif';

export default function Loader(){
  
    return (
      <div>
        <img style={{width:"5rem",height:"5rem", display:"block", margin:"auto"}} src={Loaderx} alt="loading"/>
        
      </div>
    )
}
