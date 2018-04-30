import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {
  private serviceUrl = '/api/usuario';

  constructor(private http: HttpClient) {}

  findUsuarios(filter = '',
  active = '',
  direction = '',
  pageNumber = 0,
  pageSize = 10): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.serviceUrl + '/get', {
      params: new HttpParams()
            .set('filter', filter)
            .set('active', active)
            .set('sortOrder', direction)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    });
  };

  countUsuarios(filter = ''): Observable<number> {
    return this.http.get<number>(this.serviceUrl + '/count', {
      params: new HttpParams()
      .set('filter', filter)
    });
  }

  findUsuarioById(usuarioId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.serviceUrl}/get/${usuarioId}`);
  }

  createUsuario(usuario: Usuario) {
    return this.http.post(this.serviceUrl + '/create', usuario);
  }

  updateUsuario(usuario: Usuario): Observable<string> {
    return this.http.put<string>(this.serviceUrl + '/update', usuario);
  }

}
