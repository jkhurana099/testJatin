import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsReportingComponent } from './analytics-reporting.component';

describe('AnalyticsReportingComponent', () => {
  let component: AnalyticsReportingComponent;
  let fixture: ComponentFixture<AnalyticsReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
