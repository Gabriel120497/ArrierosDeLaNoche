import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario = [];

  constructor() {

    this.usuario = [{
      nombre: 'Sutanito',
      tipoDoc: 'CC',
      documento: '1037655531',
      rh: 'A+',
      celular: '3013667627',
      contacto: 'Fulanito',
      numeroContacto: '3126983426',
      distanciaRecorrida: '150'
    }
  ]

  }

  ngOnInit() {
   
    //setTimeout(() => {
    //this.cargando.detenerCargando();
    //}, 1000);
    console.log(this.usuario);
    
  }

}
