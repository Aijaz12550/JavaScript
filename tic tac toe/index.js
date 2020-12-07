let win = [["1","2","3"],["4","5","6"],["7","8","9"],  ["1","4","7"],["2","5","8"],["3","6","9"],  ["1","5","9"],["3","5","7"]];
let gameOver = false;
let drawCounter = 0;     // if drawCounter is 9, there is a draw

let letter = "X";   // alternates between x and o

let addLetter = () => {
    let id = event.target.id;   // get id of the box clicked

    if (gameOver === true){
        ''
    }

    // If user clicks a box that already has a letter in it, nothing will happen
    else if ($(`#${id}`).text() === "X" || $(`#${id}`).text() === "O"){
        ''
    }

    else{
        drawCounter += 1;        // if drawCounter is 9, there is a draw
        console.log(drawCounter);

        // fills in the grid with the right letter (X or O)
        $(`#${id}`).html(`${letter}`);
        // Checks for winners
        winCheck();
    }
}


let winCheck = () => {
    let rowCount = 0    // if rowCount is 3, that means there is a 3 in a row

    // check if there is 3 in a row
    for (i=0; i<=7; i++){
        for (j=0; j<=3; j++){
            // check if current grid is equal to letter(x or o)
            id = win[i][j]  // id of grid we are checking
            if ( $(`#${id}`).text() == letter ){
                rowCount += 1;
            
            // check if someone won
            if (rowCount==3){
                // change the colour of winning letters 
                for (x=0; x<=3; x++){
                    let number = win[i][x];
                    $(`#${number}`).css("color", "red");
                }
                gameOver=true;
            } 
            }            
        }
        rowCount=0;
    }
    console.log(gameOver);


    // display winning message
    if (gameOver === true){
        $("#message").html(`${letter} wins!!!!`)
    }


    // if no one won, alternates letter between x and o
    else{
        if (letter==="X"){
            letter = "O";
        }
        else if (letter==="O"){
            letter="X";
        }
        $("#message").html(`it's ${letter}'s turn`)

        if (drawCounter == 9){
            console.log("draw");
            $("#message").html("It's a draw!");
        }
    }
}



// restart game
let reset = () => {
    location.reload();
}