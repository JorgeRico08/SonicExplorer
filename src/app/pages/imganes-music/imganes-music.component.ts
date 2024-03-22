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
      escritor: 'Escrita por: Daniel Heredia Vidal',
      productor : 'Producida por: Itchy & Buco Sounds, Lex Luthorz',
      link: 'https://open.spotify.com/intl-es/track/7MmrcXVA7A5zZ2CbDuGHNa?si=f340309053ca4316'
    },
    {
      id: 3,
      imageUrl: 'https://lh3.googleusercontent.com/rFXMv6QTdINgSWWpeR9GdLlDR-dZhEJ_I-Q6J_h46gTasTiSnJ7RANoPBPqgMFQTe2CJSaY0UgEfNRUqyQ=w544-h544-l90-rj',
      title: 'Rompe La Dompe',
      Artista : 'Junior H - Oscar Maydon - Peso Pluma',
      escritor: 'Alexis Fierro',
      productor : 'Alexis Fierro Antonio Perez Jimmy Humilde ',
      link: 'https://open.spotify.com/intl-es/track/2OWv3lRR8PtOVuHWzQNRs2?si=0a88e141feed495f'
    },
    {
      id: 4,
      imageUrl: 'https://lh3.googleusercontent.com/rCKKL6iuLDiU-gP5JSuMXa-mkhwJx25ltDTm8J7OEEWAiWd4A3HeQ8MBy3l-2n2f0iVXJUJwrQOm2EdvVQ=w544-h544-l90-rj',
      title: 'Madonna',
      Artista : 'Natanael Cano - Oscar Maydon',
      escritor: 'Alexis Fierro - Nathanahel Cano Monge - Oscar Maydon',
      productor : 'Marcelo Rivera LevyNatanael Cano',
      link: 'https://open.spotify.com/intl-es/track/5LhI8m7n8xlQmNe3b7Rwis?si=550fa7c9c70b48fe'
    },
    {
      id: 6,
      imageUrl: 'https://lh3.googleusercontent.com/FctV4htvNM718K8fJqbG21Ohky-2daA-ZrcMvdLYAov-fdewflEUDSH_hKzbL4HMZdQXTrD0ejZSNPM=w544-h544-s-l90-rj',
      title: 'Still Loving You',
      Artista : 'Scorpions',
      escritor: 'Klaus Meine Rudolf Schenker',
      productor : 'Mikael Nord Andersson - Martin Hansen',
      link: 'https://open.spotify.com/intl-es/track/0RdUX4WE0fO30VnlUbDVL6?si=e4ec51e999ec434c'
    },
    {
      id: 7,
      imageUrl: 'https://lh3.googleusercontent.com/pcrIVPiugsSpXJJPCaPNdp2vpHPo5UsmsoVjqlT7L1p7Lki663u9tONk-S3oqK9GvAsoj2m0AaNgNJj9Zg=w544-h544-s-l90-rj',
      title: 'Don`t Cry',
      Artista : 'Guns N` Roses',
      escritor: 'Duff McKaganJeffrey IsbellSaul HudsonW. Axl Rose',
      productor : 'Mike Clink - Guns N` Roses',
      link: 'https://open.spotify.com/intl-es/track/2N2yrmodOnVF10mKvItC9P?si=5bba10e92ecf4638'
    },
    {
      id: 8,
      imageUrl: 'https://lh3.googleusercontent.com/7XBCMOwR2NNvQ0X_OuoyPthJUC2wD0863g-qyLgi0QaGrsvETACOAgh4YKHX8Twb9k9IwKSCCwdGLlAb=w544-h544-l90-rj',
      title: 'Ode To The Mets',
      Artista : 'The Strokes',
      escritor: 'Julian Casablancas - The Strokes',
      productor : 'Rick Rubin',
      link: 'https://open.spotify.com/intl-es/track/1BLOVHYYlH4JUHQGcpt75R?si=d6555230f0ef4223'
    },
    {
      id: 9,
      imageUrl: 'https://lh3.googleusercontent.com/ObgPaYLRq5Ls-nLePedPEJtS1dPWm63vTfFZHE5KzpZk48Zk9ktY3fWu6ft8RiSMIc61xQzvZQ_b-UzyHQ=w544-h544-l90-rj',
      title: 'I Was Made For Lovin` You',
      Artista : 'KISS',
      escritor: 'Desmond Child - Paul Stanley - Vincent Poncia',
      productor : 'Vincent Poncia',
      link: 'https://open.spotify.com/intl-es/track/07q0QVgO56EorrSGHC48y3?si=30ca7e84e41143b7'
    },
    {
      id: 10,
      imageUrl: 'https://lh3.googleusercontent.com/-ZVBirKrMpYU64nehI5YXTcsTdFkJi-2-gqpylGkjZKOVVJxh5pFZ6zIu_0F2mIOvKSikJMfrCVLM-U=w544-h544-l90-rj',
      title: 'FIRST LOVE',
      Artista : 'Edgardo Nuñez - Oscar Ortiz',
      escritor: 'Oscar Josue Ortiz Medina',
      productor : ' - ',
      link: 'https://open.spotify.com/intl-es/track/7bywjHOc0wSjGGbj04XbVi?si=3d9e3fb805d34321'
    },
    {
      id: 11,
      imageUrl: 'https://lh3.googleusercontent.com/YGwKRDfPwD78Gc4Z8s19vyGUISFzpZU04EuMoSR8VhJH205ainPVJ9bY2O2TDUtIbxiba45_doCJ2yhD=w544-h544-l90-rj',
      title: 'Elvira',
      Artista : 'Chino PacasGabito BallesterosOscar Maydon',
      escritor: 'Alexis Armando Fierro Roman',
      productor : 'Oscar Maydon - Joel Núñez - Ivan Tanori - Jimmy Humilde',
      link: 'https://open.spotify.com/intl-es/track/1xgWArLVFD1AKsLzftZYc2?si=fee8acf9ccd849cb'
    },
    {
      id: 12,
      imageUrl: 'https://lh3.googleusercontent.com/AomByJOv-zZHf3M6Sb_VcrrX5hzoYO9GukFGVMQ_luMFkOOvzgde04khPHpHbmjl0qVUbNhfcxQzJ0X2=w544-h544-l90-rj',
      title: 'Poco A Poco',
      Artista : 'Los Dareyes De La Sierra - Xavi',
      escritor: 'Darey Castro - Fabio Ivan Gutierrez - Joshua Xavier Gutierrez Alonso',
      productor : 'Ernesto Fernandez',
      link: 'https://open.spotify.com/intl-es/track/4loIMejzvt11s97SGVEat8?si=b2ff76276d384bbd'
    },
    {
      id: 13,
      imageUrl: 'https://i.ytimg.com/vi/xGI3ky4kLwE/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mSw4KfQmOsdrUmjb_EMovYqnpCLg',
      title: 'O Me Voy O Te Vas',
      Artista : 'Natanael Cano',
      escritor: 'Marco Antonio Solís',
      productor : 'Marcelo Rivera Levy - Nathanahel Cano Monge',
      link: 'https://open.spotify.com/intl-es/track/127UT7AiWflJwjXWUBBVTQ?si=3b09e5f5872a4de1'
    },
    {
      id: 14,
      imageUrl: 'https://lh3.googleusercontent.com/nDdW1Em2dfj2H3zZ1nLh_vnSSKbvp7kIvriKf9DJRrm7WobfF9MjWEWvYIXIh82qxUwO8LXWnZTmGmve=w544-h544-l90-rj',
      title: 'Igual Que Un Ángel',
      Artista : 'Kali Uchis - Peso Pluma',
      escritor: 'Dylan Wiggins - Karly-Marina Loaiza - Manuel Lorente Freire',
      productor : 'Dylan Wiggins - Carter Lang - Kali Uchis',
      link: 'https://open.spotify.com/intl-es/track/6XaJfhwof7qIgbbXO5tIQI?si=bbf7c49dc8ae4593'
    },
    {
      id: 5,
      imageUrl: 'https://lh3.googleusercontent.com/njGKeqnKOUPy71aoXoOVyK7xuYfpxaRcrZX96E3zPEVeOF_OcXOm6ansrhPKcY6Wt0WGPKfK8dy38uRy=w544-h544-l90-rj',
      title: 'Regalo De Dios',
      Artista : 'Julión Álvarez y su Norteño Banda',
      escritor: 'Alfonso La CruzJulio Nápoles',
      productor : 'Julión Alvarez',
      link: 'https://open.spotify.com/intl-es/track/51qYdMBxt9mFbtZBzq1Yfi?si=9d9684a29d7e45db'
    },
    {
      id: 2,
      imageUrl: 'https://lh3.googleusercontent.com/HyhM2wDOI_Ii7Rae9hGPetfv2mmsXeOSjIETL_cqf7J4nKcSIUbmjXHLfuSdpt9XW2JoUTHMNSBslxSR=w544-h544-l90-rj',
      title: 'El JR 01',
      Artista : 'Justin Morales - Oscar Maydon',
      escritor: 'Daniel Candia Oscar Rene Maydon',
      productor : 'Jimmy Humilde',
      link: 'https://open.spotify.com/intl-es/track/1x7nf9SeVawE0wEl6oayFV?si=85ccd3ec75c940ed'
    },
    {
      id: 15,
      imageUrl: 'https://lh3.googleusercontent.com/RMKmLUC1yemGTMpatyPkkm_-LdOuOLs52cFhq4LLnb0UjZf0AE-I_VA8nfNP-GxAtTuckYLEF0oVhNs=w120-h120-l90-rj',
      title: 'Apaga El Cel',
      Artista : 'Calle 24 - Chino Pacas',
      escritor: 'Cristian Primera - Diego Millán - Edgar Eduardo Díaz - Jesus Ortiz Paz - Jesus Rodriguez - Juanpa Salazar - Miguel Armenta - Rudy Topete',
      productor : 'Jesus Ortiz Paz - Street Mob Records - Moisés Lopez - Angel Tumbado',
      link: 'https://open.spotify.com/intl-es/track/1sXr6moCwVxwKEgSPxhVvF?si=0f4793040bce4647'
    },
    {
      id: 15,
      imageUrl: 'https://lh3.googleusercontent.com/lyheKp79dakuQq6vuRi4uMKa9ZWc4hA70R5r8ySQowIr461Sm8fChtlTE7kCP04ApLASGNTuyQa1lbT7fA=w544-h544-l90-rj',
      title: 'Se Quedan Viendo',
      Artista : 'Junior H',
      escritor: 'Alexis Armando Fierro Roman',
      productor : 'Junior H',
      link: 'https://open.spotify.com/intl-es/track/2OWv3lRR8PtOVuHWzQNRs2?si=42d26a968b254a9f'
    },
    {
      id: 16,
      imageUrl: 'https://lh3.googleusercontent.com/KupwTsYc8OtGBiSvTCqvbDuU0NQmDQVKqVV9JGiJDivE8sENBJ4yidQBK9yfTgXH1fcNg9rnJUXkpNWw=w544-h544-l90-rj',
      title: 'Vete',
      Artista : 'Alfredo Olivas',
      escritor: 'Alfredo Olivas',
      productor : 'Alfredo Olivas',
      link: 'https://open.spotify.com/intl-es/track/1GtIK8iINes4gNt06F60NU?si=44b858bff90b47eb'
    },
    {
      id: 17,
      imageUrl: 'https://lh3.googleusercontent.com/1gXa4i8m_NecS7xNqLqzxy6rdOWBh_L6U91YYv5ULNdmvvYT1Pr6ld7_SyUs5L52pEQheVyfU9SnXUm9=w544-h544-l90-rj',
      title: 'Around the World',
      Artista : 'Daft Punk',
      escritor: 'Guy-Manuel de Homem-Christo - Thomas Bangalter',
      productor : 'Guy-Manuel de Homem-Christo - Thomas Bangalter',
      link: 'https://open.spotify.com/intl-es/track/1pKYYY0dkg23sQQXi0Q5zN?si=c5e135d723e94ab4'
    },
    {
      id: 18,
      imageUrl: 'https://lh3.googleusercontent.com/O-SeXg61tYo15uWSBzWPVoUlBx2mQAioidlHq3y-AurmaQZI2Vso7BJoGeDNAm2g6HquAq1z4g-1EBI=w544-h544-l90-rj',
      title: 'Stan',
      Artista : 'Dido - Eminem',
      escritor: 'Adam David Willard - Andy StametsDido Armstrong - John Reis - Marshall Mathers - P. HermanPaul O`Beirne - Peter Reichert',
      productor : 'DJ Mark the 45 King - Eminem - The 45 King',
      link: 'https://open.spotify.com/intl-es/track/3UmaczJpikHgJFyBTAJVoz?si=05a48ac9019f4c3a'
    },
    {
      id: 19,
      imageUrl: 'https://lh3.googleusercontent.com/R_ZGITXTLuvEMkaOwQez3i1ILBKF-ZnztKYZBwnmqxtsnbnPPVnx31W-E7ZBu7N6eUqRIMxL47k_K8FPeQ=w544-h544-l90-rj',
      title: 'HIGHEST IN THE ROOM',
      Artista : 'Travis Scott',
      escritor: 'Jacques Webster - Nik Frascona',
      productor : 'OZ - Nik D',
      link: 'https://open.spotify.com/intl-es/track/3eekarcy7kvN4yt5ZFzltW?si=c4cb78cbdeab416a'
    },
    {
      id: 20,
      imageUrl: 'https://lh3.googleusercontent.com/FVx7pMdJR9PEYdz9QRDkZM94tZ8B0tr_U2ONcgsUf2We8sIkmOBys_X63U1d7DU6NgJ9ljAmWAxJPnUE=w544-h544-l90-rj',
      title: 'THE SCOTTS',
      Artista : 'Kid Cudi - THE SCOTTS - Travis Scott',
      escritor: 'Jacques Webster - Oladipo Omishore - Patrick Reynolds - Scott Mescudi',
      productor : 'Take A Daytrip - Dot Da Genius - Plain Pat',
      link: 'https://open.spotify.com/intl-es/track/39Yp9wwQiSRIDOvrVg7mbk?si=3546cb611828406c'
    }
  ];
}


// <iframe style="border-radius:12px"
// src="https://open.spotify.com/embed/playlist/37i9dQZEVXbO3qyFxbkOE1?utm_source=generator" width="100%"
// height="700" frameBorder="0" allowfullscreen=""
// allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
// </iframe>
