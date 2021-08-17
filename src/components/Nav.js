import React from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { unSetAuthedUser } from '../actions/authedUser'

const Nav = (props) => {
    const { user, dispatch } = props

    const history = useHistory()
    const unSetAuthed = () => {
        dispatch(unSetAuthedUser())
        history.push('/')
    }

    return (
        <div className='nav'>
        <ul>
            <li>
                <NavLink to='/home' activeClassName='active'>
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
            {
                user
                ?
                <li>
                    <div className='nav-avatar'>
                        <img src={user.avatarURL} alt=''/>
                    </div>
                    <p>{user.name},&nbsp;</p>
                    <NavLink onClick={unSetAuthed} to='/' exact activeClassName='active'>
                        Logout
                    </NavLink>
                </li>
                :
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Login
                    </NavLink>
                </li>
            }
        </ul>
    </div>
    )
}


function mapStateToProps ({ authedUser, users }) {
    if (users) {
        return {
            user: authedUser ? users[authedUser] : null
        }
    }
    else return null
}

export default connect(mapStateToProps)(Nav)
