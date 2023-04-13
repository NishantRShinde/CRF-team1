import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalDataSelectorComponent } from './internal-data-selector.component';

describe('InternalDataSelectorComponent', () => {
  let component: InternalDataSelectorComponent;
  let fixture: ComponentFixture<InternalDataSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalDataSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalDataSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
