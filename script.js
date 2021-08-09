let fields = [];
let player = 'X';
let player1; 
let player2; 

let winner;
let gameOver = false;
let AUDIO_WIN = new Audio('audio/end-applause.wav');

function startGameFromBeginning(){
    stopAudio();
    document.getElementById('Gamescreen').classList.add('d-none');
    document.getElementById('Startscreen').classList.remove('d-none');    
    document.getElementById('Gameover').classList.add('d-none');    
}

function startGame(){
    stopAudio();
    winner = undefined;
    player = 'X';
    fields = [];
    gameOver = false;
    
    document.getElementById('Gamescreen').classList.remove('d-none');
    document.getElementById('Startscreen').classList.add('d-none');
    document.getElementById('Gameover').classList.add('d-none'); 

    document.getElementById('Button-gamescreen').classList.remove('invisible'); 

    player1 = document.getElementById('Player-1-input').value;
    player2 = document.getElementById('Player-2-input').value;
    document.getElementById('Player1').innerHTML = player1;
    document.getElementById('Player2').innerHTML = player2;

    document.getElementById('Player1-container').classList.add('active');
    document.getElementById('Player2-container').classList.remove('active');

    eraseLines();
    cleanField();
    draw();

    console.log('start');
};

function cleanField(){
    for (let i = 0; i < 9; i++) {
        document.getElementById('O-image-'+i).classList.add('d-none');
        document.getElementById('X-image-'+i).classList.add('d-none');
    }
};

function fillShape(id){
    if(!fields[id] && !gameOver){
        if (player == 'X') {
            fields[id] = 'X';
            document.getElementById('Player2-container').classList.add('active');
            document.getElementById('Player1-container').classList.remove('active');
            player = 'O';
        }else if (player =='O'){
            fields[id] = 'O';
            document.getElementById('Player1-container').classList.add('active');
            document.getElementById('Player2-container').classList.remove('active');
            player = 'X';
        }    
            
        draw();

        checkForWin();
    }
};

function draw(){
    for (let i = 0; i < fields.length; i++) {
       if(fields[i] == 'O'){
           document.getElementById('O-image-'+i).classList.remove('d-none');
       }else if (fields[i] == 'X'){
        document.getElementById('X-image-'+i).classList.remove('d-none');
       }
    }
};


function checkForWin(){   
    /* Horizontal */
    checkHorizontalLines(0,1,2,'Line-1');
    checkHorizontalLines(3,4,5,'Line-2');
    checkHorizontalLines(6,7,8,'Line-3');    
    /* Vertikal */
    checkVerticalLines(0,3,6,'Line-4');
    checkVerticalLines(1,4,7,'Line-5');
    checkVerticalLines(2,5,8,'Line-6'); 

    /* Diagonal */
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('Line-7').style.transform = 'rotate(45deg) scaleX(1)';  
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('Line-8').style.transform = 'rotate(-45deg) scaleX(1)';  
    }

    if(winner){
        winAlert(winner);
    }
};

function checkHorizontalLines(field1,field2,field3,id){
    if(fields[field1] == fields[field2] && fields[field2] == fields[field3] && fields[field1]){
        winner = fields[field1];  
        document.getElementById(id).style.transform = 'scaleX(1)';    
    }
}
function checkVerticalLines(field1,field2,field3,id){
    if(fields[field1] == fields[field2] && fields[field2] == fields[field3] && fields[field1]){
        winner = fields[field1];
        document.getElementById(id).style.transform = ' rotate(90deg) scaleX(1)';  
    }
}


function eraseLines(){
    for (let i = 1; i <= 8; i++) {
        document.getElementById('Line-'+i).style.transform = 'scaleX(0)';        
    }    
}
    
function winAlert(winner){
    AUDIO_WIN.play();
    gameOver = true;

    if (winner == 'X') {
            document.getElementById('Player-win').innerHTML = player1;            
    }else if (winner == 'O') {
            document.getElementById('Player-win').innerHTML = player2;    
    }

    document.getElementById('Button-gamescreen').classList.add('invisible');
    
    setTimeout(function(){    
        document.getElementById('Gameover').classList.remove('d-none');       
    }, 1200);
    
}

function stopAudio(){
    AUDIO_WIN.pause();
    AUDIO_WIN.currentTime =0;
}
