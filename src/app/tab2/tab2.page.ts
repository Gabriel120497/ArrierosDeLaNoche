import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  recorridos = [];
  eventos = [];

  constructor(private cargando: LoadingService) { }

  ngOnInit() {
    this.eventos = [{
      id: '1',
      titulo: 'Caminata Santa Elena',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada nisl ac lacus ornare, eget bibendum ligula elementum. Donec aliquet leo non elit consequat hendrerit. Phasellus commodo, lacus quis dapibus pharetra, leo est bibendum nisi, eget ornare dui sem sed nisl. Curabitur molestie, purus ut tristique tempor, ipsum turpis sollicitudin mauris, ac interdum enim velit at lectus.',
      estado: 'Activo',
      fechaPublicacion: '20/08/2019',
      fechaIniRecorrido: '30/08/2019',
      fechaFinRecorrido: '30/08/2019',
      recorrido: [{
        id: '1',
        dificultad: 'Media',
        imagen: 'https://static.elcorreo.com/www/multimedia/201906/06/media/cortadas/perfil-etapa-20-tour-de-francia-2019-kseF-U80457295853yOI-624x385@El%20Correo.jpg',
        km: '20',
        lugar: 'Santa Elena',
        valor: '$85900'
      }]
    },
    {
      id: '2',
      titulo: 'Caminata Barbosa',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada nisl ac lacus ornare, eget bibendum ligula elementum. Donec aliquet leo non elit consequat hendrerit. Phasellus commodo, lacus quis dapibus pharetra, leo est bibendum nisi, eget ornare dui sem sed nisl. Curabitur molestie, purus ut tristique tempor, ipsum turpis sollicitudin mauris, ac interdum enim velit at lectus.',
      estado: 'Activo',
      fechaPublicacion: '20/08/2019',
      fechaIniRecorrido: '30/08/2019',
      fechaFinRecorrido: '30/08/2019',
      recorrido: [{
        id: '2',
        dificultad: 'Media',
        imagen: 'https://static.elcorreo.com/www/multimedia/201906/06/media/cortadas/perfil-etapa-20-tour-de-francia-2019-kseF-U80457295853yOI-624x385@El%20Correo.jpg',
        km: '20',
        lugar: 'Barbosa',
        valor: '$89900'
      }]
    }
    ];
    this.cargando.detenerCargando();
    console.log(this.eventos);

  }

}
