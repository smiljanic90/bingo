import React from 'react';
import './button.style.css'

const Button = ({className, onClick, buttonText, disabled}) =>{
    return(
        <button disabled={disabled} className={className + " button"} onClick={onClick}>{buttonText}</button>
    )
}


export default Button