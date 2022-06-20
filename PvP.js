    myArray = new Array(150);
    
    clickNumber = 1;
    const stateOfElement = {
        free: 0,
        occupied: 1,
        blacked: 2,

    }
    for( i = 0 ; i < 150 ; i++)
    {
        myArray[i] =0;
    }
        

    timeSquareConstructor = 50;
    constructed = false;
    function randomSquaresConstructor()
    {
        if(!constructed)
        {
            var randomSquare1 = Math.floor(Math.random() * 145);
            myArray[randomSquare1] = stateOfElement.occupied;
            document.getElementById(randomSquare1+"demo").style.background= "black";

            randomSquare1 = Math.floor(Math.random() * 145);
            myArray[randomSquare1] = stateOfElement.occupied;
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
    }
    setInterval(randomSquaresConstructor,timeSquareConstructor);  

    
    
    function placingFunction( nume )
    {
        var altaVariabila = parseInt( nume );
        var sumRowMyArray = myArray[altaVariabila]+myArray[altaVariabila+1]+myArray[altaVariabila+2]+myArray[altaVariabila+3];
        var sumColMyArray = myArray[altaVariabila]+myArray[altaVariabila+12]+myArray[altaVariabila+24]+myArray[altaVariabila+36];
        var inBoundRow = (altaVariabila - 1) % 12 < 9;
        var inBoundCol = (altaVariabila - 1) / 12 <9;
        if(clickNumber % 2 == 1)
        {
            
            if(sumRowMyArray == 0 && inBoundRow)
            {
          
                clickNumber++;
                document.getElementById(altaVariabila+"demo").style.background = "#800060";
                document.getElementById(altaVariabila+1+"demo").style.background = "#800060";
                document.getElementById(altaVariabila+2+"demo").style.background = "#800060";
                document.getElementById(altaVariabila+3+"demo").style.background = "#800060";
                myArray[altaVariabila] = stateOfElement.occupied;
                myArray[altaVariabila + 1] = stateOfElement.occupied;
                myArray[altaVariabila + 2] = stateOfElement.occupied;
                myArray[altaVariabila + 3] = stateOfElement.occupied;
                
               greenLose();
            }
            
        }
        else
        {
            if(sumColMyArray == 0 && inBoundCol)
            {
          
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
            document.getElementById( clickNumber + "move").innerHTML = clickNumber + ") " + letter[ Math.floor((altaVariabila -1 )/ 12)] + number[ Math.floor((altaVariabila - 1)%12)] + "<->" + letter[Math.floor((altaVariabila -1 )/ 12)] + number[ Math.floor((altaVariabila - 1)%12)+3];
        }
        else
        {
            document.getElementById( clickNumber + "move").style.color = "green";
            document.getElementById( clickNumber + "move").innerHTML = clickNumber + ") " +  letter[ Math.floor((altaVariabila -1 )/ 12)] + number[ Math.floor((altaVariabila - 1)%12)] + "<->" + letter[Math.floor((altaVariabila -1 )/ 12)+3] + number[ Math.floor((altaVariabila - 1)%12)];
        }
        
    }

    
    function hoverFunction()
    {
        

        hoverArray = new Array(150);
        for(var i = 1 ; i < 145 ; i++)
        {
            var sumRowMyArray = myArray[i] + myArray[i + 1] + myArray[i + 2] + myArray[i + 3];
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
                    document.getElementById(i+"demo").style.background = "#803080";
                }
                else
                {
                    document.getElementById(i+"demo").style.background = "#808030";
                }
                
            }
            else
            {
                if(myArray[i] == stateOfElement.free)
                    document.getElementById(i+"demo").style.background = "#C0C0C0";
            }

        }
    }
    setInterval(hoverFunction,30); 

    
    
    function displayTurn()
    {
        if(clickNumber % 2 == 1)
        {
            document.getElementById("purpleTurn").style.display = "block";
            document.getElementById("greenTurn").style.display = "none";
        }
        else
        {
            document.getElementById("purpleTurn").style.display = "none";
            document.getElementById("greenTurn").style.display = "block";
        }
    }
    setInterval(displayTurn,30);

    function purpleLose()
    {
        for(var i = 1 ; i < 145 ; i++)
        {
            var isAvailableI = true;
            for(var j = 0 ; j < 4 &&  i + 3 <= 12; j++)
            {
                if(myArray[i + j] != stateOfElement.free)
                {
                    isAvailableI = false;
                    break;
                }
            }
            if(isAvailableI == true)
            {
                return ;
            }
        }
        alert("Green player won");
    }

    function greenLose()
    {
        for(var i = 1 ; i < 145 ; i++)
        {
            var isAvailableI = true;
            for(var j = 0 ; j < 4 && i + 12 * 3 <= 12; j++)
            {
                if(myArray[i + 12 * j] != stateOfElement.free)
                {
                    isAvailableI = false;
                    break;
                }
            }
            if(isAvailableI == true)
            {
                return ;
            }
        }
        alert("Purple player won");
    }
