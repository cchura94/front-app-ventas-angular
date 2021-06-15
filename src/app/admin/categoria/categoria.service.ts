import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "./../../../environments/environment" 

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl = environment.servidor1

  constructor(protected http: HttpClient) { }

  lista(){
    return this.http.get(`${this.baseUrl}/categoria`);
  }

  guardar(datos: any){
    return this.http.post(`${this.baseUrl}/categoria`, datos);
  }

  mostrar(id: any){
    return this.http.get(`${this.baseUrl}/categoria/${id}`);
  }
  modificar(datos: any, id:number){
    return this.http.put(`${this.baseUrl}/categoria/${id}`, datos);
  }

  elimianr(id:number){
    return this.http.delete(`${this.baseUrl}/categoria/${id}`);
  }
}
