import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraComponent } from './nuestra.component';

describe('NuestraComponent', () => {
  let component: NuestraComponent;
  let fixture: ComponentFixture<NuestraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
