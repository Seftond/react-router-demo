import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <Link to='/Contact'>Contact</Link>
        <Link to='/About'>About</Link>
    </>
  )
}

export default Header