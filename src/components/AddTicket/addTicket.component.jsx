import React, { useState } from 'react';
import './addTicket.style.css'
import Button from '../Button/button.component'
import AddTicketModal from './addTicketModal.component'

const AddTicket = ({allNumbers}) =>{
    const [addTicketModal, setAddTicketModal] = useState(false)

    const closeModalHandler = () => {
        setAddTicketModal(!addTicketModal)
    }

    let ticket = window.localStorage.getItem('ticket');
    let ticketNiz = null;
    if(ticket){
        ticketNiz = ticket.split(',').map(function(number) {
            return parseInt(number);
        });
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
                {/* {tickets.map((x) => {
                    return <Ticket key={x} numbers={x} />
                })} */}
                <div className="ticket">
                    <div className="ticket-name"><span>Ticket id: #56</span></div>
                    <div className="ticket-number">
                        {ticketNiz != null ? ticketNiz.map((x) => <span className='numbers-generated'>{x}</span>) : null}
                    </div>
                </div>
            </div>
        </div>

        <AddTicketModal
            show={addTicketModal}
            title='Add new ticket'
            close={closeModalHandler}
            allNumbers={allNumbers}
        />
    </>
    )
}


export default AddTicket