import React, { useState } from 'react';
import './TestCompo.css';

function TestCompo({ contentNo, setContentNo, score, setScore }) {
    const [Qno, setQno] = useState(1);
    const [submit, setSubmit] = useState('Next');
    const [qusetionCount, setQuestionCount] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [buttonStates, setButtonStates] = useState([null, null, null, null]);

    const qustionsList = {
        1: 'What is the standard markup language for creating web pages?',
        2: 'Which language is used for styling web pages?',
        3: 'Which of the following is a JavaScript framework?',
        4: 'What does CSS stand for?',
        5: 'Which HTML tag is used to define an internal style sheet?'
    };

    const ansList = {
        1: ['a) PHP', 'b) HTML', 'c) CSS', 'd) JavaScript'],
        2: ['a) Python', 'b) SQL', 'c) CSS', 'd) JavaScript'],
        3: ['a) Django', 'b) Laravel', 'c) React', 'd) Flask'],
        4: ['a) Cascading Style Sheets', 'b) Creative Style Sheets', 'c) Computer Style Sheets', 'd) Colorful Style Sheets'],
        5: ['a) <style>', 'b) <script>', 'c) <head>', 'd) <link>'],
    };

    const rightAns = {
        1: 'b) HTML',
        2: 'c) CSS',
        3: 'c) React',
        4: 'a) Cascading Style Sheets',
        5: 'a) <style>',
    };

    const [question, setQuestion] = useState(qustionsList[qusetionCount]);
    const [answers, setAnswers] = useState(ansList[qusetionCount]);

    const CheckBtn = () => {
        if (qusetionCount > 4) {
            setContentNo(contentNo + 1);
        } else {
            if (qusetionCount > 3) {
                setSubmit('Submit');
            }

            setQuestionCount(qusetionCount + 1);
            setQuestion(qustionsList[qusetionCount + 1]);
            setAnswers(ansList[qusetionCount + 1]);
            setQno(Qno + 1);
            setSelectedAnswer(null);
            setButtonStates([null, null, null, null]);
        }
    };

    const checkAns = (userAns, index, e) => {
        if (selectedAnswer === null) {
            const updatedButtonStates = [...buttonStates];
            if (userAns === rightAns[qusetionCount]) {
                setScore(score + 1);
                updatedButtonStates[index] = 'green';
            } else {
                updatedButtonStates[index] = 'red';
            }
            setSelectedAnswer(index);
            setButtonStates(updatedButtonStates);
        }
    };

    return (
        <div className='main-div'>
            <p>{Qno}. <span>{question}</span></p>

            <div className="ans-div">
                <div className="row1">
                    {answers.slice(0, 2).map((answer, index) => (
                        <button
                            key={index}
                            onClick={(e) => checkAns(answer, index, e)}
                            style={{ backgroundColor: buttonStates[index] }}
                            disabled={selectedAnswer !== null}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
                <div className="row2">
                    {answers.slice(2, 4).map((answer, index) => (
                        <button
                            key={index + 2}
                            onClick={(e) => checkAns(answer, index + 2, e)}
                            style={{ backgroundColor: buttonStates[index + 2] }}
                            disabled={selectedAnswer !== null}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
            <div className="submit-btn">
                <button onClick={() => CheckBtn()}>{submit}</button>
            </div>
        </div>
    );
}

export default TestCompo;
