import React from 'react'
import Button from '@material-ui/core/Button';
import { IconButton } from '@mui/material';
import CancelIcon from '@material-ui/icons/Cancel';
import './AnswerModal.css'

const AnswerModal = ({answerQuestion, enableModal, answered, modal}) => {
    
    const closeModal = (e) => {
        e.preventDefault();
        enableModal(false);
    }

    const submitAnswer = (e) => {
        e.preventDefault();
        var answer = document.getElementById('modal__form').submit();
        console.log(answer);
        enableModal(false);
    }   

    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__close">
                    <IconButton onClick={(e) => closeModal(e)}>
                        <CancelIcon></CancelIcon>
                    </IconButton>
                </div>
                <div className="modal__content">
                    <p className="modal__title">Answer This Question</p>
                    <form onSubmit={(e) => submitAnswer(e)} className="modal__form" id="modal__form" > 
                        <textarea className="modal__textarea" placeholder="Your Answer"/>
                        <div className="modal__button">
                            <Button type='submit' color={'primary'}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AnswerModal;

