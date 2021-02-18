var placar_away = document.getElementById('placar_away')
var placar_home = document.getElementById('placar_home')

var cont_away = 0;
var cont_home = 0;

var correct_away = 0;
var correct_home = 0;

//AWAY-----------------------------

add_point_tree_away= function(){
    if(valid_play_addPoint){
        cont_away += 3;
        correct_away = 3;
    
        placar_away.innerHTML= cont_away;
    }else{
        alert('a partida não foi iniciada')
    }

}

add_point_two_away = function(){
    if(valid_play_addPoint){
        cont_away += 2;
        correct_away = 2;
    
        placar_away.innerHTML= cont_away;
    }else{
        alert('a partida não foi iniciada')
    }
}

add_point_one_away = function(){
    if(valid_play_addPoint){
        cont_away += 1;
        correct_away = 1;
    
        placar_away.innerHTML= cont_away;
    }else{
        alert('a partida não foi iniciada')
    }
}

correct_point_away = function(){
    if(valid_play_addPoint){
        cont_away -= correct_away;
        placar_away.innerHTML= cont_away;
        
        correct_away = 0;
    }else{
        alert('a partida não foi iniciada')
    }

}

//HOME------------------------------------

add_point_tree_home= function(){
    if(valid_play_addPoint){
        cont_home += 3;
        correct_home = 3;
    
        placar_home.innerHTML= cont_home;
    }else{
        alert('a partida não foi iniciada')
    }



}

add_point_two_home = function(){
    if(valid_play_addPoint){
        cont_home += 2;
        correct_home = 2;
    
        placar_home.innerHTML= cont_home;
    }else{
        alert('a partida não foi iniciada')
    }

}

add_point_one_home = function(){
    if(valid_play_addPoint){
        cont_home += 1;
        correct_home = 1;
    
        placar_home.innerHTML= cont_home;
    }else{
        alert('a partida não foi iniciada')
    };

}

correct_point_home = function(){
    if(valid_play_addPoint){
        cont_home -= correct_home;

        placar_home.innerHTML= cont_home;
        correct_home = 0;
    }else{
        alert('a partida não foi iniciada') 
    }

}