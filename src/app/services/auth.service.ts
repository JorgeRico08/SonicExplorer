import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private route: Router) { }
  signin(user: any) {
     return this.http.post(`${this.URL}/login`, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error.error);
        return throwError(error.error || 'Algo salió mal; inténtalo de nuevo más tarde.');
      })
    );
  }

  registro(user: any){
    return this.http.post(`${this.URL}/registro`, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error.error);
        return throwError(error.error || 'Algo salió mal; inténtalo de nuevo más tarde.');
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    // this.route.navigate(['/login']);
  }

}
