import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPorActividadesComponent } from './resultados-por-actividades.component';

describe('ResultadosPorActividadesComponent', () => {
  let component: ResultadosPorActividadesComponent;
  let fixture: ComponentFixture<ResultadosPorActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosPorActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosPorActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
