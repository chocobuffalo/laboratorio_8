//Con esta función utilizando CSS deshabilitamos la "Página Inicial" y mostramos la "Página de Juego".
//Simplemente cambiamos de apartado.
function mostrar(){
	
	document.getElementById('inicial').style.display='none';
	document.getElementById('juego').style.display='block';

}

//Con esta función utilizando CSS deshabilitamos la "Página de Resultado de la Partida" y mostramos la "Página de Juego".
//Con esto le permitimos al usuario volver a la "Página de Juego" y que lo intente otra vez.
function volver(){
	
	document.getElementById('resultado').style.display='none';
	document.getElementById('juego').style.display='block';

}

//Con esta función utilizando CSS deshabilitamos la "Página de Resultado de la Partida" y mostramos la "Página Inicial".
//Permitimos al usuario volver a la "Página Inicial".
function inicial(){
	
	document.getElementById('resultado').style.display='none';
	document.getElementById('inicial').style.display='block';

}

/*Ésta es la función donde se procesa todo lo relacionado con el funcionamiento del juego. Se activa tras la elección de una jugada
por parte del usuario. El único parámetro que necesita es la opción del usuario, ya que tiene que ser elegida por el jugador y depende
solo de él. Llamamos a esta función al hacer clic en la imagen correspondiente a la jugada, y al mismo tiempo también pasamos el 
parámetro que corresponde a la jugada... (ver HTML)*/
function jugar(opcionUsuario){

/*Determinamos la función contenedora de un código para generar un número aleatorio.
Pero en este caso incluso utilizamos el número entero, obtenido con la fórmula,
para conseguir la elección en texto. Nos aprovechamos del array que crearemos más adelante.*/ 
function aleatorio(minimo,maximo){

		var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
		/*Una vez obtenido el número entero en la variable anterior "numero", utilizamos
		el array "opciones" para conseguir una de las tres opciones en cadena de texto.
		Introducimos dicha opción (que puede ser "Piedra", "Papel", "Tijeras", "Lagarto" o "Spock" en la
		variable "eleccion".)*/
		var eleccion = opciones[numero];
		/*Con la siguiente instrucción indicamos que la función "aleatorio" recogerá
		lo que está contenido en la variable "eleccion", es decir, donde quiera que esté
		escrita, la función "aleatorio" será igual al contenido de la variable "eleccion.
		Por consiguiente, la función aleatorio siempre será una de las tres opciones
		posibles pero en cadena de texto (o "Piedra", o "Papel, o "Tijeras, o Lagarto, o Spock").*/
		return eleccion;
}

var mensaje;

//Creamos un array con las diferentes opciones.
var opciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];

/*Recogemos la opción generada autómaticamente y de manera aleatoria dentro de la siguiente variable.
Ésta será la opción de Sheldon.*/ 
var opcionSheldon = aleatorio(0,4);


			//Simplificamos el empate a un solo caso.
			if(opcionUsuario == opcionSheldon)
			{
				mensaje = "<h2>¡Es un empate!<br /><img src='http://i60.tinypic.com/2m4dhso.png'/></h2>";
			}

			/*Simplificamos la victoria del usuario
			 a los únicos casos posibles con AND y OR.*/
			else if(opcionUsuario == "Piedra" && opcionSheldon == "Tijeras"
										||
			  opcionUsuario == "Piedra" && opcionSheldon == "Lagarto"
			  							||
			  opcionUsuario == "Papel" && opcionSheldon == "Spock"
			  							||
			  opcionUsuario == "Papel" && opcionSheldon == "Piedra"
			  							||
			  opcionUsuario == "Tijeras" && opcionSheldon == "Lagarto"
			  							||
			  opcionUsuario == "Tijeras" && opcionSheldon == "Papel"
			  							||
			  opcionUsuario == "Lagarto" && opcionSheldon == "Spock"
			  							||
			  opcionUsuario == "Lagarto" && opcionSheldon == "Papel"
			  							||
			  opcionUsuario == "Spock" && opcionSheldon == "Piedra"
			  							||
			  opcionUsuario == "Spock" && opcionSheldon == "Tijeras"
			  )							
			{
				mensaje = "<h2>¡Has ganado!<br /><img src='http://i62.tinypic.com/1ze8uau.png'/></h2>";
			}
			//En el resto de posibilidades se pierde.	
			else							
			{
				mensaje = "<h2>¡Has perdido!<br /><img src='http://i57.tinypic.com/6r3dcg.png'/></h2>";
			}

 /*En este apartado deshabilitamos la "Página de Juego" y mostramos el resultado de la partida con HTML.
 Dando las opciones al usuario de volver a la "Página Principal" y a la "Página de Juego."*/  
	document.getElementById('juego').style.display = "none";		
	document.getElementById('resultado').style.display = "block";
	document.getElementById('resultado').innerHTML = 

	"<p><span>Tú</span> has elegido " + "<span>" + opcionUsuario + "</span>" + 
	" y <span>Sheldon Cooper</span> ha elegido " + "<span>" + opcionSheldon + "</span>" 
	+ ".</p>" + mensaje + "<h3 onClick='volver()'>Volver a jugar</h3>" + 
	 "<a onClick='inicial()'>Volver a la página principal</a>";

}
