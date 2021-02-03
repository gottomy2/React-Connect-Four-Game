import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddForm1(){
    const player1 = useRef();
    const player2 = useRef();
    const cols = useRef();
    const rows = useRef();

    const playerChanged = e =>{
        e.preventDefault();
        localStorage.setItem('player1',player1.current.value);
    }

    const playerChanged2 = e => {
        e.preventDefault();
        localStorage.setItem('player2', player2.current.value);
    }

    const colsChanged = e => {
        e.preventDefault();
        localStorage.setItem('cols',cols.current.value);
    }

    const rowsChanged = e => {
        e.preventDefault();
        localStorage.setItem('rows',rows.current.value);
    }


    return(
        <>
            <div className="p-3 mb-2 bg-light text-dark">
                <h2 className="display-4">Witaj w grze Connect Four!</h2>
                <h5>Aby rozpocząć grę wpisz nicki graczy oraz wybierz wielkość planszy (domyslnie 7 kolumn i 6 wierszy)</h5>
            </div>

            <form>
                <input onChange={playerChanged} ref={player1} type="text" placeholder="Nick Gracza 1" required /><br/>
                <input onChange={playerChanged2} ref={player2} type="text" placeholder="Nick Gracza 2" required /><br/>
                <input onChange={colsChanged} ref={cols} type="text" placeholder="Kolumny" required/><br/>
                <input onChange={rowsChanged} ref={rows} type="text" placeholder="Wiersze" required/>
            </form>
        </>
    );
}