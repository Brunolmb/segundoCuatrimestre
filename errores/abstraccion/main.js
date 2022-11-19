"use strict";
exports.__esModule = true;
var AutoCiudad_1 = require("./AutoCiudad");
var AutoDeportivo_1 = require("./AutoDeportivo");
var Camioneta_1 = require("./Camioneta");
var qq = new AutoCiudad_1["default"]();
var mustang = new AutoDeportivo_1["default"]();
var f100 = new Camioneta_1["default"]();
console.log(qq);
console.log(mustang);
console.log(f100);
console.log("acelerar auto de ciudad");
qq.getAcelera();
console.log(qq);
console.log("acelerar auto deportivo");
mustang.getAcelera();
console.log(mustang);
console.log("acelerar camioneta");
f100.getAcelera();
console.log(f100);
// pruebo la variacion con un error
try {
    console.log("El mustang tiene " + mustang.getCantidadDeRuedas() + " ruedas");
}
catch (error) {
    console.log("Algo anda mal: " + error.message);
}
