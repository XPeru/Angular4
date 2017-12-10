import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dashboard = {
    alt: "Dashboard",
    title: "Dashboard",
    subtitle: "Muestra las graficas de compras, ventas, entradas y salidas por periodos.",
    stringMenu: 'dashboard',
    color: 'pie-image-menu-skyblue',
    src: '/assets/images/dashboard_test.jpeg',
    background: 'back-skyblue',
    classIcon: "fa fa-area-chart center-icon"
  };

 usuario = {
    alt: "Usuarios",
    title: "Usuarios",
    subtitle: "Funcionalidades asociadas a los usuarios, creacion, edicion y permisos asociados.",
    stringMenu: 'usuario',
    color: 'pie-image-menu-red',
    src: '/assets/images/usuarios.jpg',
    background: 'back-red',
    classIcon: "glyphicon glyphicon-user center-icon"
  };

 almacen = {
    alt: "Almacenes",
    title: "Almacenes",
    subtitle: "Creacion, edicion de almacenes.",
    stringMenu: 'almacen',
    color: 'pie-image-menu-green',
    src: '/assets/images/almacenes.jpg',
    background: 'back-green',
    classIcon: "fa fa-cubes center-icon"
  };

 articulo = {
    alt: "Articulos",
    title: "Articulos",
    subtitle: "Creacion y edicion de articulos en la aplicacion.",
    stringMenu: 'articulo',
    color: 'pie-image-menu-blue',
    src: '/assets/images/articulos.jpg',
    background: 'back-blue',
    classIcon: "glyphicon glyphicon-th-list center-icon"
  };

 cliprov = {
    alt: "Clientes y Proveedores",
    title: "Clientes y Proveedores",
    subtitle: "Creacion, edicion y supresion de clientes y proveedores.",
    stringMenu: 'cliprov',
    color: 'pie-image-menu-purple',
    src: '/assets/images/personas.jpg',
    background: 'back-purple',
    classIcon: "center-icon glyphicon glyphicon-globe"
  };

 movimiento = {
    alt: "Movimientos",
    title: "Movimientos",
    subtitle: "Ingresos y salidas",
    stringMenu: 'movimiento',
    color: 'pie-image-menu-orange',
    src: '/assets/images/movimientos.jpg',
    background: 'back-orange',
    classIcon: "glyphicon glyphicon-transfer center-icon"
  };
}
