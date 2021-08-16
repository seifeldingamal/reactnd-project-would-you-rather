import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'
import NotFound from '../views/NotFound'

class Question extends Component {

    state={
        selected: ''
    }

    handleChangeValue = (e) => {
        this.setState({
            selected: e.target.value
        })
    }

    handeSubmit = (e) => {
        e.preventDefault()

        const { dispatch, id } = this.props
        const { selected } = this.state

        if (selected !== '') {
            dispatch(handleSaveAnswer(id, selected))
        } else {
            alert('Select an Answer!')
        }
    }

    render() {
        const { question, author } = this.props

        if (!question) {
            return <NotFound />;
        }

        const { optionOne, optionTwo} = question
        const { name, avatarURL } = author
        
        return (
            <div className='home-question'>
                <div className='card-header'>
                    <h4>{name} asks:</h4>
                </div>
                <div className='card-main'>
                    <div className='avatar'>
                        <img src={avatarURL} alt=''/> 
                    </div>
                    <div className='text'>
                        <div>
                            <h4>Would you rather</h4>
                            <div className='radio' onChange={this.handleChangeValue}>
                                <label><input type='radio' value='optionOne' name='question'/> {optionOne.text}</label>
                                <label><input type='radio' value='optionTwo' name='question'/> {optionTwo.text}</label>
                            </div>
                            <button onClick={this.handeSubmit} className='button'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users, questions }, { id }) {
    const question = questions[id]

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null,
    }
}

export default connect(mapStateToProps)(Question)
