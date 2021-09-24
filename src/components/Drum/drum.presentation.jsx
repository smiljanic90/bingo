import React from 'react';
import Button from '../Button/button.component'

const DrumPresentation = ({maxBalls, broj, getRandomInt}) =>{
    return(
        <div className="drum-holder">
            <div className="drum-balls">
                <span className="balls">{broj}</span>
            </div>
            
            <p>Bingo 7/39</p>

            <Button 
                className="button-start"
                buttonText="Start round"
                onClick={() => getRandomInt(maxBalls)} 
            />
        </div>
    )
}


export default DrumPresentation