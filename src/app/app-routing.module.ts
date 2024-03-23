import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopComponent } from './pages/top/top.component';
import { ImganesMusicComponent } from './pages/imganes-music/imganes-music.component';
import { VideoMusicalesComponent } from './pages/video-musicales/video-musicales.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { LogeoUserComponent } from './pages/auth/logeo-user/logeo-user.component';

const routes: Routes = [
  // { path: 'inicio', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LogeoUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'top', component: TopComponent },
  { path: 'music', component: ImganesMusicComponent },
  { path: 'video', component: VideoMusicalesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' , },
  // { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
