import { Component, OnInit, Input } from '@angular/core';
import { SubMenu } from './sub-menu';

@Component({
  selector: 'app-home-sub-menu',
  templateUrl: './home-sub-menu.component.html',
  styleUrls: ['./home-sub-menu.component.css']
})
export class HomeSubMenuComponent implements OnInit {

  @Input() data: SubMenu;

  constructor() { }

  ngOnInit() {
  }

}
