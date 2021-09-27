const maxBalls = 39;
const ballsOut = 7;

export const getRandomInt = (maxBalls) => {
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

export const fillLotoDrumWithBalls = (maxBalls) => {
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

export const checkWinner = (ticketsAll, lotoNumbers) =>{
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
