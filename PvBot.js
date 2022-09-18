var moveScore = new Array(150);
var movesIndex = new Array(150);
var boardCopy = new Array(150)
function chooseMove()
{
    if(turn == AITurn)
    {
        scoreAssignmentLook1();
        sortArray();
        for(let i = 1; i <= sizeOfBoard; i++)
        {
            //console.log(movesIndex[i]);
            //console.log(",");
            //console.log(moveScore[i]);
            
            //console.log("-");
        }
    
        if(turn == green && AITurn == green)
        {
            
            for(let k = 1; k <= sizeOfBoard; k++)
            {
                if(moveScore[k] != 0)
                {
                    console.log(movesIndex[k]);
                    doMove(movesIndex[k]);
                    return;
                }
            }
            turn = purple;
            
        }
        if(turn == purple && AITurn == purple)
        {
            for(let k = 1; k <= sizeOfBoard; k++)
            {
                console.log(moveScore[k] + "  " + movesIndex[k]);
                if(moveScore[k] != 0)
                {
                    //console.log(movesIndex[k]);
                    doMove(movesIndex[k]);
                    return;
                }
            }
            turn = green;
        }
    }
    
}

setInterval(chooseMove,500); 
function scoreAssignmentLook2()
{
    for(let i = 1; i <= sizeOfBoard; i++)
    {
        moveScore[i] = 0;
    }
    for(let i = 1; i <= sizeOfBoard; i++)
    {
        movesIndex[i] = i;
    }
    for(let i = 1; i <= sizeOfBoard; i++)
    {
        boardCopy[i] = board[i];
    }
    if(turn == green)
    {
        for(let i = 1 ; i <= sizeOfBoard ; i ++)
        {
            ///calculating how many square does this move secure for green
            ///check if possition is available
            if(boardCopy[i] == free && boardCopy[(i + 12) % 144] == free && boardCopy[(i + 24) % 144] == free && boardCopy[(i + 36) % 144] == free)
            {
                boardCopy[i] = blacked;
                boardCopy[(i + 12) % 144] = blacked;
                boardCopy[(i + 24) % 144] = blacked;
                boardCopy[(i + 36) % 144] = blacked;
                /// check the board for how many posibilites does purple have if move i is chosen
                let numberOfPosibilitites = 0;
                for(let j = 1; j <= sizeOfBoard; j++)
                {
                    if(j % 12 == 0 && boardCopy[j] == free && boardCopy[j + 1 - 12] == free && boardCopy[j + 2 - 12] == free && boardCopy[j + 3 - 12] == free)
                    {
                        numberOfPosibilitites++;
                    }
                    if( j % 12 <= 9 && j % 12 != 0 && boardCopy[j] == free && boardCopy[j + 1] == free && boardCopy[j + 2] == free && boardCopy[j + 3] == free)
                    {
                        numberOfPosibilitites++;
                    }
                    if(j % 12 == 10 && boardCopy[j] == free && boardCopy[j + 1] == free && boardCopy[j + 2] == free && boardCopy[j + 3 - 12] == free)
                    {
                        numberOfPosibilitites++;
                    }
                    if(j % 12 == 11 && boardCopy[j] == free && boardCopy[j + 1] == free && boardCopy[j + 2 - 12] == free && boardCopy[j + 3 - 12] == free)
                    {
                        numberOfPosibilitites++;
                    }
                }
                boardCopy[i] = free;
                boardCopy[(i + 12) % 144] = free;
                boardCopy[(i + 24) % 144] = free;
                boardCopy[(i + 36) % 144] = free;
                moveScore[i] = numberOfPosibilitites;   
            }
           
        }
    }
    if(turn == purple)
    {
        
        for(let i = 1 ; i <= sizeOfBoard ; i ++)
        {
            let numberOfPosibilitites = 0;
            if(i % 12 == 0)
            {
                if(boardCopy[i] == free && boardCopy[i + 1 - 12] == free && boardCopy[i + 2 - 12] == free && boardCopy[i + 3 - 12] == free)
                {
                    boardCopy[i] = blacked
                    boardCopy[i + 1 - 12] = blacked
                    boardCopy[i + 2 - 12] = blacked
                    boardCopy[i + 3 - 12] = blacked
                    for(let j = 1; j <= sizeOfBoard; j++)
                    {
                        if(boardCopy[j] == free && boardCopy[(j + 12) % 144] == free && boardCopy[(j + 24) % 144] == free && boardCopy[(j + 36) % 144] == free)
                        {
                            numberOfPosibilitites++;
                        }
                    }
                    boardCopy[i] = free
                    boardCopy[i + 1 - 12] = free
                    boardCopy[i + 2 - 12] = free
                    boardCopy[i + 3 - 12] = free
                }
            }
            if(i % 12 <= 9 && i % 12 != 0)
            {
                if(boardCopy[i] == free && boardCopy[i + 1] == free && boardCopy[i + 2] == free && boardCopy[i + 3] == free)
                {
                    boardCopy[i] = blacked;
                    boardCopy[i + 1] = blacked;
                    boardCopy[i + 2] = blacked;
                    boardCopy[i + 3] = blacked;
                    for(let j = 1; j <= sizeOfBoard; j++)
                    {
                        if(boardCopy[j] == free && boardCopy[(j + 12) % 144] == free && boardCopy[(j + 24) % 144] == free && boardCopy[(j + 36) % 144] == free)
                        {
                            numberOfPosibilitites++;
                        }
                    }
                    boardCopy[i] = free;
                    boardCopy[i + 1] = free;
                    boardCopy[i + 2] = free;
                    boardCopy[i + 3] = free;
                }
                
            }
            if(i % 12 == 10)
            {
                if(boardCopy[i] == free && boardCopy[i + 1] == free && boardCopy[i + 2] == free && boardCopy[i + 3 - 12] == free)
                {
                    boardCopy[i] = blacked;
                    boardCopy[i + 1] = blacked;
                    boardCopy[i + 2] = blacked;
                    boardCopy[i + 3 - 12] = blacked;
                    for(let j = 1; j <= sizeOfBoard; j++)
                    {
                        if(boardCopy[j] == free && boardCopy[(j + 12) % 144] == free && boardCopy[(j + 24) % 144] == free && boardCopy[(j + 36) % 144] == free)
                        {
                            numberOfPosibilitites++;
                        }
                    }
                    boardCopy[i] = free;
                    boardCopy[i + 1] = free;
                    boardCopy[i + 2] = free;
                    boardCopy[i + 3 - 12] = free;
                }
                
            }
            if(i % 12 == 11)
            {
                if(boardCopy[i] == free && boardCopy[i + 1] == free && boardCopy[i + 2 - 12] == free && boardCopy[i + 3 - 12] == free)
                {
                    boardCopy[i] = blacked;
                    boardCopy[i + 1] = blacked;
                    boardCopy[i + 2 - 12] = blacked;
                    boardCopy[i + 3 - 12] = blacked;
                    for(let j = 1; j <= sizeOfBoard; j++)
                    {
                         if(boardCopy[j] == free && boardCopy[(j + 12) % 144] == free && boardCopy[(j + 24) % 144] == free && boardCopy[(j + 36) % 144] == free)
                         {
                            numberOfPosibilitites++;
                         }
                    }
                    boardCopy[i] = free;
                    boardCopy[i + 1] = free;
                    boardCopy[i + 2 -12 ] = free;
                    boardCopy[i + 3 - 12] = free;
                }
                
            }
            moveScore[i] = numberOfPosibilitites;
        }
    }
    
}






function sortArray()
{
    for(let i = 1; i < sizeOfBoard; i++)
        for(let  j = i + 1 ; j <=sizeOfBoard ; j++)
        {
            if(moveScore[i] > moveScore[j])
            {
                moveScore[i] ^= moveScore[j];
                moveScore[j] ^= moveScore[i];
                moveScore[i] ^= moveScore[j];

                movesIndex[i] ^= movesIndex[j];
                movesIndex[j] ^= movesIndex[i];
                movesIndex[i] ^= movesIndex[j];
            }
        }
}

function doMove(k)
{   
    clickNumber++;
    movesDone[clickNumber] = k;
    if(turn == purple)
    {
        turn = green;
        if(k % 12 == 0)
        {
            if(board[k] == free && board[k + 1 - 12] == free && board[k + 2 - 12] == free && board[k + 3 - 12] == free)
            {
                board[k] = purpled;
                board[k + 1 - 12] = purpled;
                board[k + 2 - 12] = purpled;
                board[k + 3 - 12] = purpled;
            }
        }
        if(k % 12 <= 9 && k % 12 != 0)
        {
            if(board[k] == free && board[k + 1] == free && board[k + 2] == free && board[k + 3] == free)
            {
                board[k] = purpled;
                board[k + 1] = purpled;
                board[k + 2] = purpled;
                board[k + 3] = purpled;
            }
        }
        if(k % 12 == 10)
        {
            if(board[k] == free && board[k + 1] == free && board[k + 2] == free && board[k + 3 - 12] == free)
            {
                board[k] = purpled;
                board[k + 1] = purpled;
                board[k + 2] = purpled;
                board[k + 3 - 12] = purpled;
            }
        }
        if(k % 12 == 11)
        {
            if(board[k] == free && board[k + 1] == free && board[k + 2 - 12] == free && board[k + 3 - 12] == free)
            {
                board[k] = purpled;
                board[k + 1] = purpled;
                board[k + 2 - 12] = purpled;
                board[k + 3 - 12] = purpled;
            }
        }
        
        return;
    }
    if(turn == green)
    {
        turn = purple
        board[k] = greened;
        board[(k + 12) % 144] = greened;
        board[(k + 24) % 144] = greened;
        board[(k + 36) % 144] = greened;
        return ;
    }
}

function scoreAssignmentLook1()
{
    for(let i = 1; i <= sizeOfBoard; i++)
    {
        moveScore[i] = 0;
    }
    for(let i = 1; i <= sizeOfBoard; i++)
    {
        movesIndex[i] = i;
    }
    if(turn == green)
    {
        for(let i = 1 ; i <= sizeOfBoard ; i ++)
        {
            ///calculating how many square does this move secure for green
            ///check if possition is available
            if(board[i] == free && board[(i + 12) % 144] == free && board[(i + 24) % 144] == free && board[(i + 36) % 144] == free)
            {
               /// check the board for how many posibilites does purple have if move i is chosen
               let numberOfPosibilitites = 0;
               for(let j = 1; j <= sizeOfBoard; j++)
               {
                    if(j % 12 == 0 && board[j] == free && board[j + 1 - 12] == free && board[j + 2 - 12] == free && board[j + 3 - 12] == free)
                    {
                        numberOfPosibilitites++;
                    }
                    if( j % 12 <= 9 && j % 12 != 0 && board[j] == free && board[j + 1] == free && board[j + 2] == free && board[j + 3] == free)
                    {
                        numberOfPosibilitites++;
                    }
                    if(j % 12 == 10 && board[j] == free && board[j + 1] == free && board[j + 2] == free && board[j + 3 - 12] == free)
                    {
                        numberOfPosibilitites++;
                    }
                    if(j % 12 == 11 && board[j] == free && board[j + 1] == free && board[j + 2 - 12] == free && board[j + 3 - 12] == free)
                    {
                        numberOfPosibilitites++;
                    }
                }
                moveScore[i] = numberOfPosibilitites;     
            }
           
        }
    }
    if(turn == purple)
    {
        
        for(let i = 1 ; i <= sizeOfBoard ; i ++)
        {
            let numberOfPosibilitites = 0;
            if(i % 12 == 0)
            {
                if(board[i] == free && board[i + 1 - 12] == free && board[i + 2 - 12] == free && board[i + 3 - 12] == free)
                {
                   for(let j = 1; j <= sizeOfBoard; j++)
                   {
                        if(board[j] == free && board[(j + 12) % 144] == free && board[(j + 24) % 144] == free && board[(j + 36) % 144] == free)
                        {
                            numberOfPosibilitites++;
                        }
                   }
                }
            }
            if(i % 12 <= 9 && i % 12 != 0)
            {
                if(board[i] == free && board[i + 1] == free && board[i + 2] == free && board[i + 3] == free)
                {
                    for(let j = 1; j <= sizeOfBoard; j++)
                     {
                        if(board[j] == free && board[(j + 12) % 144] == free && board[(j + 24) % 144] == free && board[(j + 36) % 144] == free)
                        {
                            numberOfPosibilitites++;
                        }
                     }
                }
                
            }
            if(i % 12 == 10)
            {
                if(board[i] == free && board[i + 1] == free && board[i + 2] == free && board[i + 3 - 12] == free)
                {
                    for(let j = 1; j <= sizeOfBoard; j++)
                   {
                        if(board[j] == free && board[(j + 12) % 144] == free && board[(j + 24) % 144] == free && board[(j + 36) % 144] == free)
                        {
                            numberOfPosibilitites++;
                        }
                   }
                }
                
            }
            if(i % 12 == 11)
            {
                if(board[i] == free && board[i + 1] == free && board[i + 2 - 12] == free && board[i + 3 - 12] == free)
                {
                    for(let j = 1; j <= sizeOfBoard; j++)
                    {
                         if(board[j] == free && board[(j + 12) % 144] == free && board[(j + 24) % 144] == free && board[(j + 36) % 144] == free)
                         {
                             numberOfPosibilitites++;
                         }
                    }
                }
                
            }
            moveScore[i] = numberOfPosibilitites;
        }
    }
    
}