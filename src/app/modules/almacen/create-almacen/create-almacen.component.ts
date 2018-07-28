import { Component, OnInit } from '@angular/core';
import { Almacen } from '../../../models/almacen';
import { AlmacenService } from '../../../services/almacen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-almacen',
  templateUrl: './create-almacen.component.html',
  styleUrls: ['./create-almacen.component.css']
})
export class CreateAlmacenComponent implements OnInit {

  almacen: Almacen;

  constructor(private router: Router, private almacenService: AlmacenService) { }

  ngOnInit() {
    this.almacen = <Almacen> {};
  }

  saveAlmacen() {
    this.almacenService
      .createAlmacen(this.almacen)
      .subscribe(() => this.router.navigate(['almacen']), err => console.log(err));
  }

}

