import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotFound from '../views/NotFound';

class Answered extends Component {

    render() {

        const { question, author, authedUser} = this.props

        if (!question) {
            return <NotFound />;
        }

        const { optionOne, optionTwo} = question
        const { name, avatarURL } = author
        const total = optionOne.votes.length + optionTwo.votes.length

        const one = optionOne.votes.includes(authedUser) ? true : false
        const two = optionTwo.votes.includes(authedUser) ? true : false

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
                        <div className='poll'>
                            <h4>Would you rather</h4>
                            <p>{optionOne.text}</p>
                            <p>{Math.round((optionOne.votes.length/total)*100)}% of People Voted for that Option</p>
                            <div className={`meter ${one ? 'answer' : ''}`}>
                                <span style={{width: `${(optionOne.votes.length/total)*100}%`}}>{optionOne.votes.length > 0 ? optionOne.votes.length : ''}</span>
                            </div>
                            <br/>
                            <p>{optionTwo.text}</p>
                            <p>{Math.round((optionTwo.votes.length/total)*100)}% of People Voted for that Option</p>
                            <div className={`meter ${two ? 'answer' : ''}`}>
                                <span style={{width: `${(optionTwo.votes.length/total)*100}%`}}>{optionTwo.votes.length > 0 ? optionTwo.votes.length : ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users, questions, authedUser }, { id }) {
    const question = questions[id]

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null,
        authedUser
    }
}

export default connect(mapStateToProps)(Answered)
