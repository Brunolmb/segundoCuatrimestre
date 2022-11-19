class cambioDeMarchas {
    estaGirando : boolean;
    cambio: number;
    reversa : number; 
    constructor(estaGirando: boolean, cambio: number, reversa: number) {
        this.estaGirando = enMovimiento;
        this.cambio = cambiarRelacion;
        this.reversa = marchaAtras;
    }
    prenderApagar() {
        if(this.estaGirando) {
            this.estaGirando = false;
        } else {
            this.noEstaGirando = true;
        }
    }
    subirMarcha(){
      this.cambio = this.cambio + 1;
    }
    bajarMarcha() {
        this.cambio = this.cambio - 1;
    }
}
let cambioDeMarchas = new cambioDeMarchas(true, 20, 15);
console.log(cambioDeMarchas);