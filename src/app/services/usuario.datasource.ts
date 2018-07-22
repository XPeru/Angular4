import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Usuario } from '../models/usuario';
import { UsuarioService } from './usuario.service';

export class UsuarioDataSource implements DataSource<Usuario> {

    private usuariosSubject = new BehaviorSubject<Usuario[]>([]);
    private loadingUsuariosSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingUsuariosSubject.asObservable();

    constructor(private usuarioService: UsuarioService) {}

    loadUsuarios(filter: string, active: string, direction: string, pageIndex: number, pageSize: number) {
        this.loadingUsuariosSubject.next(true);
        this.usuarioService.findUsuarios(filter, active, direction, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingUsuariosSubject.next(false))
            ).subscribe(
                usuarios => this.usuariosSubject.next(usuarios)
            );

    }

    connect(collectionViewer: CollectionViewer): Observable<Usuario[]> {
        return this.usuariosSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.usuariosSubject.complete();
        this.loadingUsuariosSubject.complete();
    }
}
