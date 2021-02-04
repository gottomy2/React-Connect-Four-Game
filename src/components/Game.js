import React, { useState } from 'react';
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.min.css';
import {checkDraw, checkWinVertical, printBoard} from "../helpers";
import {checkWinHorizontal} from "../helpers";
import {checkWinDiagonal} from "../helpers";

const style2 = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [history, setHistory] = useState([Array(localStorage.getItem('rows')*localStorage.getItem('cols')).fill(null)]);
    const [stepNumber,setStepNumber] = useState(0);
    const [player1isNext, setPlayer1isNext] = useState(true);

    const handleClick = i => {
        //If winner has been declared return
        if(localStorage.getItem('winner')){
            return;
        }

        const timeInHistory = history.slice(0,stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];

        i = i%localStorage.getItem('cols') - localStorage.getItem('cols') + ((localStorage.getItem('rows')) * localStorage.getItem('cols'));
        let finished = false;
        while(finished !== true){
            let style = document.getElementById(i).getAttribute("style");
            if(style === "background-color:#D4AFB9" || style === "background-color:#7EC4CF"){
                i = i-localStorage.getItem('cols');
            }
            else{
                finished = true;
            }
        }

        // Put an X or an O in the first free place
        squares[i] = player1isNext ? document.getElementById(i).setAttribute("style","background-color:#D4AFB9") :
            document.getElementById(i).setAttribute("style","background-color:#7EC4CF");

        printBoard();
        checkDraw();
        checkWinDiagonal(i);
        checkWinHorizontal(i);
        checkWinVertical(i);
        setHistory([...timeInHistory,squares]);
        setStepNumber(timeInHistory.length)
        setPlayer1isNext(!player1isNext);
    }

    const startGame = e =>{
        e.preventDefault()
        setHistory([Array(localStorage.getItem('rows')*localStorage.getItem('cols')).fill(null)])
    }

    const jumpTo = step => {
        setStepNumber(step);
        setPlayer1isNext(step % 2 === 0);
    };

    const render = () => {
        return(
            <>
                {
                    localStorage.getItem('player1') && localStorage.getItem('player2') && localStorage.getItem('cols') && localStorage.getItem('rows') ? renderMoves() : ""
                }
                <br/>
                <button className="btn btn-secondary" onClick={startGame}>
                    Graj!
                </button>
            </>
        )
    }

    const playAgain = e =>{
        e.preventDefault();
        window.location.reload(false);
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Cofnij się do ruchu: ${move}` : 'Cofnij się do poczatku gry';
            return (
                (localStorage.getItem("player1") && localStorage.getItem("player2") && localStorage.getItem("cols") && localStorage.getItem("rows")) ?
                <li className="list-group" key={move}>
                    <button className="list-group-item list-group-item-action" onClick={() => jumpTo(move)}>{destination}</button>
                </li> : ""
            )
        })
    )

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={style2}>
                <p>
                    {
                        (localStorage.getItem('winner')) ? 'Koniec gry, wygrał: ' +  localStorage.getItem('winner'):
                            (localStorage.getItem("draw") ?  'Koniec gry, Gra zakończyła się remisem':
                                ((localStorage.getItem('player1') && localStorage.getItem('player2')) ?
                                    'Kolej Gracza: ' + (player1isNext ? localStorage.getItem('player1') : localStorage.getItem('player2')) : ""))
                    }
                </p>
                {
                    (localStorage.getItem('winner')  || localStorage.getItem("draw")) ? <button className="btn btn-warning" onClick={playAgain}>Zagraj Ponownie!</button> :
                        render()
                }
            </div>
        </>
    )
}

export default Game;