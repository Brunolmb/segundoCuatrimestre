"use strict";
// Librerias a utilizar
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("readline-sync");
// Clase auto
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    Auto.prototype.getmarca = function () {
        return this.marca;
    };
    Auto.prototype.getmodelo = function () {
        return this.modelo;
    };
    Auto.prototype.getaño = function () {
        return this.año;
    };
    return Auto;
}());
// Clase registro automotor que va a contener un arreglo auto
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaAutos) {
        this.listaAutos = listaAutos;
    }
    RegistroAutomotor.prototype.getListaAutos = function () {
        return this.listaAutos;
    };
    return RegistroAutomotor;
}());
// Clase gestor de archivos para poder leer el formato  txt
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
;
// Creo clase error
var ErrorBorrarAuto = /** @class */ (function (_super) {
    __extends(ErrorBorrarAuto, _super);
    function ErrorBorrarAuto(mensaje) {
        var _this = _super.call(this, mensaje) || this;
        _this.name = "ErrorBorrarAuto";
        return _this;
    }
    return ErrorBorrarAuto;
}(Error));
//Funcion que permite agregar un nuevo automovil al arreglo
function crearAuto(auto, arrayAuto) {
    var propiedadAuto = auto.split(',');
    var crearModelo = propiedadAuto[0];
    var crearMarca = propiedadAuto[1];
    var crearAño = Number(propiedadAuto[2]);
    var nuevoAuto = new Auto(crearMarca, crearModelo, crearAño);
    arrayAuto.push(nuevoAuto);
}
//Funcion que permite borrar un automovil del arreglo
function borrarAuto(arregloAuto, posicion) {
    if (posicion >= 0 && posicion <= arregloAuto.length) {
        delete arregloAuto[posicion];
    }
    else {
        throw new ErrorBorrarAuto("El auto no se encuentra registrado");
    }
    ;
}
//Funcion para modificar datos de un automovil 
function mnodificarAuto(arregloAuto, posicion) {
    var modificarMarca = ReadlineSync.question("Ingrese la marca del auto: ");
    var modificarModelo = ReadlineSync.question("Ingrese el modelo del auto: ");
    var modificarAño = ReadlineSync.questionInt("Ingrese el año de fabricacion del auto: ");
    var autoModificado = new Auto(modificarMarca, modificarModelo, modificarAño);
    delete arregloAuto[posicion];
    arregloAuto[posicion] = autoModificado;
}
//Iniciar programa
var datos = new GestorDeArchivos("autos.txt");
//Funcion para llenar el arreglo
var listaAutos = [];
for (var i = 0; i < datos.getArregloString().length; i++) {
    crearAuto(datos.getArregloString()[i], listaAutos);
}
console.log(listaAutos);
console.log("se va a borrar el tercer auto");
try {
    borrarAuto(listaAutos, 2);
    console.log(listaAutos);
}
catch (error) {
    console.log("Se produjo un error: " + error.message);
}
//console.log("se va a modificar el segundo auto");
//mnodificarAuto(listaAutos,1);
console.log(listaAutos);
console.log("forzamos el errror pasando un auto no registrado");
try {
    borrarAuto(listaAutos, 12);
    console.log(listaAutos);
}
catch (error) {
    console.log("Se produjo un error: " + error.message);
}
