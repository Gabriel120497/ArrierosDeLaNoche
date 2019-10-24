import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { ConsultsService } from '../services/consults.service';
import { Base64 } from '@ionic-native/base64/ngx';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  eventos = [];
  eventosUsuario = [];
  usuarios = [];
  habilitar = [];
  message = 'Ya se encuentra registrado, recuerde cancelar el valor total del evento'

  constructor(private cargando: LoadingService, private consults: ConsultsService, private base64: Base64, private token: TokenService) { }

  ngOnInit() {
    const body = { 'idUser': this.token.getId() };
    this.consults.getAllEvents(body).subscribe((response: any) => {

      console.log(response.userEventRes);
      console.log(response);

      this.eventos = response.res;
      this.eventosUsuario = response.userEventRes;
      this.cargando.detenerCargando();
      this.habilitarBotones();
    },
      (error: any) => {
      });
  }

  habilitarBotones() {
    let j = 0;
    for (let index = 0; index < this.eventos.length; index++) {
      console.log('Eventos');
      console.log('eventosUser');
      if (j < this.eventosUsuario.length) {
        if (this.eventos[index].idEvento === this.eventosUsuario[j].idEvento) {
          this.habilitar[index] = true;
          j++;
        } else {
          this.habilitar[index] = false;
        }
      }
    }
  }

  registrarse(idEvento) {
    this.habilitar[idEvento - 1] = true;
    this.cargando.presentToast(this.message);
    console.log(idEvento);

  }

}


//04/2020
