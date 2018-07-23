import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { UsuarioCreateComponent } from './modules/usuario/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './modules/usuario/usuario-edit/usuario-edit.component';
import { AccesoComponent } from './modules/usuario/acceso/acceso.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'usuario-create',
    component: UsuarioCreateComponent
  },
  {
    path: 'usuario-edit/:id',
    component: UsuarioEditComponent
  },
  {
    path: 'acceso',
    component: AccesoComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
