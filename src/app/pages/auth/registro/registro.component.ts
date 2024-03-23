import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PServiceService } from 'src/app/services/p-service.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  userForm!: FormGroup; 

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      email : ['', [Validators.required]],
      nombreCompl: ['', [Validators.required]]
    });
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder 
  ) { }

  login(){
    this.router.navigate(['login']);
  }

  registro() {
    if (this.userForm.valid) {
      this.authService.registro(this.userForm.value).subscribe(
        (res: any) => {
          console.log(res.crear.nombreCompl);
          Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            text: 'Bienvenido de nuevo ' + JSON.stringify(res.crear.nombreCompl),
            confirmButtonText: 'Aceptar'
          });
          this.router.navigate(['login']);
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
