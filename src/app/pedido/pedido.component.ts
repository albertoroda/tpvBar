import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() productos: Producto[];

  constructor() { }

  ngOnInit() {
  }
  borrar(producto) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    } else {
      this.productos.splice(producto);
    }

  }


  calcularTotal() {
    let resultado: number = 0;
    for (const producto of this.productos) {

      resultado += producto.cantidad * producto.precio;
    }
    return 'TOTAL: ' + resultado + '€';
  }

}
