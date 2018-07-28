import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Tipo } from '../models/tipo';

@Injectable()
export class TipoService {

  private serviceUrl = '/api/tipousuario';

  constructor(private http: HttpClient) {}

  findTipos(filter = '',
  active = '',
  direction = '',
  pageNumber = 0,
  pageSize = 10): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(`${this.serviceUrl}/get`, {
      params: new HttpParams()
            .set('filter', filter)
            .set('active', active)
            .set('sortOrder', direction)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    });
  }

  countTipos(filter = ''): Observable<number> {
    return this.http.get<number>(`${this.serviceUrl}/count`, {
      params: new HttpParams()
      .set('filter', filter)
    });
  }

  findTipoById(tipoId: number): Observable<Tipo> {
    return this.http.get<Tipo>(`${this.serviceUrl}/get/${tipoId}`);
  }

  createTipo(tipo: Tipo): Observable<string> {
    return this.http.post<string>(`${this.serviceUrl}/create`, tipo);
  }

  updateTipo(tipo: Tipo): Observable<string> {
    return this.http.put<string>(`${this.serviceUrl}/update`, tipo);
  }

  deleteTipo(tipoId: number): Observable<string> {
    return this.http.delete<string>(`${this.serviceUrl}/delete/${tipoId}`);
  }

}
