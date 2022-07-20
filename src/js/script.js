let x = document.querySelector('.x');
let o = document.querySelector('.O');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#btn-containers button');
let mensagem = document.querySelector('#mensagem');
let mensagemTexto = document.querySelector('#mensagem p');
let jogadorDois;

/* CONTADOR DE JOGADAS */
let player1 = 0;
let player2 = 0;

/* ADD CLICK AOS BOX */

for(let i = 0; i< boxes.length; i++){

    boxes[i].addEventListener('click', function() {

        let el = verificaJogador(player1, player2);

        /* VERIFICA SE O BOX ESTÁ VAZIO */
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            /* COMPUTA A JOGADA */
            if(player1==player2){
                player1++;

                if(jogadorDois == 'btnAi'){

                    jogadaIa();
                    player2++
                }
            }else{
                player2++;
            }


            /* VERIFICA QUEM VENCEU */

            verificaVencedor();
        }
        
    })
}


/* VERIFICA DE QUEM É A JOGADA */
function verificaJogador(player1, player2){
    if(player1 == player2){
        el = x;
    }else{
        el = o;

    }

    return el;
}


/* FUNÇÃO QUE VERIFICA VENCEDOR */
function verificaVencedor() {

    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

    /* HORIZONTAL */

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){

            finalizaJogo(x);
        }else if(b1Child == 'O' && b2Child == 'O' && b3Child == 'O'){

            finalizaJogo(o);
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){

            finalizaJogo(x);
        }else if(b4Child == 'O' && b5Child == 'O' && b6Child == 'O'){

            finalizaJogo(o);
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){

            finalizaJogo(x);
        }else if(b7Child == 'O' && b8Child == 'O' && b9Child == 'O'){

            finalizaJogo(o);
        }
    }


    /* VERTICAL */

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){

            finalizaJogo(x);
        }else if(b1Child == 'O' && b4Child == 'O' && b7Child == 'O'){

            finalizaJogo(o);
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){

            finalizaJogo(x);
        }else if(b2Child == 'O' && b5Child == 'O' && b8Child == 'O'){

            finalizaJogo(o);
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){

            finalizaJogo(x);
        }else if(b3Child == 'O' && b6Child == 'O' && b9Child == 'O'){

            finalizaJogo(o);
        }
    }

    /* DIAGONAL */

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){

            finalizaJogo(x);
        }else if(b1Child == 'O' && b5Child == 'O' && b9Child == 'O'){

            finalizaJogo(o);
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){

            finalizaJogo(x);
        }else if(b3Child == 'O' && b5Child == 'O' && b7Child == 'O'){

            finalizaJogo(o);
        }
    }


    /* DEU VELHA */

    let cont = 0;

    for(let i = 0;i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            cont++
        }
    }

    if(cont == 9){

        finalizaJogo();
    }


}


/* FUNÇÃO DE FINALIZAR O JOGO */

function finalizaJogo(vencedor) {

    let placarX = document.querySelector('#scoreJogadorX');
    let placarO = document.querySelector('#scoreJogadorO');

    let msg = '';

    if(vencedor == x){
        placarX.textContent = parseInt(placarX.textContent) + 1;

        msg = 'O jogador 1 Venceu!!';
    }else if(vencedor == o){

        placarO.textContent = parseInt(placarO.textContent) + 1;

        msg = 'O jogador 2 Venceu!!';

    }else {

        msg = 'Deu Velha!!'
    }


    /* EXIBINDO A MENSAGEM */

    mensagemTexto.innerHTML = msg;
    mensagem.classList.remove('hide');


    /* ESCONDENDO MSG */

    setTimeout(function(){
        mensagem.classList.add('hide');
    }, 2000)

    /* ZERANDO O JOGO */

    player1 = 0;
    player2 = 0;

    /* LIMPANDO O TABULEIRO */

    let boxOcupados = document.querySelectorAll('.box div');

    for(let i = 0; i < boxOcupados.length; i++){

        boxOcupados[i].parentNode.removeChild(boxOcupados[i]);

    }


}

/* JOGADOR OU IA */
for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click', ()=>{

        jogadorDois = buttons[i].getAttribute('id');

        for(let j = 0; j < buttons.length; j++){

            buttons[j].style.display = 'none';
        }

        setTimeout(function(){
            let container = document.querySelector('#container')
            container.classList.remove('hide');
        },'300')
    })
}


/* IA */

function jogadaIa() {

    let cloneO = o.cloneNode(true);

    let cont = 0;
    let preenchido = 0;

    for(let i = 0; i < boxes.length; i++){

        let random = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined){

            if(random <= 1) {
                boxes[i].appendChild(cloneO);
                cont++;
                break;
            }else{
                preenchido++;
            }
        }
    }


    if(cont == 0 && preenchido < 9){
        jogadaIa();
    }
}
