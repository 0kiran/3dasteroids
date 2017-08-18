$(document).ready(function(){
    var pew = document.createElement('audio');
    pew.setAttribute('src', 'pew.mp3');

    var enemynumber = 0; 
    var score = 0;
    var health = 2;
    var healthstring;
    var ufohealth = 6;
    var ufox = getRandomInt(-5,5)
    var x;
    var y = getRandomInt(3,12) ;
    var z;
    var start = false;
    var time = 3000
    var bosshealth = 3;
    var gameisover = false;
    
    $("#start-button").mousedown(function(){
        $(this).remove()
        $("#start-text").remove()
        rungame()
    })
    
    function rungame(){
        $("a-camera").append("<a-text id='score' color = 'white' value= '0' rotation = '0 0 0' position='-0.8 0.8 -2'></a-text>")
        $("a-camera").append("<a-box id='healthremaining' color = 'gray'  scale='2 0.1 0.1' rotation = '0 0 0' position='0 1.1 -2'></a-box>")
        $("a-camera").append("<a-box id='health' color = 'green'  scale='2 0.1 0.1' rotation = '0 0 0' position='0 1.1 -2'></a-box>")
        console.log(start)
        setInterval(function(){
            var wall = 1 
            
            
            //New code
    
            var enemynumberY = getRandomInt(3,12) ;
            //Kiran this is just some work Im doing for the second enemynumber of asteroid. For now it'll be the one that changes 
            //
            if (wall == 1) {
                x = getRandomInt(-10,10)
                z = -10
                
            }
            if (wall==2){
                x = 10
                z = getRandomInt(-10, 10)
                
                
            }
        
            
            
            if (wall== 3){
                x = getRandomInt(-10, 10)
                z = 10
                
            }
            
            if (wall == 4) {
                x = -10
                z = getRandomInt(-10, 10)
                
            }
            
            // Asteroid Spawner Code
            
            // small fast red Asteroid
            
            if (enemynumber == 10 || enemynumber == 15 || enemynumber == 25 || enemynumber == 30 || enemynumber == 35) {
                $("#scene").append("<a-sphere id='asteroid" + enemynumber + "' color='red' src= 'asteroid.jpg' class='asteroid' position='" + x + " " + enemynumberY + " " + z +"' scale='0.2 0.2 0.2'><a-animation attribute='position' to='0 1 0' dur='6500' repeat='indefinite'></a-animation></a-sphere>")
            }
            
           
                
            //UFO (Spawns Asteroids)
            else if (enemynumber == 5 || enemynumber == 20 || enemynumber == 50){
                $("#scene").append("<a-entity id='ufo' obj-model='obj: #ufoimg; mtl: #ufomtl' position='" + ufox + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
                
    
                
               
            }
             else if (enemynumber == 17){
             $("#scene").append("<a-sphere src='expend.jpg' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='0.6 0.6 0.6' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>")  

                
             }
            else if (enemynumber == 7 || enemynumber == 40 || enemynumber == 45){
                //$("#scene").append("")
                $("#scene").append("<a-box class='tank' scale='1 1 1' src ='shield.jpg' id='boss' position= '" + x + " " + y + " " + z +"'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-box>")
                $("#scene").append("<a-sphere class='tank' scale='0.075 0.075 0.075' src ='shield.jpg' id='asteroid" + enemynumber + "' position= '" + x + " " + y + " " + z +"'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-sphere>")
                
                
            }
            else if (enemynumber == 21 || enemynumber == 31 || enemynumber == 41){
                $("#scene").append("<a-entity id='healthpack' obj-model='obj: #healthpackimg; mtl: #healthpackmtl' scale='0.1 0.1 0.1' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-entity>")
             }
        
            // IF no others spawn, a normal asteroid spawns
            else {
                
                
           
                $("#scene").append("<a-sphere src='asteroid.jpg' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>") 
                
            }
                
                
                
            $("#asteroid"+ enemynumber).mousedown(function(e){
                pew.play();
                e.stopPropagation();
                $(this).remove()
                score++
                $('#score').attr("value", score)
            })
            
            $("#asteroid"+ enemynumber).on("animationend", function(){
                health -= 0.1
                $(this).remove()
                $('#health').attr("scale", (health)  + " 0.1 0.1" )
                if(health <= 0  && gameisover == false){
                    endGame();
                }
            })
            
            $("#greenball"+ enemynumber).mousedown(function(e){
                pew.play();
                e.stopPropagation();
                $(this).remove()
                score++
                $('#score').attr("value", score)
            })
            
            $("#greenball"+ enemynumber).on("animationend", function(){
                health -= 0.1
                $(this).remove()
                $('#health').attr("scale", (health)  + " 0.1 0.1" )
                if(health <= 0  && gameisover == false){
                    endGame();
                }
            })
            
            $("#ufo").mousedown(function(){
                console.log("aregaw")
                ufohealth -= 1
                pew.play();
                if (ufohealth <= 0){
                    $(this).remove()
                }
            })
            
            $('#boss').mousedown(function(){
                pew.play();
                console.log("aregaw")
                bosshealth -= 1
                if (bosshealth <= 0){
                    $(this).remove()
                }
                
            })
            
            $("#boss").on("animationend", function(){
                health -= 0.1
                $(this).remove()
                $('#health').attr("scale", (health)  + " 0.1 0.1" )
                if(health <= 0 && gameisover == false){
                    endGame();
                }
            }) 
            
            $("#healthpack").mousedown(function(){
                pew.play();
                console.log("aregaw")
                $(this).remove()
                if (health <= 2){
                    health = 2
                }
                ('#health').attr("scale", (health)  + " 0.1 0.1" )
                
                
            })
            $("#healthpack").on("animationend", function(){
                $(this).remove()
            })
            
            
            
            enemynumber++
            
           
        }, 3000)
        
        if(ufohealth > 0){
            setInterval(function(){
        
                       
                       $("#scene").append("<a-sphere src='alientext.jpg' id='greenball" + enemynumber + "'  position='" + (ufox) + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='0 1 0' dur='5500'></a-animation></a-sphere>")    
                  
                
            }, 18000)
        }
    
        
    }
   
    function getRandomInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
        
    function endGame(){
        $("#body").remove("#scene")
        $("a-camera").remove()
        $("a-entity").append("<a-camera><a-text value='GAME OVER' position='-1.8 0.6 -2' scale='3 3 3' color='white'></a-text></a-camera>")
    }
})