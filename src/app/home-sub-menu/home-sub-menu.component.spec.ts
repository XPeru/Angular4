import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubMenuComponent } from './home-sub-menu.component';

describe('HomeSubMenuComponent', () => {
  let component: HomeSubMenuComponent;
  let fixture: ComponentFixture<HomeSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
