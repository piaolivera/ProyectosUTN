/*Crea una clase base llamada "Empleado" que tenga propiedades "nombre" y "salario". 
Luego, crea una clase derivada llamada "Gerente" que herede de "Empleado" y agregue una propiedad adicional "departamento". 
Posteriormente, crea otra clase derivada llamada "Desarrollador" que también herede de "Empleado" y 
agregue una propiedad adicional "lenguaje". Implementa métodos
para obtener detalles sobre cada tipo de empleado, como el nombre, salario, departamento o lenguaje, según corresponda.*/

class Empleado {
    constructor (nombre, salario){
        this._nombre = nombre;
        this._salario = salario;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get salario(){
        return this._salario;
    }
    set salario (salario){
        this._salario = salario;
    }
    toString(){
            return "Nombre: " +this._nombre + ", salario: "+ this._salario;
        }
    }


class Gerente extends Empleado{
    constructor (nombre, salario, departamento){
        super(nombre, salario);
        this._departamento = departamento;
    }
    get departamento (){
        return this._departamento;
    }
    set departamento (departamento){
        this._departamento = departamento;
   }
   toString(){
    return "Nombre: " +this._nombre + ", salario: "+ this._salario + ", Departamento: " +this._departamento;
}

}

class Desarrollador extends Empleado {
    constructor(nombre, salario, lenguaje){
        super(nombre, salario);
        this._lenguaje = lenguaje;
    }
    get lenguaje(){
        return this._lenguaje;
    }
    set lenguaje (lenguaje){
        this._lenguaje = lenguaje;
    }
    toString(){
        return "Nombre: " +this._nombre + ", salario: "+ this._salario +  ", Lenguaje: " +this._lenguaje;
    }
}


let gerente1 = new Gerente ("Juan", 500, "Sistemas");
console.log(gerente1.toString())

let desarrolador1 = new Desarrollador('Lucas', 500, "JavaScript");
console.log(desarrolador1.toString());