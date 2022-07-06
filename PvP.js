    myArray = new Array(150);
    movesDone = new Array(150);
    endOfGame = false;
    clickNumber = 1;

    nigthMode = false;



    const stateOfElement = {
        free: 0,
        occupied: 1,
        blacked: 2,

    }
    for( i = 0 ; i < 150 ; i++)
    {
        myArray[i] = stateOfElement.free;
    }
        

    timeSquareConstructor = 100;
    constructed = false;
    function squarePlacer()
    {
        var randomSquare1 = Math.floor(Math.random() * 145);
        myArray[randomSquare1] = stateOfElement.blacked;
        document.getElementById(randomSquare1+"demo").style.background= "black";

        randomSquare1 = Math.floor(Math.random() * 145);
        myArray[randomSquare1] = stateOfElement.blacked;
        document.getElementById(randomSquare1+"demo").style.background= "black";

        constructed = true;
        timeSquareConstructor = 100000;
        for(var i = 1 ; i < 145 ; i++)
        {
            if(myArray[i]!=0)
            {
                document.getElementById(i+"demo").style.background= "black";
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

    






    function emptyBoard()
    {
        for( var i = 1 ; i < 145 ; i++)
        {
            myArray[i] = stateOfElement.free;
            document.getElementById(i + "demo").style.background = "#C0C0C0";
        }
        
    }
    function emptyRewinder()
    {
        for( var i = 1 ; i <= 36; i ++)
        {
            
            document.getElementById( i + "move").innerHTML = "";
            if( nigthMode == false)
            {
                document.getElementById( i + "move").style.backgroundColor = "#E8E8E8";
            }
            else
            {
                document.getElementById( i + "move").style.backgroundColor = "#696969";
            }
        }
    }

    function newGame()
    {
        emptyBoard();
        emptyRewinder();
        squarePlacer();
        clickNumber = 1;
        
    }



    function placingFunction( nume )
    {
        var altaVariabila = parseInt( nume );
        var sumRowMyArray = myArray[altaVariabila] + myArray[altaVariabila + 1] + myArray[altaVariabila + 2] + myArray[altaVariabila + 3];
        var sumColMyArray = myArray[altaVariabila] + myArray[altaVariabila + 12] + myArray[altaVariabila + 24] + myArray[altaVariabila + 36];
        var inBoundRow = (altaVariabila - 1) % 12 < 9;
        var inBoundCol = (altaVariabila - 1) / 12 <9;
        if(clickNumber % 2 == 1)
        {
            
            if(sumRowMyArray == 0 && inBoundRow && !endOfGame)
            {
                rewinder(altaVariabila);
                movesDone[clickNumber] = altaVariabila;
                clickNumber++;
                document.getElementById(altaVariabila + "demo").style.background = "#800060";
                document.getElementById(altaVariabila + 1 + "demo").style.background = "#800060";
                document.getElementById(altaVariabila + 2 + "demo").style.background = "#800060";
                document.getElementById(altaVariabila + 3 + "demo").style.background = "#800060";
                myArray[altaVariabila] = stateOfElement.occupied;
                myArray[altaVariabila + 1] = stateOfElement.occupied;
                myArray[altaVariabila + 2] = stateOfElement.occupied;
                myArray[altaVariabila + 3] = stateOfElement.occupied;
                greenLose();
            }
            
        }
        else
        {
            if(sumColMyArray == 0 && inBoundCol && !endOfGame)
            {
                rewinder(altaVariabila);
                movesDone[clickNumber] = altaVariabila;
                clickNumber++;
                document.getElementById(altaVariabila + "demo").style.background = "green";
                document.getElementById(altaVariabila + 12 + "demo").style.background = "green";
                document.getElementById(altaVariabila + 24 + "demo").style.background = "green";
                document.getElementById(altaVariabila + 36 + "demo").style.background = "green";     
                myArray[altaVariabila] = stateOfElement.occupied;
                myArray[altaVariabila + 12] = stateOfElement.occupied;
                myArray[altaVariabila + 24] = stateOfElement.occupied;
                myArray[altaVariabila + 36] = stateOfElement.occupied;
                purpleLose();
            }
           
        }
        
    }
    function rewinder(altaVariabila)
    {
        const letter = ["A","B","C","D","E","F","G","H","I","J","K","L"];
        const number = [1, 2,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ];
        if(clickNumber % 2 == 1)
        {
            document.getElementById( clickNumber + "move").style.color = "purple";
            if( nigthMode == false)
            {
                document.getElementById( clickNumber + "move").style.backgroundColor = "#f8f8ff";
            }
            else
            {
                document.getElementById( clickNumber + "move").style.backgroundColor = "#696969";
            }
            document.getElementById( clickNumber + "move").innerHTML = clickNumber + ") " + letter[ Math.floor((altaVariabila -1 )/ 12)] + number[ Math.floor((altaVariabila - 1)%12)] + "<->" + letter[Math.floor((altaVariabila -1 )/ 12)] + number[ Math.floor((altaVariabila - 1)%12)+3];
        }
        else
        {
            document.getElementById( clickNumber + "move").style.color = "green";
            if(nigthMode == false)
            {
                document.getElementById( clickNumber + "move").style.backgroundColor = "#E8E8E8";
            }
            else
            {
                document.getElementById( clickNumber + "move").style.backgroundColor = "#808080";
            }
            document.getElementById( clickNumber + "move").innerHTML = clickNumber + ") " +  letter[ Math.floor((altaVariabila -1 )/ 12)] + number[ Math.floor((altaVariabila - 1)%12)] + "<->" + letter[Math.floor((altaVariabila -1 )/ 12)+3] + number[ Math.floor((altaVariabila - 1)%12)];
        }
        
    }

    function hoverFunction()
    {
        displayTurn();
        hoverArray = new Array(150);
        for(var i = 1 ; i < 145 ; i++)
        {
            var sumRowMyArray = myArray[i] + myArray[i + 1] + myArray[i + 2] + myArray [i + 3];
            var sumColMyArray = myArray[i] + myArray[i + 12] + myArray[i + 24] + myArray[i + 36];
            if($(document.getElementById(i + "demo")).is(":hover") == 0)
                hoverArray [i]==0;
            else
            {
                if((clickNumber % 2 == 1) && ((i-1)% 12 < 9) && (sumRowMyArray ==0))
                {
                    hoverArray[i] = 1;
                    hoverArray[ i + 1 ] = 1;
                    hoverArray[ i + 2 ] = 1;
                    hoverArray[ i + 3 ] = 1
                }
                if((clickNumber % 2 == 0 ) && ((i-1)/12 < 9) && (sumColMyArray ==0))
                {
                    hoverArray[ i ] = 1;
                    hoverArray[ i + 12 ] = 1;
                    hoverArray[ i + 24 ] = 1;
                    hoverArray[ i + 36 ] = 1
                }
            }
        }
        for(var i = 1 ; i < 145; i++)
        {
            if(hoverArray[i] == 1 )
            {   
                if(clickNumber % 2 == 1)
                {
                    document.getElementById(i + "demo").style.background = "#803080";
                }
                else
                {
                    document.getElementById(i + "demo").style.background = "#808030";
                }
                
            }
            else
            {
                if(myArray[i] == stateOfElement.free)
                {
                    if(nigthMode == false)
                    {
                        document.getElementById(i + "demo").style.background = "#C0C0C0";
                    }
                    else
                    {
                        document.getElementById(i + "demo").style.background = "#696969";
                    }
                }
            }

        }
    }
    setInterval(hoverFunction,45); 

    
    
    function displayTurn()
    {
        if(clickNumber % 2 == 1)
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
        var isAvailableI = false;
        for(var i = 1 ; i < 145 && isAvailableI == false; i++)
        {
            var sumRowMyArray = myArray[i] + myArray[i + 1] + myArray[i + 2] + myArray[i + 3];

            if(i % 12 <= 9 && sumRowMyArray == 0)
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
        for(var i = 1 ; i <= 108 && isAvailableI == false; i++)
        {
            var sumColMyArray = myArray[i] + myArray[i + 12] + myArray[i + 24] + myArray[i + 36];
            
            if(sumColMyArray == 0)
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

        for(var i =  1; i <= 144 ; i++)
        {
            document.getElementById(i + "demo").classList.toggle("blackBackground");
        }
        for(var i = 1; i <= 25; i++)
        {
            document.getElementById(i+"letter").classList.toggle("blackBackground");
        }

        document.getElementById("forfeitButton").classList.toggle("gray1Background");
        document.getElementById("undoButton").classList.toggle("gray1Background");
        document.getElementById("newGameButton").classList.toggle("gray1Background");
        document.getElementById("toggleUIButton").classList.toggle("gray1Background");

        document.getElementById("movesDoneID").classList.toggle("gray2Background");
        document.getElementById("outerID").classList.toggle("gray2Background");
        
        for( var i = 1; i < clickNumber; i++)
        {
            if( nigthMode == false)
            {
                if(i % 2 == 1)
                {
                    document.getElementById( i + "move").style.backgroundColor = "#696969";
                }
                else
                {
                    document.getElementById( i + "move").style.backgroundColor = "#808080";
                }
            }
            else
            {
                if(i % 2 == 1)
                {
                    document.getElementById( i + "move").style.backgroundColor = "#f8f8ff";
                }
                else
                {
                    document.getElementById( i + "move").style.backgroundColor = "#E8E8E8";
                }
            }
        }
        for( var i = clickNumber ; i <= 36; i ++)
        {
            if( nigthMode == true)
            {
                document.getElementById( i + "move").style.backgroundColor = "#E8E8E8";
            }
            else
            {
                document.getElementById( i + "move").style.backgroundColor = "#696969";
            }
        }
        nigthMode = (nigthMode + 1 ) % 2;

    }

    
    function forfeit()
    {
        if(clickNumber % 2 == 1)
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
        if(clickNumber > 1)
        {
            clickNumber -- ;
            deleteElement = movesDone[clickNumber];
            if( clickNumber % 2 == 1)
            {
                // deleting on table
                document.getElementById(deleteElement + "demo").style.background = "#C0C0C0";
                document.getElementById(deleteElement + 1 + "demo").style.background = "#C0C0C0";
                document.getElementById(deleteElement + 2 + "demo").style.background = "#C0C0C0";
                document.getElementById(deleteElement + 3 + "demo").style.background = "#C0C0C0";
                myArray[deleteElement] = stateOfElement.free;
                myArray[deleteElement + 1] = stateOfElement.free;
                myArray[deleteElement + 2] = stateOfElement.free;
                myArray[deleteElement + 3] = stateOfElement.free;
            }
            else
            {
                // deleting on table
                document.getElementById(deleteElement + "demo").style.background = "C0C0C0";
                document.getElementById(deleteElement + 12 + "demo").style.background = "C0C0C0";
                document.getElementById(deleteElement + 24 + "demo").style.background = "C0C0C0";
                document.getElementById(deleteElement + 36 + "demo").style.background = "C0C0C0";     
                myArray[deleteElement] = stateOfElement.free;
                myArray[deleteElement + 12] = stateOfElement.free;
                myArray[deleteElement + 24] = stateOfElement.free;
                myArray[deleteElement + 36] = stateOfElement.free;
            }
            // deleting on rewind tab
            if(nigthMode == false)
            {
                document.getElementById( clickNumber + "move").style.backgroundColor = "#E8E8E8";
            }
            else
            {
                document.getElementById( clickNumber + "move").style.backgroundColor = "#696969";
            }
            document.getElementById( clickNumber + "move").innerHTML = "";
        }
    }
