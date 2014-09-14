
// Generador de un número aleatorio
function aleatorio(maximo, minimo)
{
	var numero = Math.floor(Math.random() + (maximo - minimo) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Qué elijes: \nPiedra:0\nPapel:1\nTijera:2\nLagarto:3\nSpock:4?" , 0);
alert( "Elejiste " + opciones[opcionUsuario] );
alert( "JavaScript elijió " + opciones[opcionMaquina] );

// Piedra
if(opcionUsuario == 0)
{
	if(opcionMaquina == piedra)
	{
		alert("Empate");
	}
	else if(opcionMaquina == papel)
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Piedra aplasta al lagarto: Ganaste");
	}
	else if(opcionMaquina == spock)
	{
		alert("Spock vaporiza piedra: Perdiste");
	}
}
// papel
else if(opcionUsuario == 1)
{
	if(opcionMaquina == piedra)
	{
		alert("Ganaste");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Lagarto come papel: Pediste");
	}
	else if(opcionMaquina == spock)
	{
		alert("Papel desaprueba Spock: Ganaste");
	}
}
// tijera
else if(opcionUsuario == 2)
{
	if(opcionMaquina == piedra)
	{
		alert("Perdiste");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Tijera decapita lagarto: Ganaste");
	}
	else if(opcionMaquina == spock)
	{
		alert("Spock aplasta tijeras: Perdiste");
	}
}
// lagarto
else if(opcionUsuario == 3)
{
	if(opcionMaquina == piedra)
	{
		alert("Piedra aplasta lagarto: Perdiste");
	}
	else if(opcionMaquina == papel)
	{
		alert("Lagarto come papel: Ganaste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Tijera decapita lagarto: Perdiste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Empate");
	}
	else if(opcionMaquina == spock)
	{
		alert("Lagarto envenena Spock: Ganaste");
	}
}
// spock
else if(opcionUsuario == 4)
{
	if(opcionMaquina == piedra)
	{
		alert("Spock vaporiza piedra: Ganaste");
	}
	else if(opcionMaquina == papel)
	{
		alert("Papel desapruba Spock: Perdiste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Spock aplasta tijera: Ganaste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("Lagarto envenena Spock: Perdiste");
	}
	else if(opcionMaquina == spock)
	{
		alert("Empate");
	}
}
else
{
	alert("¿Qué has hecho ahí?")
}