import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../models/categoria';
import { CategoriaService } from '../../../../services/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  categoria: Categoria;

  constructor(private router: Router, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoria = <Categoria> {};
  }

  saveCategoria() {
    this.categoriaService
      .createCategoria(this.categoria)
      .subscribe(() => this.router.navigate(['articulo/categoria']), err => console.log(err));
  }
}
