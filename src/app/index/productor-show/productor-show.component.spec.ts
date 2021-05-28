import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorShowComponent } from './productor-show.component';

describe('ProductorShowComponent', () => {
  let component: ProductorShowComponent;
  let fixture: ComponentFixture<ProductorShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
