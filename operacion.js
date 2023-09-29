alert("Bienvenidos a la página de Javascript");
var nom= prompt("Bienvenido/a al cuestionario sobre las Olimpíadas.¿Cual es tu nombre?");

var res1 = prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre");

if(res1=="B"){
    res1 = 25;
}else{
    res1 = 0;
}
var res2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad");

if(res2=="A"){
    res2 = 25;
}else{
    res2 = 0;
}
var res3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\nA: Septiembre\nB: Junio\nC. Marzo");

if(res3=="C"){
    res3 = 25;
}else{
    res3 = 0;
}
var res4 = prompt("¿Qué es la Fiesta de la Primavera en China?\nA: La Navidad\nB: El Año Nuevo\nC. Fiestas Patrias de China");

if(res4=="B"){
    res4 = 25;
}else{
    res4 = 0;
}
var total = res1 + res2 + res3 + res4;

document.write("<h1>˗ˏˋCuestionario´ˎ˗</h1>");
document.write("<h2>✎ Estos fueron tus resultados: </h2>");
document.write("<h3>Estudiante: </h3>" + nom + "<br>");
document.write("<h3>Obtuviste: </h3>" + total + " % <br>");

if(total<=25){
    document.write("Lo siento, no lo lograste");
}else{
    document.write("Felicitaciones, conoces mucho de la Fiesta de la Primavera");
}