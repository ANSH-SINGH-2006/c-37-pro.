var abc=[];
var currentPath=[];
var b1
var database
//database=firebase.database();

function setup(){
    canvas=createCanvas(800,800);
    b1=createButton('Yellow');
    b2=createButton('red');
    b3=createButton('pink');
    b4=createButton('green');
    b5=createButton('blue');
    b8=createButton('white');
    b6=createButton('Broad');
    b7=createButton('reset canvas');
    b9=createButton('SAVE DRAWING');

    var firebaseConfig = {
        apiKey: "AIzaSyDV10_0_kcl2nV_O0c0LVBcHw8aTlR0_xk",
        authDomain: "car-racing-game-89466.firebaseapp.com",
        databaseURL: "https://car-racing-game-89466.firebaseio.com",
        projectId: "car-racing-game-89466",
        storageBucket: "car-racing-game-89466.appspot.com",
        messagingSenderId: "16637473378",
        appId: "1:16637473378:web:9684a71d99c80f56d5173b",
        measurementId: "G-V5RLYJN0GS"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

    database=firebase.database();
    console.log(database);

    canvas.mousePressed(startPath);
    
}
function startPath(){

    currentPath=[];
    abc.push(currentPath);
}

function draw(){

    background(0);
    if(mouseIsPressed){
        var pos={
            x:mouseX,
            y:mouseY
            
        }
        currentPath.push(pos);

        stroke('white');
        strokeWeight(4);
        noFill();
    }
    b1.mousePressed(function(){
        stroke(255,204,0);
     strokeWeight(4)
     noFill();
    })

    b2.mousePressed(function(){
        stroke('red');
     strokeWeight(4)
     noFill();
    })

    b3.mousePressed(function(){
        stroke('#fae');
     strokeWeight(4)
     noFill();
    })

    b4.mousePressed(function(){
        stroke(0,255,0);
     strokeWeight(4)
     noFill();
    })

    b5.mousePressed(function(){
        stroke(0, 0, 255);
     strokeWeight(4)
     noFill();
    })

    b7.mousePressed(function(){
        abc=[]
        currentPath=[]
    })

    b6.mousePressed(function(){
        
     strokeWeight(25)
     noFill();
    })

    b8.mousePressed(function(){
        stroke('white');
        strokeWeight(4)
        noFill();
       })

       b9.mousePressed(saveDrawing);
    
    
    for(var i=0;i<abc.length;i++){
        var path=abc[i];
        beginShape();
        for(var k=0;k<path.length;k++){

        vertex(path[k].x,path[k].y);
    }
    endShape();
    };

    
    drawSprites();
}

function saveDrawing(){

    var ref=database.ref('drawings')
    ref.push(currentPath);
    }




   




