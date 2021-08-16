import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HomeQuestion extends Component {
    render() {

        const { question, author } = this.props
        const { optionOne, id } = question
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
                            <p>{optionOne.text}</p>
                        </div>
                        <div>
                            <Link to={`/questions/${id}`}>
                                <button className='button'>View Poll</button>
                            </Link>
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

export default connect(mapStateToProps)(HomeQuestion)
