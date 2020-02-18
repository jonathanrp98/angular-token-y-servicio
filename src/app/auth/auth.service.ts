import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt/';
import { decode } from 'jwt-decode';
import {stringify} from 'querystring';

@Injectable()
export class AuthService {

  token: string;
  public getToken(): string {
    // tslint:disable-next-line:max-line-length
    // this.token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYWNpZnVlbnRlcyIsImlhdCI6MTU4MjA1Njc3MiwiZXhwIjoxNTgyMTQzMTcyfQ.ZASYhNzX9i18W4ikZqKH1kTitWIZFd-jjnno6hVHPyna76BSrNjoRNe2LW79KT573DrJEDBaao5y5mbWivoXMg';
    // console.log(this.token);
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
}
