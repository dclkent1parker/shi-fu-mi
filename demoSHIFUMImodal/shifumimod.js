
function game(){

    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");
    var scissors = document.getElementById("scissors");
    var displayIA = document.getElementById("choiceIA");
    var displayPlayer = document.getElementById("choicePlay");
    var rock1 = document.getElementById("rock1");
    var paper1 = document.getElementById("paper1");
    var scissors1 = document.getElementById("scissors1");
    var rock2 = document.getElementById("rock2");
    var paper2 =document.getElementById("paper2");
    var scissors2 =document.getElementById("scissors2");
    var lose = document.getElementById("lose");
    var won = document.getElementById("won");
    var equal = document.getElementById("equal");
    var newgame = document.getElementById("reset");
    var imageArray = [rock2, paper2, scissors2];
    var choiceIA;


    function erase(){
        rock1.style.display="none";
        paper1.style.display="none";
        scissors1.style.display="none";
        equal.style.display="none";
        lose.style.display="none";
        won.style.display="none";
        rock2.style.display="none";
        paper2.style.display="none";
        scissors2.style.display="none";
    };

    function choicePlayer(){
        rock.addEventListener("click",
            function(){
                right.style.display="block";
                left.style.display="none";
                choiceIA = imageArray[Math.floor(imageArray.length * Math.random())];
                erase();
                won.style.display="none";
                rock1.style.display="block";
                paper1.style.display="none";
                scissors1.style.display="none";
                choiceIA.style.display="block";
            
            if(choiceIA==rock2){
                equal.style.display="block";
            }else if(choiceIA==paper2){
                lose.style.display="block";
            }else{
                won.style.display="block";
            };}
        )
        paper.addEventListener("click",
            function(){
                right.style.display="block";
                left.style.display="none";
                choiceIA = imageArray[Math.floor(imageArray.length * Math.random())];
                erase();
                paper1.style.display="block";
                rock1.style.display="none";
                scissors1.style.display="none";
                choiceIA.style.display="block";
                if(choiceIA==rock2){
                    won.style.display="block";
                }else if(choiceIA==paper2){
                    equal.style.display="block";
                }else{
                    lose.style.display="block";
                }
            }
        )
        scissors.addEventListener("click",
            function(){
                right.style.display="block";
                left.style.display="none";
                choiceIA = imageArray[Math.floor(imageArray.length * Math.random())];
                erase();
                scissors1.style.display="block";
                paper1.style.display="none";
                rock1.style.display="none";
                choiceIA.style.display="block";
                if(choiceIA==rock2){
                    lose.style.display="block";
                }else if(choiceIA==paper2){
                    won.style.display="block";
                }else{
                    equal.style.display="block";
                }
            }
        )
    }
    choicePlayer();


    newgame.addEventListener("click",
        function(){
        location.reload();
        }
    );
    };
    
game();
