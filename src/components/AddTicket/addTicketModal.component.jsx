import React, { useState } from 'react';
import './addTicketModal.style.css';
import Button from '../Button/button.component'
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
 
const AddTicketModal = ({
    setTickets, 
    tickets, 
    startedGame, 
    allNumbers, 
    show, 
    close, 
    setAddTicketModal, 
    addTicketModal, 
    title, 
    getActiveTickets, 
    ticketsStore}) => {
    let niz = []
    niz.push(allNumbers)
    const [choosenNumbers, setChoosenNumbers] = useState([])

    const addNumberOnTicket = (number) => {
        if (choosenNumbers.length <= 6) {
            setChoosenNumbers([...choosenNumbers, Number(number)])
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

    const onConfirm = () => {
        if (choosenNumbers.length != 7) {
            alert('Minumum numbers per ticket is 7')
        } else {
            setTickets(tickets => [...tickets, choosenNumbers])
            const  ticket = {
                id: Date.now(),
                numbers: choosenNumbers
            }
            ticketsStore.addNewTicket(ticket)
            setAddTicketModal(!addTicketModal)
            setChoosenNumbers([])
            getActiveTickets()
        }
    }


return (
        <div className="modal-add" style={{display: show ? 'block' : 'none'}}>
            <div className="modal-wrapper" style={{transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',display: show ? 'block' : 'none'}}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <span className="close-modal-btn" onClick={close}>×</span>
                </div>
                <div className="modal-body">
                    <p className='added-numbers'>
                        <span>Choosen numbers:</span> 
                        {choosenNumbers.join(', ')}
                    </p>
                    <div className='choose-numbers'>
                        {allNumbers.map((x) => {
                            return <AllNumberForChoose key={x} number={x} />
                        })}
                    </div>
                    <br />
                    <Button 
                        disabled={startedGame ? true : false}
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