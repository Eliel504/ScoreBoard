
    var cont = document.getElementById('cont');
    var rodada = document.getElementById('rodada');
    var cont_rodada = 1;

    mm = 00; /*para teste*/
    ss = 5;
    
    // var mm = 60;
    // var ss = 11;


    var crom;

    start = function(){
        crom = setInterval(() => {
            time()
        },1000)
    }

    pause = function(){
        clearInterval(crom)
    }

    stop = function(){
        clearInterval(crom);


        mm = 00; /*para teste*/
        ss = 5;

        // mm = 60;
        // ss = 11;

        cont.innerHTML='12:00'
    }

    time = function(){
        ss --;

        if(ss == 00){
            if(mm > 00){
                ss = 59
            }
            
            if(mm > 00){
                mm --;
            }
        }

        if(mm == 00 && ss == 00){
            clearInterval(crom)
            // ss = 60 
            // mm = 11 
            ss = 05 /*para testes*/
            mm = 00 
            
            cont_rodada += 1;
                if(cont_rodada < 6){
                    rodada.innerHTML = `${cont_rodada}`;
                }else{
                    alert('FIM DE JOGO!!')
                }
        }

        var format = 
        (mm < 10 ? "0" + mm : mm) + ':' +
        (ss < 10 ?  "0" + ss: ss);


        cont.innerHTML= format;

    }

