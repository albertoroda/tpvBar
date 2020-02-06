import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  @Output() enviarProducto: EventEmitter<any>;


  constructor() {
    this.enviarProducto = new EventEmitter();
  }

  ngOnInit() {
  }

  manejarClick(producto) {
    this.enviarProducto.emit(producto);

  }

}
