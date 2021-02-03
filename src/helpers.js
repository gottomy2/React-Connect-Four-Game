const setWin = (element) =>{
    let style = element.getAttribute("style");
    console.log("Style" + style)
    // Stylebackground-color:#D4AFB9

    let check = style.substr(style.indexOf(":")+1);
    if( check === "#D4AFB9"){
        localStorage.setItem('winner',localStorage.getItem("player1"));
    }
    else{
        localStorage.setItem('winner',localStorage.getItem("player2"));
    }
}

export const checkWinVertical = (id) => {
    let element = document.getElementById(id);
    let next;
    let counter=0;
    for(let i=1;i<=4;i++){
        let j = id+(localStorage.getItem('cols') * i);
        if(j>=(localStorage.getItem('rows')*localStorage.getItem('cols'))-1){
            break;
        }
        next = document.getElementById(j);
        if(next.getAttribute("style")===element.getAttribute("style")){
            counter++
        }
        else break;
    }
    if (counter === 3){
        setWin(element);
    }
}

export const checkWinHorizontal = (id) => {
    let element = document.getElementById(id);
    let rightElement;
    let leftElement;
    let counter1=0;
    let counter2=0;
    for(let i=1;i<=4;i++) {
        let j = id + (-i);
        if(j%localStorage.getItem('cols')<0){
            break;
        }
        leftElement = document.getElementById(j);
        if(leftElement.getAttribute("style")===element.getAttribute("style")){
            counter2++
        }
        else break;
    }
    for(let i=1;i<=4;i++){
        let z = id + i;
        if((z-1)%localStorage.getItem('cols')>=localStorage.getItem('cols')-1){
            break;
        }
        rightElement = document.getElementById(z);
        if(rightElement.getAttribute("style")===element.getAttribute("style")){
            counter1++
        }
        else break;
    }
    if (counter1 === 3 || counter2===3){
        setWin(element);
    }
}

export const checkWinDiagonal = (id) => {
    let element = document.getElementById(id);
    let rightTopElement;
    let leftTopElement;
    let rightDownElement;
    let leftDownElement;
    let counterRightTop=0;
    let counterLeftTop=0;
    let counterRightDown=0;
    let counterLeftDown=0;
    let j=id;
    for(let i=1;i<4;i++) {
        j = j + (-(localStorage.getItem('cols')+1));
        if(j<0 || (j+1)%localStorage.getItem('cols')===0){
            break;
        }
        leftTopElement = document.getElementById(j);
        if(leftTopElement.getAttribute("style")===element.getAttribute("style")){
            counterLeftTop++
        }
        else break;
    }
    j=id;
    for(let i=1;i<4;i++){
        j = j + (localStorage.getItem('cols')-1);
        if(j>(localStorage.getItem('cols')*localStorage.getItem('rows'))-1 || (j+1)%localStorage.getItem('cols')===0){
            break;
        }
        leftDownElement = document.getElementById(j);
        if(leftDownElement.getAttribute("style")===element.getAttribute("style")){
            counterLeftDown++;
        }
        else break;
    }
    j=id;
    for(let i=1;i<4;i++) {
        j = j + (-(localStorage.getItem('cols')-1));
        if(j<0 || (j-1)%localStorage.getItem('cols')===(localStorage.getItem('cols')-1)){
            break;
        }
        rightTopElement = document.getElementById(j);
        if(rightTopElement.getAttribute("style")===element.getAttribute("style")){
            counterRightTop++
        }
        else break;
    }
    j=id;
    for(let i=1;i<4;i++){
        j = j + (localStorage.getItem('cols')+1);
        if(j>(localStorage.getItem('cols')*localStorage.getItem('rows'))-1 || (j-1)%localStorage.getItem('cols')===(localStorage.getItem('cols')-1)) {
            break;
        }
        rightDownElement = document.getElementById(j);
        if(rightDownElement.getAttribute("style")===element.getAttribute("style")){
            counterRightDown++
        }
        else break;
    }
    if (counterRightTop === 3 || counterLeftTop === 3 || counterRightDown === 3 || counterLeftDown === 3){
        setWin(element);
    }
}