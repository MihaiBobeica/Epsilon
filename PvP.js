
//placing function for pvp
function placingFunction( nume )
{
    i = parseInt( nume );

    if(!endOfGame)
    {
        doMove(i);
    }
    if(turn == purple)
    {
       
        greenLose();
        return;
                
    }
    if(turn == green)
    {
        purpleLose();
        return;
    }
    
}