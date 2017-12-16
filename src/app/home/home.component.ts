import { Component, OnInit } from '@angular/core';
import { Menu } from '../home-menu/menu';
import { SubMenu } from '../home-sub-menu/sub-menu';

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

  derechoAcceso = new SubMenu(
    "glyphicon glyphicon-log-in center-icon",
    "overlay back-red img-circle",
    "pie-image-menu-red",
    "Derechos de acceso",
    "Creacion, edicion de los permisos de la aplicacion."
  );

  tipoUsuario = new SubMenu(
    "glyphicon glyphicon-pawn center-icon",
    "overlay back-red img-circle",
    "pie-image-menu-red",
    "Tipos de usuario",
    "Creacion y edicion de los tipos de usuario que pueden existir en la aplicacion."
  );

  gestionUsuario = new SubMenu(
    "glyphicon glyphicon-cog center-icon",
    "overlay back-red img-circle",
    "pie-image-menu-red",
    "Gestion de usuarios",
    "Creacion y edicion de los usuarios finales de la aplicacion."
  );

  gestionAlmacen = new SubMenu(
    "glyphicon glyphicon-cog center-icon",
    "overlay back-green img-circle",
    "pie-image-menu-green",
    "Gestion de almacenes",
    "Creacion, edicion de almacenes."
  );

  escogerAlmacen = new SubMenu(
    "glyphicon glyphicon-cog center-icon",
    "overlay back-green img-circle",
    "pie-image-menu-green",
    "Escoger almacen",
    ""
  );

  categoriaArticulo = new SubMenu(
    "glyphicon glyphicon-cog center-icon",
    "overlay back-blue img-circle",
    "pie-image-menu-blue",
    "Categorias de articulos",
    "Creacion, edicion de estas categorias."
  );

  gestionArticulo = new SubMenu(
    "glyphicon glyphicon-cog center-icon",
    "overlay back-blue img-circle",
    "pie-image-menu-blue",
    "Gestion de articulos",
    "Creacion, edicion de articulos."
  );

  cliente = new SubMenu(
    "fa fa-blind center-icon",
    "overlay back-purple img-circle",
    "pie-image-menu-purple",
    "Clientes",
    ""
  );

  proveedor = new SubMenu(
    "fa fa-industry center-icon",
    "overlay back-purple img-circle",
    "pie-image-menu-purple",
    "Proveedores",
    ""
  );

  tipoPersona = new SubMenu(
    "glyphicon glyphicon-cog center-icon",
    "overlay back-purple img-circle",
    "pie-image-menu-purple",
    "Tipos de persona",
    ""
  );

  ingreso = new SubMenu(
    "glyphicon glyphicon-triangle-right center-icon",
    "overlay back-orange img-circle",
    "pie-image-menu-orange",
    "Ingresos",
    "Creacion, edicion de ingresos."
  );

  salida = new SubMenu(
    "glyphicon glyphicon-triangle-left center-icon",
    "overlay back-orange img-circle",
    "pie-image-menu-orange",
    "Salidas",
    "Creacion, edicion de salidas."
  );

  tipoDocumento = new SubMenu(
    "glyphicon glyphicon-cog center-icon",
    "overlay back-orange img-circle",
    "pie-image-menu-orange",
    "Tipos de documento",
    ""
  );

  estado = new SubMenu(
    "glyphicon glyphicon-cog center-icon",
    "overlay back-orange img-circle",
    "pie-image-menu-orange",
    "Estado",
    ""
  );


  userSubMenus: SubMenu[] = [
    this.derechoAcceso,
    this.tipoUsuario,
    this.gestionUsuario
  ];

  almacenSubMenus: SubMenu[] = [
    this.gestionAlmacen,
    this.escogerAlmacen
  ];

  articuloSubMenus: SubMenu[] = [
    this.categoriaArticulo,
    this.gestionArticulo
  ];

  cliprovSubMenus: SubMenu[] = [
    this.cliente,
    this.proveedor,
    this.tipoPersona
  ];

  movimientoSubMenus: SubMenu[] = [
    this.ingreso,
    this.salida,
    this.tipoDocumento,
    this.estado
  ];

  receiveMessage($event) {
    this.message = $event;
  }
}
