
// Genera un número aleatorio entre un rango de enteros
function aleatorio()
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo )
	return numero
}

var piedra = 0
var papel = 1
var tijera = 2

var opcionUsuario;
var opcionMaquina = aleatorio[0,2];

var opciones = ["piedra", "papel", "tijera"];

opcionUsuario = prompt ("¿Qué eliges piedra, papel o tijera?" , "piedra");
alert("Has elegido " + opcionUsuario);
alert("JavaScript ha elegido " + opcionMaquina)

if(opcionUsuario == "piedra")
{
	if(opcionMaquina == "piedra")
	{
		alert("Empate!!");
	}
	else if(opcionMaquina == "papel")
	{
		alert("Perdiste :(");
	}
	else if(opcionMaquina == "tijera")
	{
		alert("Ganaste :)!!");
	}
}
else if(opcionUsuario == "papel")
{
	if(opcionMaquina == "piedra")
	{
		alert("Ganaste :)!!");
	}
	else if(opcionMaquina == "papel")
	{
		alert("Empate!!");
	}
	else if(opcionMaquina == "tijera")
	{
		alert("Perdiste :(!!");
	}
}
else if(opcionUsuario == "tijera")
{
	if(opcionMaquina == "piedra")
	{
		alert("Perdiste :(!!");
	}
	else if(opcionMaquina == "papel")
	{
		alert("Ganaste :)!!");
	}
	else if(opcionMaquina == "tijera")
	{
		alert("Empate!!");
	}
}
else
{
	alert("What the fock!! ¿Quieres jugar bien?")
}