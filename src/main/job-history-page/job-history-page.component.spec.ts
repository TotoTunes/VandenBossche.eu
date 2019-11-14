import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHistoryPageComponent } from './job-history-page.component';

describe('JobHistoryPageComponent', () => {
  let component: JobHistoryPageComponent;
  let fixture: ComponentFixture<JobHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
