import React, {useState} from 'react'
import Answer from '../Answer/Answer'
import './QuestionReview.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import { IconButton } from '@mui/material';
import AnswerModal from '../AnswerModal/AnswerModal';
import {Questions} from '../../../data/Questions';

const Question = ({title, details, id, index, answered, enableModal, modal}) => {
    const questionId = id;
    
    const [select, isSelected] = useState(false);

    modal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    const selectQuestion = () => {
        !select ? isSelected(true) : isSelected(false);
        answered = true;
    }

    console.log('Clicked');

    return (
        <div>
            <div className="question">
                <ArrowRightIcon 
                    className="question__arrow" 
                    style={{transform: select ? 'rotate(90deg)' : 'rotate(0deg)'}}
                    onClick={() => selectQuestion()}
                />
            <div className="question__content">
                    <p className="question__title">{title}</p>
                    <p className="question__details">{details}</p>
                    <div>
                        {Questions.map((answers, index) => (
                            <Answer
                                key={index}
                                answer={answers.answer}
                                rating={answers.rating}
                                questionId={questionId}
                            />
                        ))}
                    </div>
                    <Button onClick={() => enableModal(true)}>
                        Answer this question
                    </Button>
                </div>     
            </div>
        </div>
       
       
    )   
}



export default Question