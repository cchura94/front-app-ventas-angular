import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "./../../../environments/environment" 

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl = environment.servidor1

  headers: HttpHeaders | undefined;

  constructor(protected http: HttpClient, private router: Router) { 
    try{
      let auth = JSON.parse(atob(localStorage.getItem('access_token') || '{}'));

      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token
      })
    }catch(error){
      console.log(error);
      this.router.navigate(['login'])
    }
  }

  lista(){
    return this.http.get(`${this.baseUrl}/categoria`, {headers: this.headers});
  }

  guardar(datos: any){
    return this.http.post(`${this.baseUrl}/categoria`, datos, {headers: this.headers});
  }

  mostrar(id: any){
    return this.http.get(`${this.baseUrl}/categoria/${id}`, {headers: this.headers});
  }
  modificar(datos: any, id:number){
    return this.http.put(`${this.baseUrl}/categoria/${id}`, datos, {headers: this.headers});
  }

  elimianr(id:number){
    return this.http.delete(`${this.baseUrl}/categoria/${id}`, {headers: this.headers});
  }
}
