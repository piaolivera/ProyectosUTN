/*Crea una clase base llamada "FiguraGeometrica" que tenga un método "calcularArea" que retorne el área de la figura 
(puedes usar un valor fijo para este ejemplo).

Luego, crea una clase derivada llamada "Rectangulo" que herede de "FiguraGeometrica" y agregue propiedades adicionales 
}para representar el ancho y el largo del rectángulo. Sobrescribe el método "calcularArea" en la clase "Rectangulo" 
para que calcule y retorne el área del rectángulo utilizando el ancho y el largo.*/

function figura_geometrica(){
    return{
          calcularArea: function() {
            return this._largo * this._ancho;
        }
    };
    
    
}

class Rectangulo extends figura_geometrica{
    constructor(ancho, largo){
        super();
        this._ancho = ancho;
        this._largo = largo;
    }
    get ancho(){
        return this._ancho;
    }
    set ancho( ancho){
        this._ancho = ancho;
    }
    get largo(){
        return this._largo;
    }
    set largo(largo){
        this._largo = largo;
    }

}
let rectangulo1 = new Rectangulo(2,4);
console.log(rectangulo1.calcularArea());