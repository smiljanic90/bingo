import React, { useState } from 'react';
// import './generatedTickets.style.css'
// import GeneratedTicketsPresentation from './generatedTickets.presentation'
import {MAXX_BALLS, ALL_NUMBERS} from '../constants'
import {generateTicketsForOneRound, checkWinner, getRandomInt,fillLotoDrumWithBalls} from '../bingo-helper'
import DrumPresentation from '../components/Drum/drumPresentation'
import GeneratedTicketsPresentation from '../components/GeneratedTickets/GeneratedTicketsPresentation'
import NumbersPresentation from '../components/Numbers/numbersPresentation'
import Modal from '../components/Modal/modal.component'
import sadSmiley from '../assets/sad.png'
import happySmiley from '../assets/happy.png'
import AddTicket from '../components/AddTicket/addTicket.component'

const Loto = () =>{

    const [tickets, setTickets] = useState([])
    const [izvucenBroj, setIzvucenBroj] = useState('--')
    const [sviIzvuceniBrojevi, setSviIzvuceniBrojevi] = useState([])
    const [modalVisible, setModalodalVisible] = useState(false)
    const [noWinner, setNoWinner] = useState(false)
    const [winnerTicket, setWinnerTicket] = useState(false)
    const [startedGame, setStartedGame] = useState(false)

    const openModalHandler = () => {
        setModalodalVisible(!modalVisible)
      }
     
    const closeModalHandler = () => {
        setModalodalVisible(!modalVisible)
      }

    const startRound = async () => {
        let ticketsForRound = tickets
        let izvuceniBrojevi = []
        let brojeviZaBubanj = fillLotoDrumWithBalls(MAXX_BALLS)
        let isWin = false;
        
        while(brojeviZaBubanj.length > 14 && !isWin) {
            const broj = getRandomInt(brojeviZaBubanj.length)
            await sleep(2000)
            setIzvucenBroj(brojeviZaBubanj[broj])
            setSviIzvuceniBrojevi(sviIzvuceniBrojevi => [...sviIzvuceniBrojevi, brojeviZaBubanj[broj]])
            setStartedGame(true)
            izvuceniBrojevi.push(brojeviZaBubanj[broj])
            brojeviZaBubanj.splice(broj, 1)
            const {ticketWin,izvucenaKuglica,isWinner} = checkWinner(ticketsForRound,izvuceniBrojevi)
            if(isWinner){
                setWinnerTicket(ticketWin)
                await sleep(1500)
                openModalHandler()
                // alert('Winner ticket: ' + ticketWin)
                isWin = true
            }
        }
        if(!isWin){
            setNoWinner(true)
            await sleep(1500)
            openModalHandler()
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
                <DrumPresentation 
                startRound={startRound} 
                maxBalls={MAXX_BALLS} 
                izvucenBroj={izvucenBroj}
                tickets={tickets}/>
                <NumbersPresentation allNumbers={ALL_NUMBERS} izvucenBroj={sviIzvuceniBrojevi}/>
            </div>
            <div className="generated-tickets">
            <GeneratedTicketsPresentation
                generateMultipleTicketsForRound={generateMultipleTicketsForRound}
                tickets={tickets}
                izvucenBroj={sviIzvuceniBrojevi}
                startedGame={startedGame}
                />

            <AddTicket allNumbers={ALL_NUMBERS} izvucenBroj={sviIzvuceniBrojevi} />
            
            </div>

            <Modal
                className="modal"
                show={modalVisible}
                close={closeModalHandler}
                text={noWinner ? 'We dont have winner in this round!' : `We have a winner: ${winnerTicket}`}
                title={noWinner ? 'Bad luck!' : 'Congratulations!!!'}
                imgSmiley={noWinner ? sadSmiley : happySmiley}>
            </Modal>
        </>
    )
}


export default Loto