import React from 'react'
import { useContext } from 'react'
import {AppContext} from '../context/AppProvider';

function Modal() {

  const {modal,closeModal,correct,question} = useContext(AppContext);

  return (
    <div className={`${modal ? "modal-container isOpen" : "modal-container"}`}>
        <div className="modal-content">
            <h2>congrats</h2>
            <p>You answered {( (correct/question.lenght)*100 ).toFixed(0)}% </p>
            <button onClick={closeModal} className='close-btn'>play again</button>
        </div>
    </div>
  )
}

export default Modal