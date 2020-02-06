export class Producto {
    nombre: string;
    precio: number;
    imagen: string;
    cantidad: number;

    constructor(pNombre: string, pPrecio: number, pImagen: string, pCantidad: number = 1) {
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.imagen = pImagen;
        this.cantidad = pCantidad;
    }
}