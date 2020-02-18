import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Restriccion } from '../domain/restriccion';

@Injectable({
  providedIn: 'root'
})
export class RestriccionService {

  public url: string;
  constructor(public httpCliente: HttpClient) {
    this.url = 'localhost:8090/restriccion' ;
  }

  public findAll(): Observable<any> {
        return this.httpCliente.get(this.url);
  }

}
