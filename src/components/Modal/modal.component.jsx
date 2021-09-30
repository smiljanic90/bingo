import React from 'react';
import './modal.style.css';
import Button from '../Button/button.component'
 
const Modal = ({
    show,
    close,
    text,
    title,
    imgSmiley,
    resetGame}) => {
return (
        <div className="modal-intro" style={{display: show ? 'block' : 'none'}}>
            <div className="modal-wrapper"
            style={{
            transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
            display: show ? 'block' : 'none'
            }}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <span className="close-modal-btn" onClick={close}>×</span>
                </div>
                <div className="modal-body">
                    <p>{text}</p>
                    <img src={imgSmiley} />
                </div>
                <Button 
                    className="button-start"
                    buttonText="Reset Game"
                    onClick={resetGame}
                />
            </div>
        </div>
    )
}
 
export default Modal;