let color = "black"


document.addEventListener("DOMContentLoaded" , function () {
    createBoard(32)
    let btnPopUp = document.getElementById("popup");
    btnPopUp.addEventListener("click" , function () {
        let size = getSize() ;
        createBoard(size)
    })
    console.log("hi")
})


function createBoard(size) {
    let board = document.querySelector(".board") ;

    board.style.gridTemplateColumns = `repeat(${size} , 1fr)` ;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)` ;
    

    let numDivs = size * size ;
    for (let i = 0 ; i <= numDivs ; i++) {
        let div = document.createElement("div") ;
        div.addEventListener("mouseover" , colorDiv)
        board.insertAdjacentElement("beforeend" , div) ;

    }
}

function getSize () {
    let input = prompt("What will be the size of the board ?")
    let message = document.querySelector("#message") ;

    if (input == "") {
        message.innerHTML = "Please provide a number"
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Choose a number between 0 to 100"
    }
    else {
        message.innerHTML = "Now you can play :)"
        return input
    }

}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360} , 100% , 50%)`
    }
    else {
        this.style.backgroundColor = `black`
    }

}

function setColor(colorChoice) {
    color = colorChoice
}

function clearBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}