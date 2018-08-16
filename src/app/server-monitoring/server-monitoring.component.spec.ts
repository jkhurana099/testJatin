import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerMonitoringComponent } from './server-monitoring.component';

describe('ServerMonitoringComponent', () => {
  let component: ServerMonitoringComponent;
  let fixture: ComponentFixture<ServerMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
