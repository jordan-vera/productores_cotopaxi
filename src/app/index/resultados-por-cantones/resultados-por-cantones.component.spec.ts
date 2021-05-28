import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPorCantonesComponent } from './resultados-por-cantones.component';

describe('ResultadosPorCantonesComponent', () => {
  let component: ResultadosPorCantonesComponent;
  let fixture: ComponentFixture<ResultadosPorCantonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosPorCantonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosPorCantonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
