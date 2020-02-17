import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `${this.auth.getToken()}`
      }
    });

    return next.handle(request);
  }
}
