$(document).ready(function(){
    

    var type = 0; 
    var pointcount = 0;
    $("#points").html=pointcount;
    
    setInterval(function(){
        var wall = 1 
        var x;
        var y = getRandomInt(3,12) ;
        var z;
        
        //New code

        var typeY = getRandomInt(3,12) ;
        //Kiran this is just some work Im doing for the second type of asteroid. For now it'll be the one that changes 
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
        if ( type == 10) {
            $("#scene").append("<a-sphere color='red' src= 'asteroid.jpg' class='asteroid' position='" + x + " " + typeY + " " + z +"' scale='0.2 0.2 0.2'><a-animation attribute='position' to='0 1 0' dur='6500' repeat='indefinite'></a-animation></a-sphere>")
        }
        //UFO (Spawns Asteroids)
        else if (type == 3){
            $("#scene").append("<a-entity id='boss1' obj-model='obj: #ufo; mtl: #ufomtl' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
            $("#scene").append("<a-entity id='boss1' obj-model='obj: #ufo; mtl: #ufomtl' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
            $("#scene").append("<a-entity id='boss1' obj-model='obj: #ufo; mtl: #ufomtl' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3'><a-animation attribute='position' to='" + -x + " " + y + " " + -z +"' repeat='indefinite' dur='8000' direction='alternate'></a-animation></a-entity>")
            
        }
        // IF no others spawn, a normal asteroid spawns
        else {
            $("#scene").append("<a-sphere src='asteroid.jpg' class='asteroid' position='" + x + " " + y + " " + z +"' scale='0.3 0.3 0.3' particle-system='preset: dust'><a-animation attribute='position' to='0 1 0' dur='8000'></a-animation></a-sphere>")  
        }
            
            
        
        $(".asteroid").mousedown(function(){
            $(this).remove(".asteroid")
            var score = $('#score').attr("value")
            $('#score').attr("value", "")
        })
        
        $("#boss1").mousedown(function(){
            $(this).remove("#boss1")
        })
        //This is the start of the new code
        
        
        type++
        console.log(type)
        
       //This is the end. Comment it out if needed
    }, 3000)
    
  
    
})

    function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }