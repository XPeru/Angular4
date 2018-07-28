import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Almacen } from '../models/almacen';
import { AlmacenService } from './almacen.service';

export class AlmacenDataSource implements DataSource<Almacen> {

    private almacensSubject = new BehaviorSubject<Almacen[]>([]);
    private loadingAlmacensSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingAlmacensSubject.asObservable();

    constructor(private almacenService: AlmacenService) {}

    loadAlmacens(filter: string, active: string, direction: string, pageIndex: number, pageSize: number) {
        this.loadingAlmacensSubject.next(true);
        this.almacenService.findAlmacens(filter, active, direction, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingAlmacensSubject.next(false))
            ).subscribe(
                almacens => this.almacensSubject.next(almacens)
            );

    }

    connect(collectionViewer: CollectionViewer): Observable<Almacen[]> {
        return this.almacensSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.almacensSubject.complete();
        this.loadingAlmacensSubject.complete();
    }
}
