import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMusicalesComponent } from './video-musicales.component';

describe('VideoMusicalesComponent', () => {
  let component: VideoMusicalesComponent;
  let fixture: ComponentFixture<VideoMusicalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoMusicalesComponent]
    });
    fixture = TestBed.createComponent(VideoMusicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
