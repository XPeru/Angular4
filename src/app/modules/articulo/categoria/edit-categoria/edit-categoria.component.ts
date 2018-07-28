import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../../../services/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  currentCategoria: Categoria = <Categoria> {};

  constructor(private router: Router, private categoriaService: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategoriaById(this.route.snapshot.params['id']);
  }

  getCategoriaById(id) {
    this.categoriaService
      .findCategoriaById(id)
      .subscribe(data => this.currentCategoria = data);
  }

  updateCategoria() {
    this.categoriaService
      .updateCategoria(this.currentCategoria)
      .subscribe(() => this.router.navigate(['articulo/categoria']), err => console.log(err));
  }


}
