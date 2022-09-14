var board = new Array(150);
var movesDone = new Array(150);
var endOfGame = false;
var clickNumber = 0;
var sizeOfBoard = 144;
var sizeOfIndexes = 0;
var nightMode = false;
var free = 0;
var purpled = 1; 
var greened = 2;
var blacked  = 30;
var purple = 50;
var green = 60;
if(Math.floor(Math.random() * 1000) % 2 == 0)
{
    turn = purple;
}
else
{
    turn = green;
}
firstTurn = turn;
//init board with free
for(let i = 0 ; i < 150 ; i++)
{
    board[i] = free;
}
/*
The game is represented in a 1 dimensional array mainly because there isn't 
an inbuilt 2D array implemented in JavaScript. We could create a 2D array 
by creating an array of arrays, which is harder to maneuver.
*/
    
/*
construction of black squares
the time starts at 100 ms so it instantly
generates square when the page load
*/ 
var timeSquareConstructor = 100;
var constructed = false;
function squarePlacer()
{
    // first square construction
    randomSquare = Math.floor(Math.random() * 145);
    board[randomSquare] = blacked;
    document.getElementById(randomSquare + "board").style.background = "black";

    // second square construction
    randomSquare = Math.floor(Math.random() * 145);
    board[randomSquare] = blacked;
    document.getElementById(randomSquare + "board").style.background = "black";

    /*
    marking the construction and setting the time to infinity
    so the function is not called unnecessary
    */

    constructed = true;
    timeSquareConstructor = 100000;

    /*
    The next for loop solves an issues which I do 
    not fully comprehend. When *refreshing* the page
    it rarely generates more than 2 squares. Thus I preffered
    to mark all the squares blacked. 
    The issue is not common, but it's worth adressing
    */
    for(var i = 1 ; i <= sizeOfBoard ; i++)
    {
        if(board[i] != 0)
        {
            board[i] = blacked
            document.getElementById(i + "board").style.background= "black";
        }
    }
}

function randomSquaresConstructor()
{
    if(!constructed)
    {
        squarePlacer();
    }
}
setInterval(randomSquaresConstructor,timeSquareConstructor);  

/*
Here are listed all the functions necessary for creating a new game
*/
function emptyBoard()
{
    for(let i = 1 ; i <= sizeOfBoard ; i++)
    {
        board[i] = free;
        movesDone[i] = 0;
        document.getElementById(i + "board").style.background = "#C0C0C0";
    }
    
}


function newGame()
{
    emptyBoard();
    squarePlacer();
    clickNumber = 0;
    endOfGame = false;
    if(Math.floor(Math.random() * 10) % 2 == 0)
    {
        turn = purple;
    }
    else
    {
        turn = green;
    }
    firstTurn = turn;
    
}


//placing function for pvp
function placingFunction( nume )
{
    i = parseInt( nume );
    
    if(turn == purple)
    {
        if(!endOfGame)
        {
            if(i % 12 == 0)
            {
                if(board[i] == free && board[i + 1 - 12] == free && board[i + 2 - 12] == free && board[i + 3 - 12] == free)
                {
                    board[i] = purpled;
                    board[i + 1 - 12] = purpled;
                    board[i + 2 - 12] = purpled;
                    board[i + 3 - 12] = purpled;
                    clickNumber++;
                    movesDone[clickNumber] = i;
                    greenLose();
                    if(!endOfGame)
                    {
                        turn = green;
                    }
                }
            }
            if(i % 12 <= 9 && i % 12 != 0)
            {
                if(board[i] == free && board[i + 1] == free && board[i + 2] == free && board[i + 3] == free)
                {
                    board[i] = purpled;
                    board[i + 1] = purpled;
                    board[i + 2] = purpled;
                    board[i + 3] = purpled;
                    clickNumber++;
                    movesDone[clickNumber] = i;
                    greenLose();
                    if(!endOfGame)
                    {
                        turn = green;
                    }
                }
            }
            if(i % 12 == 10)
            {
                if(board[i] == free && board[i + 1] == free && board[i + 2] == free && board[i + 3 - 12] == free)
                {
                    board[i] = purpled;
                    board[i + 1] = purpled;
                    board[i + 2] = purpled;
                    board[i + 3 - 12] = purpled;
                    clickNumber++;
                    movesDone[clickNumber] = i;
                    greenLose();
                    if(!endOfGame)
                    {
                        turn = green;
                    }
                }
            }
            if(i % 12 == 11)
            {
                if(board[i] == free && board[i + 1] == free && board[i + 2 - 12] == free && board[i + 3 - 12] == free)
                {
                    board[i] = purpled;
                    board[i + 1] = purpled;
                    board[i + 2 - 12] = purpled;
                    board[i + 3 - 12] = purpled;
                    clickNumber++;
                    movesDone[clickNumber] = i;
                    greenLose();
                    if(!endOfGame)
                    {
                        turn = green;
                    }
                }
            }
            
            return ;
        }
    }
    else
    {
        sumColboard = board[i] + board[(i + 12) % 144] + board[(i + 24) % 144] + board[(i + 36) % 144];
        if(sumColboard == free && !endOfGame)
        {
            clickNumber++;
            movesDone[clickNumber] = i;
            board[i] = greened;
            board[(i + 12) % 144] = greened;
            board[(i + 24) % 144] = greened;
            board[(i + 36) % 144] = greened;
            purpleLose();
            if(!endOfGame)
            {
                turn = purple;
            }
        }
       
    }
    
}


function hoverFunction()
{
    hoverArray = new Array(150);
    for(let i = 1 ; i <= sizeOfBoard ; i++)
    {
       
        if($(document.getElementById(i + "board")).is(":hover") == 0)
        {
            hoverArray[i] = 0;
        }
        else
        {
            if(turn == green && board[i] == free && board[(i + 12) % 144] == free && board[(i + 24) % 144] == free && board[(i + 36) % 144] == free)
            {
                hoverArray[i] = 1;
                hoverArray[(i + 12) % 144] = 1;
                hoverArray[(i + 24) % 144] = 1;
                hoverArray[(i + 36) % 144] = 1;
                break;
            }
            if(turn == purple)
            {
                if(i % 12 == 0)
                {
                    if(board[i] == free && board[i + 1 - 12] == free && board[i + 2 - 12] == free && board[i + 3 - 12] == free)
                    {
                        hoverArray[i] = 1;
                        hoverArray[i + 1 - 12] = 1;
                        hoverArray[i + 2 - 12] = 1;
                        hoverArray[i + 3 - 12] = 1;
                        break;
                    }
                }
                if(i % 12 <= 9 && i % 12 != 0)
                {
                    if(board[i] == free && board[i + 1] == free && board[i + 2] == free && board[i + 3] == free)
                    {
                        hoverArray[i] = 1;
                        hoverArray[i + 1] = 1;
                        hoverArray[i + 2] = 1;
                        hoverArray[i + 3] = 1;
                        break;
                    }
                }
                if(i % 12 == 10)
                {
                    if(board[i] == free && board[i + 1] == free && board[i + 2] == free && board[i + 3 - 12] == free)
                    {
                        hoverArray[i] = 1;
                        hoverArray[i + 1] = 1;
                        hoverArray[i + 2] = 1;
                        hoverArray[i + 3 - 12] = 1;
                        break;
                    }
                }
                if(i % 12 == 11)
                {
                    if(board[i] == free && board[i + 1] == free && board[i + 2 - 12] == free && board[i + 3 - 12] == free)
                    {
                        hoverArray[i] = 1;
                        hoverArray[i + 1] = 1;
                        hoverArray[i + 2 - 12] = 1;
                        hoverArray[i + 3 - 12] = 1;
                        break;
                    }
                }
                
            }
        }
    }

    for(let i = 1 ; i <= sizeOfBoard; i++)
    {
        if(hoverArray[i] == 1)
        {   
            if(turn == purple)
            {
                document.getElementById(i + "board").style.background = "#803080";
            }
            else
            {
                document.getElementById(i + "board").style.background = "#808030";
            }    
        }
        else
        {
            if(board[i] == free)
            {
                if(nightMode == false)
                {
                    document.getElementById(i + "board").style.background = "#C0C0C0";
                }
                else
                {
                    document.getElementById(i + "board").style.background = "#C0C0C0";
                }
            }
        
            
        }

    }
}

/*
The hover function is a visual representation of if a move is valid or not
*/
function repetThisFunction()
{
    displayTurn();
    hoverFunction();
    displayBoard();
    
}
setInterval(repetThisFunction,60); 

function displayBoard()
{
    for(let i = 1; i <= 144; i++)
    {
        if(board[i] == blacked)
        {
            document.getElementById(i + "board").style.background = "black";
        }
        if(board[i] == purpled)
        {
            document.getElementById(i + "board").style.background = "#800060";
        }
        if(board[i] == greened)
        {
            document.getElementById(i + "board").style.background = "green";
        }
    }
}




function displayTurn()
{
    if(turn == purple)
    {
        document.getElementById("greenTurn").style.display = "none";
        document.getElementById("purpleTurn").style.display = "block";
    }
    else
    {
        document.getElementById("purpleTurn").style.display = "none";
        document.getElementById("greenTurn").style.display = "block";
    }
}

function purpleLose()
{
    isAvailableI = false;
    for(let i = 1 ; i <= sizeOfBoard && isAvailableI == false; i++)
    {
        sumRowboard = board[i] + board[i + 1] + board[i + 2] + board[i + 3];

        if(i % 12 <= 9 && sumRowboard == 0)
        {
            isAvailableI = true;
        }
    }
    if(isAvailableI == false)
    {
        alert("Green player won");
    }
}

function greenLose()
{
    var isAvailableI = false;
    for(let i = 1 ; i <= 108 && isAvailableI == false; i++)
    {
        sumColboard = board[i] + board[i + 12] + board[i + 24] + board[i + 36];
        
        if(sumColboard == 0)
        {
            isAvailableI = true;
        }
    }
    if(isAvailableI == false)
    {
        alert("purple player won");
    }
}


function ToggleUI()
{
    document.body.classList.toggle("blackBackground");

    for(let i =  1; i <= sizeOfBoard ; i++)
    {
        document.getElementById(i + "board").classList.toggle("blackBackground");
    }
    for(let i = 1; i <= 25; i++)
    {
        document.getElementById(i + "letter").classList.toggle("blackBackground");
    }

    document.getElementById("forfeitButton").classList.toggle("gray1Background");
    document.getElementById("undoButton").classList.toggle("gray1Background");
    document.getElementById("newGameButton").classList.toggle("gray1Background");
    document.getElementById("toggleUIButton").classList.toggle("gray1Background");
    document.getElementById("leftSide").classList.toggle("gray2Background");
    
    nightMode = !nightMode;

}


function forfeit()
{
    if(turn == purple)
    {
        alert("Green player won");
    }
    else
    {
        alert("Purple player won");
    }
    endOfGame = true;
}

function undo()
{
    if(clickNumber != 0)
    {
        deleteElement = movesDone[clickNumber];
        clickNumber--;

        if(turn == purple)
        {
            /*
            if it's purple's turn, then we need to remove the precedent move done in green's turn
            */
            board[deleteElement] = free;
            board[(deleteElement + 12) % 144] = free;
            board[(deleteElement + 24) % 144] = free;
            board[(deleteElement + 36) % 144] = free;
            turn = green;
            return ;
            
        }
        if(turn == green)
        {
            turn = purple;
            if(deleteElement % 12 == 0)
            {
                board[deleteElement] = free;
                board[deleteElement + 1 - 12] = free;
                board[deleteElement + 2 - 12] = free;
                board[deleteElement + 3 - 12] = free;
                return;
            }
            if(deleteElement % 12 <= 9)
            {
                board[deleteElement] = free;
                board[deleteElement + 1] = free;
                board[deleteElement + 2] = free;
                board[deleteElement + 3] = free;
                return;
              
            }
            if(deleteElement % 12 == 10)
            { 
                board[deleteElement] = free;
                board[deleteElement + 1] = free;
                board[deleteElement + 2] = free;
                board[deleteElement + 3 - 12] = free;
                return;
            }
            if(deleteElement % 12 == 11)
            {
                board[deleteElement] = free;
                board[deleteElement + 1] = free;
                board[deleteElement + 2 - 12] = free;
                board[deleteElement + 3 - 12] = free;
                return;
            }
            return ;
        }
    }
}
