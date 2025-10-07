alert("Welcome to Card color game");
alert("Game started")
    
// To change background color on card click
var card1 = document.querySelector(".div1");
var card2 = document.querySelector(".div2");
var card3 = document.querySelector(".div3");
var card4 = document.querySelector(".div4");
var card5 = document.querySelector(".div5");
var mainSelector = document.querySelector("main");
var restartGameBtn = document.querySelector(".restart-game");
var endGameBtn = document.querySelector(".end-game");



card1.addEventListener("click", function (){   
mainSelector.style.backgroundColor = "red";
card1.innerHTML = mainSelector;
card1.innerHTML = "Card 1";
})

card2.addEventListener("click", function (){
mainSelector.style.backgroundColor = "blue";
card2.innerHTML = mainSelector;
card2.innerHTML = "Card 2";
})

card3.addEventListener("click", function (){
mainSelector.style.backgroundColor = "yellow";
card3.innerHTML = mainSelector;
card3.innerHTML = "Card 3";
})

card4.addEventListener("click", function (){
mainSelector.style.backgroundColor = "green";
card4.innerHTML = mainSelector;
card4.innerHTML = "Card 4";
})

card5.addEventListener("click", function (){
mainSelector.style.backgroundColor = "violet";
card5.innerHTML = mainSelector;
card5.innerHTML = "Card 5";
})
restartGameBtn.addEventListener("click", restartGameFunction);

function restartGameFunction() {
  mainSelector.style.backgroundColor = "white";
}

endGameBtn.addEventListener("click", endGameFunction);

function endGameFunction() {
   var win = window.open("", "_self");
      win.close();
       
}
