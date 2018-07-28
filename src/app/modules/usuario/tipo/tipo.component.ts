import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TipoDataSource } from '../../../services/tipo.datasource';
import { TipoService } from '../../../services/tipo.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit, AfterViewInit {

  countTipos: number;
  idTipoSelected: number;
  dataSource: TipoDataSource;
  displayedColumns = ['ID_TIPO_USUARIO', 'TIPO', 'edit', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private tipoService: TipoService) { }

  ngOnInit() {
    this.dataSource = new TipoDataSource(this.tipoService);
    this.dataSource.loadTipos('', '', '', 0, 10);
    this.tipoService.countTipos('').subscribe(count => this.countTipos = count);
    this.idTipoSelected = 0;
  }

  setSelectedId(row) {
    this.idTipoSelected = row.ID_TIPO_USUARIO;
  }

  deleteTipo(row) {
    this.tipoService
      .deleteTipo(row)
      .subscribe(() => this.loadTiposPage());
  }

  loadTiposPage() {
    this.dataSource.loadTipos(
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
    this.tipoService.countTipos(this.input.nativeElement.value)
      .subscribe(count => this.countTipos = count);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadTiposPage();
        })
      ).subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadTiposPage())
      ).subscribe();
  }

}