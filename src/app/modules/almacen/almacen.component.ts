import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AlmacenDataSource } from '../../services/almacen.datasource';
import { AlmacenService } from '../../services/almacen.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  countAlmacens: number;
  idAlmacenSelected: number;
  dataSource: AlmacenDataSource;
  displayedColumns = ['ID_ALMACEN', 'CODIGO_ALMACEN', 'UBICACION', 'edit', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private almacenService: AlmacenService) { }

  ngOnInit() {
    this.dataSource = new AlmacenDataSource(this.almacenService);
    this.dataSource.loadAlmacens('', '', '', 0, 10);
    this.almacenService.countAlmacens('').subscribe(count => this.countAlmacens = count);
    this.idAlmacenSelected = 0;
  }

  setSelectedId(row) {
    this.idAlmacenSelected = row.ID_ALMACEN;
  }

  deleteAlmacen(row) {
    this.almacenService
      .deleteAlmacen(row)
      .subscribe(() => this.loadAlmacensPage());
  }

  loadAlmacensPage() {
    this.dataSource.loadAlmacens(
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
    this.almacenService.countAlmacens(this.input.nativeElement.value)
      .subscribe(count => this.countAlmacens = count);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadAlmacensPage();
        })
      ).subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadAlmacensPage())
      ).subscribe();
  }

}
