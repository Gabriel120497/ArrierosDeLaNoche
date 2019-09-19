import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin-tab4',
  templateUrl: './admin-tab4.page.html',
  styleUrls: ['./admin-tab4.page.scss'],
})
export class AdminTab4Page implements OnInit {

  usuarios = [];

  constructor(private cargando: LoadingService, private consults: ConsultsService, private service: TokenService) {}

  ngOnInit() {
    this.cargando.mostrarCargando('Cargando', 8000);
    let idPerfil = this.service.getIdPerfil();
    const body = {'id_usuario':idPerfil};
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

}
