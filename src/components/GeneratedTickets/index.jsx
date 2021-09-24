import React, { useState } from 'react';
import './generatedTickets.style.css'
import GeneratedTicketsPresentation from './generatedTickets.presentation'
import {MAXX_BALLS, BALLS_OUT} from '../../constants'

const GeneratedTickets = () =>{

    const [tickets, setTickets] = useState([])


    const getRandomInt = (MAXX_BALLS) => {
        return Math.floor(Math.random() * MAXX_BALLS);
    }

    const generateOneTicket = () => {
        let randomSet = new Set()
        while(randomSet.size < BALLS_OUT) {
            randomSet.add(getRandomInt(MAXX_BALLS))
        } 
        return Array.from(randomSet)
    }
    
    const generateTicketsForOneRound = (timesRepeat) =>{
        const tickets = Array.from({length: timesRepeat}, () => generateOneTicket())
        setTickets(tickets)
    }    


    return(
            <GeneratedTicketsPresentation generateTicketsForOneRound={generateTicketsForOneRound} tickets={tickets} />
    )
}


export default GeneratedTickets