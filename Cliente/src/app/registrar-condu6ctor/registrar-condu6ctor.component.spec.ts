import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCondu6ctorComponent } from './registrar-condu6ctor.component';

describe('RegistrarCondu6ctorComponent', () => {
  let component: RegistrarCondu6ctorComponent;
  let fixture: ComponentFixture<RegistrarCondu6ctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarCondu6ctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCondu6ctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
