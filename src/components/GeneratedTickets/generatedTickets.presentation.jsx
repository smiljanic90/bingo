import React from 'react';
import Button from '../Button/button.component'

const GeneratedTicketsPresentation = ({tickets, generateTicketsForOneRound}) =>{

    const Ticket = ({numbers}) => {
        return (
            <div className="ticket">
                <div className="ticket-name"><span>Ticket id: #{numbers}</span></div>
                <div className="ticket-number">
                    {numbers.map(number => <span key={number}>{number}</span>)}
                </div>
        </div>
        )
    }


    return(
        <div className="tickets-holder">
            <Button 
                className="button-start"
                buttonText="Generate tickets"
                onClick={() => generateTicketsForOneRound(5)} 
            />
            
                {tickets.map((x) => {
                    return <Ticket key={x} numbers={x} />
                })}
        </div>
    )
}


export default GeneratedTicketsPresentation