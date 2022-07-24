import React from 'react'

function Modal() {
  return (
    <div className='modal-container isOpen'>
        <div className="modal-content">
            <h2>congrats</h2>
            <p>You answered n questions correctly</p>
            <button className='close-btn'>play again</button>
        </div>
    </div>
  )
}

export default Modal