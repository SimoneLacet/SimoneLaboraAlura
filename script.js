var validaConcatenacao=true;
var indicaTextoDescriptografado=false;
var concatenaTextoCriptografado='';
var concatenaTextoDescriptografado='';
var textoInformadoArray = [];
var vogalDescriptografada = ['a','e','i','o','u'];
var vogalCriptografada = ['ai','enter','imes','ober','ufat'];


function limpar(){
	document.getElementById("resultado").innerHTML = " ";
}

function pegaTexto(){
    limpar();
    concatenaTextoCriptografado='';
    concatenaTextoDescriptografado='';
    var  textoInformado = document.getElementById('mensagem').value;
    for (var i = 0; i < textoInformado.length; i++) {
        c = textoInformado.codePointAt(i);
        if ((97 <= c && c <= 122) || (c == 32)) {
            textoInformadoArray.push(textoInformado[i]); 
        }
        else {
           alert ("Digite o texto em minúsculo, sem acentos, sem números e sem caracteres especiais."); 
           i=textoInformado.length; 
           textoInformadoArray = [];
        }
    }
}


function criptografa(){
	pegaTexto();
    for (var y=0; y< textoInformadoArray.length; y++){
    	for (var i = 0; i < vogalDescriptografada.length; i++){
    		if (textoInformadoArray[y] == vogalDescriptografada[i]){
    			textoInformadoArray[y] = vogalCriptografada[i];
    			i =  vogalDescriptografada.length;
    		}
    	}
    	concatenaTextoCriptografado=concatenaTextoCriptografado + textoInformadoArray[y];
    }
    document.getElementById("resultado").innerHTML = concatenaTextoCriptografado;
    textoInformadoArray = [];
}

function descriptografa(){
	pegaTexto();
    var ajudaConcatenar='';
    for (var y=0; y< textoInformadoArray.length; y++){
    	for (var i = 0; i < vogalDescriptografada.length; i++){
    		if (textoInformadoArray[y] == vogalDescriptografada[i]){
    			validaConcatenacao=true;
            	while (validaConcatenacao){
            		ajudaConcatenar = ajudaConcatenar + textoInformadoArray[y];
            		if(ajudaConcatenar==vogalCriptografada[i]){
            			validaConcatenacao=false;
                		textoInformadoArray[y] = vogalDescriptografada[i];
                		ajudaConcatenar='';
                		i =  vogalDescriptografada.length;
            		}
            		else{
            			y++;
            			if(y > textoInformadoArray.length){
            				validaConcatenacao=false;
            				i =  vogalDescriptografada.length;
            				y = textoInformadoArray.length;
            				indicaTextoDescriptografado=true;
            			}
            		}
            	}
    		}
    	}
    	concatenaTextoDescriptografado=concatenaTextoDescriptografado + textoInformadoArray[y];
    }
    if(indicaTextoDescriptografado){
    	document.getElementById("resultado").innerHTML = document.getElementById('mensagem').value;
    	textoInformadoArray = [];
    }
    else{
    	document.getElementById("resultado").innerHTML = concatenaTextoDescriptografado;
    	textoInformadoArray = [];
    }
}

function copiar(){
	var textoCopiado = document.getElementById("resultado").innerHTML;
	if(textoCopiado == ''){
		alert('Não há texto para copiar');
	}
	else{
		textoColar = textoCopiado;
		alert('Sua mensagem foi copiada com sucesso!');
	}
}

function colar(){
	document.getElementById('mensagem').value = textoColar;
}

var buttonCriptografar = document.getElementById("criptografar");
var buttonDescriptografar = document.getElementById("descriptografar");
var buttonCopiar = document.getElementById("copiar");
var buttonColar = document.getElementById("colar");

if(buttonCriptografar){
    buttonCriptografar.onclick = criptografa;
}

if(buttonDescriptografar){
    buttonDescriptografar.onclick = descriptografa;
}

if(buttonCopiar){
   buttonCopiar.onclick = copiar;
}

if(buttonColar){
   buttonColar.onclick = colar;
}
