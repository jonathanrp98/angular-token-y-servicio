import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class RestriccionService {

  private url = 'http://127.0.0.1:8090/restriccion';

  constructor(private httpCliente: HttpClient) {

  }

  public findAll(): Observable<any> {
    return this.httpCliente.get(this.url);
  }

}
