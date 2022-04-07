//This variable keeps track of whos turn it is//
let activePlayer ='X';
//This Array stores an array f moved. We use this to determaine win conditions//
let selectedSquares = [];

//This function is for placing an x or o in the square//
function placeXOrO (squareNumber) {
    //This condition ensures a square hasnt been selected already//
    //the .some() method is used to check each element of selectSquare array to see if it contains the square number clicked on//
    if (!selectedSquares.some(element => element.includes(squareNumber))){
        //This variable retrieves the html element id that was clicked on//
        let select = document.getElementById(squareNumber);
        //This condition checks whos turn it is//
        if (activePlayer === 'X') {
            //If activePlayer is equal the "X" the x.png file in placed in HTML.//
            select.style.backgroundImage = 'url("Images/x1.png")';
            //Active player may only be "X" or "O" so, if not "X" it must be "O"
            } else {
                //If activePlayer is equal to "O" the o.png is placed in the HTML.//
                select.style.backgroundImage = 'url("Images/o1.png")';
            }
            //SquareNumber and ActivePlayer are concatedated together and added to the Array//
            selectedSquares.push(squareNumber + activePlayer);
            //This called a function to check for any win conditions.//
            checkWinConditions();
            //This conditions is changing the active player.//
            if (activePlayer === 'X') {
                //If active player is "X" change to "O"//
                activePlayer = 'O';
                //If activePlayer is anything other than "X"//
            } else { 
                //Change the active player to "X"//
                activePlayer = 'X';
            }
            //This function played placement sounds//
            audio('./media/place_1.mp3')
            //This condition checks to see if it the computers turn//
            if(activePlayer ==='O'){
                //This function dissables clicking for computer choice//
                disableClick();
                //This functions waits 1 second before placing the image and enabling click//
                setTimeout(function() { computersTurn();}, 1000);
            }
            //returning true is needed for our computersTurn() Function to work.//
            return true;

    }
    //This function results in the random square being selected.//
    function computersTurn() {
        //This boolean is needed for our while loop.//
        let success = false;
        //this variable stores a random number 0-8//
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already//
        while(!success){
            //A random number between 10-8 is selected///
            pickASquare = String(Math.floor(Math.random() *9));
            //if the random number evaluates returns true, the square hasnt been selected//
            if (placeXOrO(pickASquare)){
                //this line calls the function//
                placeXOrO(pickASquare);
                //this changed our boolean and ends the loop//
                success = true;

            };
        }
    }
}

//this function parsezs the selectedSquares array to search for win conditions.//
//drawWinine function is called to draw a line if condition is met.
function checkWinConditions(){
    // X 0, 1, 2 condition.//
    if       (arrayIncludes('0X' , '1X' , '2X')) { drawWinLine(50, 100, 558, 100);}
    // X 3, 4, 5 condition.//
    else if (arrayIncludes('3X' , '4X' , '5X')) { drawWinLine(50, 304, 558, 304);}
    // X 6, 7, 8 condition.//
    else if (arrayIncludes('6X' , '7X' , '8X')) { drawWinLine(50, 508, 558, 508);}
    // X 0, 3, 6 condition.//
    else if (arrayIncludes('0X' , '3X' , '6X')) { drawWinLine(100, 50, 100, 558);}
    // X 1, 4, 7 condition.//
    else if (arrayIncludes('1X' , '4X' , '7X')) { drawWinLine(304, 50, 304, 558);}
    // X 2, 5, 8 condition.//
    else if (arrayIncludes('2X' , '5X' , '8X')) { drawWinLine(508, 50, 508, 558);}
    // X 6, 4, 2 condition.//
    else if (arrayIncludes('6X' , '4X' , '2X')) { drawWinLine(100, 508, 510, 90);}
    // X 0, 4, 8 condition.//
    else if (arrayIncludes('0X' , '4X' , '8X')) { drawWinLine(100, 100, 520, 520);}
      // O  0, 1, 2 condition.//
      else if (arrayIncludes('0O' , '1O' , '2O')) { drawWinLine(50, 100, 558, 100);}
      // O 3, 4, 5 condition.//
      else if (arrayIncludes('3O' , '4O' , '5O')) { drawWinLine(50, 304, 558, 304);}
      // O 6, 7, 8 condition.//
      else if (arrayIncludes('6O' , '7O' , '8O')) { drawWinLine(50, 508, 558, 508);}
      // O 0, 3, 6 condition.//
      else if (arrayIncludes('0O' , '3X' , '6X')) { drawWinLine(100, 50, 100, 558);}
      // O 1, 4, 7 condition.//
      else if (arrayIncludes('1X' , '4O' , '7O')) { drawWinLine(304, 50, 304, 558);}
      // O 2, 5, 8 condition.//
      else if (arrayIncludes('2O' , '5O' , '8O')) { drawWinLine(508, 50, 508, 558);}
      // O 6, 4, 2 condition.//
      else if (arrayIncludes('6O' , '4O' , '2O')) { drawWinLine(100, 508, 510, 90);}
      // O 0, 4, 8 condition.//
      else if (arrayIncludes('0O' , '4O' , '8O')) { drawWinLine(100, 100, 520, 520);}
      //This conditions checks for tie. if none of the above conditions reguister and 9 squares are selected, the code executes.//
      else if (selectedSquares.length >= 9) {
          //This functions plays the tie game sound//
          audio('./media/tie_1.mp3');
          //this function sets a .3 second timer before the resetGame is called.//
          setTimeout(function () {resetGame();}, 1000);
      }

      //this function checks if an array included 3 strings. it is used to check for each win condition.//
      function arrayIncludes(squareA, squareB, squareC) {
          //the next 3 variables will be used to check for 3 in a row//
          const a = selectedSquares.includes(squareA);
          const b = selectedSquares.includes(squareB);
          const c = selectedSquares.includes(squareC);
          //if the 3 variables we pass are all included in our array true is returned and our else if conditions executes the drawWinLine function//
          if (a === true && b === true && c === true) {return true;}

      }
    }

    //this function makes our body element temporarily unclickable.//
    function disableClick(){
        //this makes our body unclickable//
        body.style.pointerEvents = 'none';
        //this make our body clickable again after 1 second.//
        setTimeout(function() {body.style.pointerEvents = 'auto' ;},1000)
    }
    //This function takes a string parameter of the path you set earlier for placement sound ('./media/place.mp3')//
    function audio (audioURL) {
        //we create a new audio object and we pass the path as a parameter//
        let audio = new Audio(audioURL);
        //play method plays our audio sound//
        audio.play();
    }

    //This function utilizes html canvas to drae win lines//
    function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
        //this line accesses our html canvas element.//
        const canvas = document.getElementById('win-lines');
        //this line gives us access to the menthods and properties to use on canvas//
        const c = canvas.getContext ('2d');
        //This line indicates where the start of a lines x axis is.//
        let x1 = coordX1,
        //This lin indicates where the start of a lines y axis is.//
        y1 = coordY1,
        //this line indicates where the end of a lines x axis is.//
        x2 = coordX2,
        //This lines indicates where the end of a lines y axis is.//
        y2 = coordY2,
        //this variable stores temporary x axis data we update in our animation loop.//
        x = x1,
        //this variable stores temporay y axis data we update in our animation loop.//
        y = y1;

        //this function interacts with the canvas//
        function animateLineDrawing() {
            // this variable creates the loop for when the game ends it resets.//
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //this method clears content from the last loop iteration.//
            c.clearRect(0, 0, 608, 608);
            //this method starts a new path.//
            c.beginPath();
            //this method moves us to a starting point for our line.//
            c.moveTo(x1, y1);
            //this metod indicates the end point in our line.//
            c.lineTo(x, y);
            //this method set the width of our line.//
            c.lineWidth = 10;
            //this method sets the color of our line.//
            c.strokeStyle= 'rgba(70, 255, 33, .8)';
            //This method draws everything we laid out above.//
            c.stroke();
            //this condition checks if we've reached the endpoint.//
            if (x1 <= x2 && y1 <= y2) {
                //this condition adds 10 to the previous end x point.//
                if (x < x2) { x += 10;}
                //This condtions adds 10 to the previous y point.//
                if (y < y2) { y += 10;}
                //this condition cancels our animation loop if we reach the end points.//
                if ( x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }
            //this condition is similar to the one above it was necessary for the 6, 4, 2 win condition.//
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) {x += 10; }
                if (y > y2) {y -= 10; }
                if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
            }
        }

        //this function clears our canvas after the win line is drawns.//
        function clear() {
            //this line starts our naimation loop.//
            const animationLoop = requestAnimationFrame(clear);
            //this line clears our canvas.//
            c.clearRect (0, 0, 608, 608);
            // this lines stops our animation loop.//
            cancelAnimationFrame(animationLoop) ;

        }
        //this line disallows clicking while the win sound i playing//
        disableClick();
        //this line plays the win sound.// 
        audio('./Media/winGame_1.mp3');
        //this line calls our main animation loop.//
        animateLineDrawing();
        //this line waits 1 second. then clears canvas, resets game, and allows clicking again.//
        setTimeout(function () { clear(), resetGame(); }, 1000);

    }

    //this function resets the game in a tie or a win.//
    function resetGame() {
        //this for loop iterates through each HTML square element.//
        for (let i = 0; i < 9; i++) {
            //this variable gets the html element of i.//
            let square = document.getElementById(String(i));
            //this removes the elements backgroundImage.
            square.style.backgroundImage = '';
        }
        //this resets our array so it is empty and we can start over.//
        selectedSquares = [];
    }