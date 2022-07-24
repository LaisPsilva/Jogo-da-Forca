let chute = 6;
let listaDImanica = [];
let palavraSecretaSorteada;
let palavraSecretaCategoria;

const palavras = [
    palavra001 = {
        nome: "SENHOR_DO_BONFIM",
        categoria: "CIDADE_BRASILEIRA"
    },

    palavra002 = {
        nome: "JUAZEIRO",
        categoria: "CIDADE_BRASILEIRA"
    },
    palavra003 = {
        nome: "PETROLINA",
        categoria: "CIDADE_BRASILEIRA"

    },
    palavra004 = {
        nome: "SALVADOR",
        categoria: "CIDADE_BRASILEIRA"

    },
    palavra005 = {
        nome: "TRANCOSO",
        categoria: "CIDADE_BRASILEIRA"

    },
    palavra006 = {
        nome: "GIRAFA",
        categoria: "ANIMAL"
    },
    palavra007 = {
        nome: "COELHO",
        categoria: "ANIMAL"
    },
    palavra008 = {
        nome: "PAPAGAIO",
        categoria: "ANIMAL"
    },
    palavra009 = {
        nome: "CACHORRO",
        categoria: "ANIMAL"
    },
    palavra010 = {
        nome: "GATO",
        categoria: "ANIMAL"

    },
    palavra011 = {
        nome: "MESA",
        categoria: "OBJETO"

    },
    palavra012 = {
        nome: "CADEIRA",
        categoria: "OBJETO"

    },
    palavra013 = {
        nome: "ESPELHO",
        categoria: "OBJETO"

    },
    palavra014 = {
        nome: "TELEVISAO",
        categoria: "OBJETO"

    },
    palavra015 = {
        nome: "SOFA",
        categoria: "OBJETO"

    },
    palavra016 = {
        nome: "UVA",
        categoria: "FRUTA"

    },
    palavra017 = {
        nome: "ABACAXI",
        categoria: "FRUTA"

    },
    palavra018 = {
        nome: "BANANA",
        categoria: "FRUTA"

    },
    palavra019 = {
        nome: "GAIABA",
        categoria: "FRUTA"

    },
    palavra020 = {
        nome: "ACEROLA",
        categoria: "FRUTA"

    },
    palavra021 = {
        nome: "AZUL",
        categoria: "COR"

    },
    palavra022 = {
        nome: "AMARELO",
        categoria: "COR"

    },
    palavra023 = {
        nome: "VERMELHO",
        categoria: "COR"

    },
    palavra024 = {
        nome: "BRANCO",
        categoria: "COR"

    },
    palavra025 = {
        nome: "VERDE",
        categoria: "COR"
    
    } 

];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)


    palavraSecretaSorteada =  palavras[indexPalavra].nome;
    palavraSecretaCategoria = "DICA: " + palavras[indexPalavra].categoria;
    
}


montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    
    for (i = 0; i < palavraSecretaSorteada.length; i++){
        
        if(listaDImanica[i] == undefined) {
            listaDImanica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class= 'letras'>" + listaDImanica[i] + "</div>"
        }
        
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class= 'letras'>" + listaDImanica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(chute > 0)
    {
        estiloDaLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function estiloDaLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        chute--
        carregaImagemForca();

        if(chute == 0)
        {
        abreModal("OPS!", "Você perdeu! :( A palavra é <br>" + palavraSecretaSorteada);
        }
    
    }
    else{
        for (i = 0; i < palavraSecretaSorteada.length; i++)
        
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDImanica[i] = letra;
            }
        }
    
    }
    
    let vitoria = true;
    for(i=0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDImanica[i]){
            vitoria= false;
        }
    }
    
    if (vitoria == true){
        abreModal("Eba!", "Você ganhou! :)");
        chute= 0;
    }


function carregaImagemForca(){
    switch(chute){
        case 5:
            document.getElementById("imagem").style.background = "url('./src/forca-1.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./src/forca-2.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./src/forca-3.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./src/forca-4.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./src/forca-5.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./src/forca-6.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./src/forca-0.png')";
            break;

    }
}

function abreModal(titulo,mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnREiniciar = document.querySelector("#btnREiniciar")
btnREiniciar.addEventListener("click", function(){
    location.reload();
});
}
