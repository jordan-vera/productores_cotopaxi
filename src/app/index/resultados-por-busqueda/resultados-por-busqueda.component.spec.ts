import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPorBusquedaComponent } from './resultados-por-busqueda.component';

describe('ResultadosPorBusquedaComponent', () => {
  let component: ResultadosPorBusquedaComponent;
  let fixture: ComponentFixture<ResultadosPorBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosPorBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosPorBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
