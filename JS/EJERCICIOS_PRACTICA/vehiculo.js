/*Crea una clase base llamada "Vehiculo" que tenga las propiedades "marca" y "anio", y un método llamado "obtenerDetalles"
 que muestre por consola la marca y el año del vehículo.

Luego, crea una clase derivada llamada "Automovil" que herede de "Vehiculo" y agregue una propiedad adicional llamada "puertas".
 Sobrescribe el método "obtenerDetalles" en la clase "Automovil" para que también muestre la cantidad de puertas.*/

 class Vehiculo {
    constructor(marca, anio){
        this._marca= marca;
        this._anio = anio;
    }
    get marca(){
        return this._marca;
    }
    set marca (marca){
        this._marca = marca;
    }
    get anio(){
        return this._anio;
    }
    set anio(anio){
        this._anio= anio;
    }
    toString (){
        return "Marca: "+this._marca + ", año: "+ this._anio;
    }
    /*obtenerDetalles(Vehiculo){
        console.log (`Marca ${this._marca}, año: ${this._anio}`);
    }   */ 
    
}

let vehículo1 = new Vehiculo( "Ford", 2011);
console.log(vehículo1.toString());


class Automovil extends Vehiculo{
    constructor(marca, anio, puertas){
        super(marca,anio);
        this._puertas= puertas;
    }
    get puertas(){
        return this._puertas;
    }
    set puertas (puertas){
        this._puertas = puertas;
    }
    toString (){
        return "Marca: "+this._marca + ", año: "+ this._anio +", puertas; " +this._puertas;
    }
}

let automovil1 = new Automovil ("Fiat", 2015, 5);
let automovil2 = new Automovil(" ford", 2016, 3);
console.log (automovil1.toString());
console.log(automovil2.toString());


