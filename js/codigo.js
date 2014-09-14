
var opcionUsuario;
var opcionMaquina = "piedra";

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