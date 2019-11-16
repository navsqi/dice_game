document.querySelector("button").addEventListener("click",function(){
    // get a random number beetwen 1 - 6
    var dice1 = Math.floor(Math.random() * (6-1+1))+1;
    var dice2 = Math.floor(Math.random() * (6-1+1))+1;

    // retrieving img element and set the src's attribute
    document.querySelector(".dice1").setAttribute("src","img/dice"+dice1+".png");
    document.querySelector(".dice2").setAttribute("src","img/dice"+dice2+".png");

    // change h1 to display the winner
    if (dice1 > dice2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }else if (dice1 < dice2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }else if (dice1 === dice2){
        document.querySelector("h1").innerHTML = "Draw!";
    }
});