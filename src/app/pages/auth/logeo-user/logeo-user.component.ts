import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; // Importa Validators y FormBuilder para la validación

import Swal from 'sweetalert2';

@Component({
  selector: 'app-logeo-user',
  templateUrl: './logeo-user.component.html',
  styleUrls: ['./logeo-user.component.css']
})
export class LogeoUserComponent implements OnInit {

  userForm!: FormGroup; 

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
    });
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder 
  ) { }

  registro(){
    this.router.navigate(['registro']);
  }

  logIn() {
    if (this.userForm.valid) {
      this.authService.signin(this.userForm.value).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['home']);
          setTimeout(() => { // Agregar un pequeño retraso para que la navegación se realice antes de recargar
            window.location.reload(); // Recarga la página después de navegar a la página de inicio de sesión
          }, 100);
        }, (err: any) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: JSON.stringify(err.error),
            text: 'Error al iniciar sesión',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Por favor, completa los campos correctamente.'
      });
    }
  }
}
