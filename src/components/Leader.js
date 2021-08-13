import React from 'react'
import avatar from '../img/avatar1.png'

const Leader = () => {
    return (
        <div className='leader-card'>
            <div className='card-main'>
                <div className='avatar'>
                    <img src={avatar} alt=''/> 
                </div>
                <div className='text'>
                    <h3>User Last</h3>
                    <p>Answered Questions</p>
                    <p>Created Questions</p>
                </div>
                <div className='score'>
                    <div className='score-value'>
                        <h5>Score</h5>
                        <p>15</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Leader
