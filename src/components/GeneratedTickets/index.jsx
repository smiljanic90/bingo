import React, { useState } from 'react';
import './generatedTickets.style.css'
import GeneratedTicketsPresentation from './generatedTickets.presentation'
import {MAXX_BALLS, BALLS_OUT} from '../../constants'
import {generateTicketsForOneRound} from '../../bingo-helper'

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
    
    // promijeniti ime konstante da ne bude isto kao i funkcija
    const generateTicketsForOneRoundS = (timesRepeat) =>{
        setTickets(generateTicketsForOneRound(timesRepeat))
    }    


    return(
            <GeneratedTicketsPresentation generateTicketsForOneRound={generateTicketsForOneRoundS} tickets={tickets} />
    )
}


export default GeneratedTickets