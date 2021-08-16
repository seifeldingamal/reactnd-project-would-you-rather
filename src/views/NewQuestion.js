import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    render() {
        if (this.props.authedUser === null) {
            return <Redirect to='/login'/>
        }
        return (
            <div className='component'>
                <div className='new-q'>
                    <div className='header'>
                        <h2>Create New Question</h2>
                    </div>
                    <div className='main'>
                        <div className='text'>
                            <h6>Complete the question</h6>
                            <h4>Would you rather ...</h4>
                        </div>
                        <input type='text' placeholder='Enter option one text here'/>
                        <h3>OR</h3>
                        <input type='text' placeholder='Enter option two text here'/>
                        <br/>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
      authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)
