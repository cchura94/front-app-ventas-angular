import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(protected loginService: LoginService, 
              protected router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
   /* if (this.loginForm.value.email.hasError('required')) {
      return 'el correo es Obligatorio';
    }

    return this.loginForm.value.email.hasError('email') ? 'El Correo no es Valido' : '';
  */
    return "";
  }

  ingresar(){
    // realizar la petición al Servidor
    this.loginService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("access_token", btoa(JSON.stringify(res)));
        // redirect al /admin
        this.router.navigate(["/admin"]);
      },
      (error: any) => {
        console.log(error)
        this.openSnackBar(error.error.mensaje)
      }
    )
  }

  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, "cerrar", {
      duration: 4000
    });
  }

}
