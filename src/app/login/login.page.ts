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
  constructor(private router: Router, private cargando: LoadingService) { }

  ngOnInit() {
  }

  login(){
    this.cargando.mostrarCargando('Iniciando sesión', 8000);
    this.router.navigate(['tabs/tab2']);
  }

}
