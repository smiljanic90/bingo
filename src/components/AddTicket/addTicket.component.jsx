import React, { useEffect, useState } from 'react';
import './addTicket.style.css'
import Button from '../Button/button.component'
import AddTicketModal from './addTicketModal.component'
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { toJS } from 'mobx';

const AddTicket = ({
    startedGame,
    setTickets, 
    tickets,
    allNumbers, 
    ticketsStore, 
    izvucenBroj}) =>{
    let niz = []
    niz.push(izvucenBroj)
    const [addTicketModal, setAddTicketModal] = useState(false)
    const [choosenNumbers, setChoosenNumbers] = useState([])

    const closeModalHandler = () => {
        setAddTicketModal(!addTicketModal)
        setChoosenNumbers([])
    }

    const getActiveTickets = async () => {
        await ticketsStore.getAllTickets()
    }

    useEffect(() => {
        getActiveTickets()
    })

    const {ticket} = ticketsStore


    const Ticket = ({ticket}) => {
        return (
            <div className="ticket">
                <div className="ticket-name"><span>Ticket id: #{ticket.id}</span></div>
                <div className="ticket-number">
                    {ticket.numbers.sort((a, b) => a - b).map(number => <span className={niz[0].includes(number) ? "numbers-generated-red" : 'numbers-generated'} key={number}>{number}</span>)}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='tickets-overview'>
                <Button 
                    disabled={startedGame ? true : false}
                    className="button-start"
                    buttonText="Add New Ticket"
                    onClick={() => setAddTicketModal(true)}
                />
                <div className="tickets-holder">
                    {ticket.map(ticket => <Ticket ticket={ticket} />)}
                </div>
            </div>

            <AddTicketModal
                show={addTicketModal}
                title='Add new ticket'
                close={closeModalHandler}
                allNumbers={allNumbers}
                getActiveTickets={getActiveTickets}
                setAddTicketModal={setAddTicketModal}
                addTicketModal={addTicketModal}
                tickets={tickets}
                setTickets={setTickets}
                setChoosenNumbers={setChoosenNumbers}
                choosenNumbers={choosenNumbers}
            />
        </>
    )
}

export default inject("ticketsStore")(observer(AddTicket));