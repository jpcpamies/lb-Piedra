function aleatorio(a,o){var e=Math.floor(Math.random()+(a-o)+o);return e}var piedra=0,papel=1,tijera=2,lagarto=3,spock=4,opciones=["Piedra","Papel","Tijera","Lagarto","Spock"],opcionUsuario,opcionMaquina=aleatorio(4,0);opcionUsuario=prompt("¿Qué elijes: \nPiedra:0\nPapel:1\nTijera:2\nLagarto:3\nSpock:4?",0),alert("Elejiste "+opciones[opcionUsuario]),alert("JavaScript elijió "+opciones[opcionMaquina]),0==opcionUsuario?opcionMaquina==piedra?alert("Empate"):opcionMaquina==papel?alert("Perdiste"):opcionMaquina==tijera?alert("Ganaste"):opcionMaquina==lagarto?alert("Piedra aplasta al lagarto: Ganaste"):opcionMaquina==spock&&alert("Spock vaporiza piedra: Perdiste"):1==opcionUsuario?opcionMaquina==piedra?alert("Ganaste"):opcionMaquina==papel?alert("Empate"):opcionMaquina==tijera?alert("Perdiste"):opcionMaquina==lagarto?alert("Lagarto come papel: Pediste"):opcionMaquina==spock&&alert("Papel desaprueba Spock: Ganaste"):2==opcionUsuario?opcionMaquina==piedra?alert("Perdiste"):opcionMaquina==papel?alert("Ganaste"):opcionMaquina==tijera?alert("Empate"):opcionMaquina==lagarto?alert("Tijera decapita lagarto: Ganaste"):opcionMaquina==spock&&alert("Spock aplasta tijeras: Perdiste"):3==opcionUsuario?opcionMaquina==piedra?alert("Piedra aplasta lagarto: Perdiste"):opcionMaquina==papel?alert("Lagarto come papel: Ganaste"):opcionMaquina==tijera?alert("Tijera decapita lagarto: Perdiste"):opcionMaquina==lagarto?alert("Empate"):opcionMaquina==spock&&alert("Lagarto envenena Spock: Ganaste"):4==opcionUsuario?opcionMaquina==piedra?alert("Spock vaporiza piedra: Ganaste"):opcionMaquina==papel?alert("Papel desapruba Spock: Perdiste"):opcionMaquina==tijera?alert("Spock aplasta tijera: Ganaste"):opcionMaquina==lagarto?alert("Lagarto envenena Spock: Perdiste"):opcionMaquina==spock&&alert("Empate"):alert("¿Qué has hecho ahí?");