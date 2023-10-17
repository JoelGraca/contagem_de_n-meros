function contar(){
    let ini = document.querySelector('input#textinic');
    let fim = document.querySelector('input#textfim');
    let passo = document.querySelector('input#textpas');

    let resp = document.querySelector('div#resp');


    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!');
        resp.innerHTML = 'Impossível contar!';
    }else{
        resp.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0){
            alert('Passo inválido! Considerando passo 1.')
            p = 1;
        }

        if(i < f){ // inicio menor que  o fim
            for(let c = i; c <= f; c += p){
                resp.innerHTML += ` ${c}\u{1F449}`;
            }
        }else{ // inicio maior ou igual ao fim
            for(let c = i; c >= f; c -= p){
                resp.innerHTML += ` ${c}\u{1F449}`;
            }
        }
        
        resp.innerHTML += `\u{1F3C1}`;
    }
}