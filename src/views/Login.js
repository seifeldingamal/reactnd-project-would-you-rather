import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import logo from '../img/redux-react.png'

class Login extends Component {

    state = {
        value: '',
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
        this.props.dispatch(setAuthedUser(e.target.value))
    }

    handleLogin = (e) => {
        e.preventDefault()

        const { location } = this.props

        const { state } = location

        if (this.state.value) {
            if (state)
                this.props.history.push(state.from.pathname)
            else
                this.props.history.push('/')
        } else {
            alert('Please Select a User!')
        }

    }
    
    render() {
        const { users} = this.props

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

function mapStateToProps ({ users }) {
    return {
      users,
    }
}

export default connect(mapStateToProps)(Login)
