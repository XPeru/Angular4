import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.MenuComponent } from './home.menu.component';

describe('Home.MenuComponent', () => {
  let component: Home.MenuComponent;
  let fixture: ComponentFixture<Home.MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
