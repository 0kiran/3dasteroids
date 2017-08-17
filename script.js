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
    
    $("#start-button").mousedown(function(){
        $(this).remove()
        $("#start-text").remove()
        runGame()
    })
    
    function rungame(){
        $("#camera").append("<a-text id='score' color = 'white' value= '0' rotation = '0 0 0' position='-0.8 0.8 -2'></a-text><a-box id='healthremaining' color = 'gray'  scale='2 0.1 0.1' rotation = '0 0 0' position='0 1.1 -2'></a-box><a-box id='health' color = 'green'  scale='2 0.1 0.1' rotation = '0 0 0' position='0 1.1 -2'></a-box>")
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
            
            if ( enemynumber == 10 || enemynumber >= 40) {
                $("#scene").append("<a-sphere id='asteroid" + enemynumber + "' color='red' src= 'asteroid.jpg' class='asteroid' position='" + x + " " + enemynumberY + " " + z +"' scale='0.2 0.2 0.2'><a-animation attribute='position' to='0 1 0' dur='6500' repeat='indefinite'></a-animation></a-sphere>")
            }
            
            else if (enemynumber == 15 || enemynumber >= 40 || enemynumber == 25) {
                $("#scene").append("<a-sphere src='asteroid.jpg' class='asteroid' id='asteroid" + enemynumber + "' color= 'blue' position='" + x + " " + y + " " + z +"' scale='0.8 0.6 0.8' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>")
            }
            //UFO (Spawns Asteroids)
            else if (enemynumber == 1 || enemynumber >= 40){
                $("#scene").append("<a-entity id='ufo' obj-model='obj: #ufoimg; mtl: #ufomtl' position='" + ufox + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
                //minions
                
                $("#scene").append("<a-sphere src='alientext.jpg' id='asteroid" + enemynumber + "'  position='" + (ufox) + " " + y + " " + z +"' scale='0.3 0.5 0.3'><a-animation attribute='position' to='0 1 0' dur='5500'></a-animation></a-sphere>")    
                
             //   $("#scene").append("<a-sphere src='alientext.jpg' class='asteroid' position='" + ufox + " " + y + " " + (z + 3.5) "' scale='0.3 0.3 0.3'><a-animation attribute='position' to='0 1 0' dur='5500'></a-animation></a-sphere>")  
            }
            else if (enemynumber == 5 || enemynumber >= 40){
                //$("#scene").append("")
                $("#scene").append("<a-box class='tank' scale='1 1 1' src ='shield.jpg' id='asteroid" + enemynumber + "' position= '" + x + " " + y + " " + z +"'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-box>")
                $("#scene").append("<a-sphere class='tank' scale='0.2 0.2 0.2' src ='shield.jpg' id='ufo' position= '" + x + " " + y + " " + z +"'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-sphere>")
                
                
            }
        
            // IF no others spawn, a normal asteroid spawns
            else {
                $("#scene").append("<a-sphere src='asteroid.jpg' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>")  
            }
                
                
                
            $("#asteroid"+ enemynumber).mousedown(function(e){
                e.stopPropagation();
                $(this).remove()
                score++
                $('#score').attr("value", score)
                pew.play();
            })
            
            $("#asteroid"+ enemynumber).on("animationend", function(){
                health -= 0.1
                $(this).remove()
                $('#health').attr("scale", (health)  + " 0.1 0.1" )
            }) 
            
            $("#ufo").mousedown(function(){
                console.log("aregaw")
                ufohealth -= 1
                pew.play();
                if (ufohealth <= 0){
                    $(this).remove()
                }
            })
            //This is the start of the new code
            
            
            enemynumber++
            
           //This is the end. Comment it out if needed
        }, 3000)
        
        setInterval(function(){
            
           if(ufohealth > 0){
               
               $("#scene").append("<a-sphere src='alientext.jpg' id='asteroid" + enemynumber + "'  position='" + (ufox) + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='0 1 0' dur='5500'></a-animation></a-sphere>")    
           } 
        
        }, 18000)
    
        
    }
    function getRandomInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }
})