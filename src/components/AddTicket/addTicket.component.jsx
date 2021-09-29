import React, { useEffect, useState } from 'react';
import './addTicket.style.css'
import Button from '../Button/button.component'
import AddTicketModal from './addTicketModal.component'
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { toJS } from 'mobx';

const AddTicket = ({allNumbers, ticketsStore}) =>{
    const [addTicketModal, setAddTicketModal] = useState(false)
    const [nesto, setNesto] = useState(false)

    const closeModalHandler = () => {
        setAddTicketModal(!addTicketModal)
    }

    const getActiveTickets = async () => {
        await ticketsStore.getTickets()
    }

    useEffect(() => {
        getActiveTickets()
    })

    const {ticket} = ticketsStore
    const allTickets = toJS(ticket)

    console.log(allTickets, 'allTickets')

    const Ticket = (item) => {
        console.log(item, 'item')
        return (
            <div className="ticket">
                    <div className="ticket-name"><span>Ticket id: #56</span></div>
                    <div className="ticket-number">
                         <span>{item[0]}</span>
                    </div>
            </div>
        )
    }

    return (
        <>
        <div className='tickets-overview'>
            <Button 
                className="button-start"
                buttonText="Add New Ticket"
                onClick={() => setAddTicketModal(true)}
            />
             <div className="tickets-holder">
                {allTickets.map((item) => {
                    return <Ticket {...item} />
                })}
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
        />
    </>
    )
}

export default inject("ticketsStore")(observer(AddTicket));