import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arriero-tab2',
  templateUrl: './arriero-tab2.page.html',
  styleUrls: ['./arriero-tab2.page.scss'],
})
export class ArrieroTab2Page implements OnInit {

  eventos = [];

  constructor(private cargando: LoadingService, private consults: ConsultsService, private router: Router) { 
  }

  ngOnInit() {
    console.log('onInit');
    this.consults.getAllEvents().subscribe((response: any) => {
      console.log(response.res);
      
      this.eventos = response.res;
      this.cargando.detenerCargando();
    },
    (error: any) => {
    });
  }

  addNew() {
    this.router.navigate(['nuevo-evento'])
  }
}
