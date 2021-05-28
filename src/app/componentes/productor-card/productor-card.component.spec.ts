import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorCardComponent } from './productor-card.component';

describe('ProductorCardComponent', () => {
  let component: ProductorCardComponent;
  let fixture: ComponentFixture<ProductorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
