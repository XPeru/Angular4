import { Component, OnInit } from '@angular/core';
import { Acceso } from '../../../../models/acceso';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoService } from '../../../../services/acceso.service';

@Component({
  selector: 'app-edit-acceso',
  templateUrl: './edit-acceso.component.html',
  styleUrls: ['./edit-acceso.component.css']
})
export class EditAccesoComponent implements OnInit {

  currentAcceso: Acceso = <Acceso> {};

  constructor(private router: Router, private accesoService: AccesoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAccesoById(this.route.snapshot.params['id']);
  }

  getAccesoById(id) {
    this.accesoService
      .findAccesoById(id)
      .subscribe(data => this.currentAcceso = data);
  }

  updateAcceso() {
    this.accesoService
      .updateAcceso(this.currentAcceso)
      .subscribe(() => this.router.navigate(['usuario/acceso']), err => console.log(err));
  }

}
