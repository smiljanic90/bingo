import React from 'react';
 
import './modal.style.css';
 
const Modal = ({show, close, text, title}) => {
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
                </div>
            </div>
        </div>
    )
}
 
export default Modal;