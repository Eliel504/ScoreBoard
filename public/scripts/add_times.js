var checked_away = document.getElementById('select-away')
var checked_home = document.getElementById('select-home')
var valid_checked_home = false;
var valid_checked_away = true;


var content_logo_away = document.getElementById('content_logo_away')
var content_logo_home = document.getElementById('content_logo_home')

var srcLogoAway;
var srcLogoHome;

var logo;


var time_away;
var time_home;



select_local = function(){
    if(checked_away.checked){
        valid_checked_away = true
        valid_checked_home = false;
    }else{
        valid_checked_away = false
        valid_checked_home = true;
    }
}

//CONFERENCIA LESTE-------------------

add_time_atlanta = function(){

    if(valid_play == false){
        if(valid_checked_away){

            document.getElementById('img_logo_away').remove()
            
            content_logo_away.style.borderColor='red'
            logo = document.createElement('img')
            logo.setAttribute('src', '/public/images/logos/atl.png')
            logo.setAttribute('id','img_logo_away')
            logo.setAttribute('class', 'img-logo')

            srcLogoAway = '/public/images/logos/atl.png'
            content_logo_away.appendChild(logo)
    
            time_away = 'Atlanta Hawks'
    
        }else{
    
            document.getElementById('img_logo_home').remove()
            
            content_logo_home.style.borderColor='red'
            logo = document.createElement('img')
            logo.setAttribute('src', '/public/images/logos/atl.png')
            logo.setAttribute('id','img_logo_home')
            logo.setAttribute('class', 'img-logo')
            content_logo_home.appendChild(logo)
    
            srcLogoHome = '/public/images/logos/atl.png'
            time_home = 'Atlanta Hawks'
    
        }
    }else{
        alert('não pode selecionar times com partida em andamento')
    }
}

add_time_boston = function(){

    if(valid_play == false){
        if(valid_checked_away){

            document.getElementById('img_logo_away').remove()
            
            content_logo_away.style.borderColor='green'
            logo = document.createElement('img')
            logo.setAttribute('src', "/public/images/logos/boston.png")
            logo.setAttribute('id','img_logo_away')
            logo.setAttribute('class', 'img-logo')
            content_logo_away.appendChild(logo)
            
            srcLogoAway = '/public/images/logos/boston.png'
            time_away = 'Boston Celtics'
    
        }else{
    
            document.getElementById('img_logo_home').remove()
            
            content_logo_home.style.borderColor='green'
            logo = document.createElement('img')
            logo.setAttribute('src', "/public/images/logos/boston.png")
            logo.setAttribute('id','img_logo_home')
            logo.setAttribute('class', 'img-logo')
            content_logo_home.appendChild(logo)
            
            srcLogoHome = '/public/images/logos/boston.png'
            time_home = 'Boston Celtics'
        }    
    }else{
        alert('não pode selecionar times com partida em andamento')
    }
   
}


/*CONFERENCIA LESTE------------------------*/

add_time_dallas = function(){

    if(valid_play == false){
        if(valid_checked_away){

            document.getElementById('img_logo_away').remove()
            
            content_logo_away.style.borderColor='blue'
            logo = document.createElement('img')
            logo.setAttribute('src', "/public/images/logos/dalas.png")
            logo.setAttribute('id','img_logo_away')
            logo.setAttribute('class', 'img-logo')
            content_logo_away.appendChild(logo)
    
            srcLogoAway = '/public/images/logos/dalas.png'
            time_away = 'Dallas Mavericks'
    
        }else{
    
            document.getElementById('img_logo_home').remove()
            
            content_logo_home.style.borderColor='blue'
            logo = document.createElement('img')
            logo.setAttribute('src', "/public/images/logos/dalas.png")
            logo.setAttribute('id','img_logo_home')
            logo.setAttribute('class', 'img-logo')
            content_logo_home.appendChild(logo)
            
            srcLogoHome = '/public/images/logos/dalas.png'
            time_home = 'Dallas Mavericks'
        }    
    }else{
        alert('não pode selecionar times com partida em andamento')
    }
   
}


add_time_deven = function(){

    if(valid_play == false){
        if(valid_checked_away){

            document.getElementById('img_logo_away').remove()
            
            content_logo_away.style.borderColor='gold'
            logo = document.createElement('img')
            logo.setAttribute('src', "/public/images/logos/deven.png")
            logo.setAttribute('id','img_logo_away')
            logo.setAttribute('class', 'img-logo')
            content_logo_away.appendChild(logo)
    
            srcLogoAway = '/public/images/logos/deven.png'
            time_away = 'Deven Nuggets'
    
        }else{
    
            document.getElementById('img_logo_home').remove()
            
            content_logo_home.style.borderColor='gold'
            logo = document.createElement('img')
            logo.setAttribute('src', "/public/images/logos/deven.png")
            logo.setAttribute('id','img_logo_home')
            logo.setAttribute('class', 'img-logo')
            content_logo_home.appendChild(logo)
    
            srcLogoHome = '/public/images/logos/deven.png'
            time_home = 'Deven Nuggets'
        }    
    }else{
        alert('não pode selecionar times com partida em andamento')
    }
   
}