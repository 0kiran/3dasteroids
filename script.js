$(document).ready(function(){
    var pew = document.createElement('audio');
    pew.setAttribute('src', 'pew.mp3');
    var enemynumber = 1; 
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
    var rickhealth = 10;
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
            var wall = getRandomInt(1,4)
            
            
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
            
            if (enemynumber % 4 == 0) {
                $("#scene").append("<a-sphere id='redball" + enemynumber + "' color='red' src= 'asteroid.jpg' position='" + x + " " + enemynumberY + " " + z +"' scale='0.2 0.2 0.2'><a-animation attribute='position' to='0 1 0' dur='6500'></a-animation></a-sphere>")
            }
            
           
                
            //UFO (Spawns Asteroids)
            else if (enemynumber % 5 == 0){
                $("#scene").append("<a-entity id='ufo' obj-model='obj: #ufoimg; mtl: #ufomtl' position='" + ufox + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
                
    
                
               
            }
             else if (enemynumber % 11 == 0){
             $("#scene").append("<a-sphere src='expend.jpg' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='0.6 0.6 0.6' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>")  

                
             }
            else if (enemynumber % 13 == 0){
                //$("#scene").append("")
                $("#scene").append("<a-box class='tank' scale='1 1 1' src ='shield.jpg' id='boss' position= '" + x + " " + y + " " + z +"'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-box>")
                $("#scene").append("<a-sphere class='tank' scale='0.075 0.075 0.075' src ='shield.jpg' id='asteroid" + enemynumber + "' position= '" + x + " " + y + " " + z +"'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-sphere>")
                
                
            }
            else if (enemynumber % 9 == 0){
                $("#scene").append("<a-entity id='healthpack' obj-model='obj: #healthpackimg; mtl: #healthpackmtl' scale='0.1 0.1 0.1' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-entity>")
             }
             else if (enemynumber % 19 == 0){
                     $("#scene").append("<a-sphere src='rick.jpg' id='god" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='3 3 3' particle-system='preset: dust' rotation='0 270 0'><a-animation attribute='position' to='0 1 0' dur='15000'></a-animation></a-sphere>") 
                 
             }
            
            else if (enemynumber % 80 == 0){
                     $("#scene").append("<a-sphere src='kiran.PNG' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='3 3 3' particle-system='preset: dust' rotation='0 90 0'><a-animation attribute='position' to='0 1 0' dur='15000'></a-animation></a-sphere>") 
                 
             }
             else if (enemynumber % 120 == 0) {
                $("#scene").append("<a-sphere src='pickleRick.jpg' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='2 6 2' particle-system='preset: dust' rotation='0 90 0'><a-animation attribute='position' to='0 1 0' dur='15000'></a-animation></a-sphere>")
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
                    gameisover = true
                }
            })
             $("#redball"+ enemynumber).mousedown(function(e){
                pew.play();
                e.stopPropagation();
                $(this).remove()
                score++
                $('#score').attr("value", score)
            })
            
            $("#redball"+ enemynumber).on("animationend", function(){
                health -= 0.1
                $(this).remove()
                $('#health').attr("scale", (health)  + " 0.1 0.1" )
                if(health <= 0  && gameisover == false){
                    endGame();
                    gameisover = true
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
                    ufohealth = 6
                }
            })
            $('#god' + enemynumber).mousedown(function(){
                console.log('aosidfogfpai')
                pew.play
                score +=1
                rickhealth -= 1
                if (rickhealth <= 0){
                    $(this).remove()
                    rickhealth = 10
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
                    gameisover = true
                }
            }) 
            
            $("#healthpack").mousedown(function(){
                pew.play();
                $(this).remove()
                if (health <= 2){
                    health = 2
                    $('#health').attr("scale", (health)  + " 0.1 0.1" )
                }
                
              
                
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
        $("a-camera").remove()
        $("a-entity").append("<a-camera><a-text value='GAME OVER' position='-1.8 0.6 -2' scale='3 3 3' color='white'></a-text></a-camera>")
    }
})