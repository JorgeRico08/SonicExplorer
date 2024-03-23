import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogeoUserComponent } from './logeo-user.component';

describe('LogeoUserComponent', () => {
  let component: LogeoUserComponent;
  let fixture: ComponentFixture<LogeoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogeoUserComponent]
    });
    fixture = TestBed.createComponent(LogeoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
