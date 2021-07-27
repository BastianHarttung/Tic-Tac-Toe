let fields = [];
let player = 1;

function startGame(){
    document.getElementById('Player').innerHTML = player;
}
function fillShape(id){
    
    if (player == 1) {
        fields[id] = 'x';
        document.getElementById('Player').innerHTML = 2;
        player = 2;
    }else if (player ==2){
        fields[id] = 'o';
        document.getElementById('Player').innerHTML = 1;
        player = 1;
    }    
    
    console.log(fields);
}