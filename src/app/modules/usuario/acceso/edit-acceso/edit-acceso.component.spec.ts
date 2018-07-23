import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccesoComponent } from './edit-acceso.component';

describe('EditAccesoComponent', () => {
  let component: EditAccesoComponent;
  let fixture: ComponentFixture<EditAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
