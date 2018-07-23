import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccesoComponent } from './create-acceso.component';

describe('CreateAccesoComponent', () => {
  let component: CreateAccesoComponent;
  let fixture: ComponentFixture<CreateAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
