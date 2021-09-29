import React, { useState } from 'react';
import './addTicketModal.style.css';
import Button from '../Button/button.component'
 
const AddTicketModal = ({allNumbers, show, close, text, title, imgSmiley}) => {
    let niz = []
    niz.push(allNumbers)
    const [choosenNumbers, setChoosenNumbers] = useState([])

    console.log(choosenNumbers, 'choosenNumbers')

    const addNumberOnTicket = (number) => {
        if (choosenNumbers.length <= 6) {
            setChoosenNumbers(choosenNumbers => [...choosenNumbers, number + `${choosenNumbers.length == 6 ? '' : ' '}`])   
        } else {
            alert('Maximum number on ticket exceeded')
        }
        
    }

    const AllNumberForChoose = ({number}) => {
        return (
            <div className='numbers-list' onClick={() => addNumberOnTicket(parseInt(number))}>
                <span>{number}</span>
            </div>
        )
    }

    const onConfirm = () => {
        window.localStorage.setItem('ticket', choosenNumbers);
        setChoosenNumbers([])
    }


return (
        <div className="modal-add" style={{display: show ? 'block' : 'none'}}>
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
                    <p className='added-numbers'>
                        <span>Choosen numbers:</span> 
                        {choosenNumbers}
                    </p>
                    <div className='choose-numbers'>
                        {allNumbers.map((x) => {
                            return <AllNumberForChoose key={x} number={x} />
                        })}
                    </div>
                    <br />
                    <Button 
                        className="button-start"
                        buttonText="Confirm Ticket"
                        onClick={onConfirm}
                    />
                </div>
            </div>
        </div>
    )
}
 
export default AddTicketModal;