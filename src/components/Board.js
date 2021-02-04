import React from 'react';
import Square from './Square';

const style = {
        border: "4px solid Gray",
        borderRadius: "10px",
        width: "50%",
        height: "70%",
        margin: "0 auto",
        display: "grid",
        //7 kolumn, 6 wierszy:
        gridTemplate: `${"repeat(" + localStorage.getItem("rows") + ", 1fr) / repeat(" + localStorage.getItem("cols") + ", 1fr)"}`
};

const Board = ({ squares, onClick }) => (
    <>
            {(localStorage.getItem("player1") && localStorage.getItem("player2") && localStorage.getItem("cols") && localStorage.getItem("rows") && !localStorage.getItem("draw"))?
                <div id="mainTable" style={style}>
                        {
                                squares.map((square, i) => (
                                    <Square id={i} key={i} value={square} onClick={() => onClick(i)}/>))
                        }
                </div>
                :
                ""
            }
    </>

)

export default Board;