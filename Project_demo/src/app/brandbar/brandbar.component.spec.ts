import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandbarComponent } from './brandbar.component';

describe('BrandbarComponent', () => {
  let component: BrandbarComponent;
  let fixture: ComponentFixture<BrandbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
