import React from 'react'
import logo from '../img/redux-react.png'

const Login = () => {
    return (
        <div className='container'>
            <div className='component'>
                <div className='header'>
                    <h2>Welcome to the Would You Rather App!</h2>
                    <span>Please sign in to continue</span>
                </div>
                <div className='main'>
                    <img src={logo} alt=''/>
                    <h3>Sign in</h3>
                    <select name="users" id="users">
                        <option value="user1">user1</option>
                        <option value="user2">user2</option>
                        <option value="user3">user3</option>
                    </select>
                    <br/>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Login
