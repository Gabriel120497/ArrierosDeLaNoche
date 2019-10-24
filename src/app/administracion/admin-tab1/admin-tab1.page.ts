import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultsService } from 'src/app/services/consults.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-admin-tab1',
  templateUrl: './admin-tab1.page.html',
  styleUrls: ['./admin-tab1.page.scss'],
})
export class AdminTab1Page implements OnInit {

  eventos = [];

  constructor(private cargando: LoadingService, 
    private consults: ConsultsService, 
    private router: Router) { 
  }

  ngOnInit() {
    const body  = {'idUser': 0};
    this.cargando.mostrarCargando('Cargando', 3000);
    this.consults.getAllEvents(body).subscribe((response: any) => {
      console.log(response.res);
      
      this.eventos = response.res;
      this.cargando.detenerCargando();
    },
    (error: any) => {
    });
  }

  verAsistentes(idEvento) {
    this.router.navigate(['listado-usuarios'], {queryParams: {idEvento: idEvento}});
    console.log('clic en el card', idEvento);
  }
}
