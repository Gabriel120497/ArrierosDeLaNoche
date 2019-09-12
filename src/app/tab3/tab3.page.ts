import { Component, OnInit } from '@angular/core';
import { ConsultsService } from '../services/consults.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario = [];

  constructor(private consults: ConsultsService, private service: TokenService,) {}

  ngOnInit() {
    let idPerfil = this.service.getIdPerfil();
    console.log('idPerfil', idPerfil);
    
    //const body = {'id_usuario':idPerfil};

    const body = {'id_usuario':3};

    this.consults.getUserInfo(body).subscribe(
      (response: any) => {
        this.usuario = response.res;
        console.log(this.usuario);
      },
      (error: any) => {
      }
    );
  }

}
