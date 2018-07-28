import { Component, OnInit } from '@angular/core';
import { Tipo } from '../../../../models/tipo';
import { TipoService } from '../../../../services/tipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tipo',
  templateUrl: './create-tipo.component.html',
  styleUrls: ['./create-tipo.component.css']
})
export class CreateTipoComponent implements OnInit {

  tipo: Tipo;

  constructor(private router: Router, private tipoService: TipoService) { }

  ngOnInit() {
    this.tipo = <Tipo> {};
  }

  saveTipo() {
    this.tipoService
      .createTipo(this.tipo)
      .subscribe(() => this.router.navigate(['usuario/tipo']), err => console.log(err));
  }
}
