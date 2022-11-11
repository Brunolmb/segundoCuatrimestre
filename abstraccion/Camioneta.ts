import Auto from "./Auto"
export default class Camioneta extends Auto{

    public constructor (){
        super();
    }

    public getAcelera(): void {
        this.frena = false;
        this.acelera += 30;
    }    
    
}