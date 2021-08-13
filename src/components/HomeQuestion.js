import React from 'react'
import avatar from '../img/avatar1.png'

const HomeQuestion = () => {
    return (
        <div className='home-question'>
            <div className='card-header'>
                Name Last asks:
            </div>
            <div className='card-main'>
                <div className='avatar'>
                    <img src={avatar} alt=''/> 
                </div>
                <div className='text'>
                    <div>
                        <h4>Would you rather</h4>
                        <p>Answer</p>
                    </div>
                    <div>
                        <button> View Poll</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeQuestion
