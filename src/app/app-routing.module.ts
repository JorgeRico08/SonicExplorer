import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopComponent } from './pages/top/top.component';
import { ImganesMusicComponent } from './pages/imganes-music/imganes-music.component';
import { VideoMusicalesComponent } from './pages/video-musicales/video-musicales.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'top', component: TopComponent },
  { path: 'music', component: ImganesMusicComponent },
  { path: 'video', component: VideoMusicalesComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
