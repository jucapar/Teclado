/*
	Nombre del fichero: teclado.js
	Autor:Juan Carlos Pastor Regueras
	Fecha de creacion: 26/10/2017
	Fecha de modificacion:27/10/2017
	
	
*/
	var Teclado1=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
	var Teclado2=["1","2","3","4","5","6","7","8","9","0","@","#","€","_","&","-","+","(",")","/","*","\"","\'",":",";","!","?"];
	var estadoSHIFT = 1;
	var estadoTeclado = 1;
	var caracter = '';
	function escribirCaracter(letra){
		
		caracter+= letra;
		document.getElementById("visor").innerHTML = caracter;
		verNumeroCaracteres();
	}

	function borrarCaracter(){
		if(caracter.length != 0){
			caracter = caracter.substring(0,caracter.length -1);
			document.getElementById("visor").innerHTML = caracter;
			verNumeroCaracteres();	
		}
	}

	function verNumeroCaracteres(){
		
		document.getElementById("NumeroCaracteres").innerHTML = caracter.length;
	}
	
	function saltoLinea(){
		caracter+= "\n";
		document.getElementById("visor").innerHTML = caracter;
		verNumeroCaracteres();
	}
	
	function tecladoMayusculas(){
		
		teclas = document.getElementsByClassName("caracter");
	
		for(let i = 0; i<teclas.length;i++){
			
			letra = teclas[i].value;
				
			if(estadoSHIFT == 1){
				teclas[i].value = letra.toLowerCase();
			}
			else{
				teclas[i].value = letra.toUpperCase();
			}
			
		}
		
		if(estadoSHIFT == 1){
			estadoSHIFT = 0;
		}
		else{
			estadoSHIFT = 1;
		}
	}
	
	
	function Inicializar(){
		teclas = document.getElementsByClassName("caracter");
		
		for(let i = 0; i<teclas.length;i++){
			teclas[i].value = Teclado1[i];
			
		}
	}
	
	function asignarTeclado(){
		
		teclas = document.getElementsByClassName("caracter");
		
		for(let i = 0; i<teclas.length;i++){
			if(estadoTeclado == 0){
				teclas[i].value = Teclado1[i];
			}
			else{
				teclas[i].value = Teclado2[i];
			}
		}
		
		if(estadoTeclado == 1){
			estadoTeclado = 0;
		}
		else{
			estadoTeclado = 1;
		}
		
	}
	
	
