import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { TokenService } from '../services/token.service';
import { ConsultsService } from '../services/consults.service';
import { SHA256 as sha256 } from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  registerCredentials = { user: '', pass: '' };
  errorAuth = false;

  constructor(
    private router: Router,
    private consults: ConsultsService,
    private service: TokenService,
    private cargando: LoadingService) { }

  ngOnInit() {
  }

  login() {
    this.errorAuth = false;
    this.cargando.mostrarCargando('Iniciando sesión', 8000);
    const passHash = sha256(this.registerCredentials.pass).toString();
    const body = { user: this.registerCredentials.user, password: passHash };
    console.log(body);
    this.consults.login(body).subscribe(
      (response: any) => {
        this.errorAuth = false;
        console.log('response: ', response);
        
        if (response['errorMessage']) {
          console.log('Entré al if');
          this.errorAuth = true;
          this.cargando.detenerCargando();
        } else {
          console.log('Entré al else');
          this.service.setToken(response.access_token);
          this.service.setId(response.userId);
          this.service.setIdPerfil(response.perfilId);
          if (this.service.getIdPerfil() === 1) {
            this.router.navigate(['admin/admin-tab2']);
          } else if (this.service.getIdPerfil() === 2) {
            this.router.navigate(['arriero/arriero-tab2']);
          } else if (this.service.getIdPerfil() === 3) {
            this.router.navigate(['tabs/tab2']);
          }
        }
      },
      (error: any) => {
        console.log(error);
        
      }
    );


  }

  registry() {
    this.router.navigate(['registro']);
  }

}
