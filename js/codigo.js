
var opcionUsuario
var opcionMaquina = piedra

opcionUsuario = prompt ("¿Qué eliges piedra, papel o tigera?" , "piedra");
alert("Has elegido " + opcionUsuario)

if(opcionUsuario == piedra)
{
	if(opcionMaquina == piedra)
	{
		alert("Empate!!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Perdiste :(");
	}
	else(opcionMaquina == tigera)
	{
		alert("Ganaste :)!!");
	}
}
else if(opcionUsuario == papel)
{
	if(opcionMaquina == piedra)
	{
		alert("Ganaste :)!!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!!");
	}
	else(opcionMaquina == tigera)
	{
		alert("Perdiste :(!!");
	}
}
else(opcionUsuario == tigera)
{
	if(opcionMaquina == piedra)
	{
		alert("Perdiste :(!!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste :)!!");
	}
	else(opcionMaquina == tigera)
	{
		alert("Empate!!");
	}
}