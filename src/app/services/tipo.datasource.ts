import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Tipo } from '../models/tipo';
import { TipoService } from './tipo.service';

export class TipoDataSource implements DataSource<Tipo> {

    private tiposSubject = new BehaviorSubject<Tipo[]>([]);
    private loadingTiposSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingTiposSubject.asObservable();

    constructor(private tipoService: TipoService) {}

    loadTipos(filter: string, active: string, direction: string, pageIndex: number, pageSize: number) {
        this.loadingTiposSubject.next(true);
        this.tipoService.findTipos(filter, active, direction, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingTiposSubject.next(false))
            ).subscribe(
                tipos => this.tiposSubject.next(tipos)
            );

    }

    connect(collectionViewer: CollectionViewer): Observable<Tipo[]> {
        return this.tiposSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.tiposSubject.complete();
        this.loadingTiposSubject.complete();
    }
}
