myArray = new Array(150);

    clickNumber=1;
    timeSquareConstructor=5;
    constructed = 0;
    function randomSquaresConstructor()
    {
        if(!constructed)
        {
            var randomSquare1 = Math.floor(Math.random() * 145);
            myArray[randomSquare1]=1;
            document.getElementById(randomSquare1+"demo").style.background= "black";

            var randomSquare2 = Math.floor(Math.random() * 145);
            myArray[randomSquare2]=1;
            document.getElementById(randomSquare2+"demo").style.background= "black"; 
            constructed=1;
            timeSquareConstructor=10000000;
        }
         
    }

    setInterval(randomSquaresConstructor,timeSquareConstructor);  
     
    for(i=0;i<150;i++)
        myArray[i]=0;
    function myFunction(nume){
        var altaVariabila = parseInt(nume);

        if(clickNumber%2==1)
        {
            if(myArray[altaVariabila]+myArray[altaVariabila+1]+myArray[altaVariabila+2]+myArray[altaVariabila+3]==0 && (altaVariabila-1)%12<9)
            {
                clickNumber++;
                document.getElementById(altaVariabila+"demo").style.background = "#800060";
                document.getElementById(altaVariabila+1+"demo").style.background = "#800060";
                document.getElementById(altaVariabila+2+"demo").style.background = "#800060";
                document.getElementById(altaVariabila+3+"demo").style.background = "#800060";
                myArray[altaVariabila] = 1;
                myArray[altaVariabila + 1] = 1;
                myArray[altaVariabila + 2] = 1;
                myArray[altaVariabila + 3] = 1;
               
            }
            
        }
        else
        {
            if(myArray[altaVariabila]+myArray[altaVariabila+12]+myArray[altaVariabila+24]+myArray[altaVariabila+36]==0 && (altaVariabila-1)/12<9)
            {
                clickNumber++;
                document.getElementById(altaVariabila+"demo").style.background = "green";
                document.getElementById(altaVariabila+12+"demo").style.background = "green";
                document.getElementById(altaVariabila+24+"demo").style.background = "green";
                document.getElementById(altaVariabila+36+"demo").style.background = "green";     
                myArray[altaVariabila] = 1;
                myArray[altaVariabila + 12] = 1;
                myArray[altaVariabila + 24] = 1;
                myArray[altaVariabila + 36] = 1;
            }
           
        }
        
    }

    function hoverFunction()
    {
        

        hoverArray = new Array(150);
        for(var i = 1 ; i < 145 ; i++)
        {
            var sumRowMyArray = myArray[i]+myArray[i+1]+myArray[i+2]+myArray[i+3];
            var sumColMyArray = myArray[i]+myArray[i+12]+myArray[i+24]+myArray[i+36];
            if($(document.getElementById(i+"demo")).is(":hover")== 0)
                hoverArray [i]==0;
            else
            {
                if( clickNumber % 2 == 1 && (i-1)% 12 < 9 && sumRowMyArray==0 )
                {
                    hoverArray[i] = 1;
                    hoverArray[ i + 1 ] = 1;
                    hoverArray[ i + 2 ] = 1;
                    hoverArray[ i + 3 ] = 1
                }
                if( clickNumber%2 == 0 && (i-1)/12 < 9 && sumColMyArray==0)
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
            if(hoverArray[i]==1 )
            {   
                if(clickNumber%2==1)
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
                if(myArray[i]==0)
                    document.getElementById(i+"demo").style.background = "#C0C0C0";
            }

        }
    }
    setInterval(hoverFunction,30); 

    function displayTurn()
    {
        if(clickNumber%2==1)
        {
            document.getElementById("purpleTurn").style.color= "purple";
            document.getElementById("greenTurn").style.color="white"
        }
        else
        {
            document.getElementById("purpleTurn").style.color = "white";
            document.getElementById("greenTurn").style.color="green"
        }
    }
    setInterval(displayTurn,30);
