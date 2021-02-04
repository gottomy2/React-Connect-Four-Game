export const setWin = (element : any ) =>{
    let style = element.getAttribute("style");
    // Stylebackground-color:#D4AFB9

    let check : any = style.substr(style.indexOf(":")+1);
    if( check === "#D4AFB9"){
        localStorage.setItem('winner',<string>localStorage.getItem("player1"));
    }
    else{
        localStorage.setItem('winner',<string>localStorage.getItem("player2"));
    }
    console.log("[GAME END] - Winner: "+ localStorage.getItem('winner'));
}