import AutoCiudad from "./AutoCiudad";
import AutoDeportivo from "./AutoDeportivo";
import Camioneta from "./Camioneta";

let qq : AutoCiudad = new AutoCiudad();
let mustang : AutoDeportivo = new AutoDeportivo();
let f100 : Camioneta = new Camioneta();

console.log (qq);
console.log (mustang);
console.log (f100);

console.log ("acelerar auto de ciudad");
qq.getAcelera();
console.log (qq);

console.log ("acelerar auto deportivo");
mustang.getAcelera();
console.log (mustang);

console.log ("acelerar camioneta");
f100.getAcelera();
console.log (f100);

// pruebo la variacion con un error

try { 
    console.log("El mustang tiene "+mustang.getCantidadDeRuedas()+" ruedas");
} catch(error){
    console.log("Algo anda mal: "+error.message);
}