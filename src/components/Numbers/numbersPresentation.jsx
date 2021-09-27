import React from 'react';
import './numbers.style.css'

const NumbersPresentation = ({allNumbers, izvucenBroj}) =>{
    let niz = []
    niz.push(izvucenBroj)

    return(
        <div className="numbers-holder">
            <div className="numbers-balls">
                {allNumbers.map((x) => {
                    return <span key={x} className={niz[0].includes(x) ? "numbers-red" : 'numbers'}>{x}</span>
                })}
            </div>
        </div>
    )
}


export default NumbersPresentation