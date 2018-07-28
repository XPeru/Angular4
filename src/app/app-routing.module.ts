import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { UsuarioCreateComponent } from './modules/usuario/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './modules/usuario/usuario-edit/usuario-edit.component';
import { AccesoComponent } from './modules/usuario/acceso/acceso.component';
import { CreateAccesoComponent } from './modules/usuario/acceso/create-acceso/create-acceso.component';
import { EditAccesoComponent } from './modules/usuario/acceso/edit-acceso/edit-acceso.component';
import { TipoComponent } from './modules/usuario/tipo/tipo.component';
import { CreateTipoComponent } from './modules/usuario/tipo/create-tipo/create-tipo.component';
import { EditTipoComponent } from './modules/usuario/tipo/edit-tipo/edit-tipo.component';

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
    path: 'usuario/acceso',
    component: AccesoComponent
  },
  {
    path: 'usuario/acceso/create',
    component: CreateAccesoComponent
  },
  {
    path: 'usuario/acceso/edit/:id',
    component: EditAccesoComponent
  },
  {
    path: 'usuario/tipo',
    component: TipoComponent
  },
  {
    path: 'usuario/tipo/create',
    component: CreateTipoComponent
  },
  {
    path: 'usuario/tipo/edit/:id',
    component: EditTipoComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
