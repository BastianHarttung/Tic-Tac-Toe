let fields = [];
let player = 'X';
let player1; 
let player2; 

let winner;
let gameOver = false;
let AUDIO_WIN = new Audio('audio/end-applause.wav');

function startGameFromBeginning(){
    document.getElementById('Gamescreen').classList.add('d-none');
    document.getElementById('Startscreen').classList.remove('d-none');    
    document.getElementById('Gameover').classList.add('d-none');    
}

function startGame(){
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
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];  
        document.getElementById('Line-1').style.transform = 'scaleX(1)';    
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('Line-2').style.transform = 'scaleX(1)';  
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('Line-3').style.transform = 'scaleX(1)';  
    }
    /* Vertikal */
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('Line-4').style.transform = ' rotate(90deg) scaleX(1)';  
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('Line-5').style.transform = 'rotate(90deg) scaleX(1)';  
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('Line-6').style.transform = 'rotate(90deg) scaleX(1)';  
    }
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

function eraseLines(){
    document.getElementById('Line-1').style.transform = 'scaleX(0)';
    document.getElementById('Line-2').style.transform = 'scaleX(0)'; 
    document.getElementById('Line-3').style.transform = 'scaleX(0)'; 
    document.getElementById('Line-4').style.transform = 'scaleX(0)'; 
    document.getElementById('Line-5').style.transform = 'scaleX(0)'; 
    document.getElementById('Line-6').style.transform = 'scaleX(0)'; 
    document.getElementById('Line-7').style.transform = 'scaleX(0)'; 
    document.getElementById('Line-8').style.transform = 'scaleX(0)'; 
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

