import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Acceso } from '../models/acceso';
import { AccesoService } from './acceso.service';

export class AccesoDataSource implements DataSource<Acceso> {

    private accesosSubject = new BehaviorSubject<Acceso[]>([]);
    private loadingAccesosSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingAccesosSubject.asObservable();

    constructor(private accesoService: AccesoService) {}

    loadAccesos(filter: string, active: string, direction: string, pageIndex: number, pageSize: number) {
        this.loadingAccesosSubject.next(true);
        this.accesoService.findAccesos(filter, active, direction, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingAccesosSubject.next(false))
            ).subscribe(
                accesos => this.accesosSubject.next(accesos)
            );

    }

    connect(collectionViewer: CollectionViewer): Observable<Acceso[]> {
        return this.accesosSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.accesosSubject.complete();
        this.loadingAccesosSubject.complete();
    }
}
