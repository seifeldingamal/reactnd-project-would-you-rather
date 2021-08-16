import React from 'react'
import { connect } from 'react-redux'
import Answered from '../components/Answered'
import Question from '../components/Question'
import NotFound from './NotFound'

const QuestionPage = (props) => {

    const { user } = props 

    if (!user) {
        return <NotFound />;
    }

    const answers = user.answers
    const { id } = props.match.params
    const bool = answers.hasOwnProperty(id) ? true : false

    return (
        <div className='component'>
            {
                bool 
                ? <Answered id={id} />
                : <Question id={id} />
        }
        </div>
    )
}

function mapStateToProps ({ authedUser, users }) {

    const user = users[authedUser]

    return {
        user
    }
}

export default connect(mapStateToProps)(QuestionPage)
