import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CategoriaDataSource } from '../../../services/categoria.datasource';
import { CategoriaService } from '../../../services/categoria.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  countCategorias: number;
  idCategoriaSelected: number;
  dataSource: CategoriaDataSource;
  displayedColumns = ['ID_CATEGORIA', 'DESCRIPCION', 'edit', 'delete'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
    this.dataSource = new CategoriaDataSource(this.categoriaService);
    this.dataSource.loadCategorias('', '', '', 0, 10);
    this.categoriaService.countCategorias('').subscribe(count => this.countCategorias = count);
    this.idCategoriaSelected = 0;
  }

  setSelectedId(row) {
    this.idCategoriaSelected = row.ID_CATEGORIA;
  }

  deleteCategoria(row) {
    this.categoriaService
      .deleteCategoria(row)
      .subscribe(() => this.loadCategoriasPage());
  }

  loadCategoriasPage() {
    this.dataSource.loadCategorias(
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
    this.categoriaService.countCategorias(this.input.nativeElement.value)
      .subscribe(count => this.countCategorias = count);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadCategoriasPage();
        })
      ).subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadCategoriasPage())
      ).subscribe();
  }

}
