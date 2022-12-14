import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let auth_header = "";

    let token = localStorage.getItem("TOKEN");

    if (token) {

      request = request.clone({

        url: request.url,

        setHeaders: {

          Authorization: `Bearer ${token}`

        },

        withCredentials: true

      });

    }

    return next.handle(request).pipe();
  }
}
