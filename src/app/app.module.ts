import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TopComponent } from './pages/top/top.component';
import { ImganesMusicComponent } from './pages/imganes-music/imganes-music.component';
import { VideoMusicalesComponent } from './pages/video-musicales/video-musicales.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { LogeoUserComponent } from './pages/auth/logeo-user/logeo-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    TopComponent,
    ImganesMusicComponent,
    VideoMusicalesComponent,
    RegistroComponent,
    LogeoUserComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
