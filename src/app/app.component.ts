import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayComida: Producto[];
  arrayBebida: Producto[];

  arrayProductoRecibido: Producto[];

  constructor() {
    this.arrayComida = [
      new Producto('Hamburguesa', 8, 'assets/img/hamburguesa.png'),
      new Producto('Kebap', 5, 'assets/img/kebap.jpg'),
      new Producto('Arepas', 5, 'assets/img/arepas.jpeg'),
      new Producto('Aros de Cebolla', 3, 'assets/img/cebolla.jpg'),
      new Producto('Nachos', 8, 'assets/img/nachos.jpeg'),
      new Producto('Patatas', 4, 'assets/img/patatas.jpg'),
      new Producto('Pizza', 10, 'assets/img/pizza.jpg'),
      new Producto('Steak', 14, 'assets/img/steak.jpg')
    ];

    this.arrayBebida = [
      new Producto('Agua', 1, 'assets/img/agua.jpg'),
      new Producto('Cerveza', 4, 'assets/img/cerveza.jpg'),
      new Producto('CocaCola', 3, 'assets/img/cocacola.jpg'),
      new Producto('Fanta', 3, 'assets/img/fanta.jpg'),
      new Producto('Nestea', 3, 'assets/img/nestea.jpeg'),
      new Producto('Copa', 6, 'assets/img/copa.jpg'),
      new Producto('Pacharan', 5, 'assets/img/pacharan.jpg'),
      new Producto('Vino', 4, 'assets/img/vino.jpg')
    ];

    this.arrayProductoRecibido = [];
  }
  /*
    manejarEnviarProducto($event) {
      let nuevoProducto = { ...$event }; // Spread Operator, coje el contenido de un objeto y lo saca para copiarlo.
      this.arrayProductoRecibido.push(nuevoProducto);
      console.log(this.arrayProductoRecibido);
    }*/
  manejarEnviarProducto($event) {
    let nuevoProducto = { ...$event }; // Spread Operator, coje el contenido de un objeto y lo saca para copiarlo.
    let obj = this.arrayProductoRecibido.find(product => {
      return product.nombre === nuevoProducto.nombre;
    });

    if (obj) {
      obj.cantidad++;

    } else {
      this.arrayProductoRecibido.push(nuevoProducto);
    }
    console.log(this.arrayProductoRecibido);
  }


}
