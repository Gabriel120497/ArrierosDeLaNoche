import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultsService {

  address = 'https://02yi4z4lm4.execute-api.us-east-2.amazonaws.com/arrieros';
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/login`, body, { headers });
  }

  getAllEvents(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/getAllEvents`, body, { headers });
  }

  getUserInfo(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/getUserInfo`, body, { headers });
  }

  getAllUsers(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/getAllUsers`, body, { headers });
  }

  getAllUsersInEvent(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/getAllUsersInEvent`, body, { headers });
  }

  createNewEvent(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/creatNewEvent`, body, { headers });
  }

  createNewUser(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/register`, body, { headers });
  }

  updatePaymentUser(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/updatePaymentUser`, body, { headers });
  }

  registerUserInEvent(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return this.http.post(`${this.address}/registerUserInEvent`, body, { headers });
  }

}
