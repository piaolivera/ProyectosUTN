class Persona{

    static contadorPersonas = 0; // atributo estatico
   // email ='Valor default email' // atributo NO estatico

   static get MAX_OBJ(){ // Este método simula una constante
        return 5;
   }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
      //  Persona.contadorObjetosPersona++;
      this.idPersona = ++Persona.contadorPersonas; 
        console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
    }
    else{
        console.log("Se ha superado el máximo de objetos permitidos");
    }
}
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona+ ' '+this._nombre +' ' +this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde este método static');
    }
    static saludar2(persona){
        console.log(persona.nombre+ ' '+ persona.apellido);
    }

}



class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}
let persona1 = new Persona( "Ariel", "Betancud");
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
//console.log(persona1);

let persona2 = new Persona ("Carlos", "Lara");
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
//console.log(persona2);

let empleado1 = new Empleado('Maria','Gimenez','Sistemas');
console.log(empleado1);

console.log(empleado1.toString());

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);


//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); No se puede acceder desde la clase

console.log(persona1.toString());
console.log(persona2.toString())
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);
let persona3 = new Persona ('Carla', 'Lara');
console.log(Persona.contadorPersonas);
console.log(persona3.toString());

console.log(Persona.MAX_OBJ);
let persona4 = new Persona ('Camila', 'Perez');
console.log(persona4.toString());
let persona5 = new Persona ('Franco', 'Diaz');
console.log(persona5.toString());
   
