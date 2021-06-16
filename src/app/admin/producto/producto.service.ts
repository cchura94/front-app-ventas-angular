import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "./../../../environments/environment" 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl = environment.servidor1
  constructor(
    protected http: HttpClient
  ) { }
  lista(){
    return this.http.get(`${this.baseUrl}/producto`);
  }

  guardar(datos: any){
    return this.http.post(`${this.baseUrl}/producto`, datos);
  }

  mostrar(id: any){
    return this.http.get(`${this.baseUrl}/producto/${id}`);
  }
  modificar(datos: any, id:number){
    return this.http.put(`${this.baseUrl}/producto/${id}`, datos);
  }

  eliminar(id:number){
    return this.http.delete(`${this.baseUrl}/producto/${id}`);
  }
}
