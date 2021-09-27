import React, { useState } from 'react';
// import './generatedTickets.style.css'
// import GeneratedTicketsPresentation from './generatedTickets.presentation'
import {MAXX_BALLS, ALL_NUMBERS} from '../constants'
import {generateTicketsForOneRound, checkWinner, getRandomInt,fillLotoDrumWithBalls} from '../bingo-helper'
import DrumPresentation from '../components/Drum/drumPresentation'
import GeneratedTicketsPresentation from '../components/GeneratedTickets/GeneratedTicketsPresentation'
import NumbersPresentation from '../components/Numbers/numbersPresentation'
import { useEffect } from 'react';

const Loto = () =>{

    const [tickets, setTickets] = useState([])
    const [izvucenBroj, setIzvucenBroj] = useState('Izvlacenje nije pocelo')
    const [sviIzvuceniBrojevi, setSviIzvuceniBrojevi] = useState([])

    const startRound = async () => {
        let ticketsForRound = generateTicketsForOneRound(100)
        let izvuceniBrojevi = []
        let brojeviZaBubanj = fillLotoDrumWithBalls(MAXX_BALLS)
        let isWin = false;
        // setBrojeviUBubnju(brojeviZaBubanj)
        // setBrojeviUBubnju(brojeviUBubnju => [...brojeviUBubnju, brojeviZaBubanj.length])
        
        while(brojeviZaBubanj.length > 33 && !isWin) {
            const broj = getRandomInt(brojeviZaBubanj.length)
            await sleep(1000)
            setIzvucenBroj(brojeviZaBubanj[broj])
            setSviIzvuceniBrojevi(sviIzvuceniBrojevi => [...sviIzvuceniBrojevi, brojeviZaBubanj[broj]])
            izvuceniBrojevi.push(brojeviZaBubanj[broj])
            brojeviZaBubanj.splice(broj, 1)
            const {ticketWin,izvucenaKuglica,isWinner} = checkWinner(ticketsForRound,izvuceniBrojevi)
            if(isWinner){
                alert('Winner ticket: ' + ticketWin)
                isWin = true
            }
        }
        if(!isWin){
            await sleep(1000)
            alert(`We don't have a winner`)
        }
    }


    function sleep(ms) { 
        return new Promise( 
          resolve => setTimeout(resolve, ms) 
        ); 
      }

    const generateMultipleTicketsForRound = (timesRepeat) =>{
        setTickets(generateTicketsForOneRound(timesRepeat))
    }   

    return (
        <>
            <div className="drum-and-numbers">
                <DrumPresentation startRound={startRound} maxBalls={MAXX_BALLS} izvucenBroj={izvucenBroj}/>
                <NumbersPresentation allNumbers={ALL_NUMBERS} izvucenBroj={sviIzvuceniBrojevi}/>
            </div>
            <div className="generated-tickets">
            <GeneratedTicketsPresentation generateMultipleTicketsForRound={generateMultipleTicketsForRound} tickets={tickets}/>
            </div>
        </>
    )
}


export default Loto