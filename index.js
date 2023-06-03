var jet = document.getElementById("jet");
var board = document.getElementById("board");
var buttonleft = document.getElementById("button");
var buttonRight = document.getElementById("buttons");
var buttonshoot = document.getElementById("buttonss");

var result = document.getElementById("result");
var displayScore = document.getElementById("score");
const highScoreElement = document.querySelector(".high-score");
let score = 0;

let highScore = localStorage.getItem("high-score")|| 0;






window.addEventListener("keydown",(e)=>{
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
    if(e.key == "ArrowLeft" && left > 0){
        jet.style.left = left - 10 + "px";
    }
    else if(e.key == "ArrowRight" && left<=460){
        jet.style.left = left + 10 + "px";
    }
    

});


window.addEventListener("keydown",(p)=>{

    if(p.key=="1"){
        var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
        var bullet = document.createElement("div");
        bullet.classList.add("bullets");
        board.appendChild(bullet);
    
        var movebullet = setInterval(()=>{
            var rocks = document.getElementsByClassName("rocks");

            for(var i=0;i<rocks.length;i++){
                var rock = rocks[i];

                var rockbound = rock.getBoundingClientRect();
                var bulletbound = bullet.getBoundingClientRect();

                if(bulletbound.left >= rockbound.left && bulletbound.right <= rockbound.right && bulletbound.top <= rockbound.top  && bulletbound.bottom <= rockbound.bottom){
                    rock.parentElement.removeChild(rock);
                    score++;
                    if(score >=highScore){
                        highScoreElement.innerHTML = `${score}`;
                    }else{
                        highScoreElement.innerHTML = `High Score: ${highScore}`;
                    }
                }
                 

                  
                
                    
                    
                 
                   
}
             
         
            var bulletbottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom")
    
            );
            bullet.style.left = left + "px";
            bullet.style.bottom = bulletbottom + 3 + "px";
        });
        
    }
    
 

});





var generaterocks = setInterval(()=>{
    var rock = document.createElement("div");
    rock.classList.add("rocks");
    var rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    rock.style.left = Math.floor(Math.random() *450) + "px";
    board.appendChild(rock);


},2000);

var moverocks = setInterval(()=>{
    
var rocks = document.getElementsByClassName("rocks");
if(rocks != undefined){
    for(var i=0;i<rocks.length;i++){
        var rock = rocks[i];
        var rocktop = parseInt(window.getComputedStyle(rock).getPropertyValue("top")
        );
        if(rocktop >= 475){
            result.style.display = "block";
            board.style.display = "none";
            buttonleft.style.display = "none"; 
            buttonRight.style.display = "none";  
            buttonshoot.style.display = "none";
            displayScore.innerHTML = `Score : ${score}`;
            highScoreElement.innerHTML = `High Score : ${highScore}`;
                     
   
            
       
        
            
        }
        
        rock.style.top = rocktop + 25 + "px";
    }
}


},800);


function mymessage1(){
var jetleft = parseInt(this.window.getComputedStyle(jet).getPropertyValue("left"));
if(jetleft >0){
    jet.style.left = (jetleft - 10 )+ "px";
}

}

function mymessage2(){
    var jetleft = parseInt(this.window.getComputedStyle(jet).getPropertyValue("left"));
if(jetleft <450){
    jet.style.left = (jetleft + 10 )+ "px";
}

}

function mymessage3(){
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(()=>{
        var rocks = document.getElementsByClassName("rocks");

        for(var i=0;i<rocks.length;i++){
            var rock = rocks[i];

            var rockbound = rock.getBoundingClientRect();
            var bulletbound = bullet.getBoundingClientRect();

            if(bulletbound.left >= rockbound.left && bulletbound.right <= rockbound.right && bulletbound.top <= rockbound.top  && bulletbound.bottom <= rockbound.bottom){
                rock.parentElement.removeChild(rock);
                score++;
                if(score >=highScore){
                    highScoreElement.innerHTML = `${score}`;
                }else{
                    highScoreElement.innerHTML = `High Score: ${highScore}`;
                }
            }
             

              
            
                
                
             
               
}
         
     
        var bulletbottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom")

        );
        bullet.style.left = left + "px";
        bullet.style.bottom = bulletbottom + 3 + "px";
    });
    
}




  
                 
               
              


