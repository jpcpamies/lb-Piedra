var opcionUsuario,opcionMaquina="piedra";opcionUsuario=prompt("¿Qué eliges piedra, papel o tijera?","piedra"),alert("Has elegido "+opcionUsuario),alert("JavaScript ha elegido "+opcionMaquina),"piedra"==opcionUsuario?"piedra"==opcionMaquina?alert("Empate!!"):"papel"==opcionMaquina?alert("Perdiste :("):"tijera"==opcionMaquina&&alert("Ganaste :)!!"):"papel"==opcionUsuario?"piedra"==opcionMaquina?alert("Ganaste :)!!"):"papel"==opcionMaquina?alert("Empate!!"):"tijera"==opcionMaquina&&alert("Perdiste :(!!"):"tijera"==opcionUsuario&&("piedra"==opcionMaquina?alert("Perdiste :(!!"):"papel"==opcionMaquina?alert("Ganaste :)!!"):"tijera"==opcionMaquina&&alert("Empate!!"));