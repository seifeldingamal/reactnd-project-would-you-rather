import React from 'react'

const NewQuestion = () => {
    return (
        <div className='component'>
            <div className='new-q'>
                <div className='header'>
                    <h2>Create New Question</h2>
                </div>
                <div className='main'>
                    <div className='text'>
                        <h7>Complete the question</h7>
                        <h4>Would you rather ...</h4>
                    </div>
                    <input type='text' placeholder='Enter option one text here'/>
                    <h3>OR</h3>
                    <input type='text' placeholder='Enter option two text here'/>
                    <br/>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default NewQuestion
