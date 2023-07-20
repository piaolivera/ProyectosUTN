/*Crea una clase base llamada "Persona" que tenga propiedades "nombre" y "edad", y un método "saludar" 
que muestre por consola un saludo con el nombre de la persona. Luego, crea una clase derivada llamada "Estudiante" 
que herede de "Persona" y tenga una propiedad adicional "curso". Sobrescribe el método "saludar"
 en la clase "Estudiante" para que también muestre el nombre del curso al que pertenece el estudiante.*/

 class Persona{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get edad(){
        return this._edad;
    }
    set edad (edad){
        this._edad = edad;
    }
    saludar (){
        return console.log (`Bienvenido ${this._nombre}, edad: ${this._edad}`);
    }
 }

 class Estudiante extends Persona{
    constructor (nombre, edad, curso){
        super(nombre, edad);
        this._curso = curso;
    }
    get curso (){
        return this._curso;
    }
    set curso(curso){
        this._curso = curso;
    }
    saludar(){
        return console.log (`Bienvenido ${this._nombre}, edad: ${this._edad}, curso: ${this._curso}`);
    }
 }

 let persona1 = new Persona ('Melisa', 21);
 persona1.saludar();

 let estudiante1 = new Estudiante('Sofia', 13, "1ero 'B' ");
 estudiante1.saludar();
