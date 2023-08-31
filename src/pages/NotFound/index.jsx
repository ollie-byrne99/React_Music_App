import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()
    
  return (
    <>
    <h1>Page <span style={{ color: "firebrick" }}>{location.pathname}</span> not found
      </h1>
    <Link to='/' style={{ color: "firebrick", fontWeight: "bold "}}>Home page &rarr;</Link>
    </>
  )
}

export default NotFound
