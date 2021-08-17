import React from 'react'
import { connect } from 'react-redux'
import Leader from '../components/Leader'

const LeaderBoard = (props) => {
    const { top } = props
    return (
        <div className='component'>
            {
                top.map((id) => (
                    <Leader key={id} id={id}/>
                ))
            }
        </div>
    )
}

function mapStateToProps ({ authedUser, users }) {

    const top = Object.keys(users).sort((a,b) => 
        (Object.keys(users[b].answers).length + Object.keys(users[b].questions).length) 
        - 
        (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length)
    )

    return {
      authedUser,
      top
    }
}

export default connect(mapStateToProps)(LeaderBoard)
