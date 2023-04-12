import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntitledReportComponent } from './untitled-report.component';

describe('UntitledReportComponent', () => {
  let component: UntitledReportComponent;
  let fixture: ComponentFixture<UntitledReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UntitledReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UntitledReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
