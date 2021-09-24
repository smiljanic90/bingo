import React, { useState } from 'react';
import './drum.style.css'
import DrumPresentation from './drum.presentation'
import {MAXX_BALLS, BALLS_OUT} from '../../constants'

const Drum = () =>{
    const [broj, setBroj] = useState(0)

    const getRandomInt = (MAXX_BALLS) => {
        return setBroj(Math.floor(Math.random() * MAXX_BALLS))
    }

    return(
        <DrumPresentation getRandomInt={getRandomInt} broj={broj} maxBalls={MAXX_BALLS} />
    )
}


export default Drum