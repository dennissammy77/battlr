import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <NavLink to={'/'}>
        <h1>Bot Battlr</h1>
      </NavLink>
      <div>
        <NavLink to={'/'}>Bots</NavLink>
        <NavLink to={'/myarmy'}>My army</NavLink>
      </div>
    </div>
  )
}

export default Header
