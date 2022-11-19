export default class ErrorRuedas extends Error {
    public constructor (message:string){
        super(message);
        this.name="ErrorRuedas"
    }
}