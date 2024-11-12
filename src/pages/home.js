import React from 'react'
import { Link } from 'react-router-dom' 


export default function home() {
  return (
    <div>
   
        <p className='text-blue'>wellcome to home </p>
          <Link to="/signup">go to signup</Link>
          <br></br>
          <Link to ="signin">go to signin</Link>
       
    </div>
  )
}
