let gameon = true;
while(gameon){
    let winnum = Math.random() * 10;
    winnum = Math.round(winnum);
    count = 0;
    let userno = +prompt("Guess Number bitween 1 to 10");
    while(winnum != userno){
        if(userno > winnum){
            alert("guessed too high");
        } else if (userno < winnum) {
            alert("guessed too low");
        } else {
            alert("something went wrong ! : ( ");
        }
        userno = +prompt("Guess again bitween 1 to 10 !");
        count++;
    }
    if(userno == winnum) {
        alert(`you win yaay! :) \nyou guessed ${count} times`);
    }

    let ans = prompt("Do you want to countinue? y/n");
    if(ans == "n" || ans == "N"){
        gameon = false;
        alert("Thank you for playing :)");
        break;
    } else if(ans == 'y' || ans == "Y"){
        alert("Game re-started guess again");
    } else {
        alert("something went wrong");
    }
}