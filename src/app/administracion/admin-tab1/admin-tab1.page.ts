import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-tab1',
  templateUrl: './admin-tab1.page.html',
  styleUrls: ['./admin-tab1.page.scss'],
})
export class AdminTab1Page implements OnInit {

  eventos = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.eventos = [{
      id: '1',
      titulo: 'Caminata Santa Elena',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada nisl ac lacus ornare, eget bibendum ligula elementum. Donec aliquet leo non elit consequat hendrerit. Phasellus commodo, lacus quis dapibus pharetra, leo est bibendum nisi, eget ornare dui sem sed nisl. Curabitur molestie, purus ut tristique tempor, ipsum turpis sollicitudin mauris, ac interdum enim velit at lectus.',
      estado: 'Activo',
      fechaIniRecorrido: '30/08/2019',
      fechaFinRecorrido: '30/08/2019'
    },
    {
      id: '2',
      titulo: 'Caminata Barbosa',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada nisl ac lacus ornare, eget bibendum ligula elementum. Donec aliquet leo non elit consequat hendrerit. Phasellus commodo, lacus quis dapibus pharetra, leo est bibendum nisi, eget ornare dui sem sed nisl. Curabitur molestie, purus ut tristique tempor, ipsum turpis sollicitudin mauris, ac interdum enim velit at lectus.',
      estado: 'Activo',
      fechaIniRecorrido: '30/08/2019',
      fechaFinRecorrido: '30/08/2019'
    }
    ];
  }

  verAsistentes(idEvento) {
    this.router.navigate(['listado-usuarios'], {queryParams: {idEvento: idEvento}})
    console.log('clic en el card', idEvento)
  }
}
