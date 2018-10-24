




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
    var newgame = document.getElementById("replay");
    var imageArray = [rock2, paper2, scissors2];
    var choiceIA;

    function changeTheme(){
        var theme1= document.getElementById("theme1");
        var theme2= document.getElementById("theme2");
        var styleCSS= document.getElementById("stylesheet");
        var rock0= document.getElementById("rock0");
        var paper0= document.getElementById("paper0");
        var scissors0= document.getElementById("scissors0");
        var tooltip1= document.getElementById("tooltip1");
        var tooltip2= document.getElementById("tooltip2");
        var tooltip3= document.getElementById("tooltip3");

        theme1.addEventListener("click",
            function(){
            styleCSS.href= "shifumimod.css"
            rock1.src="raised-fist_270a.png"
            paper1.src="raised-hand_270b.png"
            scissors1.src="victory-hand_270c.png"
            rock0.src="raised-fist_270a.png"
            paper0.src="raised-hand_270b.png"
            scissors0.src="victory-hand_270c.png"
            rock2.src="raised-fist_270a.png"
            paper2.src="raised-hand_270b.png"
            scissors2.src="victory-hand_270c.png"
            lose.src="face-palm_1f926.png"
            equal.src="shrug_1f937.png"
            won.src="party-popper_1f389.png"
            tooltip1.innerHTML="Rock wins over Scissors and loses against Paper"
            tooltip2.innerHTML="Paper wins over Rock and loses against Scissors"
            tooltip3.innerHTML="Scissors win over Paper and lose against Rock"
        }
        );
        theme2.addEventListener("click",
            function(){
            styleCSS.href="shifumimod2.css"
            rock1.src="bowser.png"
            paper1.src="mario.png"
            scissors1.src="peach.png"
            rock0.src="bowser.png"
            paper0.src="mario.png"
            scissors0.src="peach.png"
            rock2.src="bowser.png"
            paper2.src="mario.png"
            scissors2.src="peach.png"
            lose.src="mariosad.png"
            won.src="etoile.png"
            equal.src="mariosad.png"
            tooltip1.innerHTML="Bowser wins over Peach and loses against Mario"
            tooltip2.innerHTML="Mario wins over Bowser and is weaken by Peach"
            tooltip3.innerHTML="Peach weakens Mario and loses against Bowser"
        }
        );
            }

changeTheme();

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
