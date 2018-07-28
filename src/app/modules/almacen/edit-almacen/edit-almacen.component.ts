import { Component, OnInit } from '@angular/core';
import { Almacen } from '../../../models/almacen';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmacenService } from '../../../services/almacen.service';

@Component({
  selector: 'app-edit-almacen',
  templateUrl: './edit-almacen.component.html',
  styleUrls: ['./edit-almacen.component.css']
})
export class EditAlmacenComponent implements OnInit {

  currentAlmacen: Almacen = <Almacen> {};

  constructor(private router: Router, private almacenService: AlmacenService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAlmacenById(this.route.snapshot.params['id']);
  }

  getAlmacenById(id) {
    this.almacenService
      .findAlmacenById(id)
      .subscribe(data => this.currentAlmacen = data);
  }

  updateAlmacen() {
    this.almacenService
      .updateAlmacen(this.currentAlmacen)
      .subscribe(() => this.router.navigate(['almacen']), err => console.log(err));
  }

}
