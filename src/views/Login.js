import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import logo from '../img/redux-react.png'

class Login extends Component {

    state = {
        value: 'notselected',
        toHome: false,
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState(() => ({
            value,
        }))
    }

    handleLogin = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        const { value } = this.state

        if (value !== 'notselected') {
            dispatch(setAuthedUser(value))

            this.setState(() => ({
                value: 'notselected',
                toHome: value !== 'notselected' ? true : false
            }))
        } else {
            alert('Please Select a User!')
        }

    }
    
    render() {
        const { users } = this.props
        const { toHome } = this.state

        if (toHome === true || this.props.authedUser !== null) {
            return (
                <Redirect to='/home'/>
            )
        }

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
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option>Select a User</option>
                            {Object.keys(users).map((key) => (
                                <option key={users[key].id} value={users[key].id}>{users[key].name}</option>
                            ))}
                        </select>
                        <br/>
                        <button onClick={this.handleLogin}>Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
    return {
      users,
      authedUser
    }
}

export default connect(mapStateToProps)(Login)
