let readlinSync = require('readline-sync');
let base = readlinSync.question ("ingrese base: ");
let altura = readlinSync.question("ingrese altura: ");
let resultado= base*altura;
console.log("el resultado es: " ,resultado);