$(document).ready(function(){
    

    var enemynumber = 0; 
    var score = 0;
    var health = 2;
    var healthstring;
    
    setInterval(function(){
        var wall = 1 
        var x;
        var y = getRandomInt(3,12) ;
        var z;
        var ufox = getRandomInt(-5,5)
        
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
        
        if ( enemynumber == 10) {
            $("#scene").append("<a-sphere id='asteroid" + enemynumber + "' color='red' src= 'asteroid.jpg' class='asteroid' position='" + x + " " + enemynumberY + " " + z +"' scale='0.2 0.2 0.2'><a-animation attribute='position' to='0 1 0' dur='6500' repeat='indefinite'></a-animation></a-sphere>")
        }
        //UFO (Spawns Asteroids)
        else if (enemynumber == 15) {
            $("#scene").append("<a-sphere src='asteroid.jpg' class='asteroid' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>")
            $("#scene").append("<a-sphere src='asteroid.jpg' class='asteroid' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>")
            $("#scene").append("<a-sphere src='asteroid.jpg' class='asteroid' id='asteroid" + enemynumber + "' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>")
        }
        else if (enemynumber == 20){
            $("#scene").append("<a-entity id='boss1' obj-model='obj: #ufo; mtl: #ufomtl' position='" + ufox + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
            $("#scene").append("<a-entity id='boss1' obj-model='obj: #ufo; mtl: #ufomtl' color='red' position='" + ufox + " " + y + " " + z +"' scale='0.299 0.299 0.299'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
            $("#scene").append("<a-entity id='boss1' obj-model='obj: #ufo; mtl: #ufomtl' position='" + ufox + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
            //minions
            $("#scene").append("<a-sphere src='alientext.jpg' id='asteroid" + enemynumber + "' class='asteroid' position='" + (ufox - 3.5) + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='0 1 0' dur='5500'></a-animation></a-sphere>")  
            $("#scene").append("<a-sphere src='alientext.jpg' id='asteroid" + enemynumber + "' class='asteroid' position='" + (ufox + 3.5) + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='0 1 0' dur='5500'></a-animation></a-sphere>")  
         //   $("#scene").append("<a-sphere src='alientext.jpg' class='asteroid' position='" + ufox + " " + y + " " + (z + 3.5) "' scale='0.3 0.3 0.3'><a-animation attribute='position' to='0 1 0' dur='5500'></a-animation></a-sphere>")  
        }
        else if (enemynumber == 5){
            //$("#scene").append("")
            $("#scene").append("<a-box src ='shield.jpg' id='asteroid" + enemynumber + "' position= '" + x + " " + y + " " + z +"'><a-animation attribute='position' to='0 1 0' dur='10000'></a-animation></a-box>")
            
        
            
            
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
        })
        
        $("#asteroid"+ enemynumber).on("animationend", function(){
            health -= 0.1
            $(this).remove()
            $('#health').attr("scale", (health)  + " 0.1 0.1" )
            console.log(health)
        }) 
        
        $("#boss1").mousedown(function(){
            $(this).remove()
        })
        //This is the start of the new code
        
        
        enemynumber++
        
       //This is the end. Comment it out if needed
    }, 3000)
    
  
    
})

    function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }