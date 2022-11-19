let readlineSync = require('readline-sync');
let mensaje = 0;
console.log( "5 palabras");
for(i=0;i<5;i++){
    mensaje=readlineSync.question("Palabra N " -(i+1)-"i");;
    console.log(mensaje);
}
