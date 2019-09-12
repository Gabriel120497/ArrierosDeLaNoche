import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-arriero-tab3',
  templateUrl: './arriero-tab3.page.html',
  styleUrls: ['./arriero-tab3.page.scss'],
})
export class ArrieroTab3Page implements OnInit {

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
