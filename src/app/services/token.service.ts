import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string;
  private user: string;
  private id: string;
  private idPerfil: number;
  private habilitado: boolean;
  constructor(private router: Router) {
    this.token = '';
    this.user = '';
    this.id = '';
    this.idPerfil = 0;
    this.habilitado = false;
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.token !== undefined && this.token !== ''
      && this.token !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

  setToken = (t: string) => this.token = t;
  getToken = () => this.token;

  setUser = (u: string) => this.user = u;
  getUser = () => this.user;

  setId = (id: string) => this.id = id;
  getId = () => this.id;

  setIdPerfil = (idP: number) => this.idPerfil = idP;
  getIdPerfil = () => this.idPerfil;
}
