import React from 'react'
import './Answer.css'

const Answer = ({answer}) => {
    return (
        <div className="answer">
            <p className>{answer}</p>
        </div>
    )
}

export default Answer
