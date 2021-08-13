import React from 'react'
import HomeQuestion from '../components/HomeQuestion'

const Home = () => {
    return (
        <div>
            <div className='top'>
                <ul>
                    <li className='home-active'>Unanswered Questions</li>
                    <li>Answered Questions</li>
                </ul>
            </div>
            <div  className='component'>
                <HomeQuestion />
            </div>
        </div>
    )
}

export default Home
