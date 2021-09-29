import React, { useState } from 'react';
import './addTicketModal.style.css';
import Button from '../Button/button.component'
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
 
const AddTicketModal = ({allNumbers, show, close, setAddTicketModal, addTicketModal, title, getActiveTickets, ticketsStore}) => {
    let niz = []
    niz.push(allNumbers)
    const [choosenNumbers, setChoosenNumbers] = useState([])

    let choosenNumbersArr = []
    const addNumberOnTicket = (number) => {
        
        if (choosenNumbersArr.length <= 6) {
            choosenNumbersArr.push(number) 
        } else {
            alert('Maximum number on ticket exceeded')
        }
        
    }

    const AllNumberForChoose = ({number}) => {
        return (
            <div className='numbers-list' onClick={() => addNumberOnTicket(Number(number))}>
                <span>{number}</span>
            </div>
        )
    }

    const onConfirm = async () => {
            ticketsStore.saveTicket(choosenNumbersArr)
            setAddTicketModal(!addTicketModal)
            setChoosenNumbers([])
            getActiveTickets()
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

export default inject("ticketsStore")(observer(AddTicketModal));