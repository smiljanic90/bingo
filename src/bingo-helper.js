const maxBalls = 39;
const ballsOut = 7;

const getRandomInt = (maxBalls) => {
    return Math.floor(Math.random() * maxBalls);
}

const generateOneTicket = () => {
    let randomSet = new Set()
    while(randomSet.size < ballsOut) {
        randomSet.add(getRandomInt(maxBalls))
    } 
    return Array.from(randomSet)
}

export const generateTicketsForOneRound = (timesRepeat) =>{
    return Array.from({length: timesRepeat}, () => generateOneTicket());
}

const fillLotoDrumWithBalls = (maxBalls) => {
    let allLotoNumbers = [];
    for(let i = 0; i <= maxBalls; i++){
        allLotoNumbers.push(i)
    }
    return allLotoNumbers
}

const checkTicket = (ticketOne, lotoNumbers) =>{
    let bingoNumber = 0;
    for(let i = 0; i < ticketOne.length; i++){
        for(let j = 0; j < lotoNumbers.length; j++){
            if(ticketOne[i] == lotoNumbers[j]){
                bingoNumber += 1;
                if(bingoNumber == ballsOut){
                    return true
                }
            }
        }
    }
    return false
}

const checkWinner = (ticketsAll, lotoNumbers) =>{
     for(let i = 0; i < ticketsAll.length; i++){
         if(checkTicket(ticketsAll[i], lotoNumbers)){
             return {
                 ticketWin: ticketsAll[i],
                 izvucenaKuglica: lotoNumbers.length,
                 isWinner: true
             }
         }
     }
     return {
        ticketWin: {},
        izvucenaKuglica: {},
        isWinner: false
    }
}

const startRound = async () => {
    let ticketsForRound = generateTicketsForOneRound(100)
    let izvuceniBrojevi = []
    let brojeviZaBubanj = fillLotoDrumWithBalls(maxBalls)
    let isWin = false;
    
    while(brojeviZaBubanj.length > 33 && !isWin) {
        const broj = getRandomInt(brojeviZaBubanj.length)
        await sleep(1000)
        console.log('Izvucen je broj: ' + brojeviZaBubanj[broj])
        izvuceniBrojevi.push(brojeviZaBubanj[broj])
        brojeviZaBubanj.splice(broj, 1)
        const {ticketWin,izvucenaKuglica,isWinner} = checkWinner(ticketsForRound,izvuceniBrojevi)
        if(isWinner){
            console.log('Winner ticket: ' + ticketWin)
            isWin = true
        }
    }
    if(!isWin){
        console.log('NOOOOOOOOO')
    }
}


function sleep(ms) { 
  return new Promise( 
    resolve => setTimeout(resolve, ms) 
  ); 
}
