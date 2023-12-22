import React from 'react'
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <header className='bg-red-800 p-4'>
        <a href="/" className='mx-auto bg-black'>
            <img src={logo}/>
        </a>
    </header>
  )
}

export default NavBar