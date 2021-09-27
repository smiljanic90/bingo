import React from 'react';
import Button from '../Button/button.component'
import './drum.style.css'

const DrumPresentation = ({startRound, maxBalls, izvucenBroj}) =>{

    return(
        <div className="drum-holder">
            <div className='drum-balls'>
                <span className='balls'>{izvucenBroj}</span>
            </div>
            
            <p>Bingo 7/39</p>

            <Button 
                className="button-start"
                buttonText="Start round"
                onClick={() => startRound(maxBalls)} 
            />
        </div>
    )
}


export default DrumPresentation