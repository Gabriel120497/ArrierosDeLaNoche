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
  perfil:String //Variable que se llena con lo que responda el servicio y que dice que tipo de usuario ingresa
  user:String //Variable que se llena con lo que responda el servicio y que dice el usuario
  pass:String //Variable que se llena con lo que responda el servicio y que dice el pass del usuario
  constructor(
    private router: Router,
    private consults: ConsultsService,
    private service: TokenService,
    private cargando: LoadingService) { }

  ngOnInit() {
  }

  login(){
    this.cargando.mostrarCargando('Iniciando sesión', 8000);
    const passHash = sha256(this.registerCredentials.pass).toString();
    const body = { user: this.registerCredentials.user, password: passHash };

    /*this.consults.login(body).subscribe(
      (response: any) => {
        this.errorAuth = false;
        this.service.setToken(response.access_token);
        this.service.setId(response.id);
        this.service.setIdPerfil(response.idPerfil);
        this.service.setHabilitado(response.habilitado);
        this.router.navigate(['tabs/tab2']);
      },
      (error: any) => {
        if (error.status == 401) {
          this.errorAuth = true;
        } else {

        }
      }
    );*/
  
   /* if (this.service.getIdPerfil === 1) {
      //Cambiar por el componente de Admin
      this.router.navigate(['admin/admin-tab2']);
    } else if((this.registerCredentials.user && this.registerCredentials.pass) && this.perfil === 'Arriero'){
      //Cambiar por el Componente de Arriero
      this.router.navigate(['tabs/tab2']);
    }else{
      this.router.navigate(['tabs/tab2']);
    }*/
    
  }

}
