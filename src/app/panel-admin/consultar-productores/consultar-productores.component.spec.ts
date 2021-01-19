import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProductoresComponent } from './consultar-productores.component';

describe('ConsultarProductoresComponent', () => {
  let component: ConsultarProductoresComponent;
  let fixture: ComponentFixture<ConsultarProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
