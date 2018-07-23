import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AccesoDataSource } from '../../../services/acceso.datasource';
import { AccesoService } from '../../../services/acceso.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit, AfterViewInit {

  countAccesos: number;
  idAccesoSelected: number;
  dataSource: AccesoDataSource;
  displayedColumns = ['ID_ACCESO_USUARIO', 'DESCRIPCION', 'edit', 'delete'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private accesoService: AccesoService) {}

  ngOnInit() {
    this.dataSource = new AccesoDataSource(this.accesoService);
    this.dataSource.loadAccesos('', '', '', 0, 10);
    this.accesoService.countAccesos('').subscribe(count => this.countAccesos = count);
    this.idAccesoSelected = 0;
  }

  setSelectedId(row) {
    this.idAccesoSelected = row.ID_ACCESO_USUARIO;
  }

  deleteAcceso(row) {
    this.accesoService
      .deleteAcceso(row)
      .subscribe(() => this.loadAccesosPage());
  }

  loadAccesosPage() {
    this.dataSource.loadAccesos(
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
    this.accesoService.countAccesos(this.input.nativeElement.value)
      .subscribe(count => this.countAccesos = count);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadAccesosPage();
        })
      ).subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadAccesosPage())
      ).subscribe();
  }

}
