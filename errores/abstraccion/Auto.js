"use strict";
exports.__esModule = true;
var Error_1 = require("./Error");
var Auto = /** @class */ (function () {
    function Auto() {
        this.cantidadDeRuedas = 4;
        this.frena = true;
        this.acelera = 0;
    }
    Auto.prototype.getCantidadDeRuedas = function () {
        if (this.cantidadDeRuedas === 4) {
            return this.cantidadDeRuedas;
        }
        else {
            throw new Error_1["default"]("La cantidad de ruedas no corresponde con un auto");
        }
    };
    Auto.prototype.getFrena = function () {
        return this.frena;
    };
    return Auto;
}());
exports["default"] = Auto;
