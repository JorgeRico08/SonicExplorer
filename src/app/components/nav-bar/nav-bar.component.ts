import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  token: null | string = localStorage.getItem('token');

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    window.addEventListener('storage', (event) => {
      if (event.key === 'token') {
        this.token = event.newValue;
      }
    });
  }
 
  cerrarsesion(){
    this.authService.logout();
  }



  
}
