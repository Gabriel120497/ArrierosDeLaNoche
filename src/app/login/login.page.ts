import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerCredentials = { user: '', pass: '' };
  perfil:String //Variable que se llena con lo que responda el servicio y que dice que tipo de usuario ingresa
  user:String //Variable que se llena con lo que responda el servicio y que dice el usuario
  pass:String //Variable que se llena con lo que responda el servicio y que dice el pass del usuario
  constructor(private router: Router, private cargando: LoadingService) { }

  ngOnInit() {
  }

  login(){
    this.cargando.mostrarCargando('Iniciando sesión', 8000);
    if ((this.registerCredentials.user === this.user && this.registerCredentials.pass === this.pass) && this.perfil === 'Admin') {
      //Cambiar por el componente de Admin
      this.router.navigate(['tabs/tab2']);
    } else if((this.registerCredentials.user && this.registerCredentials.pass) && this.perfil === 'Arriero'){
      //Cambiar por el Componente de Arriero
      this.router.navigate(['tabs/tab2']);
    }else{
      this.router.navigate(['tabs/tab2']);
    }
    
  }

}
