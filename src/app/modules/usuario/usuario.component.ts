import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  dataSource = new UsuarioDataSource(this.usuarioService);
  displayedColumns = ["NOMBRE", "APELLIDOS", "IMAGEN", "CREATE_TIME", "UPDATE_TIME", "TIPO", "IS_ACTIVE"];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}

export class UsuarioDataSource extends DataSource<any> {

  constructor(private usuarioService: UsuarioService) {
    super();
  }

  connect(): Observable<Usuario[]> {
    return this.usuarioService.getUsuario();
  }

  disconnect() {

  }
}
