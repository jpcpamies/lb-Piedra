
// Generador de un número aleatorio
function aleatorio(maximo, minimo)
{
	var numero = Math.floor(Math.random() + (maximo - minimo) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Qué elijes: \nPiedra:0\nPapel:1\nTijera:2?" , 0);
alert( "Elejiste " + opciones[opcionUsuario] );
alert( "JavaScript elijió " + opciones[opcionMaquina] );


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
}
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
}
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
}
else
{
	alert("¿Qué has hecho ahí?")
}