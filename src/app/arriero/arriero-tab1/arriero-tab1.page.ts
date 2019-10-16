import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arriero-tab1',
  templateUrl: './arriero-tab1.page.html',
  styleUrls: ['./arriero-tab1.page.scss'],
})
export class ArrieroTab1Page implements OnInit {

  eventos = [];

  constructor(private cargando: LoadingService, 
    private consults: ConsultsService, 
    private router: Router) { 
  }

  ngOnInit() {
    this.cargando.mostrarCargando('Cargando', 3000);
    this.consults.getAllEvents().subscribe((response: any) => {
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
