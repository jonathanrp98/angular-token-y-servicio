import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import {Observable} from 'rxjs';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // tslint:disable-next-line:max-line-length
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYWNpZnVlbnRlcyIsImlhdCI6MTU4MjEyODM2MH0.c9Hx7MOs133LIbMxONj0y4t7hw3faTDpVdUWrblYYt_GQpsohPByTbJvKvOa7TUvS0zCZvLsA4sC9kM0cAjQjA';
    if (token != null) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(authReq);
    }
  }
}
