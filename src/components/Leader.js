import React from 'react'
import { connect } from 'react-redux'

const Leader = (props) => {

    const { user } = props
    const { name, avatarURL, answers, questions } = user
    const aCount = Object.keys(answers).length
    const qCount = Object.keys(questions).length
    const total = qCount + aCount

    return (
        <div className='leader-card'>
            <div className='card-main'>
                <div className='avatar'>
                    <img src={avatarURL} alt=''/> 
                </div>
                <div className='text'>
                    <h3>{name}</h3>
                    <p>Answered Questions: {aCount}</p>
                    <p>Created Questions: {qCount}</p>
                </div>
                <div className='score'>
                    <div className='score-value'>
                        <h5>Score</h5>
                        <p>{total}</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

function mapStateToProps ({ users }, { id }) {

    const user = users[id]

    return {
      user
    }
}

export default connect(mapStateToProps)(Leader)
