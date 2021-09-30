import React from 'react';
import Button from '../Button/button.component'
import './generatedTickets.style.css'

const GeneratedTicketsPresentation = ({generatedTickets, generateMultipleTicketsForRound, izvucenBroj, startedGame}) =>{
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
        <div className='tickets-overview'>
            <Button 
                disabled={startedGame ? true : false}
                className="button-start"
                buttonText="Generate tickets"
                onClick={() => generateMultipleTicketsForRound(5)} 
            />
             <div className="tickets-holder">
                {generatedTickets.map((x) => {
                    return <Ticket key={x} numbers={x} />
                })}
                </div>
        </div>
    )
}


export default GeneratedTicketsPresentation