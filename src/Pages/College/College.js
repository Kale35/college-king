import { Button } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import './College.css'
import CollegeHeader from '../../Components/College-Major/CollegeHeader/CollegeHeader'
import Header from '../../Components/Main/Header/Header'
import Question from '../../Components/College-Major/Question-Review/Question'
import { Input } from '@mui/material';
import {Questions} from '../../data/Questions'
import AnswerModal from '../../Components/College-Major/AnswerModal/AnswerModal'
import {db} from '../../firebase'

function College(){ 
    
    const [activeButton, setActiveButton] = useState("Questions and Answers");
    const [modal, enableModal] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        db.onSnapshot(db.doc(db, 'questions'), (doc) => {
            setQuestions(doc.data().questions)
        });
    }, [])

    const answerQuestion = (e) => {
        enableModal(true);
        e.preventDefault();
        console.log(modal);
    }

    return (
        <div>
        {modal 
            ? <AnswerModal 
                enableModal={enableModal}
                answerQuestion={answerQuestion}
                answered={Question.answered}
                modal={modal}
              /> 
            : null
        }
            <Header/>
            <div className="college">
                <CollegeHeader/>
            </div>
            <div className="content">
                
                <div className="content__header">
                    <Button>
                        Write a Review
                    </Button>
                    <Button>
                        Ask a Question
                    </Button>
                    <input type="text" className="content__input" placeholder="Search for questions"/>
                </div>
                <div className="content__selection">
                    <ul className="content__options">
                    <AltButton
                        text="Questions and Answers"
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                    <AltButton
                        text="Reviews"
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                    </ul>
                </div>
                {Questions.map((question, index) => (
                <Question 
                    key={index} 
                    answerQuestion={answerQuestion} 
                    title={question.title}
                    details={question.details}
                    answered={question.answered}
                    answers={question.answers}
                    enableModal={enableModal}
                    modal={modal}
                    id={question.id}
                />
            ))}
            </div>
        </div>
    )
}

export const AltButton = (props) => {
    return(
        <Button
            style={{
                borderBottom: props.activeButton === props.text ? '3px solid #B00000' : '#020202', 
                color: props.activeButton === props.text ? '#B00000' : '#020202',
                marginRight: '10px'
            }}

            onClick={() => props.setActiveButton(props.text)}
        >
            {props.text}
        </Button>
    );
}

export default College;
