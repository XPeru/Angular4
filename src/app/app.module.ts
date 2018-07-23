import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule } from './shared/custom-material.module';
import { InputFileComponent } from './shared/input-file/input-file.component';
import { ByteFormatPipe } from './shared/input-file/byte-format.pipe';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeSubMenuComponent } from './home-sub-menu/home-sub-menu.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { UsuarioService } from './services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioCreateComponent } from './modules/usuario/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './modules/usuario/usuario-edit/usuario-edit.component';
import { AccesoComponent } from './modules/usuario/acceso/acceso.component';
import { AccesoService } from './services/acceso.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeMenuComponent,
    HomeSubMenuComponent,
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuarioEditComponent,
    AccesoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    },
    CookieService,
    UsuarioService,
    AccesoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
