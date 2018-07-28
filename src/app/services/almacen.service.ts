import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Almacen } from '../models/almacen';


@Injectable()
export class AlmacenService {

  private serviceUrl = '/api/almacen';

  constructor(private http: HttpClient) {}

  findAlmacens(filter = '',
  active = '',
  direction = '',
  pageNumber = 0,
  pageSize = 10): Observable<Almacen[]> {
    return this.http.get<Almacen[]>(`${this.serviceUrl}/get`, {
      params: new HttpParams()
            .set('filter', filter)
            .set('active', active)
            .set('sortOrder', direction)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    });
  }

  countAlmacens(filter = ''): Observable<number> {
    return this.http.get<number>(`${this.serviceUrl}/count`, {
      params: new HttpParams()
      .set('filter', filter)
    });
  }

  findAlmacenById(almacenId: number): Observable<Almacen> {
    return this.http.get<Almacen>(`${this.serviceUrl}/get/${almacenId}`);
  }

  createAlmacen(almacen: Almacen): Observable<string> {
    return this.http.post<string>(`${this.serviceUrl}/create`, almacen);
  }

  updateAlmacen(almacen: Almacen): Observable<string> {
    return this.http.put<string>(`${this.serviceUrl}/update`, almacen);
  }

  deleteAlmacen(almacenId: number): Observable<string> {
    return this.http.delete<string>(`${this.serviceUrl}/delete/${almacenId}`);
  }

}