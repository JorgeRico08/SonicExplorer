import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImganesMusicComponent } from './imganes-music.component';

describe('ImganesMusicComponent', () => {
  let component: ImganesMusicComponent;
  let fixture: ComponentFixture<ImganesMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImganesMusicComponent]
    });
    fixture = TestBed.createComponent(ImganesMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
