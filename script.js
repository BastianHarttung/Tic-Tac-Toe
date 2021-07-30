let fields = [];
let player = 'X';
let winner;

function startGame(){
    winner = undefined;
    player = 'X';
    fields = [];

    document.getElementById('Player1-container').classList.add('active');
    document.getElementById('Player2-container').classList.remove('active');
    
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
    if(!fields[id]){
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
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
    }
    /* Vertikal */
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
    }
    /* Diagonal */
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
    }

    if(winner){
        winAlert(winner);
    }
};
    
function winAlert(winner){
    setTimeout(function(){        
        alert('Gewonnen: Player '+winner);
        startGame();
    }, 30);
    
}

