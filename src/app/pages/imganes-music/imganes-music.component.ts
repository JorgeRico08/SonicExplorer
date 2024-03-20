import { Component } from '@angular/core';

@Component({
  selector: 'app-imganes-music',
  templateUrl: './imganes-music.component.html',
  styleUrls: ['./imganes-music.component.css']
})
export class ImganesMusicComponent {
  cards = [
    {
      id: 1,
      imageUrl: 'https://lh3.googleusercontent.com/sTFCErs-2W0CM4sO-S_c8pP4nVcBN1Tf1bYAMQhGmMe8DdpOM9MmUDBS5i2BnPhBYJo6W8QWbUwpiKDU=w544-h544-l90-rj',
      title: 'A Mí',
      Artista : 'Rels B',
      link: ''
    },
    {
      id: 2,
      imageUrl: 'https://lh3.googleusercontent.com/7a03Ybk8vbe8c4dl4E8l77Y4e9aEWjQvTfOAdLdXxsnjZ57gYQ8FsKra9SgXAHT-jtiwuq6lukCfbRKL=w544-h544-l90-rj',
      title: 'I Wanna Be Yours',      
      Artista : 'Arctic Monkeys',
      link : 'https://music.youtube.com/watch?v=nyuo9-OjNNg&si=DM8QnbViMVifF91P'
    },
  ];
}
