
function volver(){
	document.getElementById('resultado').style.display='none';
}
function jugar(opcionUsuario){
function aleatorio(minimo,maximo){
		var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
		var eleccion = opciones[numero];
		return eleccion;
}
var mensaje;
var opciones = ["Piedra", "Papel", "Tijeras"];
var pc = aleatorio(0,4);
			if(opcionUsuario == pc)
			{
				mensaje = "<h2>¡Es un empate!</h2>";
			}

			else if(opcionUsuario == "Piedra" && pc == "Tijeras"
										||
			  opcionUsuario == "Papel" && pc == "Piedra"
			  							||
			  opcionUsuario == "Tijeras" && pc == "Papel"
			  )							
			{
				mensaje = "<h2>¡Has ganado!</h2>";
			}
			//En el resto de posibilidades se pierde.	
			else							
			{
				mensaje = "<h2>¡Has perdido!</h2>";
			}
	document.getElementById('resultado').style.display = "block";
	document.getElementById('resultado').innerHTML = 

	"<p><span>Tú</span> has elegido " + "<span>" + opcionUsuario + "</span>" + 
	" y <span>Computadora</span> ha elegido " + "<span>" + pc + "</span>" 
	+ ".</p>" + mensaje + "<h3 onClick='volver()'>Volver a jugar</h3>" + 
	 "<a onClick='inicial()'>Volver a la página principal</a>";

}
