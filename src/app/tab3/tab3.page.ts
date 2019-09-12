import { Component, OnInit } from '@angular/core';
import { ConsultsService } from '../services/consults.service';
import { TokenService } from '../services/token.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario = [];

  constructor(private cargando: LoadingService, private consults: ConsultsService, private service: TokenService) {}

  ngOnInit() {
    this.cargando.mostrarCargando('Cargando', 8000);
    let idPerfil = this.service.getIdPerfil();
    const body = {'id_usuario':idPerfil};
    //const body = {'id_usuario':3};

    this.consults.getUserInfo(body).subscribe(
      (response: any) => {
        this.usuario = response.res;
        console.log(this.usuario);
        this.cargando.detenerCargando();
      },
      (error: any) => {
      }
    );
  }

}
