/*
	Nombre del fichero: teclado.js
	Autor:Juan Carlos Pastor Regueras
	Fecha de creacion: 26/10/2017
	Fecha de modificacion:30/10/2017
	
	
*/
	var Teclado1=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
	var Teclado2=["1","2","3","4","5","6","7","8","9","0","@","#","€","_","&","-","+","(",")","/","*","\"","\'",":",";","!","?"];
	var estadoSHIFT = true;
	var estadoTeclado = true;
	var caracter = '';
	var teclaSHIFT = true;
	
	function visualizar(){
		document.getElementById("visor").innerHTML = caracter;
	}
	function escribirCaracter(letra){
		
		switch(letra){
			
			case "Enter":
				saltoLinea();
				break;
			case "Borrar":
				borrarCaracter();
				break;
			case ".":
				caracter+= letra;
				visualizar();
				verNumeroCaracteres();
			case "SHIFT":
				primeraMayusculas();
				break;
			default:
				caracter+= letra;
				visualizar();
				verNumeroCaracteres();
				if(teclaSHIFT){
					tecladoMayusculas();
					teclaSHIFT = false;
				}
				
				break;
		}
	
	}

	function borrarCaracter(){
		
		if(caracter.length != 0){
			borrado = caracter[caracter.length -1];
			caracter = caracter.substring(0,caracter.length -1);
			visualizar();
			verNumeroCaracteres();
			if(borrado == "."){
				tecladoMayusculas();
				teclaSHIFT = false;
			}
		}
		if(caracter.length == 0 || caracter[caracter.length -1] == "."){
			primeraMayusculas();
		}
		
		
	}

	function verNumeroCaracteres(){
		
		document.getElementById("NumeroCaracteres").innerHTML = caracter.length;
	}
	
	function saltoLinea(){
		caracter+= "\n";
		visualizar();
		verNumeroCaracteres();
	}
	
	function tecladoMayusculas(){
		
		teclas = document.getElementsByClassName("caracter");
	
		if(estadoTeclado){
			for(let i = 0; i<teclas.length;i++){
			
				letra = teclas[i].value;
				if(estadoSHIFT){
					teclas[i].value = letra.toLowerCase();
				}
				else{
					teclas[i].value = letra.toUpperCase();
				}
			
			}
			
			if(estadoSHIFT){
				estadoSHIFT = false;
			}
			else{
				estadoSHIFT = true;
			}
		}
	
	}
	
	
	function Inicializar(){
		teclas = document.getElementsByClassName("caracter");
		
		for(let i = 0; i<teclas.length;i++){
			teclas[i].value = Teclado1[i];
		}
	}
	
	function cambiarTeclado(){
		
		teclas = document.getElementsByClassName("caracter");
		
		for(let i = 0; i<teclas.length;i++){
			if(estadoTeclado){
				teclas[i].value = Teclado2[i];
			}
			else{
				Inicializar();
			}
		}
		
		if(estadoTeclado){
			estadoTeclado = false;
		}
		else{
			estadoTeclado = true;
		}
		
	}
	function primeraMayusculas(){
		teclaSHIFT = true;
		if(!estadoSHIFT){
			tecladoMayusculas();
		}
	}
	
	
