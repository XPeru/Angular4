import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSortable, MatTableDataSource } from '@angular/material';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { UsuarioDataSource } from '../../services/usuario.datasource';
@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, AfterViewInit {

    countUsuarios: number;
    idUsuarioSelected: number;
    dataSource: UsuarioDataSource;

    displayedColumns = ['NOMBRE', 'APELLIDOS', 'IMAGEN', 'CREATE_TIME', 'UPDATE_TIME', 'TIPO', 'IS_ACTIVE', 'edit', 'delete'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('input') input: ElementRef;

    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.dataSource = new UsuarioDataSource(this.usuarioService);
        this.dataSource.loadUsuarios('', '', '', 0, 10);
        this.usuarioService.countUsuarios('').subscribe(count => this.countUsuarios = count);
        this.idUsuarioSelected = 0;
    }

    setSelectedId(row) {
        this.idUsuarioSelected = row.ID_USUARIO;
    }

    loadUsuariosPage() {
        this.dataSource.loadUsuarios(
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
        this.usuarioService.countUsuarios(this.input.nativeElement.value)
        .subscribe(count => this.countUsuarios = count);
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
            debounceTime(150),
            distinctUntilChanged(),
            tap(() => {
                this.paginator.pageIndex = 0;
                this.loadUsuariosPage();
            })
        ).subscribe();

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadUsuariosPage())
        ).subscribe();
    }

}
