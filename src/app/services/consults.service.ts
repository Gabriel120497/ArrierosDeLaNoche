import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultsService {

  /*//address = 'https://7rp0uiv5ua.execute-api.us-east-2.amazonaws.com/PaulappStage';
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(body): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.tokenService.getToken()
    );
    return; //this.http.post(`${this.address}/login`, body, { headers });
  }*/
}
