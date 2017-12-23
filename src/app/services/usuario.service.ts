import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/usuario';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {
  private serviceUrl = '/api/usuario';

  constructor(private http: HttpClient) {


  }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.serviceUrl + '/list');
  }

}
