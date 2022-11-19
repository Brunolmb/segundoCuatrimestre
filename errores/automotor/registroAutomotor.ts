// Librerias a utilizar

import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

// Clase auto

class Auto {
    private marca: string;
    private modelo: string;
    private año: number;

    public constructor(marca: string, modelo:string, año:number) {
        this.marca = marca;
        this.modelo= modelo;
        this.año = año;
    }

    public getmarca() : string {
        return this.marca;
    }

    public getmodelo() : string {
        return this.modelo;
    }

    public getaño() : number {
        return this.año;
    }
}

// Clase registro automotor que va a contener un arreglo auto

class RegistroAutomotor {
    private listaAutos : Array<Auto>;

    public constructor(listaAutos: Array<Auto>,){
        
        this.listaAutos = listaAutos;
    }

    public getListaAutos(): Array<Auto> {
        return this.listaAutos;
    }
    
}


// Clase gestor de archivos para poder leer el formato  txt

class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); 
    }

    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }

};

// Creo clase error


class ErrorBorrarAuto extends Error{
    public constructor( mensaje : string ){
        super(mensaje);
        this.name="ErrorBorrarAuto";
    }
}


 //Funcion que permite agregar un nuevo automovil al arreglo

function crearAuto(auto: string, arrayAuto: Array<Auto>) : void{

    let propiedadAuto : string[] = auto.split(','); 
    let crearModelo: string = propiedadAuto[0];
    let crearMarca: string = propiedadAuto[1];
    let crearAño: number = Number(propiedadAuto[2]);
    let nuevoAuto : Auto = new Auto(crearMarca,crearModelo,crearAño);
    arrayAuto.push(nuevoAuto);
}

//Funcion que permite borrar un automovil del arreglo

function borrarAuto(arregloAuto: Array<Auto>, posicion: number){
    if (posicion >= 0 && posicion <= arregloAuto.length){
        delete arregloAuto[posicion];
    } else {
        throw new ErrorBorrarAuto("El auto no se encuentra registrado");
    };
}

//Funcion para modificar datos de un automovil 

function mnodificarAuto(arregloAuto: Array<Auto>, posicion: number,) :void {
    
    let modificarMarca :string = ReadlineSync.question("Ingrese la marca del auto: ");
    let modificarModelo :string = ReadlineSync.question("Ingrese el modelo del auto: ");
    let modificarAño :number = ReadlineSync.questionInt("Ingrese el año de fabricacion del auto: ");

    let autoModificado : Auto = new Auto(modificarMarca,modificarModelo,modificarAño);

    delete arregloAuto[posicion];
    arregloAuto[posicion] = autoModificado;
}

//Iniciar programa
let datos: GestorDeArchivos = new GestorDeArchivos("autos.txt");

//Funcion para llenar el arreglo
let listaAutos  :Array<Auto> = [];

for (let i : number= 0; i < datos.getArregloString().length; i++){
    crearAuto(datos.getArregloString()[i], listaAutos);
}


console.log(listaAutos);

console.log("se va a borrar el tercer auto");
try {
    borrarAuto(listaAutos,2);
    console.log(listaAutos);
}catch(error){
    console.log("Se produjo un error: "+ error.message)
}

//console.log("se va a modificar el segundo auto");
//mnodificarAuto(listaAutos,1);

console.log(listaAutos);

console.log("forzamos el errror pasando un auto no registrado");
try {
    borrarAuto(listaAutos,12);
    console.log(listaAutos);
}catch(error){
    console.log("Se produjo un error: "+ error.message)
}