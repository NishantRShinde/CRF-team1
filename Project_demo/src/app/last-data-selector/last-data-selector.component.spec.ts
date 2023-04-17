import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDataSelectorComponent } from './last-data-selector.component';

describe('LastDataSelectorComponent', () => {
  let component: LastDataSelectorComponent;
  let fixture: ComponentFixture<LastDataSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastDataSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastDataSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
