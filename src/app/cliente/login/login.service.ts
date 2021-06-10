import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient) { }

  login(datos:any){
    return this.http.post("http://127.0.0.1:8000/api/auth/login", datos);
  }

  logout(){

  }

  perfil(){

  }

}
