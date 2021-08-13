import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
          <ul>
              <li>
                  <NavLink to='/' exact activeClassName='active'>
                      Home
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/new' activeClassName='active'>
                      New Question
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/leader' exact activeClassName='active'>
                      Leader Board
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/login' exact activeClassName='active'>
                      Logout
                  </NavLink>
              </li>
          </ul>
      </div>
    )
}

export default Nav
