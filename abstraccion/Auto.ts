export default abstract class Auto{
    protected cantidadDeRuedas:number;
    protected frena:boolean;
    protected acelera:number;
    
    public constructor(){
        this.cantidadDeRuedas=4;
        this.frena=true;
        this.acelera=0;
    }   
    public getCantidadDeRuedas():number{
        return this.cantidadDeRuedas;
    }
    
    public getFrena():boolean{
        return this.frena;
    }

    abstract getAcelera():void
}
