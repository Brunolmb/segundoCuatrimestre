import ErrorRuedas from "./Error";
export default abstract class Auto{
    protected cantidadDeRuedas:number;
    protected frena:boolean;
    protected acelera:number;
    
    public constructor(){
        this.cantidadDeRuedas=4;
        this.frena=true;
        this.acelera=0;
    }   
    public getCantidadDeRuedas(){
        if (this.cantidadDeRuedas === 4){
            return this.cantidadDeRuedas;
        } else {
            throw new ErrorRuedas("La cantidad de ruedas no corresponde con un auto");
        }
    }
    
    public getFrena():boolean{
        return this.frena;
    }

    abstract getAcelera():void
}
