import { Component, OnInit } from '@angular/core';
import { Tipo } from '../../../../models/tipo';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoService } from '../../../../services/tipo.service';

@Component({
  selector: 'app-edit-tipo',
  templateUrl: './edit-tipo.component.html',
  styleUrls: ['./edit-tipo.component.css']
})
export class EditTipoComponent implements OnInit {

  currentTipo: Tipo = <Tipo> {};

  constructor(private router: Router, private tipoService: TipoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTipoById(this.route.snapshot.params['id']);
  }

  getTipoById(id) {
    this.tipoService
      .findTipoById(id)
      .subscribe(data => this.currentTipo = data);
  }

  updateTipo() {
    this.tipoService
      .updateTipo(this.currentTipo)
      .subscribe(() => this.router.navigate(['usuario/tipo']), err => console.log(err));
  }

}