import React from 'react'
import './CollegeHeader.css'
import StarRateIcon from '@material-ui/icons/StarRate';

const CollegeHeader = () => {
    return (
        <div className="college-header">
            <div className="college-header__college">
                <h1 className="college-header__title">
                 Massachussets Institute of Technology 
                </h1>
                <span className="college-header__rating">
                    <StarRateIcon fontSize="large"/>
                    <StarRateIcon fontSize="large"/>
                    <StarRateIcon fontSize="large"/>
                    <StarRateIcon fontSize="large"/>
                    <StarRateIcon fontSize="large"/>
                </span>
            </div>
            <div className="college-header__details">
                <p>Difficulty: 5/5</p>
                <p>Value: 5/5</p>
                <p>Opportunity: 5/5</p>

            </div>
        </div>
    )
}

export default CollegeHeader
