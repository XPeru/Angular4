import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Categoria } from '../models/categoria';
import { CategoriaService } from './categoria.service';

export class CategoriaDataSource implements DataSource<Categoria> {

    private categoriasSubject = new BehaviorSubject<Categoria[]>([]);
    private loadingCategoriasSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingCategoriasSubject.asObservable();

    constructor(private categoriaService: CategoriaService) {}

    loadCategorias(filter: string, active: string, direction: string, pageIndex: number, pageSize: number) {
        this.loadingCategoriasSubject.next(true);
        this.categoriaService.findCategorias(filter, active, direction, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingCategoriasSubject.next(false))
            ).subscribe(
                categorias => this.categoriasSubject.next(categorias)
            );

    }

    connect(collectionViewer: CollectionViewer): Observable<Categoria[]> {
        return this.categoriasSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.categoriasSubject.complete();
        this.loadingCategoriasSubject.complete();
    }
}
