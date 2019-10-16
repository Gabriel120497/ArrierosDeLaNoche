import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';
import { TokenService } from 'src/app/services/token.service';
import { PopoverController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-arriero-tab4',
  templateUrl: './arriero-tab4.page.html',
  styleUrls: ['./arriero-tab4.page.scss'],
})
export class ArrieroTab4Page implements OnInit {

  usuarios = [];

  constructor(private cargando: LoadingService,
    private consults: ConsultsService,
    private service: TokenService,
    public popoverController: PopoverController,
    private router: Router) { }

  ngOnInit() {
    this.cargando.mostrarCargando('Cargando', 8000);
    let idPerfil = this.service.getIdPerfil();
    const body = { 'id_usuario': idPerfil };
    //const body = {'id_usuario':3};

    this.consults.getAllUsers(body).subscribe(
      (response: any) => {
        this.usuarios = response.res;
        console.log(this.usuarios);
        this.cargando.detenerCargando();
      },
      (error: any) => {
      }
    );
  }

  verInformacion(i) {
    let params: NavigationExtras = {
      state:{
        usuario: this.usuarios[i]
      }
    }
    this.router.navigate(['info-usuario'], params);
    console.log(this.usuarios[i]);
    
  }


}
