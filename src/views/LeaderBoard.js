import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Leader from '../components/Leader'

class LeaderBoard extends Component {
    render() {
        if (this.props.authedUser === null) {
            return <Redirect to='/login'/>
        }
        return (
            <div className='component'>
                <Leader />
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
      authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)
