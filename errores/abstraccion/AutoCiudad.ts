import Auto from "./Auto"
export default class AutoCiudad extends Auto{
    public constructor (){
        super();
    }

    public getAcelera (){
        this.frena = false;
        this.acelera += 10;
    }
}