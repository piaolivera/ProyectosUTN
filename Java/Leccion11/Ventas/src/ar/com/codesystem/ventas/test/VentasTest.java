package ar.com.codesystem.ventas.test;

import a.com.codesystem.ventas.*;




/**
 *
 * @author Pia Olivera
 */
public class VentasTest {
    public static void main(String[] args) {
        Producto producto1 = new Producto("Pantalon", 10000.00);
        Producto producto2 = new Producto("Campera", 29900.00);
        
        Orden orden1 = new Orden();
        //Agregar productos a la lista
        orden1.agregarProductos(producto1);
        orden1.agregarProductos(producto2);
        orden1.mostrarOrden();
    }
}
