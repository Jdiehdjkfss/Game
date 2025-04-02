function getComputerChoice () {
    random = Math.random();
    if( random >= 0 && random < 0.33 )
    {
        return "rock";
    }

    else if ( random >= 0.33 && random < 0.66 )
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

let humanchoice = "";
let humanscore = 0;
let computerscore = 0;

// button click get their input
const buttonrock = document.querySelector(".rock");
buttonrock.addEventListener( "click" , () => {
   let humanchoice = "rock";
   let computer = getComputerChoice();
   if ( humanchoice == computer )
   {
    humanscore = humanscore;
    computerscore = computerscore;
   }
   else if ( humanchoice == "rock" && computer == "paper" )
   {
     const divv = document.querySelector(".div2");
     divv.appendChild(document.createTextNode(++computerscore));
    //computerscore++;
   }
   else if ( humanchoice == "rock" && computer == "scissors" )
   {
    const div = document.querySelector(".div");
   div.appendChild(document.createTextNode(++humanscore));
    //humanscore++;
   }
    
   if ( humanscore == 5 )
   {
    const divvv = document.querySelector(".result");
    divvv.appendChild(document.createTextNode("You Win the Game!"));

   }
   else if ( computerscore == 5 )
   {
    const divvv = document.querySelector(".result");
    divvv.appendChild(document.createTextNode("You lose the Game!"));
   }
} );

const buttonpaper = document.querySelector(".paper");
buttonpaper.addEventListener( 'click' , () => {
    let humanchoice = "paper";
    let computer = getComputerChoice();
    if ( humanchoice == computer )
    {
         humanscore = humanscore;
         computerscore = computerscore;
    }
    else if ( humanchoice == "paper" && computer == "rock" )
    {
        const divv = document.querySelector(".div2");
     divv.appendChild(document.createTextNode(++computerscore));
        // computerscore++;
    }
    else if ( humanchoice == "paper" && computer == "scissors" )
    {
        const div = document.querySelector(".div");
        div.appendChild(document.createTextNode(++humanscore));
         //humanscore++;
    }

    if ( humanscore == 5 )
        {
         const divvv = document.querySelector(".result");
         divvv.appendChild(document.createTextNode("You Win the Game!"));
     
        }
        else if ( computerscore == 5 )
        {
         const divvv = document.querySelector(".result");
         divvv.appendChild(document.createTextNode("You lose the Game!"));
        }
} )

const buttonscissors = document.querySelector(".scissors");
buttonscissors.addEventListener( 'click' , () =>{
    let humanchoice = "scissors";
    let computer = getComputerChoice();
    if ( humanchoice == computer )
    {
         humanscore = humanscore;
         computerscore = computerscore;
    }
    else if ( humanchoice == "scissors" && computer == "rock" )
    {
        const divv = document.querySelector(".div2");
     divv.appendChild(document.createTextNode(++computerscore));
         //computerscore++;
    }
    else if ( humanchoice == "scissors" && computer == "paper" )
    {
        const div = document.querySelector(".div");
        div.appendChild(document.createTextNode(++humanscore));
        // humanscore++;
    }

    if ( humanscore == 5 )
        {
         const divvv = document.querySelector(".result");
         divvv.appendChild(document.createTextNode("You Win the Game!"));
     
        }
        else if ( computerscore == 5 )
        {
         const divvv = document.querySelector(".result");
         divvv.appendChild(document.createTextNode("You lose the Game!"));
        }
})




