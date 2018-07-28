import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Categoria } from '../models/categoria';

@Injectable()
export class CategoriaService {

  private serviceUrl = '/api/categoria';

  constructor(private http: HttpClient) {}

  findCategorias(filter = '',
  active = '',
  direction = '',
  pageNumber = 0,
  pageSize = 10): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.serviceUrl}/get`, {
      params: new HttpParams()
            .set('filter', filter)
            .set('active', active)
            .set('sortOrder', direction)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    });
  }

  countCategorias(filter = ''): Observable<number> {
    return this.http.get<number>(`${this.serviceUrl}/count`, {
      params: new HttpParams()
      .set('filter', filter)
    });
  }

  findCategoriaById(categoriaId: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.serviceUrl}/get/${categoriaId}`);
  }

  createCategoria(categoria: Categoria): Observable<string> {
    return this.http.post<string>(`${this.serviceUrl}/create`, categoria);
  }

  updateCategoria(categoria: Categoria): Observable<string> {
    return this.http.put<string>(`${this.serviceUrl}/update`, categoria);
  }

  deleteCategoria(categoriaId: number): Observable<string> {
    return this.http.delete<string>(`${this.serviceUrl}/delete/${categoriaId}`);
  }

}
