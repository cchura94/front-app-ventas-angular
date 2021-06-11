import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from "./../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.servidor1;

  constructor(protected http: HttpClient) { }

  login(datos:any){
    return this.http.post(`${this.baseUrl}/auth/login`, datos);
  }

  logout(){

  }

  perfil(){

  }

}
