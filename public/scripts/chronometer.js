    var boxWin = document.getElementById('time-win')
    var contentTimeWin = document.getElementById('content-img-win')
    var imgWin = document.getElementById('img-win')
    var nameWin = document.getElementById('name_win')
    
    
    var btn_start = document.getElementById('start-id')
    var cont = document.getElementById('cont');
    var rodada = document.getElementById('rodada');
    var cont_rodada = 1;

    var valid_play = false;
    var valid_play_addPoint = false;
    
    mm = 00; /*para teste*/
    ss = 02;
    
    // var mm = 60;
    // var ss = 11;

    var crom;

    start = function(){
        if(time_away && time_home != null){
            if(time_away != time_home){             
                crom = setInterval(() => {
                    time()
                },1000)
                btn_start.style.cursor='no-drop'
                document.getElementById('start-id').disabled = true;

                valid_play = true;
                valid_play_addPoint = true;
            }else{
                alert('times iguais')
            }
        }else{
            alert('selecione os times')
        }
    }

    pause = function(){
        clearInterval(crom)
        btn_start.style.cursor='pointer'
        document.getElementById('start-id').disabled = false;
        valid_play_addPoint = false;
    }

    stop = function(){
        clearInterval(crom);
        btn_start.style.cursor='pointer'
        document.getElementById('start-id').disabled = false;
        valid_play_addPoint = false;

        mm = 00; /*para teste*/
        ss = 02;

        // mm = 60;
        // ss = 11;

        cont.innerHTML='12:00'
    }

    time = function(){
        ss --;

        if(ss == 00){
            if(mm > 00){
                ss = 59
                mm --;
            }
        }

        if(mm == 00 && ss == 00){
            clearInterval(crom)
            btn_start.style.cursor='pointer'
            document.getElementById('start-id').disabled = false;
            valid_play_addPoint = false;
            // ss = 60 
            // mm = 11 
            
            ss = 02 /*para testes*/
            mm = 00 
            
            cont_rodada += 1;
                if(cont_rodada < 5){
                    rodada.innerHTML = `${cont_rodada}`;
                }else{
                    if(cont_home == cont_away){
                        rodada.innerHTML = 'PR'
                        // ss = 60
                        // mm = 4
                        ss = 02 /*teste */
                        mm = 00
                    }else{
                        let logoWin;

                        if(cont_away > cont_home){ /*away vence */
                            

                            document.getElementById('img-win').remove()
                            boxWin.style.visibility='visible'

                            logoWin = document.createElement('img')
                            logoWin.setAttribute('src', srcLogoAway)
                            logoWin.setAttribute('id', 'img-win')

                            contentTimeWin.appendChild(logoWin);

                            nameWin.innerHTML=time_away;

                        }else{
                            document.getElementById('img-win').remove()
                            boxWin.style.visibility='visible'

                            logoWin = document.createElement('img')
                            logoWin.setAttribute('src', srcLogoHome)
                            logoWin.setAttribute('id', 'img-win')

                            contentTimeWin.appendChild(logoWin);

                            nameWin.innerHTML=time_home;
                        }
                    }
                }
        }

        var format = 
        (mm < 10 ? "0" + mm : mm) + ':' +
        (ss < 10 ?  "0" + ss: ss);


        cont.innerHTML= format;

    }


    exit_win = function(){
        boxWin.style.visibility='hidden'
    }

    teste = function(){
        boxWin.style.visibility='visible'
    }