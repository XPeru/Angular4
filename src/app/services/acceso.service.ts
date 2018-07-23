import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Acceso } from '../models/acceso';

@Injectable()
export class AccesoService {

  private serviceUrl = '/api/accesousuario';

  constructor(private http: HttpClient) {}

  findAccesos(filter = '',
  active = '',
  direction = '',
  pageNumber = 0,
  pageSize = 10): Observable<Acceso[]> {
    return this.http.get<Acceso[]>(`${this.serviceUrl}/get`, {
      params: new HttpParams()
            .set('filter', filter)
            .set('active', active)
            .set('sortOrder', direction)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    });
  }

  countAccesos(filter = ''): Observable<number> {
    return this.http.get<number>(`${this.serviceUrl}/count`, {
      params: new HttpParams()
      .set('filter', filter)
    });
  }

  findAccesoById(accesoId: number): Observable<Acceso> {
    return this.http.get<Acceso>(`${this.serviceUrl}/get/${accesoId}`);
  }

  createAcceso(acceso: Acceso): Observable<string> {
    return this.http.post<string>(`${this.serviceUrl}/create`, acceso);
  }

  updateAcceso(acceso: Acceso): Observable<string> {
    return this.http.put<string>(`${this.serviceUrl}/update`, acceso);
  }

  deleteAcceso(accesoId: number): Observable<string> {
    return this.http.delete<string>(`${this.serviceUrl}/delete/${accesoId}`);
  }

}
