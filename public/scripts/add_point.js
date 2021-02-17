var placar_away = document.getElementById('placar_away')
var placar_home = document.getElementById('placar_home')

var cont_away = 0;
var cont_home = 0;

var correct_away = 0;
var correct_home = 0;

//AWAY-----------------------------

add_point_tree_away= function(){
    cont_away += 3;
    correct_away = 3;

    placar_away.innerHTML= cont_away;
}

add_point_two_away = function(){
    cont_away += 2;
    correct_away = 2;

    placar_away.innerHTML= cont_away;
}

add_point_one_away = function(){
    cont_away += 1;
    correct_away = 1;

    placar_away.innerHTML= cont_away;
}

correct_point_away = function(){
    cont_away -= correct_away;
    placar_away.innerHTML= cont_away;
    
    correct_away = 0;
}

//HOME------------------------------------

add_point_tree_home= function(){
    cont_home += 3;
    correct_home = 3;

    placar_home.innerHTML= cont_home;


}

add_point_two_home = function(){
    cont_home += 2;
    correct_home = 2;

    placar_home.innerHTML= cont_home;

}

add_point_one_home = function(){
    cont_home += 1;
    correct_home = 1;

    placar_home.innerHTML= cont_home;

}

correct_point_home = function(){
    cont_home -= correct_home;

    placar_home.innerHTML= cont_home;
    correct_home = 0;
}