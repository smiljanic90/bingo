import React, { useState } from 'react';
import {MAXX_BALLS, ALL_NUMBERS} from '../constants'
import {generateTicketsForOneRound, checkWinner, getRandomInt,fillLotoDrumWithBalls} from '../bingo-helper'
import DrumPresentation from '../components/Drum/drumPresentation'
import GeneratedTicketsPresentation from '../components/GeneratedTickets/GeneratedTicketsPresentation'
import NumbersPresentation from '../components/Numbers/numbersPresentation'
import Modal from '../components/Modal/modal.component'
import sadSmiley from '../assets/sad.png'
import happySmiley from '../assets/happy.png'
import AddTicket from '../components/AddTicket/addTicket.component'
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";

const Loto = ({ticketsStore}) =>{

    const [tickets, setTickets] = useState([])
    const [generatedTickets, setGeneratedTickets] = useState([])
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

    const resetGame = () =>{
        setTickets([])
        setGeneratedTickets([])
        setIzvucenBroj('--')
        setModalodalVisible(!modalVisible)
        setStartedGame(false)
        setSviIzvuceniBrojevi([])
        ticketsStore.resetGame()
    }

    const startRound = async () => {
        let arrayOfAllTickets = []
        generatedTickets.forEach(x => arrayOfAllTickets.push(x))
        tickets.forEach(x => arrayOfAllTickets.push(x))

        let ticketsForRound = arrayOfAllTickets
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

    const generateMultipleTicketsForRound = async (timesRepeat) =>{
        await setGeneratedTickets(generateTicketsForOneRound(timesRepeat))
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
                    generatedTickets={generatedTickets}
                    izvucenBroj={sviIzvuceniBrojevi}
                    startedGame={startedGame}
                    />

                <AddTicket 
                    allNumbers={ALL_NUMBERS} 
                    izvucenBroj={sviIzvuceniBrojevi} 
                    startedGame={startedGame}
                    tickets={tickets}
                    setTickets={setTickets}
                />
            </div>

            <Modal
                className="modal"
                show={modalVisible}
                close={closeModalHandler}
                text={noWinner ? 'We dont have winner in this round!' : `We have a winner: ${winnerTicket}`}
                title={noWinner ? 'Bad luck!' : 'Congratulations!!!'}
                imgSmiley={noWinner ? sadSmiley : happySmiley}
                resetGame={resetGame}>
            </Modal>
        </>
    )
}

export default inject("ticketsStore")(observer(Loto));