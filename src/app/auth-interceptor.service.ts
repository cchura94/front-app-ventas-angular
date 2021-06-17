import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(protected router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
  
    try{
      let auth = JSON.parse(atob(localStorage.getItem('access_token') || '{}'));
  
  
      if (auth) {
        request = req.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ auth.token }`
          }
        });
      }

    }catch(error){
      console.log(error)
      this.router.navigate(['login'])
    }

    return next.handle(request);
  }

}
