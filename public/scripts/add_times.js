var content_logo_away = document.getElementById('content_logo_away')
var content_logo_home = document.getElementById('content_logo_home')
var logo;

var time_away;
var time_home;

var valid_time_home = false;
var valid_time_away = false;

add_time_atlanta = function(){
    var btn_atlanta = document.getElementById('id-atlanta');
    
    if(valid_time_away == false){

        document.getElementById('img_logo_away').remove()
        
        content_logo_away.style.borderColor='red'
        logo = document.createElement('img')
        logo.setAttribute('src', '/public/images/logos/atl.png')
        logo.setAttribute('id','img_logo_away')
        logo.setAttribute('class', 'img-logo')
        content_logo_away.appendChild(logo)

        document.getElementById('id-atlanta').disabled=true;
        btn_atlanta.style.cursor='no-drop'
        valid_time_away = true;

        time_away = 'Atlanta Hawks'

    }else if(valid_time_home == false){

        document.getElementById('img_logo_home').remove()
        
        content_logo_home.style.borderColor='red'
        logo = document.createElement('img')
        logo.setAttribute('src', '/public/images/logos/atl.png')
        logo.setAttribute('id','img_logo_home')
        logo.setAttribute('class', 'img-logo')
        content_logo_home.appendChild(logo)

        document.getElementById('id-atlanta').disabled=true;
        btn_atlanta.style.cursor='no-drop'
        valid_time_home = true;

        time_home = 'Atlanta Hawks'

    }
}

add_time_boston = function(){
    var btn_boston = document.getElementById('id-boston');
    
    if(valid_time_away == false){

        document.getElementById('img_logo_away').remove()
        
        content_logo_away.style.borderColor='green'
        logo = document.createElement('img')
        logo.setAttribute('src', "/public/images/logos/boston.png")
        logo.setAttribute('id','img_logo_away')
        logo.setAttribute('class', 'img-logo')
        content_logo_away.appendChild(logo)

        document.getElementById('id-boston').disabled=true;
        btn_boston.style.cursor='no-drop'
        valid_time_away = true;

        time_away = 'Boston Celtics'

    }else if(valid_time_home == false){

        document.getElementById('img_logo_home').remove()
        
        content_logo_home.style.borderColor='green'
        logo = document.createElement('img')
        logo.setAttribute('src', "/public/images/logos/boston.png")
        logo.setAttribute('id','img_logo_home')
        logo.setAttribute('class', 'img-logo')
        content_logo_home.appendChild(logo)

        document.getElementById('id-boston').disabled=true;
        btn_boston.style.cursor='no-drop'
        valid_time_home = true;

        time_home = 'Boston Celtics'
    }    
}