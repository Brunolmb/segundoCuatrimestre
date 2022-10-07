let readlinSync = require('readline-sync');
let base = readlineSync.question ("ingrese base: ");
let altura = readlinSync.question("ingrese altura: ");
let resultado= base*altura;
console.log("el resultado es: " ,resultado);