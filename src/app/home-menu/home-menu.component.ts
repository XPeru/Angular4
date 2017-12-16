import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from './menu';


@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {
  @Input() data : Menu;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.data.stringMenu);
  }
  constructor() { }

  ngOnInit() {
  }

     

}
