import { Component } from '@angular/core';

@Component({
  selector: 'app-video-musicales',
  templateUrl: './video-musicales.component.html',
  styleUrls: ['./video-musicales.component.css']
})
export class VideoMusicalesComponent {
  items = [
    { id: 1, imageUrl: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_mx_default.jpg', title: 'Top 50: Mexico', description: 'Explora los éxitos más destacados de la música mexicana con nuestra lista de reproducción Top 50: Mexico. Desde el regional mexicano hasta los hits pop y rock, descubre lo que está sonando en México.' },
    { id: 2, imageUrl: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg', title: 'Top 50: Estados Unidos', description: 'Descubre las canciones más populares en Estados Unidos con nuestra lista de reproducción Top 50: Estados Unidos. Desde el rap y el hip-hop hasta el country y el pop, encuentra la música que está dominando las listas en EE. UU.' },
    { id: 3, imageUrl: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg', title: 'Top 50: Global', description: 'Sumérgete en las tendencias musicales a nivel mundial con nuestra lista de reproducción Top 50: Global. Desde los éxitos internacionales más recientes hasta los clásicos atemporales, disfruta de la diversidad musical que define la escena global.' }
  ];

  activeIndex = 0;

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
    this.changeBackgroundColor();
  }

  prevSlide() {
    this.activeIndex = this.activeIndex === 0 ? this.items.length - 1 : this.activeIndex - 1;
    this.changeBackgroundColor();
  }

  private changeBackgroundColor() {
    const carouselItem = document.querySelector('.carousel') as HTMLElement;
    const colors = ['#1a735f', '#cb1957', '#1e586c'];
    const colorIndex = this.activeIndex % colors.length;
    carouselItem.style.backgroundColor = colors[colorIndex];
  }
}
