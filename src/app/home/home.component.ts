import { Component, OnInit } from '@angular/core';
import { Menu } from '../home-menu/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = "";

  constructor() { }

  ngOnInit() {
  }
  dashboard =  new Menu(
    "Dashboard",
    "Dashboard",
    "Muestra las graficas de compras, ventas, entradas y salidas por periodos.",
    'dashboard',
    'pie-image-menu-skyblue',
    '/assets/images/dashboard_test.jpeg',
    'back-skyblue',
    "fa fa-area-chart center-icon"
  );

 usuario = new Menu(
    "Usuarios",
    "Usuarios",
    "Funcionalidades asociadas a los usuarios, creacion, edicion y permisos asociados.",
    'usuario',
    'pie-image-menu-red',
    '/assets/images/usuarios.jpg',
    'back-red',
    "glyphicon glyphicon-user center-icon"
 );

 almacen = new Menu(
    "Almacenes",
    "Almacenes",
    "Creacion, edicion de almacenes.",
    'almacen',
    'pie-image-menu-green',
    '/assets/images/almacenes.jpg',
    'back-green',
    "fa fa-cubes center-icon"
 );

 articulo = new Menu(
    "Articulos",
    "Articulos",
    "Creacion y edicion de articulos en la aplicacion.",
    'articulo',
    'pie-image-menu-blue',
    '/assets/images/articulos.jpg',
    'back-blue',
    "glyphicon glyphicon-th-list center-icon"
 );

 cliprov = new Menu(
    "Clientes y Proveedores",
    "Clientes y Proveedores",
    "Creacion, edicion y supresion de clientes y proveedores.",
    'cliprov',
    'pie-image-menu-purple',
    '/assets/images/personas.jpg',
    'back-purple',
    "center-icon glyphicon glyphicon-globe"
 );

 movimiento = new Menu(
    "Movimientos",
    "Movimientos",
    "Ingresos y salidas",
    'movimiento',
    'pie-image-menu-orange',
    '/assets/images/movimientos.jpg',
    'back-orange',
    "glyphicon glyphicon-transfer center-icon"
 );

  receiveMessage($event) {
    this.message = $event;
  }
}
