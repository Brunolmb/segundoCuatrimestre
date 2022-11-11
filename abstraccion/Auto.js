"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto() {
        this.cantidadDeRuedas = 4;
        this.frena = true;
        this.acelera = 0;
    }
    Auto.prototype.getCantidadDeRuedas = function () {
        return this.cantidadDeRuedas;
    };
    Auto.prototype.getFrena = function () {
        return this.frena;
    };
    return Auto;
}());
exports["default"] = Auto;
