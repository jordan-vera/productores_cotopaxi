import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductoresComponent } from './agregar-productores.component';

describe('AgregarProductoresComponent', () => {
  let component: AgregarProductoresComponent;
  let fixture: ComponentFixture<AgregarProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
