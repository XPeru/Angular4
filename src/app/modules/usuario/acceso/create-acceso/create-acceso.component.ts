import { Component, OnInit } from '@angular/core';
import { Acceso } from '../../../../models/acceso';
import { AccesoService } from '../../../../services/acceso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-acceso',
  templateUrl: './create-acceso.component.html',
  styleUrls: ['./create-acceso.component.css']
})
export class CreateAccesoComponent implements OnInit {

  acceso: Acceso;

  constructor(private router: Router, private accesoService: AccesoService) { }

  ngOnInit() {
    this.acceso = <Acceso> {};
  }

  saveAcceso() {
    this.accesoService
      .createAcceso(this.acceso)
      .subscribe(() => this.router.navigate(['usuario/acceso']), err => console.log(err));
  }

}
