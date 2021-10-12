import React from 'react';
import Button from '../Button/button.component'
import './drum.style.css'

const DrumPresentation = ({generatedTickets, tickets,startRound, maxBalls, izvucenBroj}) =>{
    return(
        <div className="drum-holder">
            <div className='drum-balls'>
                <div className={tickets.length == 0 ? '' : 'circle'}></div>
                <div className={tickets.length == 0 ? '' : 'circle'}></div>
                <div className={tickets.length == 0 ? '' : 'circle'}></div>
                <span className='balls'>{izvucenBroj}</span>
            </div>
            
            <p>Bingo 7/39</p>

            <Button 
                disabled={tickets.length != 0 || generatedTickets.length != 0 ? false : true}
                className="button-start"
                buttonText="Start round"
                onClick={() => startRound(maxBalls)} 
            />
        </div>
    )
}


export default DrumPresentation