import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        one: '',
        two: '',
        toHome: false,
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            ...this.state,
            [name]: value,
        })
    }

    handleSubmit = () => {
        const { dispatch, authedUser } = this.props
        const { one, two } = this.state

        if (one.length >= 5 && two.length >= 5) {
            dispatch(handleSaveQuestion({
                optionOneText: one, 
                optionTwoText: two, 
                author: authedUser
            }))

            this.setState({
                one: '',
                two: '',
                toHome: true,
            })
        } else 
            alert('Answers are too short!')
    }

    render() {
        if (this.props.authedUser === null) {
            return <Redirect to='/'/>
        }
        
        const { one, two, toHome } = this.state

        if (toHome === true || this.props.authedUser === null) {
            return (
                <Redirect to='/home'/>
            )
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
                        <input 
                            type='text' 
                            name='one'
                            value={one} 
                            onChange={this.handleChange} 
                            placeholder='Enter option one text here'
                        />
                        <h3>OR</h3>
                        <input 
                            type='text' 
                            name='two'
                            value={two} 
                            onChange={this.handleChange} 
                            placeholder='Enter option two text here'
                        />
                        <br/>
                        <button onClick={this.handleSubmit} type='submit'>Submit</button>
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
