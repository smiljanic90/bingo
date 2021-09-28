import React from 'react';
import Button from '../Button/button.component'
import './generatedTickets.style.css'

const GeneratedTicketsPresentation = ({tickets, generateMultipleTicketsForRound, izvucenBroj, startedGame}) =>{
    let niz = []
    niz.push(izvucenBroj)

    const Ticket = ({numbers}) => {
        return (
            <div className="ticket">
                <div className="ticket-name"><span>Ticket id: #{numbers}</span></div>
                <div className="ticket-number">
                    {numbers.sort((a, b) => a - b).map(number => <span className={niz[0].includes(number) ? "numbers-generated-red" : 'numbers-generated'} key={number}>{number}</span>)}
                </div>
        </div>
        )
    }


    return(
        <div className="tickets-holder">
            <Button 
                disabled={startedGame ? true : false}
                className="button-start"
                buttonText="Generate tickets"
                onClick={() => generateMultipleTicketsForRound(5)} 
            />
            
                {tickets.map((x) => {
                    return <Ticket key={x} numbers={x} />
                })}
        </div>
    )
}


export default GeneratedTicketsPresentation