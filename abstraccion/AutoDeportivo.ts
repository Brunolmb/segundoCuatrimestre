import Auto from "./Auto"
export default class AutoDeportivo extends Auto{
    
    public constructor(){
        super();
    }
    public getAcelera(){
        this.frena = false;
        this.acelera += 80;
    }
}